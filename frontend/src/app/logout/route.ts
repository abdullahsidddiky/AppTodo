import { cookies } from "next/headers";
import axios from "../Components/services/instance";
import { redirect } from "next/navigation";

export async function GET() {
  const token = cookies().get("token")?.value;
  try {
    const res = await axios.post(
      "users/logout",
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (res.data.status === 200) {
      cookies().delete("token");
      return redirect("/");
    }
  } catch (error) {
    return error;
  }
}
