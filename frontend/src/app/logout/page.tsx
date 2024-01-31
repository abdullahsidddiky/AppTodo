
import { redirect } from "next/dist/server/api-utils";
import axios from "../Components/services/instance";
import { cookies } from "next/headers"

// async function deletecook(){
    //     'use server'
    
    // }
export default async function Page(){
    cookies().delete('token')
    return {
        redirect:{
            destination:"/"
        }
    }
    // async function logout(url:string){
    //     'use server';
    //     const token = cookies().get('token')?.value
    //     cookies().delete('token')
    //     return redirect("/")
            // try{
            //     const result = await axios.post(
            //         url,
            //         {
            //         },
            //         {
            //             headers:{
            //                 Authorization:"Bearer " + token,
            //             }
            //         }
            //         );
            //     if(result.data.status===200){
            //         cookies().delete('token')
            //         return {
            //             redirect:{
            //                 destination:'/',
            //                 parmanet:false
            //             }
            //         }
            //     }
            // }catch(error){
            //     return error
            // }
        
    // }
    // const data = await logout("users/logout")
    // await logout("users/logout")
    // cookies().delete('token')
    // if(data.status==200){
    //     cookies().delete('token')
    // }
    // console.log(data)
    // return (
    //     <div>
    //         <p>logging out...</p>
    //     </div>
    // )
}