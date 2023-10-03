import { IDigiEgg } from "@/interfaces/digiegg";
import { api } from "../api";

export async function EvolutionService(id: string, evoId: string): Promise<IDigiEgg> {
    const data: any = { evoId: evoId }

    const response = await api.patch(`/egg/evolution/${id}`, data)
    return response.data
}