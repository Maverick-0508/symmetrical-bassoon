import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#462e1c',
}

export const metadata: Metadata = {
  title: 'The Milk House - Sunnyside Dairy',
  description: 'Fresh produce, milk, yogurt, and dairy products from our farm to your table',
  keywords: 'dairy, milk, yogurt, fresh produce, greens, produce, farm, Kiambu, Kenya, organic',
  authors: [{ name: 'Sunnyside Dairy' }],
  openGraph: {
    title: 'The Milk House - Sunnyside Dairy',
    description: 'Fresh produce, milk, yogurt, and dairy products from our farm to your table',
    type: 'website',
    url: 'https://sunnysidedairy.com',
    siteName: 'The Milk House - Sunnyside Dairy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Milk House - Sunnyside Dairy',
    description: 'Fresh produce, milk, yogurt, and dairy products from our farm to your table',
  },
  robots: {
    index: true,
    follow: true,
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
