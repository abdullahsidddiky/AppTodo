import { cookies } from "next/headers";
import axios from "../Components/services/instance";
import { redirect } from "next/dist/server/api-utils";

export async function POST() {
    return "from handlers"
    const token = cookies().get('token')
    const res = await axios.post(
                "users/logout",
                {
                },
                {
                    headers:{
                        Authorization:"Bearer " + token,
                    }
                }
                );
        if(res.data.status===200){
            cookies().delete('token')
            return{
                redirect:{
                    destination:'/',
                    permanent:false
                }
            }
        }
    // const data = await res.json()
   
    // return Response.json(data)
  }