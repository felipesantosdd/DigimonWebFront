import { Dispatch, ReactNode, SetStateAction } from "react";
import { IDigimon } from "./digiegg";

export type DigimonContextProps = {
    splitUrl: (url: string) => string;
    showEvolution: boolean;
    setShowEvolution: Dispatch<SetStateAction<boolean>>;
    digimon: IDigimon;
    setDigimon: Dispatch<SetStateAction<IDigimon>>;
    Digimon: {
        GetOne: (id: string) => Promise<any>;
        GetMyDigimon: (id: string) => Promise<void>
        Evolution: (id: string, evoId: string) => Promise<void>
    }
}

export type DigimonProviderType = {
    children: ReactNode;
}
