import { IDigimon } from "@/interfaces/digimon";
import { api } from "../api";

export async function getDiggimonService(id: string): Promise<IDigimon> {
    const response = await api.patch(`/digimons/${id}`)
    return response.data
}