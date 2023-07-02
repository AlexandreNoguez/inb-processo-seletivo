import './global.css'
import { Inter } from 'next/font/google'
import PokeHeader from '../components/PokeHeader'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Poke-App',
  description: 'Projeto criado para processo seletivo da INB',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <PokeHeader />
        <div className='container mx-auto' >
          {children}
        </div>
      </body>
    </html>
  )
}
