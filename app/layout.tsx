import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Cursor from '@/components/cursor'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'LuxFuel — In-Orbit Validation Layer',
  description: 'An open API for in-orbit refueling verification. Independent transaction records for satellite owners, insurers, and finance institutions.',
  keywords: 'in-orbit refueling, propellant transfer, LVx Protocol, orbital servicing, satellite refueling, OSAM, ISAM, validation layer, transaction receipt, space infrastructure',
  authors: [{ name: 'LuxFuel' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luxfuel.space/',
    siteName: 'LuxFuel',
    title: 'LuxFuel — In-Orbit Validation Layer',
    description: 'An open API for in-orbit refueling verification. Independent transaction records for satellite owners, insurers, and finance institutions.',
    images: [{
      url: 'https://luxfuel.space/og-image.svg',
      width: 1200,
      height: 630,
      alt: 'LuxFuel — Every in-orbit refueling transfer needs a transaction receipt.',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LuxFuel — In-Orbit Validation Layer',
    description: 'An open API for in-orbit refueling verification. Independent transaction records for satellite owners, insurers, and finance institutions.',
    images: ['https://luxfuel.space/og-image.svg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0e16',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LuxFuel",
              "url": "https://luxfuel.space/",
              "logo": "https://luxfuel.space/og-image.svg",
              "description": "LuxFuel develops the LVx Protocol — an open API issuing independent, verifiable receipts for propellant transfers in orbit.",
              "foundingDate": "2026",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Albuquerque",
                "addressRegion": "NM",
                "addressCountry": "US"
              },
              "knowsAbout": [
                "in-orbit refueling",
                "propellant transfer verification",
                "orbital servicing",
                "transaction validation",
                "space infrastructure"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased text-white bg-black">
        <Cursor />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
