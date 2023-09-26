import { DigimonContext } from '@/contexts/digimonContext'
import { TamerContext } from '@/contexts/tamerContext';
import React, { useContext, useEffect } from 'react'
import back from '../../../assets/icons/back.png'
import bag from "../../../assets/icons/bag.png"
import Image from 'next/image';

interface IMenuEvolutionsProps{
    setActiveMenu: (value: "main" | "status" | "digivice" | "bag" | "historic" | "friends" | "mission" | null) => void
}


const MenuBag = ({setActiveMenu}: IMenuEvolutionsProps) => {

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
        <div className="w-[100%] flex justify-around ">

          <Image
                className='cursor-pointer border-1 rounded-md'
                width={50}
                height={50}
                src={back} alt="exitIcon"
                onClick={() => setActiveMenu("main")} />
            <Image
                className='cursor-pointer border-1 rounded-md'
                width={50}
                height={50}
                src={bag} alt="exitIcon"
                onClick={() => alert("alo")} />
            <Image
                className='cursor-pointer border-1 rounded-md'
                width={50}
                height={50}
                src={bag} alt="exitIcon"
                onClick={() => alert("alo")} />
            <Image
                className='cursor-pointer border-1 rounded-md'
                width={50}
                height={50}
                src={bag} alt="exitIcon"
                onClick={() => alert("alo")} />
          
            {digimon?.evolutions?.map((evo) => {
                if (evo?.name !== digimon?.name) {
                    return (
                        <div
                            key={evo.id}
                            onClick={() =>{ setActiveMenu("main"); evolution(evo.id)}}
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
           
           
        </div>
    );
};
export default MenuBag