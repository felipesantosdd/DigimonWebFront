import { ITamer } from '@/interfaces/tamer';
export interface IDigimon {
    id: string
    hp: number
    mp: number
    atualHp: number
    atualMp: number;
    form: number
    name: string
    defense: number
    speed: number
    aptitude: number
    sprite: string
    love: number
    health: number
    evolutions: IDigimon[]
    evolutionHp: number
    evolutionMp: number
    evolutionDefense: number
    evolutionSpeed: number
    evolutionAptitude: number
    evolutionAttack: number
    image: string

    points: number
    trainingIntensity: number
    inTraining: boolean
    trainingEnd: string
    trainingPoints: number
    nextPoints: number
    missions: any[]
    inMission: boolean
    missionReturn: string
}