import { ILogin, ILoginResponse } from "@/interfaces/tamer";
import { api } from "../api";

export async function UserItemService(tamerId: string, data: { itemId: string, eggId: string }): Promise<any> {
    const response = await api.patch(`/tamer/useItem/${tamerId}`, data)
    return response.data
}