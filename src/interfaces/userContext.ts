import { ReactNode } from "react";
import { ILogin, IRegister, ITamer } from "./tamer";

export interface ITamerContextProps {
    login: number;
    setLogin: React.Dispatch<React.SetStateAction<number>>;
    tamerData: ITamer | any;
    setTamerData: React.Dispatch<React.SetStateAction<ITamer | undefined>>
    Login: (data: ILogin) => Promise<void>;
    Register: (data: IRegister) => Promise<void>;
    Authentication: () => Promise<void>

}

export interface ITamerProviderType {
    children: ReactNode;
}
