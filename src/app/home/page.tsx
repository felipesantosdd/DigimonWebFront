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
    const { tamerData, menu, Authentication } = useContext(TamerContext);

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
                background: `url('https://static.vecteezy.com/system/resources/previews/001/987/871/non_2x/abstract-black-stripes-diagonal-background-free-vector.jpg')`,
                backgroundSize: 'center'
            }}>
            <Backdrop />
            <Appbar />



            <DigimonBox digiId={tamerData?.digimons[0]?.id} />

            {showEvolution && (<EvolutionAnimation />)}
            {menu === 0 && (<MainMenu />)}
            {menu === 1 && (<MenuEvolutions />)}


        </div>
    );
};

export default Home;
