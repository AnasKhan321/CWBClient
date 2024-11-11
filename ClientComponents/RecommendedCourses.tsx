"use client"
import { Code, BookOpen, FileText, Menu, X } from "lucide-react"
import {Button} from "@/components/ui/button"
import { CourseForVideo, useGetCourses  , Coursess } from "@/ReactGraphHooks/queries"
import Link from "next/link"
import {ClipLoader, MoonLoader }  from "react-spinners"
import Card from "./Card"
export default  function RecommendedCourses(){
    const { data, isLoading, isError }     = useGetCourses()

      const typedData = data as Coursess | undefined
      if(isLoading){
        return(
          <div className="w-full  flex items-center justify-center"> 
              <MoonLoader 
                color="#ffffff"
                loading
                size={50}
              />
          </div>
        )
    }


    if(isError){
        return(
          <div className="font-bold text-xl text-center  ">
              Api is not available

          </div>

        )
    }

    if(!data){
      return (
        <div className="text-center font-bold text-xl "> Api is not available</div>
      )
    }

return(
    
    <section className="py-20 ">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-center">Recommended Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {typedData?.getCourses.map((course, index) => (
            <Card key={index} course={course}/>
        ))}
      </div>
    </div>
  </section>
)


}