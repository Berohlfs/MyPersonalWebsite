// CSS
import "./globals.css"
// Next
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
// Components
import { ThemeProvider } from "@/app/components/theme-provider"

const montserrat = Montserrat({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Bernardo Rohlfs",
  description: "Software engineer",
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
