import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Acme Inc — Turn Traffic Into Decisions",
  description: "Track visitor behavior, monitor performance, and uncover growth opportunities with real-time website analytics.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
