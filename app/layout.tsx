import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FinTech - Empowering Sierra Leone, Digitally",
  description: "Your digital wallet for Sierra Leone. Send money, pay bills, and manage your finances with ease.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-md mx-auto bg-white dark:bg-slate-900 min-h-screen">{children}</div>
      </body>
    </html>
  )
}
