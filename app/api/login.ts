import axios from "axios";
import { UserLogin } from "../types/auth";

export async function LoginApi(data: UserLogin) {
  try {
    const response = await axios.all([
      axios.post("http://localhost:3001/auth/login", data, {
        withCredentials: true,
      }),
      axios.get("http://localhost:3001/users/profile", {
        withCredentials: true,
      }),
    ]);
    const loginRes = response[0].data;
    const profileRes = response[1].data;

    if (loginRes.error) {
      throw new Error(loginRes.error);
    }

    return { login: loginRes, data: profileRes };
  } catch (error) {
    return error;
  }
}
