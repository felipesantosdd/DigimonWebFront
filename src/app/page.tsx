"use client"
import Backdrop from '@/components/backdrop'
import Login from '@/components/login'
import Register from '@/components/register'
import { TamerContext } from '@/contexts/tamerContext'
import Image from 'next/image'
import { useContext, useState } from 'react'

export default function Home() {

  const { login, showBack } = useContext(TamerContext)

  return (
    <main
      className="flex w-screen min-h-screen justify-center items-center overflow-x-hidden"
      style={{
       
      }}
    >
      {
        /*
      
      <div className='absolute w-[100%] h-[100%]'>

      </div>
      */ 
    }
      
     
      <Backdrop status={showBack} />
      <div className='flex flex-col justify-center text-center'>

        {login === 1 ? <Login /> : <Register />}


      </div>
    </main>
  )
}

