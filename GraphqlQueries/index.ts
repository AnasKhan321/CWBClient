export const getAdminuserId = `
   query Query {
         getAdmin
    }


`






export const getCoursesForVideo = `

    query GetCourses {
        getCourses {
            id
            title
        }
    }

`

export const QgetCourses = `

    query GetCourses {
        getCourses {
            id
            title
            status
            description
            imageUrl
        }
    }

`


export const QGetVideoById  = `


query GetCourseById($getCourseByIdId: String) {
  getCourseById(id: $getCourseByIdId) {
        videos {
        id
        title
        Code
        description
        videourl
        CourseId
        }
        title
        status
        description
        imageUrl
  }
}
`

export const QgetUser  =`
    query GetUser {
    getUser {
        id
        name
        email
        imageUrl
    }
    }


`

export const QgetTutorials = `

    query GetTutorials {
    getTutorials {
        title
        description
        Code
        id
        videourl
    }
    }


`


export const Qgettutorial = `


    query GetTutorial($getTutorialId: ID!) {
    getTutorial(id: $getTutorialId) {
        id
        title
        description
        Code
        videourl
    }
    }

`