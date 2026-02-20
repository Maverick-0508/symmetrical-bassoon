import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Milk House - Sunnyside Dairy',
  description: 'Fresh produce, milk, yogurt, and dairy products from our farm to your table',
  keywords: 'dairy, milk, yogurt, fresh produce, farm',
  openGraph: {
    title: 'The Milk House - Sunnyside Dairy',
    description: 'Fresh produce, milk, yogurt, and dairy products from our farm to your table',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
