import { string } from "yup";
import { IDigiEgg } from "./digiegg";

export interface IRegister {
    name: string;
    nickname: string;
    email: string;
    password: string;
}

export interface ILogin {
    nick: string;
    password: string;
}

export interface ITamer {
    id: string;
    name: string;
    nickname: string;
    email: string;
    password: string;
    maxEnergy: number;
    atualEnergy: number;
    xp: number;
    image: string;
    digimons: IDigiEgg[];
    bag: any[];
}

export interface ILoginResponse {
    token: string;
    user: ITamer;
}
