import { useState, useEffect } from "react"
import { Logo, Icon } from "./ui"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 20,
      backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
      background: scrolled ? "rgba(10,10,10,.80)" : "transparent",
      borderBottom: "1px solid var(--border)",
      transition: "all .2s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "var(--py-4) var(--px-6)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--gap-4)" }}>
        <Logo />
        <nav style={{ display: "flex", alignItems: "center", gap: "var(--gap-1-5)" }} className="nav-links">
          {["Results", "Lotto types", "Past draws", "About"].map(l => (
            <a key={l} href="#" style={{ padding: "8px 12px", color: "var(--muted-foreground)", fontSize: 13.5, fontWeight: 500, borderRadius: 8, transition: "color .15s, background .15s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--foreground)"; e.currentTarget.style.background = "rgba(255,255,255,.04)" }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--muted-foreground)"; e.currentTarget.style.background = "transparent" }}
            >{l}</a>
          ))}
        </nav>
        <a href="#checker" style={{ padding: "9px 16px", borderRadius: 10, fontSize: 13.5, fontWeight: 600, background: "rgba(255,255,255,.06)", border: "1px solid var(--border-strong)", display: "inline-flex", alignItems: "center", gap: "var(--gap-1-5)" }}>
          Check results <Icon name="arrow-right" size={14} />
        </a>
      </div>
    </header>
  )
}
