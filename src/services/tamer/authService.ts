import { ILoginResponse, ITamer } from "@/interfaces/tamer";
import { api } from "../api";

export async function AuthService(): Promise<ITamer> {
    const token: string | null = localStorage.getItem('authToken')
    const response = await api.post('/tamer/auth', {}, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return response.data
}