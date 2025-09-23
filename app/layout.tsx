import type React from "react"
import type {Metadata} from "next"
import {Analytics} from "@vercel/analytics/next"
import {ThemeProvider} from "@/components/theme-provider"
import {Suspense} from "react"
import "./globals.css"
import {K2D} from "next/font/google";

const k2d = K2D({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-k2d",
});

export const metadata: Metadata = {
  title: "Sona - Empoderando a las Mujeres",
  description: 'Organización dedicada a reducir la violencia de género y proteger los derechos de la mujer. Sona significa "mujer" en tsáfiqui.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
    <body
      className={`${k2d.className} antialiased`}
    >
    <Suspense fallback={null}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </Suspense>
    <Analytics/>
    </body>
    </html>
  )
}
