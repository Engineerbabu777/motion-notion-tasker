import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Motion-Clone',
  description: 'The note taking application.',
  icons:{
    icon:[{
      media:"(prefer-color-scheme: light)",
      url:"/logo.svg",
      href:"/logo.svg"
    },{
      media:"(prefer-color-scheme:dark)",
      url:"/logo-dark.svg",
      href:"/logo-dark.svg",
    }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
