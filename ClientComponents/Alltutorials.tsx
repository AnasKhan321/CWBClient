"use client"
import { Button } from "@/components/ui/button";
import { alltutorials, Tutorial, TutorialDetail } from "@/GraphqlQueries/interfaces";
import { useGettutorial } from "@/ReactGraphHooks/queries";
import { Play } from "lucide-react";
import Link from "next/link";
import { MoonLoader } from "react-spinners";
export default function Alltutorials(){
    const {data , isLoading , isError}    = useGettutorial()
    const typedData = data as alltutorials | undefined;

    if(isLoading){
        return <div className="flex justify-center  mt-10 min-h-screen "> <MoonLoader size={50}  color="white"/> </div>
    }

    if(!data)  return (<div className="font-bold text-xl  text-center "> Api not found </div>)

    return(
        <div className="min-h-screen max-h-screen  mb-10  overflow-y-scroll  gap-y-3 mt-10  container mx-auto ">

                {typedData?.getTutorials.map((tutorial  : Tutorial)=>{
                    return(
                        <div className=" mb-4 shadow-xl md:w-3/4  w-4/4  mx-auto   bg-secondaryColor rounded-lg overflow-hidden hover:bg-thirdColor transition-colors" key={tutorial.id}>
                        <Link href={`/tutorial/${tutorial.id}`}>
                          <div className="flex items-center gap-4 p-4  md:flex-row flex-col ">

                            <div className="relative w-48 h-28 flex-shrink-0">
                              <div className="absolute inset-0 bg-secondaryColor rounded-md overflow-hidden">
                              <iframe title="YouTube Video"
                               src={`https://www.youtube.com/embed/${tutorial.videourl.split("?")[1].split("=")[1]}`} 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                               className="w-full h-full"></iframe>
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                  <Play size={24} className="text-white" />
                                </div>
                              </div>
                            </div>
                  
                            <div className="flex-grow">
                              <h3 className="text-lg font-semibold text-stone-100 mb-2 line-clamp-2">
                                {tutorial.title}
                              </h3>
                              <p className="mb-3">
                                {tutorial.description[0].substring(0 , 300)}
                              </p>
                              <Button 
                                variant="outline" 
                                className="text-sm bg-fifthColor  text-black  hover:bg-white hover:text-black"
                              >
                                Watch Now
                              </Button>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                })}








                







        </div>
    )

}