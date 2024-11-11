"use client"
import { Coursess, useGetCourses } from "@/ReactGraphHooks/queries"
import { MoonLoader } from "react-spinners"
import Card from "./Card"


export default function  AllCourses(){
    const { data, isLoading, isError }  : {data :Coursess | undefined   , isLoading : boolean 
        , isError : boolean 
      }= useGetCourses()



    if(isLoading){
        return(
            <div className="w-screen  h-[500px] flex items-center justify-center  ">

                <MoonLoader size={50}  color="white"/>

            </div>
        )
    }

    if(!data ) return(<div className="text-center font-bold text-xl ">Api not Found</div>)

    return(
        <div className="container mx-auto  mt-5 ">
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-8 ">
                {data.getCourses.map((item  , key)=>(
                    <Card course={item} key={key}/>
                ))}

        </div></div>
    )
}