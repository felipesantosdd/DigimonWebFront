"use client"
import ErrorAlert from "@/components/errorAlert";
import { IDigiEgg } from "@/interfaces/digiegg";
import { DigimonContextProps, DigimonProviderType } from "@/interfaces/eggsContext";
import { EvolutionService } from "@/services/eggs/digivolveService";
import { GetOneService } from "@/services/eggs/getOneService";
import { createContext, ReactNode, useState } from "react";
import { ITamer } from '../interfaces/tamer'
import { IDigimon } from "@/interfaces/digimon";
import { getDiggimonService } from "@/services/digimons/getDigimon";


export const DigimonContext = createContext<DigimonContextProps>({} as DigimonContextProps)


export function DigimonProvider({ children }: DigimonProviderType) {

    const [showEvolution, setShowEvolution] = useState(false);

    const [digimon, setDigimon] = useState<IDigiEgg>({
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
        evolutionAptitude: 0,
        points: 0,
        trainingIntensity: 0,
        inTraining: false,
        trainingEnd: '',
        trainingPoints: 0,
        nextPoints: 0,
        missions: [],
        inMission: false,
        missionReturn: '',
        evolutions: [],

    })

    function splitUrl(url: string): string {
        const lastDotIndex = url?.lastIndexOf('.');
        const firstPart = url?.substring(0, lastDotIndex);
        return firstPart
    }

    function hello() {
        return { message: "Hello" }
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

        static async getDiggimon(id: string): Promise<IDigimon | void> {
            try {
                const digimon = await getDiggimonService(id)
                return digimon
            } catch (error: any) {
                console.error(error)
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
