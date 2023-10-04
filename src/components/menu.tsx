import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import bag from '../../assets/icons/bag.png'
import historic from '../../assets/icons/historic.png'
import status from '../../assets/icons/status.png'
import friends from '../../assets/icons/friends.png'
import mission from '../../assets/icons/mission.png'
import digivice from '../../assets/icons/digivice.png'
import exit from '../../assets/icons/exit.png'
import { TamerContext } from '@/contexts/tamerContext'
import menu from '../../assets/icons/menu.png'
import home from '../../assets/icons/home.png'

export default function Menu({ children }: { children: any }) {

    const { setMenu, Authentication, showMenu } = useContext(TamerContext)


    useEffect(() => {
        Authentication()

    }, [])

    function logOut() {
        localStorage.removeItem('authToken')
        window.location.href = '/';
    }


    return (
        <div className={`bg-[rgba(41,41,41,0.8)] fixed min-h-[100%] w-[300px] z-10 flex flex-col flex-wrap items-start ${showMenu ? 'left-0 animate-open-menu' : 'animate-close-menu left-0 opacity-0'} `}>

            {children}
        </div>
    )
}
