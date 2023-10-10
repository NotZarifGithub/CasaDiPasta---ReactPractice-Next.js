import Navbar from '@/components/common/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/common/Footer'
import head from 'next/head'

const monstserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Casa Di Pasta',
  description: `Casa Di Pasta is a restaurant in the heart of the city of Rome, Italy. We offer a variety of dishes, from pasta to pizza, and even desserts.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={monstserrat.className}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
