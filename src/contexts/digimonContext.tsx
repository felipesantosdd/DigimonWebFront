"use client"
import ErrorAlert from "@/components/errorAlert";
import { IDigimon } from "@/interfaces/digiegg";
import { DigimonContextProps, DigimonProviderType } from "@/interfaces/digimonContext";
import { EvolutionService } from "@/services/digimon/digivolveService";
import { GetOneService } from "@/services/digimon/getOneService";
import { createContext, ReactNode, useState } from "react";



export const DigimonContext = createContext<DigimonContextProps>({} as DigimonContextProps)


export function DigimonProvider({ children }: DigimonProviderType) {

    const [showEvolution, setShowEvolution] = useState(false);

    const [digimon, setDigimon] = useState<IDigimon>({
        id: "",
        hp: 0,
        sprite: "",
        name: "",
        form: 0,
        mp: 0,
        atualMp: 0,
        evolutionAttack: 0,
        atualHp: 0,
        defense: 0,
        speed: 0,
        image: "",
        aptitude: 0,
        love: 0,
        health: 0,
        evolutionHp: 0,
        evolutionMp: 0,
        evolutionDefense: 0,
        evolutionSpeed: 0,
        evolutionAptitude: 0
    })

    function splitUrl(url: string) {
        const lastDotIndex = url?.lastIndexOf('.');
        const firstPart = url?.substring(0, lastDotIndex);
        return firstPart
    }

    class Digimon {

        static async GetMyDigimon(id: string): Promise<void> {
            try {
                const res = await GetOneService(id)
                setDigimon(res)
            } catch (error) {
                console.error(error);

            }
        }

        static async GetOne(id: string): Promise<any> {
            try {
                const data = await GetOneService(id)
                return data
            } catch (error: any) {
                if (error?.response?.data?.message) {
                    ErrorAlert(error?.response.data.message)
                }
                console.error(error.response.data.message)
            }
        }

        static async Evolution(id: string, evoId: string): Promise<void> {
            try {
                const data = await EvolutionService(id, evoId)
                setDigimon(data)
                this.GetMyDigimon(data.id)
            } catch (error: any) {
                console.error(error.response.data)
            }
        }
    }

    return (
        <DigimonContext.Provider value={{
            showEvolution,
            setShowEvolution,
            digimon,
            splitUrl,
            setDigimon,
            Digimon: {
                GetOne: Digimon.GetOne,
                GetMyDigimon: Digimon.GetMyDigimon,
                Evolution: Digimon.Evolution
            }
        }}>{children}</DigimonContext.Provider>
    )
}
