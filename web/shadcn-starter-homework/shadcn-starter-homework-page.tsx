"use client"

import { ChevronDown } from "lucide-react"
import { Container } from "./components/container"
import { LogoStrip } from "./components/logo-strip"
import { CaseStudies } from "./components/case-studies"
import { Features } from "./components/features"
import { CustomizedCard } from "./components/customized-card"
import { Faq } from "./components/faq"
import { Cta } from "./components/cta"
import { Footer } from "./components/footer"

const navLinks = [
  { label: "Products", hasChevron: true },
  { label: "Solutions", hasChevron: true },
  { label: "Pricing", hasChevron: true },
  { label: "Resources", hasChevron: true },
  { label: "Contact", hasChevron: false },
]

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-[1440px] mx-auto px-8 h-[72px] flex items-center gap-6">
        <div className="flex flex-1 items-center gap-2 min-w-0">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <circle cx="10" cy="10" r="9" stroke="#0a0a0a" strokeWidth="1.5" />
            <circle cx="10" cy="10" r="4" fill="#0a0a0a" />
          </svg>
          <span className="font-semibold text-base text-sidebar-accent-foreground whitespace-nowrap">
            Acme Inc
          </span>
        </div>

        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {link.label}
              {link.hasChevron && (
                <ChevronDown className="size-3 shrink-0" strokeWidth={2} />
              )}
            </button>
          ))}
        </nav>

        <button className="shrink-0 flex items-center justify-center h-9 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg shadow-xs hover:bg-primary/90 transition-colors">
          Get a demo
        </button>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="bg-background pt-[72px]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center py-20 px-8">
        <div className="flex flex-col items-center gap-4 w-full max-w-[800px] text-center text-foreground mb-8">
          <h1 className="text-7xl font-medium leading-[72px] tracking-normal w-full">
            Turn Traffic Into Decisions
          </h1>
          <p className="text-lg font-normal leading-7 tracking-normal w-full text-foreground">
            Track visitor behavior, monitor performance, and uncover growth
            opportunities with real-time website analytics designed for modern
            teams.
          </p>
        </div>
        <div className="flex items-center gap-4 mb-12">
          <button className="flex items-center justify-center h-9 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg shadow-xs hover:bg-primary/90 transition-colors">
            Get a demo
          </button>
          <button className="flex items-center justify-center h-9 px-4 py-2 bg-background text-foreground text-sm font-medium rounded-lg border border-border shadow-xs hover:bg-accent hover:text-accent-foreground transition-colors">
            Learn more
          </button>
        </div>
        <Container />
      </div>
    </section>
  )
}

export function ShadcnStarterHomeworkPage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <LogoStrip />
      <CaseStudies />
      <Features />
      <CustomizedCard />
      <Faq />
      <Cta />
      <Footer />
    </main>
  )
}
