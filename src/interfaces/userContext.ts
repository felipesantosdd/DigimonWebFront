import { ReactNode } from "react";
import { ILogin, IRegister, ITamer } from "./tamer";

export interface ITamerContextProps {
    login: number;
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    setLogin: React.Dispatch<React.SetStateAction<number>>;
    menu: number;
    setMenu: React.Dispatch<React.SetStateAction<number>>;
    tamerData: ITamer;
    setTamerData: React.Dispatch<React.SetStateAction<ITamer | undefined>>;
    showBack: boolean;
    setShowBack: React.Dispatch<React.SetStateAction<boolean>>;
    Login: (data: ILogin) => Promise<void>;
    Register: (data: IRegister) => Promise<void>;
    Authentication: () => Promise<void>

}

export interface ITamerProviderType {
    children: ReactNode;
}
