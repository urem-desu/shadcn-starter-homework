import { useState, useEffect, useRef, useMemo } from "react"
import { LOTTO_TYPES, LATEST_RESULTS, type LottoType } from "../data"
import { Icon, LottoSelect, DatePicker, NumberRow } from "./ui"

function ResultPanel({ lotto, results, size }: { lotto: LottoType; results: typeof LATEST_RESULTS[string]; size: number }) {
  return (
    <div style={{ marginTop: 18, padding: "18px 18px", borderRadius: 16, background: "var(--muted)", border: "1px solid var(--border-strong)", animation: "pop-in .35s ease-out" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--gap-3)", flexWrap: "wrap", marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 11.5, fontWeight: 600, color: "var(--fg-mute)", letterSpacing: ".06em", textTransform: "uppercase" }}>Winning numbers</div>
          <div style={{ fontSize: 15, fontWeight: 600, marginTop: 4 }}>{lotto.name} · Draw #{results.drawNo}</div>
          <div style={{ fontSize: 12.5, color: "var(--fg-mute)", marginTop: 2 }}>{results.date}</div>
        </div>
        <div style={{ padding: "6px 10px", borderRadius: 8, background: "rgba(203,213,225,.08)", color: "var(--mint)", fontSize: 11.5, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "var(--gap-1-5)" }}>
          <Icon name="check" size={12} color="var(--mint)" /> Official result
        </div>
      </div>
      <NumberRow numbers={results.numbers} supps={results.supps || []} powerball={results.powerball ?? null} size={size} />
      <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--gap-3)", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--gap-2)", color: "var(--muted-foreground)", fontSize: 13 }}>
          <Icon name="trophy" size={14} color="var(--primary)" />
          Division 1 · {results.divOne}
        </div>
        <a href="#" style={{ fontSize: 12.5, fontWeight: 600, color: "var(--muted-foreground)", display: "inline-flex", alignItems: "center", gap: "var(--gap-1)" }}>
          View all divisions <Icon name="arrow-right" size={12} color="var(--muted-foreground)" />
        </a>
      </div>
    </div>
  )
}

export function Hero() {
  const today = useMemo(() => { const t = new Date(); t.setHours(0, 0, 0, 0); return t }, [])
  const [lottoId, setLottoId] = useState("oz")
  const [date, setDate] = useState<Date | null>(today)
  const [stage, setStage] = useState<"idle" | "loading" | "results">("idle")
  const [shake, setShake] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const lotto = LOTTO_TYPES.find(l => l.id === lottoId)!
  const results = LATEST_RESULTS[lottoId]

  const onCheck = () => {
    if (!lotto || !date) { setShake(true); setTimeout(() => setShake(false), 400); return }
    setStage("loading")
    setTimeout(() => setStage("results"), 850)
  }

  useEffect(() => { if (stage === "results") setStage("idle") }, [lottoId, date])

  return (
    <section style={{ position: "relative", padding: "var(--py-14) var(--px-6) var(--py-20)" }}>
<div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--gap-2)", padding: "6px 12px", borderRadius: 999, background: "var(--muted)", border: "1px solid var(--border)", fontSize: 12, fontWeight: 500, color: "var(--muted-foreground)" }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--primary)", boxShadow: "0 0 8px rgba(203,213,225,.4)" }} />
            Informational tool · not a betting site
          </span>
        </div>

        <h1 style={{ margin: 0, textAlign: "center", fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 700, letterSpacing: "-.035em", lineHeight: 1.02, color: "var(--foreground)" }}>
          Quickly check<br />Australian{" "}
          <span style={{ color: "var(--primary)" }}>lotto results</span>.
        </h1>

        <p style={{ textAlign: "center", maxWidth: 560, margin: "22px auto 0", color: "var(--muted-foreground)", fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.55, fontWeight: 400 }}>
          Pick a lotto, choose a draw date, and see the winning numbers — clean, fast,
          and free. Lottocheck is purely informational; no tickets, no betting.
        </p>

        <div id="checker" ref={cardRef} className={shake ? "shake" : ""}
          style={{ marginTop: "var(--py-12)", maxWidth: 760, marginLeft: "auto", marginRight: "auto", background: "linear-gradient(180deg, rgba(255,255,255,.055), rgba(255,255,255,.025))", border: "1px solid var(--border-strong)", borderRadius: 24, padding: "clamp(20px, 3vw, 28px)", boxShadow: "0 30px 80px -40px rgba(0,0,0,.7), inset 0 1px 0 rgba(255,255,255,.06)", backdropFilter: "blur(20px) saturate(140%)", WebkitBackdropFilter: "blur(20px) saturate(140%)", position: "relative" }}>
          <div aria-hidden="true" style={{ position: "absolute", top: -1, left: -1, right: -1, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,.3), transparent)", borderRadius: "24px 24px 0 0" }} />

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, gap: "var(--gap-3)", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--gap-2-5)" }}>
              <span style={{ width: 30, height: 30, borderRadius: 9, background: "var(--input)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="search" size={15} color="var(--muted-foreground)" />
              </span>
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                <span style={{ fontWeight: 600, fontSize: 15 }}>Results checker</span>
                <span style={{ fontSize: 11.5, color: "var(--fg-mute)", marginTop: 3 }}>Find winning numbers in seconds</span>
              </div>
            </div>
            <span style={{ fontSize: 11.5, color: "var(--fg-mute)", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "var(--gap-1-5)" }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--mint)", boxShadow: "0 0 8px rgba(203,213,225,.4)" }} />
              Updated 2 min ago
            </span>
          </div>

          <div className="checker-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: "var(--gap-2-5)", alignItems: "stretch" }}>
            <LottoSelect value={lottoId} onChange={setLottoId} />
            <DatePicker value={date} onChange={setDate} lotto={lotto} />
            <button type="button" onClick={onCheck} className="focus-ring"
              style={{ padding: "0 22px", borderRadius: 14, border: 0, cursor: "default", fontWeight: 600, fontSize: 15, color: "var(--primary-foreground)", background: "var(--primary)", boxShadow: "0 10px 28px -12px rgba(203,213,225,.4), inset 0 1px 0 rgba(255,255,255,.45), inset 0 -2px 0 rgba(0,0,0,.10)", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "var(--gap-2)", transition: "transform .15s, box-shadow .15s, background .15s", whiteSpace: "nowrap" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--primary-hi)"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 16px 34px -12px rgba(203,213,225,.55), inset 0 1px 0 rgba(255,255,255,.45), inset 0 -2px 0 rgba(0,0,0,.10)" }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 28px -12px rgba(203,213,225,.4), inset 0 1px 0 rgba(255,255,255,.45), inset 0 -2px 0 rgba(0,0,0,.10)" }}>
              {stage === "loading" ? (
                <><span style={{ width: 14, height: 14, border: "2px solid rgba(23,23,23,.3)", borderTopColor: "#171717", borderRadius: "50%", animation: "spin-slow .8s linear infinite" }} />Checking…</>
              ) : (
                <>Check results <Icon name="arrow-right" size={16} color="#171717" /></>
              )}
            </button>
          </div>

          {stage === "results" && <ResultPanel lotto={lotto} results={results} size={42} />}

          {stage === "idle" && (
            <div style={{ marginTop: 16, padding: "12px 14px", borderRadius: 12, background: "var(--muted)", border: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "var(--gap-2-5)", color: "var(--fg-mute)", fontSize: 12.5 }}>
              <Icon name="info" size={14} color="var(--fg-mute)" />
              Latest {lotto.name} draw is <strong style={{ color: "var(--muted-foreground)", fontWeight: 600 }}>&nbsp;Draw #{results.drawNo} · {results.date}</strong>.
            </div>
          )}
        </div>

        <div style={{ textAlign: "center", marginTop: 18, fontSize: 12, color: "var(--fg-mute)" }}>
          Most checked today:{" "}
          <a href="#quick" style={{ color: "var(--muted-foreground)", fontWeight: 500 }}>Powerball</a>
          {" · "}<a href="#quick" style={{ color: "var(--muted-foreground)", fontWeight: 500 }}>Oz Lotto</a>
          {" · "}<a href="#quick" style={{ color: "var(--muted-foreground)", fontWeight: 500 }}>Saturday Lotto</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .checker-grid { grid-template-columns: 1fr !important; }
          .checker-grid > button { padding: 14px 22px !important; }
          .nav-links { display: none !important; }
        }
      `}</style>
    </section>
  )
}
