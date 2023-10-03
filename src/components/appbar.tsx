"use client"
import { TamerContext } from '@/contexts/tamerContext';
import React, { useContext, useEffect } from 'react';
import Bar from './bar';
import icon from '../../assets/icons/icon.png'
import Image from 'next/image';
import SucessAlert from './sucessAlert';

const Appbar = () => {

    const { tamerData, login, Authentication, setShowMenu, showMenu } = useContext(TamerContext);

    function logOut() {
        localStorage.clear()
        window.location.href = '/';
        SucessAlert('Faça Login para continuar')
    }

    function seeMenu() {
        setShowMenu(!showMenu)
    }

    return (
        <div className='top-4 absolute w-[100%] p-3 flex z-10 justify-end  ' >
            <button onClick={seeMenu}>
                <Image src={icon} alt='home' width={50} height={50} />
            </button>
            {/* <div className='flex items-center w-[80%] '>
                <img width={500} height={300} src={tamerData?.image} alt="Imagem do tamer" className='w-12  rounded' />
                <div className='mx-5 '>
                    <div>{tamerData?.name}</div>
                    <Bar color={'blue'} name={''} percent={(tamerData?.atualEnergy / tamerData?.maxEnergy) * 100} current={`${tamerData?.atualEnergy}/${tamerData?.maxEnergy}`} />
                </div>
            </div>
            <Image
                className='rounded-lg cursor-pointer'
                width={50}
                height={50}
                src={exit} alt="exitIcon"
                onClick={logOut} /> */}
        </div>
    )
}

export default Appbar