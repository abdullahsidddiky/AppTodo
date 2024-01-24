import { cookies } from 'next/headers'
import axios from '../Components/services/instance'
import { redirect } from "next/navigation";
const fetchPost=async (url:string) =>{
  const todo = await axios.post(url)
  console.log(todo)
}
export default function Home() {
  const cookie = cookies().get('id')
  if(!cookie){
    redirect('/')
  }
 


    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div >
          <h1>home page</h1>
        </div>
      </main>
          
    )
  

 
  }
  