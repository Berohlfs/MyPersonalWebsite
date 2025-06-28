// Next
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
// CSS
import "./globals.css"
// React
import { ReactNode } from "react"

const montserrat = Montserrat({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Bernardo Rohlfs",
  description: "Software engineer",
}

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
