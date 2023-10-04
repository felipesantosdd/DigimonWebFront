import { Dispatch, ReactNode, SetStateAction } from "react";
import { IDigiEgg, IRelacoesElemento } from "./digiegg";

export type DigimonContextProps = {
    splitUrl: (url: string) => string;
    showEvolution: boolean;
    setShowEvolution: Dispatch<SetStateAction<boolean>>;
    digimon: IDigiEgg;
    setDigimon: Dispatch<SetStateAction<IDigiEgg>>;
    relacoes: IRelacoesElemento;
    Digimon: {
        GetOne: (id: string) => Promise<any>;
        GetMyDigimon: (id: string) => Promise<void>
        Evolution: (evoId: string) => Promise<void>
    }
}

export type DigimonProviderType = {
    children: ReactNode;
}
