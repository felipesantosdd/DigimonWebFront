import { DigimonContext } from '@/contexts/digimonContext'
import { TamerContext } from '@/contexts/tamerContext';
import React, { useContext, useEffect } from 'react'
import back from '../../assets/icons/back.png'
import Image from 'next/image';

const MenuEvolutions = () => {

    const { digimon, splitUrl, Digimon, setShowEvolution } = useContext(DigimonContext)
    const { setMenu } = useContext(TamerContext)
    const { Authentication } = useContext(TamerContext);

    function evolution(evoId: string) {
        Digimon.Evolution(digimon?.id, evoId)
        setShowEvolution(true)
    }

    useEffect(() => {
        Authentication()
    }, [])

    return (
        <div className='bg-yellow-300 bottom-0 absolute w-[100%] p-3 flex row justify-around overflow-x-scroll overflow-y-hidden'>
            {digimon?.evolutions?.map((evo) => {
                if (evo?.name !== digimon?.name) {
                    return (
                        <div
                            key={evo.id}
                            onClick={() => evolution(evo.id)}
                            className='w-12 h-12 bg-[#18272D] rounded-md'>
                            <img
                                className='w-[120%] h-[120%]'
                                src={`${splitUrl(evo?.sprite)}.gif`}
                                alt='evolution Sprite'
                            />
                        </div>
                    );
                }
                return null; // Se não deseja renderizar nada, retorne null.
            })}
            <Image
                className='cursor-pointer border-1 rounded-md'
                width={50}
                height={50}
                src={back} alt="exitIcon"
                onClick={() => setMenu(0)} />
        </div>
    );
};
export default MenuEvolutions