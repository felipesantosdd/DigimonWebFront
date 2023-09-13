import Image from 'next/image'
import React, { useContext, useEffect } from 'react'
import bag from '../../assets/icons/bag.png'
import historic from '../../assets/icons/historic.png'
import status from '../../assets/icons/status.png'
import friends from '../../assets/icons/friends.png'
import mission from '../../assets/icons/mission.png'
import digivice from '../../assets/icons/digivice.png'
import { TamerContext } from '@/contexts/tamerContext'

export default function MainMenu() {

    const { setMenu, Authentication } = useContext(TamerContext)

    useEffect(() => {
        Authentication()

    }, [])

    return (
        <div className='bg-yellow-300 bottom-0 absolute w-[100%] p-3 flex row justify-between'>
            <Image
                className=' cursor-pointer rounded-sm  '
                width={50}
                height={50}
                src={status} alt="exitIcon"
                onClick={() => console.log('2')} />
            <Image
                className=' cursor-pointer rounded-sm  '
                width={50}
                height={50}
                src={digivice} alt="exitIcon"
                onClick={() => setMenu(1)} />
            <Image
                className='cursor-pointer rounded-sm'
                width={50}
                height={50}
                src={bag} alt="exitIcon"
                onClick={() => console.log('Bag')} />
            <Image
                className='cursor-pointer rounded-sm'
                width={50}
                height={50}
                src={historic} alt="exitIcon"
                onClick={() => console.log('Bag')} />
            <Image
                className='cursor-pointer rounded-sm border-1 border-black;'
                width={50}
                height={50}
                src={friends} alt="exitIcon"
                onClick={() => console.log('Bag')} />
            <Image
                className='cursor-pointer rounded-sm border-1 border-black;'
                width={50}
                height={50}
                src={mission} alt="exitIcon"
                onClick={() => console.log('Bag')} />
        </div>
    )
}
