import { DigimonContext } from '@/contexts/digimonContext'
import React, { useContext, useState } from 'react'

const EvolutionAnimation = () => {

    const { setShowEvolution, splitUrl, digimon } = useContext(DigimonContext)

    return (

        <div className='absolute w-[360px] h-[530px] translate-y-[25%] flex-col justify-center overflow-hidden bg-transparent py-6 sm:py-12 z-40 items-center '>
            <div className="group h-[100%] w-[360px] [perspective:1000px] ">
                <div className="relative h-full w-full rounded-x1 shadow-x1 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                    <div className='absolute inset-0'>
                        <img className='h-full w-full rounded-s-sm object-cover '
                            src='https://static.wikia.nocookie.net/digimoncardgame/images/c/ce/Digimon-Card-Back.png'></img>
                    </div>
                    <div className='absolute inset-0  text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                        <button className='z-50 absolute w-36 h-12 bg-[#252525] top-[88%] left-28 ' onClick={() => setShowEvolution(false)}>Continuar</button>
                        <img className='h-full w-full rounded-s-sm object-cover '
                            src={digimon.image}></img>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EvolutionAnimation