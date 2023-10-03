"use client"
import Appbar from '@/components/appbar';
import MainMenu from '@/components/mainMenu';
import { DigimonContext } from '@/contexts/digimonContext';
import { TamerContext } from '@/contexts/tamerContext';
import React, { useContext, useEffect } from 'react'
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


const Status = () => {

    const { tamerData, menu, Authentication, showBack, setShowBack } = useContext(TamerContext);

    const { Digimon, digimon, splitUrl } = useContext(DigimonContext)


    useEffect(() => {
        Authentication()

    }, [])

    useEffect(() => {
        const digiId = tamerData?.digimons[0]?.id
        if (digiId) {
            Digimon.GetMyDigimon(digiId)
        }
    }, [tamerData])

    console.log(digimon)

    return (
        <div className='flex justify-center w-[100vw] h-[100vh] overflow-hidden m-0 p-0 '
            style={{
                background: `url('https://image3.cdn2.seaart.ai/2023-09-30/18618260520967173/71daf74c937097dce438c77d448fe22ea6be24bc.png')`,
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
            }}>
            <Appbar />
            {menu === 0 && (<MainMenu />)}

            <div className='w-[100%] flex justify-center sm:flex-col'>
                <div className='absolute top-0 left-0 mb-32 z-0'>
                    <Image src={statusBox} alt='title'></Image>
                </div>

                <div className='flex-col flex justify-center'>
                    <div className='flex flex-row  items-center justify-around h-40 '>
                        <div>
                            {/* <div className=' rounded-full bg-[rgba(37,37,37,0.8)] mb-4 w-[150px] h-[150px] flex items-center justify-center'>
                                <div className='flex items-center justify-center rounded-full bg-[rgba(110,110,110,0.8)] w-[95%] h-[95%]'>
                                    <div className='flex items-center justify-center rounded-full bg-[rgba(71,71,71,0.8)] w-[95%] h-[95%]'>
                                        <div className='flex items-center justify-center rounded-full bg-[rgba(81,190,81,0.8)] w-[85%] h-[85%] '>

                                        </div>
                                    </div>
                                </div>
                            </div> */}
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
                                <Image className='border border-[#6A6566] border-r-0 w-10 h-10' src={data} width={500} height={500} alt="Digimon type" />

                                <div>
                                    <div className='border bg-[rgba(37,37,37,0.8)]  border-[#4e4e4e] border-b-0 w-36 h-5 text-white flex items-center justify-center'>
                                        <span>Dragon</span>
                                    </div>

                                    <div className='border bg-[rgba(37,37,37,0.8)]  border-[#6A6566]  h-5 text-white flex items-center justify-center'>
                                        <span>Training</span>
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


                </div>
                <div className='border bg-[rgba(37,37,37,0.8)]  border-[#6A6566] mt-2 text-white items-center'>
                    <span className='ml-2'>Evoluções</span>
                </div>
                <div className=' m-2 mt-0 flex flex-row flex-wrap justify-between '>


                    <div className='w-[120px] h-[auto] m-2 flex justify-center flex-col items-center border bg-[rgba(37,37,37,0.5)]  border-[#6A6566]'>
                        <div className='w-[100%] h-[100%] flex flex-row items-center justify-evenly p-1 text-white text-[20px] '>
                            <Image src={unknown} alt="def" />

                        </div>
                        <div className='bg-[#414141] w-[100%] text-center text-white'>
                            <span>Baby</span>
                        </div>
                    </div>


                    <div className='w-[120px] h-[auto] m-2  flex justify-center flex-col items-center border bg-[rgba(37,37,37,0.5)]  border-[#6A6566]'>
                        <div className='w-[100%] h-[100%] flex flex-row items-center justify-evenly p-1 text-white text-[20px] '>
                            <Image src={unknown} alt="def" />

                        </div>
                        <div className='bg-[#414141] w-[100%] text-center text-white'>
                            <span>Rookie</span>
                        </div>
                    </div>

                    <div className='w-[120px] h-[auto] m-2 flex justify-center flex-col items-center border bg-[rgba(37,37,37,0.5)]  border-[#6A6566]'>
                        <div className='w-[100%] h-[100%] flex flex-row items-center justify-evenly p-1 text-white text-[20px] '>
                            <Image src={unknown} alt="def" />

                        </div>
                        <div className='bg-[#414141] w-[100%] text-center text-white'>
                            <span>Champion</span>
                        </div>
                    </div>

                    <div className='w-[120px] h-[auto] m-2 flex justify-center flex-col items-center border bg-[rgba(37,37,37,0.5)]  border-[#6A6566]'>
                        <div className='w-[100%] h-[100%] flex flex-row items-center justify-evenly p-1 text-white text-[20px] '>
                            <Image src={unknown} alt="def" />

                        </div>
                        <div className='bg-[#414141] w-[100%] text-center text-white'>
                            <span>Ultimate</span>
                        </div>
                    </div>

                    <div className='w-[120px] h-[auto] m-2 flex justify-center flex-col items-center border bg-[rgba(37,37,37,0.5)]  border-[#6A6566]'>
                        <div className='w-[100%] h-[100%] flex flex-row items-center justify-evenly p-1 text-white text-[20px] '>
                            <Image src={unknown} alt="def" />

                        </div>
                        <div className='bg-[#414141] w-[100%] text-center text-white'>
                            <span>Mega</span>
                        </div>
                    </div>



                </div>
            </div>

        </div >
    )
}

export default Status