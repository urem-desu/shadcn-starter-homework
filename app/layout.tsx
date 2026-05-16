import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "shadcn/ui + Figma starter",
  description: "Design system starter — shadcn/ui + Tailwind v4 + Figma MCP",
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
