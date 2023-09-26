import { ITamer } from '@/interfaces/tamer';
export interface IDigimon {
    id: string;
    hp: number;
    sprite: string;
    name: string;
    form: number;
    mp: number;
    atualMp: number;
    evolutionAttack: number;
    atualHp: number;
    defense: number;
    speed: number;
    image: string;
    aptitude: number;
    love: number;
    health: number;
    evolutionHp: number;
    evolutionMp: number;
    evolutionDefense: number;
    evolutionSpeed: number;
    evolutionAptitude: number;
    tamer?: ITamer;
    evolutions?: IDigimon[]
}