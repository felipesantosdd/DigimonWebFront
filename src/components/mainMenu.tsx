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

export default function MainMenu() {

    const { setMenu, Authentication, showMenu } = useContext(TamerContext)


    useEffect(() => {
        Authentication()

    }, [])

    function logOut() {
        localStorage.removeItem('authToken')
        window.location.href = '/';
    }


    return (
        <div className={`bg-[rgba(37,37,37,0.8)] absolute h-[100%] w-[300px]  flex flex-col flex-wrap items-start ${showMenu ? 'left-0 animate-open-menu' : 'animate-close-menu left-0 opacity-0'} `}>

            <Image className='static top-0 left-0' src={menu} alt='box' />
            <div className='w-[100%] h-[auto] flex flex-col flex-wrap items-start' >
                <div className='flex flex-row items-center p-2'>
                    <Image
                        className=' cursor-pointer rounded-sm '
                        width={50}
                        height={50}
                        src={status} alt="exitIcon"
                        onClick={() => { window.location.href = '/status' }} />
                    <span className='font-bold text-white text-2xl ml-2'>Status</span>
                </div>

                <div className='flex flex-row items-center p-2'>
                    <Image
                        className=' cursor-pointer rounded-s  '
                        width={50}
                        height={50}
                        src={digivice} alt="exitIcon"
                        onClick={() => setMenu(1)} />
                    <span className='font-bold text-white text-2xl ml-2'>Evoluções</span>
                </div>

                <div className='flex flex-row items-center p-2'>
                    <Image
                        className='cursor-pointer rounded-s'
                        width={50}
                        height={50}
                        src={bag} alt="exitIcon"
                        onClick={() => console.log('Bag')} />
                    <span className='font-bold text-white text-2xl ml-2'>Itens</span>
                </div>

                <div className='flex flex-row items-center p-2'>
                    <Image
                        className='cursor-pointer rounded-s'
                        width={50}
                        height={50}
                        src={historic} alt="exitIcon"
                        onClick={() => console.log('Bag')} />
                    <span className='font-bold text-white text-2xl ml-2'>Avistados</span>
                </div>

                <div className='flex flex-row items-center p-2'>
                    <Image
                        className='cursor-pointer rounded-s border-1 border-black;'
                        width={50}
                        height={50}
                        src={friends} alt="exitIcon"
                        onClick={() => console.log('Bag')} />
                    <span className='font-bold text-white text-2xl ml-2'>Perfil</span>
                </div>

                <div className='flex flex-row items-center p-2'>
                    <Image
                        className='cursor-pointer rounded-s border-1 border-black;'
                        width={50}
                        height={50}
                        src={mission} alt="exitIcon"
                        onClick={() => console.log('Bag')} />
                    <span className='font-bold text-white text-2xl ml-2'>Missões</span>
                </div>
                <div className='flex flex-row items-center p-2'>
                    <Image
                        className='cursor-pointer rounded-s border-1 border-black;'
                        width={50}
                        height={50}
                        src={exit} alt="exitIcon"
                        onClick={logOut} />
                    <span className='font-bold text-white text-2xl ml-2'>LogOut</span>
                </div>
            </div>
        </div>
    )
}
