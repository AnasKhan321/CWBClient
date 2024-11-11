import { graphqlclient } from "@/client/api"
import { AddCourse, addTutorial, AddVideo } from "@/GraphqlQueries/interfaces"
import { CreateCourse, CreateVideo, MCreateTutorial } from "@/GraphqlQueries/mutation"
import {useMutation} from "@tanstack/react-query"



export const createCourse = ()=>{
    const mutation  = useMutation({
        mutationFn : (payload :AddCourse )=> graphqlclient.request(CreateCourse  , {payload}) , 
    })

    return mutation ; 
}


export const CreateVideoCourse = ()=>{
    const mutation  = useMutation({
        mutationFn : (payload : AddVideo) => graphqlclient.request(CreateVideo , {payload }),

    })

    return mutation ; 
}
 

export const CreateTutorial = ()=>{
    const muation = useMutation({
        mutationFn : (payload : addTutorial)  => graphqlclient.request(MCreateTutorial  , {payload : payload})  , 
    })
    return muation ; 
}