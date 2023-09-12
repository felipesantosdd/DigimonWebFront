"use client"
import Appbar from '@/components/appbar';
import ErrorAlert from '@/components/errorAlert';
import { TamerContext } from '@/contexts/tamerContext';
import React, { useContext, useEffect } from 'react';

const Home = () => {
    const { tamerData, login, Authentication } = useContext(TamerContext);

    useEffect(() => {
        try {
            Authentication()
        } catch (error) {
            ErrorAlert("Faça Login para continuar")
        }
    }, [])

    return (
        <div
            className='flex justify-center p-24 w-[100%] h-[100vh]'
            style={{
                background: `url('https://static.vecteezy.com/system/resources/previews/001/987/871/non_2x/abstract-black-stripes-diagonal-background-free-vector.jpg')`,
                backgroundSize: 'center'
            }}>
            <Appbar />
            <h1 className='text-white'>{tamerData?.name}</h1>

        </div>
    );
};

export default Home;
