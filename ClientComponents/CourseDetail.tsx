"use client"
import { Coursewithvideo } from "@/GraphqlQueries/interfaces";
import { useGetCourseById } from "@/ReactGraphHooks/queries";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Video } from "lucide-react"
import Link from "next/link" 
import CodeBlock from "./CodeBlock"
import ClipLoader from "react-spinners/ClipLoader";
export default function CourseDetails({props  , videoNumber }  : {props : string  , videoNumber : number } ){
    const {data , isLoading , isError}   = useGetCourseById(props)

    const typedData = data as Coursewithvideo | undefined;

    if(isLoading){
        return(
            <div className="w-full  flex items-center justify-center mt-10 "> 
            <ClipLoader 
              color="#ffffff"
              loading
              size={50}
            />
        </div>
        )
    }
    if(isError){
        return(
            <div>Error ...</div>
        )
    }
    if(typedData?.getCourseById == null){
        return (
            <div>Course Not found</div>
        )
    }
    if(typedData.getCourseById.videos.length < videoNumber){
        return(
            <div className="flex items-center justify-center font-bold text-2xl mt-10 ">Course Content not available</div>
        )
    }

    const video = typedData.getCourseById.videos[videoNumber-1]

    return(
        <div className="min-h-screen  text-stone-100 p-4">
        <main className="container mx-auto flex flex-col lg:flex-row gap-8">
          {/* Video and Description */}
          <div className="lg:w-2/3">
            <div className="aspect-video  mb-4">

                <iframe title="YouTube Video" src={`https://www.youtube.com/embed/${video.videourl.split("?")[1].split("=")[1]}`}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="w-full h-full"></iframe>

            </div>
            <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                {video.description.map((item  , index )=>(
                    <div  key={index} className="w-3/3 mb-6 "> {item} </div>
                ))}
              </TabsContent>
              <TabsContent value="code">
                {video.Code.map((item  , index )=>(
              <CodeBlock code={item} language="javascript"  key={index}/>

                ))}
              </TabsContent>


            </Tabs>
          </div>
  
          {/* Sidebar */}
          <div className="lg:w-1/3 bg-secondaryColor  p-4 rounded-lg h-[100%]">
            <h2 className="text-xl font-bold mb-4">Course Content</h2>
            <ul className="space-y-2 h-[400px] overflow-y-scroll">
              {typedData.getCourseById.videos.map((lesson, index) => (
                <li key={index} className={`hover:bg-thirdColor p-2 rounded  ${video.title == lesson.title ? "bg-thirdColor"  : ""}`}>
                  <Link href={`/course/${props}-${index+1}`} className="flex items-center">
                    <Video size={18} className="mr-2" />
                    <span>{lesson.title}</span>
                  </Link>
                </li>

                
              ))}











            </ul>
          </div>
        </main>
      </div>
    )
}