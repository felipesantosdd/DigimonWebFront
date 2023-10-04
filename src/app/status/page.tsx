/* eslint-disable @next/next/no-img-element */
"use client"
import Appbar from '@/components/appbar';
import MainMenu from '@/components/mainMenu';
import { DigimonContext } from '@/contexts/digimonContext';
import { TamerContext } from '@/contexts/tamerContext';
import React, { useContext, useEffect, useState } from 'react'
import virus from '../../../assets/icons/virus.png'
import data from '../../../assets/icons/data.png'
import vaccine from '../../../assets/icons/vaccine.png'
import Image from 'next/image';
import atk from '../../../assets/icons/atk.png'
import def from '../../../assets/icons/def.png'
import speed from '../../../assets/icons/speed.png'
import stamina from '../../../assets/icons/stamina.png'
import statusBox from '../../../assets/icons/statusBox.png'
import unknown from '../../../assets/icons/unknown000.png'
import { IDigimon } from '@/interfaces/digimon';
import Resistances from '@/components/Resistances';
import Hood from '@/components/hood';


const Status = () => {

    const { tamerData, menu, Authentication, showBack, setShowBack } = useContext(TamerContext);

    const { Digimon, digimon, splitUrl } = useContext(DigimonContext)

    const [baby, setBaby] = useState<IDigimon | undefined>({
        id: '',
        name: '',
        level: 0,
        species: '',
        type: '',
        attribute: '',
        hp: 0,
        mp: 0,
        element: '',
        attack: 0,
        defense: 0,
        speed: 0,
        aptitude: 0,
        cost: 0,
        sprite: '',
        description: '',
        image: '',
    })
    const [rookie, setRookie] = useState<IDigimon | undefined>({
        id: '',
        name: '',
        level: 0,
        species: '',
        type: '',
        attribute: '',
        hp: 0,
        mp: 0,
        element: '',
        attack: 0,
        defense: 0,
        speed: 0,
        aptitude: 0,
        cost: 0,
        sprite: '',
        description: '',
        image: '',
    })
    const [champion, setChampion] = useState<IDigimon | undefined>({
        id: '',
        name: '',
        level: 0,
        species: '',
        type: '',
        attribute: '',
        hp: 0,
        mp: 0,
        element: '',
        attack: 0,
        defense: 0,
        speed: 0,
        aptitude: 0,
        cost: 0,
        sprite: '',
        description: '',
        image: '',
    })
    const [ultimate, setUltimate] = useState<IDigimon | undefined>({
        id: '',
        name: '',
        level: 0,
        species: '',
        type: '',
        attribute: '',
        hp: 0,
        mp: 0,
        element: '',
        attack: 0,
        defense: 0,
        speed: 0,
        aptitude: 0,
        cost: 0,
        sprite: '',
        description: '',
        image: '',
    })
    const [mega, setMega] = useState<IDigimon | undefined>({
        id: '',
        name: '',
        level: 0,
        species: '',
        type: '',
        attribute: '',
        hp: 0,
        mp: 0,
        element: '',
        attack: 0,
        defense: 0,
        speed: 0,
        aptitude: 0,
        cost: 0,
        sprite: '',
        description: '',
        image: '',
    })
    const [form, setForm] = useState<IDigimon | undefined>({
        id: '',
        name: '',
        level: 0,
        species: '',
        type: '',
        attribute: '',
        hp: 0,
        mp: 0,
        element: '',
        attack: 0,
        defense: 0,
        speed: 0,
        aptitude: 0,
        cost: 0,
        sprite: '',
        description: '',
        image: '',
    })

    async function handleEvolution(evolutionId: string | undefined) {
        if (evolutionId !== undefined) {
            await Digimon.Evolution(evolutionId)
            Authentication()
        }
    }

    useEffect(() => {
        Authentication()
    }, [])

    useEffect(() => {
        const digiId = tamerData?.digimons[0]?.id
        if (digiId) {
            Digimon.GetMyDigimon(digiId)
        }
    }, [Digimon, tamerData])

    useEffect(() => {
        setBaby(digimon.evolutions.find((digi: IDigimon) => digi.level === 1))
        setRookie(digimon.evolutions.find((digi: IDigimon) => digi.level === 2))
        setChampion(digimon.evolutions.find((digi: IDigimon) => digi.level === 3))
        setUltimate(digimon.evolutions.find((digi: IDigimon) => digi.level === 4))
        setMega(digimon.evolutions.find((digi: IDigimon) => digi.level === 5))
        setForm(digimon.evolutions.find((digi: IDigimon) => digi.name === digimon.name))
    }, [digimon])



    return (
        <div className='flex justify-center  h-[100%] min-h-[100vh] m-0 p-0 '
            style={{
                background: `url('https://image3.cdn2.seaart.ai/2023-09-30/18618260520967173/71daf74c937097dce438c77d448fe22ea6be24bc.png')`,
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }}>
            <Appbar />
            <MainMenu />

            <div className='w-[95%] flex justify-center sm:flex-col mb-10 items-center'>
                <div className='absolute top-0 left-0 mb-32 z-0'>
                    <Image src={statusBox} alt='title' />
                </div>

                <div className='flex-col flex justify-center mt-24'>
                    <div className='flex flex-row  items-center justify-around h-56 '>
                        <div>

                            <div className='flex flex-row '>
                                <div className=' border border-[#f1f1f1] w-16 h-9 border-r-0 bg-[#979711] text-white flex items-center justify-center'>
                                    <span>HP</span>
                                </div>

                                <div className='bg-[rgba(37,37,37,0.8)] border border-[#6A6566] w-20 h-9 text-white flex justify-end p-2 items-center'>
                                    <span>{digimon.evolutionHp}</span>
                                </div>
                            </div>

                            <div className='flex flex-row'>
                                <div className=' border border-[#6A6566] w-16 h-9 border-t-0 border-r-0 bg-[#4BA5C8] text-white flex items-center justify-center'>
                                    <span>MP</span>
                                </div>

                                <div className='bg-[rgba(37,37,37,0.8)] border border-[#6A6566] border-t-0 w-20 h-9 text-white flex justify-end p-2 items-center'>
                                    <span>{digimon.evolutionMp}</span>
                                </div>
                            </div>

                            <div className='bg-[rgba(37,37,37,0.8)] mt-1  w-44 h-10 flex-row p-0 flex justify-start items-center'>
                                <Image
                                    className='border border-[#6A6566] border-r-0 w-10 h-10'
                                    src={
                                        (() => {
                                            switch (form?.attribute) {
                                                case 'data':
                                                    return data;
                                                case 'virus':
                                                    return virus;
                                                case 'vaccine':
                                                    return vaccine;
                                                default:
                                                    return unknown;
                                            }
                                        })()
                                    } width={500}
                                    height={500}
                                    alt="Digimon type" />

                                <div>
                                    <div className='border bg-[rgba(37,37,37,0.8)]  border-[#4e4e4e] border-b-0 w-36 h-5 text-white flex items-center justify-center'>
                                        <span>{form?.species}</span>
                                    </div>

                                    <div className='border bg-[rgba(37,37,37,0.8)]  border-[#6A6566]  h-5 text-white flex items-center justify-center'>
                                        <span>
                                            {(() => {
                                                switch (digimon.form) {
                                                    case 1:
                                                        return 'Baby';
                                                    case 2:
                                                        return 'Rookie';
                                                    case 3:
                                                        return 'Champion';
                                                    case 4:
                                                        return 'Ultimate';
                                                    case 5:
                                                        return 'Mega';
                                                    default:
                                                        return 'Egg';
                                                }
                                            })()}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div
                            className='w-[400px] sm:w-[200px] h-[300px] flex items-center justify-center ' >
                            <img src={`${splitUrl(digimon?.sprite)}.gif`} alt="Digimon Sprite" />
                        </div>

                    </div>


                    <div className='border bg-[rgba(37,37,37,0.8)]  border-[#6A6566] mt-2 mb-2 text-white items-center'>
                        <span className='ml-2'>{digimon.name}</span>
                    </div>

                    <div className=' w-[100%] flex flex-row flex-wrap justify-between '>
                        <div className='w-[24%]  justify-center flex-col items-center border bg-[rgba(37,37,37,0.5)]  border-[#6A6566]'>
                            <div className='bg-[#414141] w-[100%] text-center text-white'>
                                <span>ATK</span>
                            </div>
                            <div className='w-[100%] p-1 flex flex-row items-center justify-evenly text-white text-[20px] '>
                                <Image src={atk} alt="atk" />
                                <span>{digimon.evolutionAttack}</span>
                            </div>
                        </div>
                        <div className='w-[24%] flex justify-center flex-col items-center border bg-[rgba(37,37,37,0.5)]  border-[#6A6566]'>
                            <div className='bg-[#414141] w-[100%] text-center text-white'>
                                <span>DEF</span>
                            </div>
                            <div className='w-[100%] flex flex-row items-center justify-evenly p-1 text-white text-[20px] '>
                                <Image src={def} alt="def" />
                                <span>{digimon.evolutionDefense}</span>
                            </div>
                        </div>
                        <div className='w-[24%] flex justify-center flex-col items-center border bg-[rgba(37,37,37,0.5)]  border-[#6A6566]'>
                            <div className='bg-[#414141] w-[100%] text-center text-white'>
                                <span>SPD</span>
                            </div>
                            <div className='w-[100%]  h-[100%] flex flex-row items-center justify-evenly p-1 text-white text-[20px] '>
                                <Image src={speed} alt="def" />
                                <span>{digimon.evolutionSpeed}</span>
                            </div>
                        </div>
                        <div className='w-[24%] flex justify-center flex-col items-center border bg-[rgba(37,37,37,0.5)]  border-[#6A6566]'>
                            <div className='bg-[#414141] w-[100%] text-center text-white'>
                                <span>APT</span>
                            </div>
                            <div className='w-[100%] h-[100%] flex flex-row items-center justify-evenly p-1 text-white text-[20px] '>
                                <Image src={stamina} alt="def" />
                                <span>{digimon.evolutionAptitude}</span>
                            </div>
                        </div>

                    </div>


                    <Resistances />
                </div>


                <div>
                    <div className='border bg-[rgba(37,37,37,0.8)]  border-[#6A6566] mt-2 text-white items-center'>
                        <span className='ml-2'>Evoluções</span>
                    </div>
                    <div className='flex flex-row flex-wrap justify-evenly '>


                        <div className='w-[120px] h-[auto] mt-2 flex justify-center flex-col items-center border bg-[rgba(37,37,37,0.5)] border-[#6A6566]'>
                            <div
                                onClick={() => handleEvolution(baby?.id)}
                                className='w-[100%] h-[100%] flex flex-row items-center justify-evenly p-1 text-white text-[20px] '>
                                {baby !== undefined ? (
                                    <img
                                        src={baby.image}
                                        alt="def"
                                    />
                                ) : (
                                    <Image src={unknown} alt="def" />
                                )}
                            </div>
                            <div className='bg-[#414141] w-[100%] text-center text-white'>
                                <span>Baby</span>
                            </div>
                        </div>




                        <div
                            onClick={() => handleEvolution(rookie?.id)}
                            className='w-[120px] h-[auto] mt-2 flex justify-center flex-col items-center border bg-[rgba(37,37,37,0.5)] border-[#6A6566]'>
                            <div className='w-[100%] h-[100%] flex flex-row items-center justify-evenly p-1 text-white text-[20px] '>
                                {rookie !== undefined ? (
                                    <img
                                        src={rookie.image}
                                        alt="def"
                                    />
                                ) : (
                                    <Image src={unknown} alt="def" />
                                )}
                            </div>
                            <div className='bg-[#414141] w-[100%] text-center text-white'>
                                <span>Rookie</span>
                            </div>
                        </div>


                        <div
                            onClick={() => handleEvolution(champion?.id)}
                            className='w-[120px] h-[auto] mt-2 flex justify-center flex-col items-center border bg-[rgba(37,37,37,0.5)] border-[#6A6566]'>
                            <div className='w-[100%] h-[100%] flex flex-row items-center justify-evenly p-1 text-white text-[20px] '>
                                {champion !== undefined ? (
                                    <img
                                        src={champion.image}
                                        alt="def"
                                    />
                                ) : (
                                    <Image src={unknown} alt="def" />
                                )}
                            </div>
                            <div className='bg-[#414141] w-[100%] text-center text-white'>
                                <span>Champion</span>
                            </div>
                        </div>


                        <div
                            onClick={() => handleEvolution(ultimate?.id)}
                            className='w-[120px] h-[auto] mt-2 flex justify-center flex-col items-center border bg-[rgba(37,37,37,0.5)] border-[#6A6566]'>
                            <div className='w-[100%] h-[100%] flex flex-row items-center justify-evenly p-1 text-white text-[20px] '>
                                {ultimate !== undefined ? (
                                    <img
                                        src={ultimate.image}
                                        alt="def"
                                    />
                                ) : (
                                    <Image src={unknown} alt="def" />
                                )}
                            </div>
                            <div className='bg-[#414141] w-[100%] text-center text-white'>
                                <span>Ultimate</span>
                            </div>
                        </div>

                        <div
                            onClick={() => handleEvolution(mega?.id)}
                            className='w-[120px] h-[auto] mt-2 flex justify-center flex-col items-center border bg-[rgba(37,37,37,0.5)] border-[#6A6566]'>
                            <div className='w-[100%] h-[100%] flex flex-row items-center justify-evenly p-1 text-white text-[20px] '>
                                {mega !== undefined ? (
                                    <img
                                        src={mega.image}
                                        alt="def"
                                    />
                                ) : (
                                    <Image src={unknown} alt="def" />
                                )}
                            </div>
                            <div className='bg-[#414141] w-[100%] text-center text-white'>
                                <span>Mega</span>
                            </div>
                        </div>
                    </div>
                    <Hood digiEgg={digimon}></Hood>
                </div>
            </div>

        </div >
    )
}

export default Status