import { TamerProvider } from '@/contexts/tamerContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { DigimonProvider } from '@/contexts/digimonContext'

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
    <html lang="en" className='flex justify-center items-center'>
      <TamerProvider>
        <DigimonProvider>
          <body className={inter.className}>{children}</body>
        </DigimonProvider>
      </TamerProvider>
    </html>
  )
}
