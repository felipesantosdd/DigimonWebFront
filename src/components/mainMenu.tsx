/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import bagIcon from '../../assets/icons/bag.png';
import historic from '../../assets/icons/historic.png';
import status from '../../assets/icons/status.png';
import friends from '../../assets/icons/friends.png';
import mission from '../../assets/icons/mission.png';
import digivice from '../../assets/icons/digivice.png';
import exit from '../../assets/icons/exit.png';
import back from '../../assets/icons/back.png';
import { TamerContext } from '@/contexts/tamerContext';
import menu from '../../assets/icons/menu.png';
import home from '../../assets/icons/home.png';
import Menu from './menu';
import { IItems } from '@/interfaces/items';
import { DigimonContext } from '@/contexts/digimonContext';

export default function MainMenu() {
    const { Authentication, tamerData, useItem, setShowMenu } = useContext(TamerContext);
    const { digimon } = useContext(DigimonContext);

    const [content, setContent] = useState<number>(0);
    const [bag, setBag] = useState<IItems[]>([])

    function groupItemsByName(items: IItems[]): IItems[] {
        const groupedItems: { [key: string]: IItems & { quantity: number } } = {};

        items.forEach((item: IItems) => {
            const itemName: string = item.name;

            if (groupedItems[itemName]) {
                groupedItems[itemName].quantity += 1;
            } else {
                groupedItems[itemName] = { ...item, quantity: 1 };
            }
        });

        return Object.values(groupedItems);
    }



    useEffect(() => {
        Authentication();
    }, []);

    useEffect(() => {
        if (tamerData?.bag.length > 0) {
            setBag(groupItemsByName(tamerData?.bag))
        }
    }, [tamerData])

    function logOut() {
        localStorage.removeItem('authToken');
        window.location.href = '/';
    }

    async function handleUseItem(itemId: string | undefined) {
        if (itemId !== undefined) {
            await useItem(itemId, digimon.id);
            Authentication()
        }
    }


    return (
        <Menu>
            {content === 0 && (
                <>
                    <Image className='static top-0 left-0' src={menu} alt='box' />
                    <div className='w-[100%] h-[auto] flex flex-col flex-wrap items-start'>

                        <button onClick={() => { window.location.href = '/home' }} className='border-b  border-b-[#252525] flex flex-row items-center p-2 w-full'>
                            <Image
                                className='cursor-pointer rounded-sm'
                                width={50}
                                height={50}
                                src={home}
                                alt="homeIcon"
                            />
                            <span className='font-bold text-white text-2xl ml-2'>Home</span>
                        </button>

                        <button onClick={() => { window.location.href = '/status' }} className='border-b  border-b-[#252525] flex flex-row items-center p-2 w-full'>
                            <Image
                                className='cursor-pointer rounded-sm'
                                width={50}
                                height={50}
                                src={status}
                                alt="exitIcon"
                            />
                            <span className='font-bold text-white text-2xl ml-2'>Status</span>
                        </button>

                        <button onClick={() => { setContent(1) }} className='border-b  border-b-[#252525] flex flex-row items-center p-2 w-full'>
                            <Image
                                className='cursor-pointer rounded-sm'
                                width={50}
                                height={50}
                                src={bagIcon}
                                alt="bag"
                            />
                            <span className='font-bold text-white text-2xl ml-2'>Bag</span>
                        </button>

                        <button onClick={() => setShowMenu(false)} className='flex w-full flex-row items-center p-2'>
                            <Image
                                className='cursor-pointer rounded-s border-1 border-black'
                                width={50}
                                height={50}
                                src={back}
                                alt="exitIcon"
                            />
                            <span className='font-bold text-white text-2xl ml-2'>Voltar</span>
                        </button>

                        <button onClick={logOut} className='border-b  border-b-[#252525] flex w-full flex-row items-center p-2'>
                            <Image
                                className='cursor-pointer rounded-s border-1 border-black'
                                width={50}
                                height={50}
                                src={exit}
                                alt="exitIcon"
                            />
                            <span className='font-bold text-white text-2xl ml-2'>LogOut</span>
                        </button>
                    </div>
                </>
            )}
            {
                content === 1 && (
                    <>
                        <Image className='static top-0 left-0' src={menu} alt='box' />
                        <div className='w-[100%] h-[auto] flex flex-col flex-wrap items-start'>
                            <button onClick={() => setContent(0)} className='flex w-full flex-row items-center p-2'>
                                <Image
                                    className='cursor-pointer rounded-s border-1 border-black'
                                    width={50}
                                    height={50}
                                    src={back}
                                    alt="exitIcon"
                                />
                                <span className='font-bold text-white text-2xl ml-2'>Voltar</span>
                            </button>
                            {bag.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleUseItem(item.id)}
                                    className='flex w-full flex-row items-center p-2 justify-between border-b border-t border-t-[#252525] border-b-[#252525]'>
                                    <div className='flex items-center'>
                                        <img
                                            className='cursor-pointer rounded-s border-1 border-black'
                                            width={50}
                                            height={50}
                                            src={item.sprite}
                                            alt="itemIcon"
                                        />
                                        <span className='font-bold text-white text-2xl ml-2'>{item?.name}</span>
                                    </div>
                                    <div className='w-[25px] h-[25px] rounded-full flex text-sm font-bold justify-center items-center bg-[#FFDB2A]'>
                                        {item.quantity}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </>
                )
            }
        </Menu>
    );
}
