import {
    useQuery,
    useQueryClient
  } from '@tanstack/react-query' ; 

import { graphqlclient } from '@/client/api';
import {getAdminuserId, getCoursesForVideo, QgetCourses, Qgettutorial, QgetTutorials, QgetUser, QGetVideoById} from "@/GraphqlQueries/index" ; 
import { Course, VideoForC } from '@/GraphqlQueries/interfaces';


interface AdminUser {
    getAdmin  : boolean
}

export interface CourseForVideo{
    getCourses : VideoForC[]
}


export interface Coursess {
    getCourses  : Course[]
}




export const useAdminuser = () => {
    const data = useQuery<AdminUser>({
        queryKey: ["getAdminUser"],
        queryFn: () => graphqlclient.request(getAdminuserId), 
        retry: false, 
    });


    return data;
};


export const useCourseForVideo = ()=>{
    const data = useQuery<CourseForVideo>({
        queryKey : ["getCourses"]  , 
        queryFn : ()=> graphqlclient.request(getCoursesForVideo),

    })

    return data ; 
}


export const useGetCourses = ()=>{
    const data = useQuery<Coursess>({
        queryKey : ["getCoursess"]  , 
        queryFn : ()=> graphqlclient.request(QgetCourses),

    })


    return data ; 
}



export const useGetCourseById = (id : string)=>{
    const queryClient = useQueryClient()
    queryClient.invalidateQueries({ queryKey: ['getCourseById'] })
    const data = useQuery({
        queryKey : ["getCourseById"]  , 
        queryFn : ()=> graphqlclient.request(QGetVideoById  , { getCourseByIdId: id } ),


    })

    return data ; 
}


export const useGetUser = ()=>{
    const data = useQuery({
        queryKey  : ["getuser"]  , 
        queryFn : ()=> graphqlclient.request(QgetUser)
    })


    return data 
}


export const useGettutorial = ()=>{
    const data = useQuery({
        queryKey : ["gettutorials"] , 
        queryFn : ()=> graphqlclient.request(QgetTutorials)
    })

    return data ; 
}


export const useGetutorialById = (id : string)=>{
    const data = useQuery({
        queryKey : ["gettutorialbyId"] , 
        queryFn : ()=> graphqlclient.request(Qgettutorial  , {getTutorialId : id})
    
    
    })
    return data ; 
}