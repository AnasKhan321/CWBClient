"use client"
import { useGetutorialById } from "@/ReactGraphHooks/queries";
import { MoonLoader } from "react-spinners";
import { TutorialDetail } from "@/GraphqlQueries/interfaces";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from "./CodeBlock";


export default  function TutorialDetails({id}  : {id : string}){


    const {data , isLoading ,isError}    = useGetutorialById(id)


    const typedData = data as TutorialDetail | undefined ; 
    if(isLoading){
        return(
                <div className="min-h-screen  flex justify-center mt-10  ">
            <MoonLoader size={50}  color="white"/>
            </div>
    
        )
    }

    if(!data){
        return(
            <div className="min-h-screen font-bold text-xl text-center mt-10 ">Tutorial not Found! </div>
        )
    }


    return(
        <div className="min-h-screen bg-primaryColor text-stone-100 p-4 w-full ">
        <main className="container mx-auto flex flex-col ">
          {/* Video and Description */}
          <div className="lg:w-3/3">
            <div className="aspect-video  mb-4">

                <iframe title="YouTube Video" src={`https://www.youtube.com/embed/${typedData?.getTutorial.videourl.split("?")[1].split("=")[1]}`}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="w-full h-full"></iframe>

            </div>
            <h1 className="text-2xl font-bold mb-4">{typedData?.getTutorial.title}</h1>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                {typedData?.getTutorial.description.map((item  , index )=>(
                    <div  key={index} className="w-3/3 mb-6 "> {item} </div>
                ))}
              </TabsContent>
              <TabsContent value="code">
                {typedData?.getTutorial.Code.map((item  , index )=>(
                     <CodeBlock code={item} language="javascript"  key={index}/>

                ))}
              </TabsContent>


            </Tabs>
          </div>
  

        </main>
      </div>
    )


}