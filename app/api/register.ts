import axios from "axios";
import { UserRegister } from "../types/auth";

export async function RegisterApi(data: UserRegister) {
  try {
    const response = await axios.post(
      "http://localhost:3001/users/register",
      data
    );
    const res = response.data;
    return res;
  } catch (error) {
    console.error(error);
  }
}
