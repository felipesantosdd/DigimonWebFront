"use client"
import Login from '@/components/login'
import Register from '@/components/register'
import { TamerContext } from '@/contexts/tamerContext'
import Image from 'next/image'
import { useContext, useState } from 'react'

export default function Home() {

  const { login, tamerData } = useContext(TamerContext)

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between"
      style={{
        background: `url('https://static.vecteezy.com/system/resources/previews/001/987/871/non_2x/abstract-black-stripes-diagonal-background-free-vector.jpg')`,
        backgroundSize: 'center',
      }}
    >
      <div className='flex flex-col justify-center text-center'>

        {login === 1 ? <Login /> : <Register />}


      </div>
    </main>
  )
}

