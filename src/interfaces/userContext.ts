import { ReactNode } from "react";
import { ILogin } from "./tamer";

export interface ITamerContextProps {
    login: number;
    setLogin: React.Dispatch<React.SetStateAction<number>>;
    Tamer: {
        Login: (data: ILogin) => Promise<void>
    };
}

export interface ITamerProviderType {
    children: ReactNode;
}
