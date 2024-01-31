import { cookies } from "next/headers";
import axios from "../Components/services/instance";
import { redirect } from "next/navigation";
import Form from "../Components/form";
import { date } from "zod";
import Card from "../Components/Card";
import LogoutButton from "../Components/LogoutButton";
async function getData() {
  const token = cookies().get("token")?.value;
    const res = await axios.get("users/getTodo", {
      headers: {
        Authorization: "Bearer " + token,
      },
      params: { next: { tags: ["collection"] } },
    });
    if (!res) {
      throw new Error("Failed to fetch data");
    }
  // console.log(res)
  return res.data;
}
export default async function Home() {
  const data = await getData()
  // console.log("data", data.status);
 
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <LogoutButton/>
      </div>
      <div>
        <Form />
      </div>
      <div>
        {data.map((item: any) => (
          <div key={item.id}>
            <p>ID: {item.id}</p>
            {/* <p>User ID: {item.user_id}</p> */}
            <p>Content: {item.content}</p>
            <Card data={data}/>
          </div>
        ))}
      </div>
    </main>
  );
}
