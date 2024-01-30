import { cookies } from 'next/headers'
import axios from '../Components/services/instance'
import { redirect } from "next/navigation";
import Form from '../Components/form';
const fetchPost=async (url:string) =>{
  const todo = await axios.post(url)
  console.log(todo)
}
export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div >
          <Form/>
        </div>
      </main>
          
    )
  

 
  }
  