import './global.css'
import { Inter } from 'next/font/google'
import PokeHeader from '../components/PokeHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Poke-App',
  description: 'Projeto criado para processo seletivo da INB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PokeHeader />
        <div className='container mx-auto' >
          {children}
        </div>
      </body>
    </html>
  )
}
