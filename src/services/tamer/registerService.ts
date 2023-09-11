import { IRegister } from "@/interfaces/tamer";
import { api } from "../api";

export async function RegisterService(data: IRegister) {
    const response = await api.post('/tamer', data)
    return response.data
}