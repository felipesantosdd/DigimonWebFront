"use client"
import Appbar from '@/components/appbar';
import Backdrop from '@/components/backdrop';
import DigimonBox from '@/components/digimonBox';
import EvolutionAnimation from '@/components/evolutionAnimation';
import MainMenu from '@/components/mainMenu';
import MenuEvolutions from '@/components/menuEvolutions';
import { DigimonContext } from '@/contexts/digimonContext';
import { TamerContext } from '@/contexts/tamerContext';
import React, { useContext, useEffect } from 'react';

const Home = () => {
    const { tamerData, menu, Authentication, showBack, setShowBack } = useContext(TamerContext);

    const { Digimon, showEvolution, digimon } = useContext(DigimonContext)

    useEffect(() => {
        Authentication()
    }, [])

    function getDigimon() {
        Digimon.GetMyDigimon(tamerData?.digimons[0].id)
    }


    setTimeout(Authentication, 60000);
    setTimeout(getDigimon, 60000);

    return (
        <div
            className='flex justify-center w-[100vw] h-[100vh] overflow-hidden m-0 p-0 '
            style={{
                background: `url('https://image3.cdn2.seaart.ai/2023-09-30/18618260520967173/71daf74c937097dce438c77d448fe22ea6be24bc.png')`,
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',


            }}>
            <Backdrop status={showBack} />
            <Appbar />



            <DigimonBox digiId={tamerData?.digimons[0]?.id} />

            {showEvolution && (<EvolutionAnimation />)}
            {menu === 0 && (<MainMenu />)}
            {menu === 1 && (<MenuEvolutions />)}


        </div>
    );
};

export default Home;
