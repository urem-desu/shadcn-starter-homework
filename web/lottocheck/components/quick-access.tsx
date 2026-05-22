import { useState } from "react"
import { LOTTO_TYPES, type LottoType } from "../data"
import { Icon, Swatch } from "./ui"

function LottoCard({ l }: { l: LottoType }) {
  const [hover, setHover] = useState(false)
  return (
    <a href="#checker" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: "relative", display: "flex", flexDirection: "column", padding: "18px 18px 16px", background: hover ? "var(--accent)" : "var(--muted)", border: "1px solid " + (hover ? "var(--border-strong)" : "var(--border)"), borderRadius: 18, overflow: "hidden", transition: "transform .2s, border-color .2s, background .2s", transform: hover ? "translateY(-2px)" : "translateY(0)", cursor: "default" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--gap-3)" }}>
        <Swatch color={l.swatch} size={28} />
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span style={{ fontWeight: 600, fontSize: 15 }}>{l.name}</span>
          <span style={{ fontSize: 11.5, color: "var(--fg-mute)", marginTop: 4 }}>{l.drawDay} draw</span>
        </div>
      </div>
      <div style={{ marginTop: 18 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--fg-mute)", letterSpacing: ".06em", textTransform: "uppercase" }}>Est. jackpot</div>
        <div style={{ marginTop: 4, fontSize: 24, fontWeight: 700, letterSpacing: "-.02em", color: "var(--foreground)", fontVariantNumeric: "tabular-nums" }}>{l.jackpot}</div>
      </div>
      <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 12, color: "var(--muted-foreground)", display: "inline-flex", alignItems: "center", gap: "var(--gap-1-5)" }}>
          <Icon name="calendar" size={12} color="var(--fg-mute)" />{l.nextDraw}
        </span>
        <span style={{ fontSize: 12, fontWeight: 600, color: hover ? "var(--foreground)" : "var(--muted-foreground)", display: "inline-flex", alignItems: "center", gap: "var(--gap-1)", transition: "color .2s" }}>
          Check <Icon name="arrow-right" size={12} />
        </span>
      </div>
    </a>
  )
}

export function QuickAccess() {
  return (
    <section id="quick" style={{ padding: "var(--py-12) var(--px-6) var(--p-6)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--gap-4)", marginBottom: 22, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "var(--gap-1-5)", fontSize: 11.5, fontWeight: 600, color: "var(--fg-mute)", letterSpacing: ".08em", textTransform: "uppercase" }}>
              <Icon name="lightning" size={12} color="var(--primary)" /> Quick access
            </div>
            <h2 style={{ margin: "8px 0 0", fontSize: "clamp(26px, 3vw, 34px)", fontWeight: 700, letterSpacing: "-.025em" }}>Popular lotto types</h2>
          </div>
          <a href="#" style={{ fontSize: 13, fontWeight: 600, color: "var(--muted-foreground)", display: "inline-flex", alignItems: "center", gap: "var(--gap-1-5)", padding: "8px 12px", border: "1px solid var(--border)", borderRadius: 10 }}>
            See all 12 lottos <Icon name="arrow-right" size={13} />
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "var(--gap-3-5)" }}>
          {LOTTO_TYPES.map(l => <LottoCard key={l.id} l={l} />)}
        </div>
      </div>
    </section>
  )
}
