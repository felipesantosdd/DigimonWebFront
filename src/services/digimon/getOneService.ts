import { api } from "../api";

export async function GetOneService(id: string): Promise<any> {

    const response = await api.get(`/digimons/${id}`)
    return response.data
}