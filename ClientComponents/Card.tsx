import { Button } from "@/components/ui/button";
import { Course } from "@/GraphqlQueries/interfaces";
import Link from "next/link";


export default function Card({course}  : {course : Course}){

    return(
        <Link className="card"  href={course.id ? `/course/${course.id}-1` : '#'}>
        <div  className="bg-secondaryColor  p-6 rounded-lg shadow-lg hover:bg-thirdColor transition-all delay-100   cursor-pointer">
          <img src={course.imageUrl} alt="" />
          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
          <p className="text-gray-400">{course.description.substring(0 , 200)}</p>
          <Button className="mt-4 bg-fifthColor text-black  hover:bg-gray-300 ">
            Learn More
          </Button>
        </div></Link>
    )

}