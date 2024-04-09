import axios from "axios";
import { UserLogin } from "../types/auth";

export async function LoginApi(data: UserLogin) {
  try {
    const response = await axios.post(
      "http://localhost:3001/auth/login",
      data,
      { withCredentials: true }
    );
    const response2 = await axios.get("http://localhost:3001/users/profile", {
      withCredentials: false,
    });
    const res = response.data;
    return res;
  } catch (error) {
    return { message: "login fail" };
  }
}
