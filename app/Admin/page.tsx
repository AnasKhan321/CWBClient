"use client"
import { useAdminuser } from "@/ReactGraphHooks/queries";
import { Button } from "@/components/ui/button"
import { PlusCircle, Video } from "lucide-react"
import AddCourseForm from "@/ClientComponents/AddCourse"
import AddVideoCourse from "@/ClientComponents/Addvideo";
import { useState } from "react";
import {MoonLoader}  from "react-spinners"
import AddTutorial from "@/ClientComponents/AddTutorial";

export default function Page () {

    const { data, isLoading, isError } = useAdminuser();
    const [selected , setselected]  = useState(false)
    const [video , setvideo ]  = useState(false)
    const [course , setcourse]  = useState(false)
    const [tutorial , settutorial ]  = useState(false)

    if (isLoading) {
        return <div className="w-full min-h-screen flex items-center justify-center"> 
        <MoonLoader
          color="#ffffff"
          loading
          size={100}
        />
        </div>
    }
 
    if (isError) {
        return <div className="min-h-screen ">You are not admin.</div>;
    }
    if(data!== undefined){

      if(data.getAdmin){

        const onCourseClick = ()=>{
            setselected(true)
            setcourse(true)
        }
        const onVideoClick = ()=>{
            setselected(true)
            setvideo(true)
        }
        const onTutorialClick = ()=>{
          setselected(true)
          settutorial(true)
        }

        return(
            <> 
            {!selected&&
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center min-h-screen bg-black p-4">
            <Button 
              className="w-full sm:w-auto bg-stone-800 text-stone-100 hover:bg-stone-700 focus:ring-stone-500 focus:ring-offset-black"
              onClick={onCourseClick}
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Course
            </Button>
            <Button 
              className="w-full sm:w-auto bg-stone-800 text-stone-100 hover:bg-stone-700 focus:ring-stone-500 focus:ring-offset-black"
              onClick={onVideoClick}
            >
              <Video className="mr-2 h-4 w-4" />
              Add Video
            </Button>

            <Button 
              className="w-full sm:w-auto bg-stone-800 text-stone-100 hover:bg-stone-700 focus:ring-stone-500 focus:ring-offset-black"
              onClick={onTutorialClick}
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Tutorial
            </Button>
          </div>}

          {course && <AddCourseForm/> }
         {video && <AddVideoCourse/> }
         {tutorial && <AddTutorial/>}

          </>
        )
      
    }
    }


    return <div className="flex justify-center items-center">You are not Admin </div>;
};
