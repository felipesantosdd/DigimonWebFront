import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import bag from '../../../assets/icons/bag.png'
import historic from '../../../assets/icons/historic.png'
import status from '../../../assets/icons/status.png'
import friends from '../../../assets/icons/friends.png'
import mission from '../../../assets/icons/mission.png'
import digivice from '../../../assets/icons/digivice.png'
import { TamerContext } from '@/contexts/tamerContext'
import MenuEvolutions from './menuEvolutions'

interface IMenuEvolutionsProps{
    setActiveMenu: (value: "main" | "status" | "digivice" | "bag" | "historic" | "friends" | "mission" | null) => void
}

export default function Menu({setActiveMenu}: IMenuEvolutionsProps) {
    /*
    interface IActiveMenu{
        menu: "main" | "status" | "digivice" | "bag" | "historic" | "friends" | "mission" // os diversos menus que existem
    }*/
    const { setMenu, Authentication } = useContext(TamerContext)
      useEffect(() => {
        Authentication()

    }, [])

    return (
        <div className='flex justify-around w-full'>
            <Image
                className=' cursor-pointer rounded-sm  '
                width={50}
                height={50}
                src={status} alt="exitIcon"
                onClick={() => setActiveMenu("status")} />
            <Image
                className=' cursor-pointer rounded-sm  '
                width={50}
                height={50}
                src={digivice} alt="exitIcon"
                onClick={() => setActiveMenu("digivice")} />
            <Image
                className='cursor-pointer rounded-sm'
                width={50}
                height={50}
                src={bag} alt="exitIcon"
                onClick={() => setActiveMenu("bag")} />
            <Image
                className='cursor-pointer rounded-sm'
                width={50}
                height={50}
                src={historic} alt="exitIcon"
                onClick={() =>  setActiveMenu("historic")} />
            <Image
                className='cursor-pointer rounded-sm border-1 border-black;'
                width={50}
                height={50}
                src={friends} alt="exitIcon"
                onClick={() =>  setActiveMenu("friends")} />
            <Image
                className='cursor-pointer rounded-sm border-1 border-black;'
                width={50}
                height={50}
                src={mission} alt="exitIcon"
                onClick={() =>  setActiveMenu("mission")} />


                {/*<MenuEvolutions setActiveMenu={setActiveMenu}/>*/}

                
        </div>
    )
}
