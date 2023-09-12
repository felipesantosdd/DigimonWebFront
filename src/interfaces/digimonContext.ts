import { Dispatch, ReactNode, SetStateAction } from "react";
import { IDigimon } from "./digiegg";

export type DigimonContextProps = {
    digimon: IDigimon;
    setDigimon: Dispatch<SetStateAction<IDigimon>>;
    Digimon: {
        GetOne: (id: string) => Promise<any>;
        GetMyDigimon: (id: string) => Promise<void>
    }
}

export type DigimonProviderType = {
    children: ReactNode;
}
