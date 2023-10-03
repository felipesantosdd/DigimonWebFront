import { DigimonContext } from '@/contexts/digimonContext'
import { IDigiEgg } from '@/interfaces/digiegg'
import React, { useContext, useEffect, useState } from 'react'

const Hood = ({ digiEgg }: { digiEgg: IDigiEgg }) => {

    const { splitUrl } = useContext(DigimonContext)


    return (
        <div className='flex flex-col m-2 w-[auto]'>
            <span className='border pl-2 bg-[rgba(37,37,37,0.8)]  border-[#6A6566] mt-2 text-white items-center'>
                {digiEgg.name}
            </span>
            <div className='flex flex-row'>

                <div className='p-2 h-[auto] border-t-0 flex justify-center flex-col items-center border bg-[rgba(37,37,37,0.5)] border-[#6A6566]'>
                    <img className='h-36 w-full' src={`${splitUrl(digiEgg?.sprite)}.gif`} alt="Digimon Sprite" />
                </div>

                <div className='flex flex-col w-[100%]  ' >

                    <div className='text-white font-bold justify-around  items-center flex  w-[auto] h-[100%] border bg-[rgba(37,37,37,0.5)] border-[#6A6566] p-1 pr-5'>
                        <span className='m-2'>HP</span>
                        <div className='rounded-full   w-full min-w-[150px]  h-3  bg-[#252525]' >
                            <div className={`text-white text-xs flex items-center justify-center   rounded-full h-[100%] bg-red-600`} style={{ width: `${(digiEgg?.atualHp / digiEgg?.evolutionHp) * 100}%` }}>
                                <span>{`${digiEgg.atualHp}/${digiEgg.evolutionHp}`}</span>
                            </div>

                        </div>
                    </div>
                    <div className='text-white font-bold justify-around  items-center flex  w-[auto] h-[100%] border bg-[rgba(37,37,37,0.5)] border-[#6A6566] p-1 pr-5'>
                        <span className='m-2'>SP</span>
                        <div className='rounded-full   w-full min-w-[150px]  h-3  bg-[#252525]' >
                            <div className={`text-white text-xs flex items-center justify-center rounded-full h-[100%] bg-blue-600`} style={{ width: `${((digiEgg?.atualMp / digiEgg?.evolutionMp) * 100).toFixed(0)}%` }}>
                                <span>{`${digiEgg.atualMp}/${digiEgg.evolutionMp}`}</span>
                            </div>

                        </div>
                    </div>
                    <div className='text-white font-bold justify-start items-center flex w-[auto] h-[100%] border bg-[rgba(37,37,37,0.5)] border-[#6A6566] p-1 pr-5'>
                        <span className='m-2'>LV</span>
                        <div className=' rounded-full w-full min-w-[150px] h-3 bg-[#252525]'>
                            <div className={`text-white text-xs flex items-center justify-center  rounded-full h-[100%] bg-pink-600`} style={{
                                width: `${(digiEgg?.love / 10
                                ) * 100}%`
                            }}>
                                <span>{`${digiEgg.love}/${10}`}</span>
                            </div>
                        </div>
                    </div>
                    <div className='text-white font-bold justify-around  items-center flex  w-[auto] h-[100%] border bg-[rgba(37,37,37,0.5)] border-[#6A6566] p-1 pr-5'>
                        <span className='m-2'>HG</span>
                        <div className=' rounded-full   w-full min-w-[150px]  h-3  bg-[#252525]' >
                            <div className={`text-white text-xs flex items-center justify-center rounded-full h-[100%] bg-yellow-600`} style={{ width: `${((digiEgg?.health / 100) * 100).toFixed(0)}%` }}>
                                <span>{`${digiEgg.health}/${100}`}</span>
                            </div>

                        </div>
                    </div>
                    <div className='text-white font-bold justify-around  items-center flex  w-[auto] h-[100%] border bg-[rgba(37,37,37,0.5)] border-[#6A6566] p-1 pr-5'>
                        <span className='m-2'>XP</span>
                        <div className=' rounded-full   w-full min-w-[150px]  h-4  bg-[#252525]' >
                            <div className={` text-white text-xs flex items-center justify-center rounded-full h-[100%] bg-gray-600`} style={{ width: `100%` }}>
                                <span>{`${digiEgg.trainingPoints}/${digiEgg.nextPoints}`}</span>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Hood