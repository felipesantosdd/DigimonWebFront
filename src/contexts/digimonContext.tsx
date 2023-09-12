"use client"
import { IDigimon } from "@/interfaces/digiegg";
import { DigimonContextProps, DigimonProviderType } from "@/interfaces/digimonContext";
import { GetOneService } from "@/services/digimon/getOneService";
import { createContext, ReactNode, useState } from "react";



export const DigimonContext = createContext<DigimonContextProps>({} as DigimonContextProps)


export function DigimonProvider({ children }: DigimonProviderType) {
    const [digimon, setDigimon] = useState<IDigimon>({})



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
                console.error(error.response.data)
            }
        }
    }

    return (
        <DigimonContext.Provider value={{
            digimon,
            setDigimon,
            Digimon: {
                GetOne: Digimon.GetOne,
                GetMyDigimon: Digimon.GetMyDigimon
            }
        }}>{children}</DigimonContext.Provider>
    )
}
