export const signedUrl = `

    mutation GetS3url($payload: S3payload) {
    getS3url(payload: $payload)
    }

`





export const CreateCourse = `
    mutation CreateCourse($payload: coursepayload) {
        createCourse(payload: $payload) {
            title
        }
    }

`


export const CreateVideo = `

    mutation CreateVideo($payload: videopayload) {
        createVideo(payload: $payload) {
            CourseId
        }
    }

`


export const MCreateTutorial = `

    mutation Mutation($payload: Tutorialpayload) {
        createTutorial(payload: $payload) {
            title
            id
        }
    }
`