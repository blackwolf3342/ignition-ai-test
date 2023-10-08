import Header from '@/components/Header/Header'
import './globals.scss'
import type { Metadata } from 'next'
import { Providers } from '@/components/Providers'

export const metadata: Metadata = {
  title: 'Ignition AI',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="wrapper">
          <Header></Header>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
