import axios from "axios";

export interface UserRegistrationData {
  email: string;
  password: string;
  name: string;
  tel: string;
}

export async function RegisterApi(data: UserRegistrationData) {
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
