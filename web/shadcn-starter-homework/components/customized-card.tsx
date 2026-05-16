"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

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

export function CustomizedCard() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly")

  return (
    <section className="bg-secondary">
      <div className="max-w-[1440px] mx-auto h-[736px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-8 py-20 w-full max-w-[1280px] px-8">
          <div className="flex flex-col items-center gap-4 w-full max-w-[800px] text-center text-foreground">
            <h2 className="text-5xl font-medium leading-[48px] tracking-normal w-full">
              Pricing
            </h2>
            <p className="text-lg font-normal leading-7 tracking-normal w-full text-foreground">
              Choose the perfect plan for your business
            </p>
          </div>

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

          <div className="flex items-center gap-10">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col gap-6 p-6 w-80 bg-card border border-border rounded-xl shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)]"
              >
                <div className="flex flex-col gap-4 pb-6 border-b border-border text-card-foreground">
                  <p className="text-lg font-medium leading-7">{plan.name}</p>
                  <p className="text-5xl font-semibold leading-[48px]">
                    {plan.price[billing]}
                  </p>
                </div>

                <div className="flex flex-col gap-0 w-full">
                  <div className="flex items-center pb-2">
                    <p className="text-sm font-medium text-muted-foreground">Includes:</p>
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
