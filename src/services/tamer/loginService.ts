import { ILogin, ILoginResponse } from "@/interfaces/tamer";
import { api } from "../api";

export async function LoginService(data: ILogin): Promise<ILoginResponse> {
    const response = await api.post('/tamer/login', data)
    console.log(response)
    return response.data
}