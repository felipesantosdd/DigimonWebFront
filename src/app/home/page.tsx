"use client"
import Appbar from '@/components/appbar';
import DigimonBox from '@/components/digimonBox';
import ErrorAlert from '@/components/errorAlert';
import MainMenu from '@/components/mainMenu';
import { TamerContext } from '@/contexts/tamerContext';
import React, { useContext, useEffect } from 'react';

const Home = () => {
    const { tamerData, login, Authentication } = useContext(TamerContext);

    useEffect(() => {
        Authentication()
    }, [])

    return (
        <div
            className='flex justify-center w-[100%] h-[100vh]'
            style={{
                background: `url('https://static.vecteezy.com/system/resources/previews/001/987/871/non_2x/abstract-black-stripes-diagonal-background-free-vector.jpg')`,
                backgroundSize: 'center'
            }}>
            <Appbar />

            <DigimonBox />
            <MainMenu />

        </div>
    );
};

export default Home;
