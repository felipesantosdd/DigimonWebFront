import { DigimonContext } from '@/contexts/digimonContext';
import { TamerContext } from '@/contexts/tamerContext';
import React, { useContext, useEffect } from 'react'
import digibg from '../../assets/digibg.png'
import Image from 'next/image';
import Bar from './bar';

const DigimonBox = ({ digiId }: { digiId: string }): Promise<any> => {


    const backgroundImageStyle = {
        backgroundImage: `url(${digibg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh', // Ajuste a altura conforme necessário
    };

    const { Digimon, digimon, splitUrl } = useContext(DigimonContext)



    useEffect(() => {
        if (digiId) {
            Digimon.GetMyDigimon(digiId)
        }
    }, [digiId])

    return (
        <div className=' w-[80vw] h-[70vh] flex justify-center items-center translate-y-[20%] flex-col'>

            <img src={`${splitUrl(digimon?.sprite)}.gif`} alt="Digimon Sprite" />

            <Image width={500} height={500} src={digibg} alt="Digimon Sprite" className='absolute z-[-2] fill-dark animate-spin-slow  min-h-[500px] min-w-[500px] ' />

            <Bar color='red' name='HP' percent={(digimon?.atualHp / digimon?.evolutionHp) * 100} current={`${digimon?.atualHp}/${digimon?.evolutionHp}`} />
            <Bar color='blue' name='MP' percent={(digimon?.atualMp / digimon?.evolutionMp) * 100} current={`${digimon?.atualMp}/${digimon?.evolutionMp}`} />

        </div>
    )
}

export default DigimonBox