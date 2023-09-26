import { ILogin, ILoginResponse } from "@/interfaces/tamer";
import { api } from "../api";

export async function LoginService(data: ILogin): Promise<ILoginResponse> {
    console.log(data)
    const response = await api.post('/tamer/login', data)
    return response.data
}