import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { DisclaimerBanner } from "@/components/disclaimer-banner"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactButtons } from "@/components/contact-buttons"
import { PhoneButton } from "@/components/phone-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Strike Point Trading - Professional Trading Solutions",
  description: "Empowering Traders and Investors with market insights and professional trading solutions",
  keywords: "trading, Strike Point Trading, stock market, investment, market analysis, trading tips, professional trading solutions",
  authors: [{ name: "Strike Point Trading" }],
  creator: "Strike Point Trading",
  publisher: "Strike Point Trading",
  robots: "index, follow",
  openGraph: {
    title: "Strike Point Trading - Professional Trading Solutions",
    description: "Empowering Traders and Investors with market insights and professional trading solutions",
    url: "https://strikepointtrading.com",
    siteName: "Strike Point Trading",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/images/Fevicon.png", type: "image/png" }
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/Fevicon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <DisclaimerBanner />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <PhoneButton />
        <ContactButtons />
      </body>
    </html>
  )
}
