import { revalidateTag } from "next/cache";
import axios from "./services/instance";
import { cookies, headers } from "next/headers";
import { z } from "zod";

export default function Form() {
  const token = cookies().get("token")?.value;
  async function axiosRequests(url: string, value: string, token: string) {
    "use server";
    try {
      const result = await axios.post(
        url,
        {
          content: value,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (result) {
        revalidateTag("collection");
      }
      return result;
    } catch (error) {
      return error;
    }
  }
  async function post(formData: FormData) {
    "use server";
    const validationSchema = z.object({
      content: z.string(),
    });
    const res = validationSchema.safeParse({
      content: formData.get("todo"),
    });

    if (res.success) {
      const todoValue = formData.get("todo");
      if (
        token !== null &&
        token !== undefined &&
        todoValue !== null &&
        typeof todoValue === "string"
      ) {
        const data = await axiosRequests("users/addTodo", todoValue, token);
      }
    }
  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action={post}>
          <div>
            <label
              htmlFor="todo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Content
            </label>
            <div className="mt-2">
              <input
                id="todo"
                name="todo"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
