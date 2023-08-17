import Header from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import ContextProvider  from '@/utils/ThemeContext'

// initializing the fonts here
const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '600', '800'],
  display: 'swap',
  variable: '--font-nunito-sans',
})

// initializing the metadata here
export const metadata: Metadata = {
  title: 'Home || REST Countries API',
  description: 'A website build with REST countries API where user can learn about all the countries in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nunito_sans.variable}`}>
      <ContextProvider> 
        <Header/>
        {children}
      </ContextProvider>
    </html>
  )
}
