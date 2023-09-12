"use client"
import { TamerProvider } from '@/contexts/tamerContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DigitalPet',
  description: 'Projeto de virtual pet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-[#252525]'>
      <TamerProvider>

        <body className={inter.className}>{children}</body>

      </TamerProvider>
    </html>
  )
}
