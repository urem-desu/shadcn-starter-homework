import { useState } from "react"
import { LOTTO_TYPES, LATEST_RESULTS, type LottoType } from "../data"
import { Icon, Swatch, NumberRow } from "./ui"

function ResultRow({ l, r, last }: { l: LottoType; r: typeof LATEST_RESULTS[string]; last: boolean }) {
  const [hover, setHover] = useState(false)
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "grid", gridTemplateColumns: "minmax(170px, 1fr) minmax(0, 2.4fr) minmax(140px, auto) 28px", alignItems: "center", gap: "var(--gap-4)", padding: "18px 20px", borderBottom: last ? "none" : "1px solid var(--border)", background: hover ? "var(--muted)" : "transparent", transition: "background .15s", cursor: "default" }}
      className="result-row">
      <div style={{ display: "flex", alignItems: "center", gap: "var(--gap-3)", minWidth: 0 }}>
        <Swatch color={l.swatch} />
        <div style={{ display: "flex", flexDirection: "column", minWidth: 0, lineHeight: 1.15 }}>
          <span style={{ fontWeight: 600, fontSize: 14 }}>{l.name}</span>
          <span style={{ fontSize: 11.5, color: "var(--fg-mute)", marginTop: 2 }}>#{r.drawNo} · {r.date}</span>
        </div>
      </div>
      <div style={{ minWidth: 0 }}>
        <NumberRow numbers={r.numbers} supps={r.supps || []} powerball={r.powerball ?? null} size={32} stagger={0} animate={false} />
      </div>
      <div style={{ textAlign: "right", lineHeight: 1.2 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--fg-mute)", letterSpacing: ".06em", textTransform: "uppercase" }}>Div 1</div>
        <div style={{ fontSize: 13, fontWeight: 600, marginTop: 3, color: "var(--foreground)" }}>{r.divOne}</div>
      </div>
      <span style={{ color: hover ? "var(--foreground)" : "var(--fg-mute)", transition: "color .15s, transform .2s", transform: hover ? "translateX(2px)" : "none" }}>
        <Icon name="chevron-right" size={16} />
      </span>
      <style>{`
        @media (max-width: 760px) {
          .result-row { grid-template-columns: 1fr !important; gap: 12px !important; }
          .result-row > :nth-child(3) { text-align: left !important; }
          .result-row > :nth-child(4) { display: none !important; }
        }
      `}</style>
    </div>
  )
}

export function LatestResults() {
  return (
    <section style={{ padding: "var(--py-15) var(--px-6) var(--p-6)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--gap-4)", marginBottom: 22, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "var(--gap-1-5)", fontSize: 11.5, fontWeight: 600, color: "var(--fg-mute)", letterSpacing: ".08em", textTransform: "uppercase" }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--mint)", boxShadow: "0 0 8px rgba(203,213,225,.4)" }} /> Latest results
            </div>
            <h2 style={{ margin: "8px 0 0", fontSize: "clamp(26px, 3vw, 34px)", fontWeight: 700, letterSpacing: "-.025em" }}>Recent draws</h2>
          </div>
          <a href="#" style={{ fontSize: 13, fontWeight: 600, color: "var(--muted-foreground)", display: "inline-flex", alignItems: "center", gap: "var(--gap-1-5)", padding: "8px 12px", border: "1px solid var(--border)", borderRadius: 10 }}>
            Full results history <Icon name="arrow-right" size={13} />
          </a>
        </div>
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden" }}>
          {LOTTO_TYPES.map((l, i) => <ResultRow key={l.id} l={l} r={LATEST_RESULTS[l.id]} last={i === LOTTO_TYPES.length - 1} />)}
        </div>
      </div>
    </section>
  )
}
