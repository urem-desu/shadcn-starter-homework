"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Products", hasChevron: true },
  { label: "Solutions", hasChevron: true },
  { label: "Pricing", hasChevron: true },
  { label: "Resources", hasChevron: true },
  { label: "Contact", hasChevron: false },
]

const plans = [
  {
    name: "Demo",
    price: { monthly: "Free", annual: "Free" },
    features: ["List item", "List item", "List item"],
    cta: "Get Demo",
  },
  {
    name: "Pro",
    price: { monthly: "$20", annual: "$16" },
    features: ["List item", "List item", "List item"],
    cta: "Get Pro",
  },
  {
    name: "Scale",
    price: { monthly: "$100", annual: "$80" },
    features: ["List item", "List item", "List item"],
    cta: "Get Scale",
  },
]

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-[1440px] mx-auto px-8 h-[72px] flex items-center gap-6">
        {/* Logo */}
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

        {/* Navigation */}
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

        {/* CTA */}
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
      <div className="max-w-[1440px] mx-auto h-[736px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-8 py-20 w-full max-w-[1280px] px-8">
          <div className="flex flex-col items-center gap-4 w-full max-w-[800px] text-center text-foreground">
            <h1 className="text-7xl font-medium leading-[72px] tracking-normal w-full">
              Turn Traffic Into Decisions
            </h1>
            <p className="text-lg font-normal leading-7 tracking-normal w-full text-foreground">
              Track visitor behavior, monitor performance, and uncover growth
              opportunities with real-time website analytics designed for modern
              teams.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center h-9 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg shadow-xs hover:bg-primary/90 transition-colors">
              Get a demo
            </button>
            <button className="flex items-center justify-center h-9 px-4 py-2 bg-background text-foreground text-sm font-medium rounded-lg border border-border shadow-xs hover:bg-accent hover:text-accent-foreground transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly")

  return (
    <section className="bg-secondary">
      <div className="max-w-[1440px] mx-auto h-[736px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-8 py-20 w-full max-w-[1280px] px-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 w-full max-w-[800px] text-center text-foreground">
            <h2 className="text-5xl font-medium leading-[48px] tracking-normal w-full">
              Pricing
            </h2>
            <p className="text-lg font-normal leading-7 tracking-normal w-full text-foreground">
              Choose the perfect plan for your business
            </p>
          </div>

          {/* Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setBilling("monthly")}
              className={cn(
                "flex items-center justify-center h-9 px-2 rounded-md text-sm font-medium text-card-foreground tracking-normal transition-colors",
                billing === "monthly" ? "bg-background shadow-xs" : "hover:bg-accent"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={cn(
                "flex items-center justify-center h-9 px-2 rounded-md text-sm font-medium text-card-foreground tracking-normal transition-colors",
                billing === "annual" ? "bg-background shadow-xs" : "hover:bg-accent"
              )}
            >
              Annual
            </button>
          </div>

          {/* Cards */}
          <div className="flex items-center gap-10">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col gap-6 p-6 w-80 bg-card border border-border rounded-xl shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)]"
              >
                {/* Plan header */}
                <div className="flex flex-col gap-4 pb-6 border-b border-border text-card-foreground">
                  <p className="text-lg font-medium leading-7">{plan.name}</p>
                  <p className="text-5xl font-semibold leading-[48px]">
                    {plan.price[billing]}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-0 w-full">
                  <div className="flex items-center pb-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      Includes:
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <Check className="size-6 shrink-0 text-foreground" strokeWidth={2} />
                        <p className="text-base font-normal text-card-foreground leading-6">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full flex items-center justify-center h-9 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg shadow-xs hover:bg-primary/90 transition-colors">
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <main>
      <Header />
      <HeroSection />
      <PricingSection />
    </main>
  )
}
