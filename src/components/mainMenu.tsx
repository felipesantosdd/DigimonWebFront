import Image from 'next/image'
import React from 'react'
import bag from '../../assets/icons/bag.png'
import historic from '../../assets/icons/historic.png'
import status from '../../assets/icons/status.png'
import friends from '../../assets/icons/friends.png'
import mission from '../../assets/icons/mission.png'

export default function MainMenu() {
    return (
        <div className='bg-yellow-300 bottom-0 absolute w-[100%] p-3 flex row justify-between'>
            <Image
                className=' cursor-pointer  '
                width={50}
                height={50}
                src={status} alt="exitIcon"
                onClick={() => console.log('Bag')} />
            <Image
                className='cursor-pointer'
                width={50}
                height={50}
                src={bag} alt="exitIcon"
                onClick={() => console.log('Bag')} />
            <Image
                className='cursor-pointer'
                width={50}
                height={50}
                src={historic} alt="exitIcon"
                onClick={() => console.log('Bag')} />
            <Image
                className='cursor-pointer border-1 border-black;'
                width={50}
                height={50}
                src={friends} alt="exitIcon"
                onClick={() => console.log('Bag')} />
            <Image
                className='cursor-pointer border-1 border-black;'
                width={50}
                height={50}
                src={mission} alt="exitIcon"
                onClick={() => console.log('Bag')} />
        </div>
    )
}
