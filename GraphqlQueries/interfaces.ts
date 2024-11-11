export interface SignedUrlInterface{
    getS3url : string
}


export interface AddCourse {
    title : string , 
    status : string , 
    description : string , 
    imageUrl : string
}


export interface AddVideo {
    Code:string[] , 
    CourseId:string ,
    description: string[] , 
    title:  string , 
    videourl: string 
}

export interface VideoForC {

    title:  string , 
    id : string 

}

export interface Course{
    id: string ,
    title: string ,
    status: string ,
    description:string ,
    imageUrl:  string
}



export interface Coursewithvideo {
    getCourseById : {
        id: string ,
        title: string ,
        status: string ,
        description:string ,
        imageUrl:  string
        videos : Video[]
    }

}

interface Video {
    Code:string[] , 
    CourseId:string ,
    description: string[] , 
    title:  string , 
    videourl: string ,
    id : string
}

export interface getUser {
    getUser : User
}


interface User {
    email: string
    id: string
    imageUrl: string
    name: string
}


export interface addTutorial{
    videourl: string,
    title: string,
    description: string[],
    Code: string[]
}

export interface alltutorials {
    getTutorials : Tutorial[]
}

export interface Tutorial {
    videourl: string,
    title: string,
    description: string[],
    Code: string[] , 
    id : string
}

export interface TutorialDetail {
    getTutorial : Tutorial
}