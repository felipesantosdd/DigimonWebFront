"use client"
import { ILogin, ITamer } from "@/interfaces/tamer";
import { ITamerContextProps, ITamerProviderType } from "@/interfaces/userContext";
import { LoginService } from "@/services/tamer/loginService";
import { useRouter } from "next/router";
import React, { createContext, useContext, useState } from "react";



export const TamerContext = createContext<ITamerContextProps>({} as ITamerContextProps)


export function TamerProvider({ children }: ITamerProviderType) {

    const [login, setLogin] = useState<number>(1)

    const [tamerData, setTamerData] = useState<ITamer | undefined>(undefined);


    class Tamer {
        static async Login(data: ILogin): Promise<void> {
            try {
                const response = await LoginService(data)
                setTamerData(response.user)
                localStorage.setItem('authToken', response.token)
                window.location.href = '/home'
                return
            } catch (error: any) {
                if (error.response?.data.message) {
                    console.error(error.response.data.message)
                }
                console.error(error)
                return
            }
        }

    }

    return (
        <TamerContext.Provider value={{
            login,
            setLogin,
            Tamer: {
                Login: Tamer.Login
            }
        }}> {children}</TamerContext.Provider >
    )
}
