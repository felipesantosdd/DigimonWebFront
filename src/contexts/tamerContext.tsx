"use client"
import ErrorAlert from "@/components/errorAlert";
import SucessAlert from "@/components/sucessAlert";
import { IDigimon } from "@/interfaces/digimon";
import { ILogin, IRegister, ITamer } from "@/interfaces/tamer";
import { ITamerContextProps, ITamerProviderType } from "@/interfaces/userContext";
import { AuthService } from "@/services/tamer/authService";
import { LoginService } from "@/services/tamer/loginService";
import { RegisterService } from "@/services/tamer/registerService";
import { UserItemService } from "@/services/tamer/useItem";
import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";

interface IError {
    response: {
        data: {
            message: string;
            statusCode: number;
        };
    }
}

export const TamerContext = createContext<ITamerContextProps>({} as ITamerContextProps)


export function TamerProvider({ children }: ITamerProviderType) {

    const [menu, setMenu] = useState<number>(0)

    const [showMenu, setShowMenu] = useState(false)

    const [tamerData, setTamerData] = useState<ITamer | any>();

    const [login, setLogin] = useState<number>(1)

    const [showBack, setShowBack] = useState(false)

    async function Authentication(): Promise<void> {
        try {
            const res = await AuthService();
            setTamerData(res)
        } catch (error) {
            console.error(error);

        }
    }


    async function Register(data: IRegister) {
        try {
            await RegisterService(data)
            setLogin(1)
            SucessAlert('Faça Login para continuar')
            localStorage.removeItem('authToken')
            window.location.href = '/';
            ErrorAlert("Faça Login para continuar")
        } catch (error: any) {
            console.error(error)
            if (error.response.data.message) {
                ErrorAlert(error.response.data.message)
            }
        }
    }

    async function Login(data: ILogin): Promise<void> {
        try {
            setShowBack(true)
            const response = await LoginService(data)
            setTamerData(response.user)
            localStorage.setItem('authToken', response.token)
            window.location.href = '/home';
        } catch (error: any) {
            if (error.response?.data.message) {
                console.error(error.response.data.message)
                ErrorAlert(error.response.data.message)
            }
            console.error(error)
            setShowBack(false)
        }

    }

    async function useItem(itemId: string, eggId: string) {
        try {
            const response = await UserItemService(tamerData.id, { itemId, eggId })
            return response
        } catch (error: any) {
            const erro: IError = error
            if (erro.response.data.message) {
                ErrorAlert(erro.response.data.message)
                console.error(erro.response.data.message)
            } else {
                console.error(error)
            }
        }

    }


    useEffect(() => {
    }, [tamerData])

    return (
        <TamerContext.Provider value={{
            showMenu,
            setShowMenu,
            login,
            setTamerData,
            setLogin,
            menu,
            setMenu,
            tamerData,
            Login,
            Register,
            showBack,
            setShowBack,
            Authentication,
            useItem
        }}> {children}</TamerContext.Provider >
    )
}
