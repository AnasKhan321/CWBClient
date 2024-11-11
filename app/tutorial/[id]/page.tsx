import TutorialDetails from "@/ClientComponents/TutorialDetail"


export default async function Page  ({ params }:{
    params: Promise<{ id : string }>
  }){
    const { id } = await params

        return(
            <div>
                <TutorialDetails id={id}/>
            </div>
        )
}