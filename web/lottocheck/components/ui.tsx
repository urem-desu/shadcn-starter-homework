import { useState, useEffect, useRef, useMemo } from "react"
import { LOTTO_TYPES, ballClassFor, type LottoType } from "../data"

// ─── Ball ─────────────────────────────────────────────────────────────────────

interface BallProps {
  n: number
  variant?: string
  size?: number
  bonus?: boolean
  delay?: number
  label?: string
  animate?: boolean
}

export function Ball({ n, variant = "ball-sky", size = 44, bonus = false, delay = 0, label, animate = true }: BallProps) {
  const style: React.CSSProperties = { width: size, height: size, fontSize: Math.max(12, Math.round(size * 0.36)) }
  return (
    <span
      className={`ball ${variant} ${bonus ? "bonus" : ""}`}
      style={animate ? { ...style, animation: `pop-in .55s cubic-bezier(.2,1.1,.4,1) ${delay}ms both` } : style}
      aria-label={label || `Number ${n}`}
    >{n}</span>
  )
}

// ─── Swatch ───────────────────────────────────────────────────────────────────

export function Swatch({ color, size = 32 }: { color: string; size?: number }) {
  return (
    <span style={{
      width: size, height: size, borderRadius: Math.round(size * 0.32), position: "relative",
      background: color,
      boxShadow: "inset 0 1px 0 rgba(255,255,255,.4), inset 0 -2px 4px rgba(0,0,0,.18), 0 0 0 1px rgba(255,255,255,.06)",
      flex: "0 0 auto", display: "inline-block",
    }}>
      <span style={{
        position: "absolute", inset: 0, borderRadius: Math.round(size * 0.32),
        background: "radial-gradient(circle at 30% 25%, rgba(255,255,255,.4), transparent 55%)",
      }} />
    </span>
  )
}

// ─── Logo ─────────────────────────────────────────────────────────────────────

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--gap-2-5)" }}>
      <div style={{
        width: 32, height: 32, borderRadius: 9, position: "relative",
        background: "var(--primary)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,.45), inset 0 -2px 4px rgba(0,0,0,.15), 0 0 0 1px rgba(255,255,255,.06)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontWeight: 800, color: "var(--primary-foreground)", fontSize: 15, letterSpacing: "-.02em",
      }}>
        <span style={{ position: "absolute", inset: 0, borderRadius: 9, background: "radial-gradient(circle at 30% 25%, rgba(255,255,255,.45), transparent 55%)" }} />
        <span style={{ position: "relative" }}>L</span>
      </div>
      {!compact && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-.02em" }}>Lottocheck</span>
          <span style={{ fontWeight: 500, fontSize: 10.5, color: "var(--fg-mute)", marginTop: 3, letterSpacing: ".02em" }}>Australian results · informational</span>
        </div>
      )}
    </div>
  )
}

// ─── Icon ─────────────────────────────────────────────────────────────────────

export type IconName =
  | "chevron-down" | "chevron-right" | "chevron-left"
  | "calendar" | "search" | "sparkle" | "check"
  | "info" | "trophy" | "arrow-right" | "lightning"

export function Icon({ name, size = 16, color = "currentColor" }: { name: IconName; size?: number; color?: string }) {
  const s = size
  const stroke: React.SVGProps<SVGSVGElement> = { stroke: color, strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }
  switch (name) {
    case "chevron-down":  return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><polyline points="6 9 12 15 18 9"/></svg>
    case "chevron-right": return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><polyline points="9 6 15 12 9 18"/></svg>
    case "chevron-left":  return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><polyline points="15 6 9 12 15 18"/></svg>
    case "calendar":      return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><rect x="3" y="5" width="18" height="16" rx="3"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/></svg>
    case "search":        return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><circle cx="11" cy="11" r="7"/><line x1="20" y1="20" x2="16.5" y2="16.5"/></svg>
    case "sparkle":       return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l2.8 2.8M15.7 15.7l2.8 2.8M5.5 18.5l2.8-2.8M15.7 8.3l2.8-2.8"/></svg>
    case "check":         return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><polyline points="20 6 9 17 4 12"/></svg>
    case "info":          return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16"/><circle cx="12" cy="8" r=".6" fill={color}/></svg>
    case "trophy":        return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><path d="M8 4h8v5a4 4 0 0 1-8 0V4z"/><path d="M16 6h3v2a3 3 0 0 1-3 3"/><path d="M8 6H5v2a3 3 0 0 0 3 3"/><path d="M10 14h4v3h-4z"/><path d="M8 20h8"/></svg>
    case "arrow-right":   return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>
    case "lightning":     return <svg width={s} height={s} viewBox="0 0 24 24" fill={color} stroke="none"><polygon points="13 2 4 14 11 14 9 22 20 9 13 9 13 2"/></svg>
    default:              return null
  }
}

// ─── LottoSelect ──────────────────────────────────────────────────────────────

export function LottoSelect({ value, onChange }: { value: string; onChange: (id: string) => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const selected = LOTTO_TYPES.find(l => l.id === value)!

  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    document.addEventListener("mousedown", onDoc)
    return () => document.removeEventListener("mousedown", onDoc)
  }, [])

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button type="button" onClick={() => setOpen(o => !o)} className="focus-ring"
        style={{ width: "100%", display: "flex", alignItems: "center", gap: "var(--gap-3)", padding: "var(--py-3-5) var(--px-3-5)", background: "var(--input)", border: "1px solid var(--border)", borderRadius: 14, color: "var(--foreground)", cursor: "default", textAlign: "left", transition: "border-color .15s" }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--border-strong)")}
        onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
        aria-haspopup="listbox" aria-expanded={open}>
        <Swatch color={selected.swatch} />
        <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0, lineHeight: 1.1 }}>
          <span style={{ fontWeight: 600, fontSize: 15 }}>{selected.name}</span>
          <span style={{ fontSize: 12, color: "var(--fg-mute)", marginTop: 4 }}>{selected.drawDay} draw · {selected.nums} numbers</span>
        </div>
        <span style={{ color: "var(--muted-foreground)", transform: open ? "rotate(180deg)" : "none", transition: "transform .15s" }}>
          <Icon name="chevron-down" size={18} />
        </span>
      </button>

      {open && (
        <div role="listbox" style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, right: 0, zIndex: 30, background: "var(--popover)", border: "1px solid var(--border-strong)", borderRadius: 14, boxShadow: "0 24px 60px -20px rgba(0,0,0,.7)", backdropFilter: "blur(20px) saturate(160%)", WebkitBackdropFilter: "blur(20px) saturate(160%)", padding: 6, maxHeight: 340, overflow: "auto" }}>
          {LOTTO_TYPES.map(l => {
            const isSel = l.id === value
            return (
              <button key={l.id} type="button" role="option" aria-selected={isSel}
                onClick={() => { onChange(l.id); setOpen(false) }}
                style={{ width: "100%", display: "flex", alignItems: "center", gap: "var(--gap-3)", padding: "10px 10px", border: 0, borderRadius: 10, background: isSel ? "var(--accent)" : "transparent", color: "var(--foreground)", textAlign: "left", cursor: "default" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.background = isSel ? "var(--accent)" : "transparent")}>
                <Swatch color={l.swatch} />
                <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0, lineHeight: 1.15 }}>
                  <span style={{ fontWeight: 600, fontSize: 14 }}>{l.name}</span>
                  <span style={{ fontSize: 11.5, color: "var(--fg-mute)", marginTop: 2 }}>{l.drawDay} · {l.nums} numbers</span>
                </div>
                {isSel && <span style={{ color: "var(--mint)" }}><Icon name="check" size={16} color="var(--mint)" /></span>}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ─── DatePicker ───────────────────────────────────────────────────────────────

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const WEEKDAYS = ["M","T","W","T","F","S","S"]

function formatDate(d: Date): string {
  return `${d.getDate()} ${MONTHS[d.getMonth()].slice(0, 3)} ${d.getFullYear()}`
}

const calBtnStyle: React.CSSProperties = {
  width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center",
  border: "1px solid var(--border)", borderRadius: 8, background: "transparent", color: "var(--foreground)", cursor: "default",
}

export function DatePicker({ value, onChange, lotto }: { value: Date | null; onChange: (d: Date) => void; lotto: LottoType }) {
  const [open, setOpen] = useState(false)
  const today = useMemo(() => { const t = new Date(); t.setHours(0, 0, 0, 0); return t }, [])
  const [view, setView] = useState(() => value ? new Date(value.getFullYear(), value.getMonth(), 1) : new Date(today.getFullYear(), today.getMonth(), 1))
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    document.addEventListener("mousedown", onDoc)
    return () => document.removeEventListener("mousedown", onDoc)
  }, [])

  const firstWeekday = (() => { const f = new Date(view.getFullYear(), view.getMonth(), 1).getDay(); return (f + 6) % 7 })()
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate()
  const cells: (Date | null)[] = []
  for (let i = 0; i < firstWeekday; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(view.getFullYear(), view.getMonth(), d))
  while (cells.length % 7 !== 0) cells.push(null)

  const isSame = (a: Date | null, b: Date | null) => !!(a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate())
  const dayIdxMap: Record<string, number> = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6, Daily: -1 }
  const drawDayIdx = dayIdxMap[lotto?.drawDay]

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button type="button" onClick={() => setOpen(o => !o)} className="focus-ring"
        style={{ width: "100%", display: "flex", alignItems: "center", gap: "var(--gap-3)", padding: "var(--py-3-5) var(--px-3-5)", background: "var(--input)", border: "1px solid var(--border)", borderRadius: 14, color: "var(--foreground)", cursor: "default", textAlign: "left" }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--border-strong)")}
        onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
        aria-haspopup="dialog" aria-expanded={open}>
        <span style={{ width: 32, height: 32, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--input)", color: "var(--muted-foreground)", flex: "0 0 auto" }}>
          <Icon name="calendar" size={16} color="var(--muted-foreground)" />
        </span>
        <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0, lineHeight: 1.1 }}>
          <span style={{ fontWeight: 600, fontSize: 15 }}>{value ? formatDate(value) : "Select draw date"}</span>
          <span style={{ fontSize: 12, color: "var(--fg-mute)", marginTop: 4 }}>
            {value ? (isSame(value, today) ? "Today" : value > today ? "Upcoming" : "Past draw") : "Latest draw, or pick a date"}
          </span>
        </div>
        <span style={{ color: "var(--muted-foreground)" }}><Icon name="chevron-down" size={18} /></span>
      </button>

      {open && (
        <div role="dialog" style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, right: 0, zIndex: 30, background: "var(--popover)", border: "1px solid var(--border-strong)", borderRadius: 18, boxShadow: "0 24px 60px -20px rgba(0,0,0,.7)", backdropFilter: "blur(20px) saturate(160%)", WebkitBackdropFilter: "blur(20px) saturate(160%)", padding: 14 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <button type="button" style={calBtnStyle} onClick={() => setView(v => new Date(v.getFullYear(), v.getMonth() - 1, 1))}><Icon name="chevron-left" size={16} /></button>
            <div style={{ fontWeight: 600, fontSize: 14 }}>{MONTHS[view.getMonth()]} {view.getFullYear()}</div>
            <button type="button" style={calBtnStyle} onClick={() => setView(v => new Date(v.getFullYear(), v.getMonth() + 1, 1))}><Icon name="chevron-right" size={16} /></button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "var(--gap-0-5)", marginBottom: 4 }}>
            {WEEKDAYS.map((w, i) => <div key={i} style={{ textAlign: "center", fontSize: 10.5, fontWeight: 600, color: "var(--fg-mute)", padding: "4px 0", letterSpacing: ".06em" }}>{w}</div>)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "var(--gap-0-5)" }}>
            {cells.map((c, i) => {
              if (!c) return <div key={i} />
              const isToday = isSame(c, today), isSel = isSame(c, value), isFuture = c > today
              const isDrawDay = drawDayIdx === -1 || c.getDay() === drawDayIdx
              return (
                <button key={i} type="button" disabled={isFuture} onClick={() => { onChange(new Date(c)); setOpen(false) }}
                  style={{ aspectRatio: "1", border: 0, borderRadius: 10, background: isSel ? "var(--primary)" : (isToday ? "var(--accent)" : "transparent"), color: isFuture ? "rgba(255,255,255,.18)" : (isSel ? "var(--primary-foreground)" : "var(--foreground)"), fontWeight: isSel ? 700 : (isDrawDay ? 600 : 500), fontSize: 13, cursor: isFuture ? "not-allowed" : "default", position: "relative", opacity: isFuture ? 0.4 : 1 }}
                  onMouseEnter={e => { if (!isFuture && !isSel) e.currentTarget.style.background = "var(--accent)" }}
                  onMouseLeave={e => { if (!isFuture && !isSel) e.currentTarget.style.background = isToday ? "var(--accent)" : "transparent" }}>
                  {c.getDate()}
                  {isDrawDay && !isSel && !isFuture && <span style={{ position: "absolute", bottom: 5, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: 999, background: "var(--primary)" }} />}
                </button>
              )
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--border)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--gap-1-5)", fontSize: 11, color: "var(--fg-mute)" }}>
              <span style={{ width: 5, height: 5, borderRadius: 999, background: "var(--primary)" }} />
              {lotto?.drawDay === "Daily" ? "Daily draw" : `${lotto?.drawDay || ""} draw`}
            </div>
            <button type="button" onClick={() => { onChange(today); setOpen(false) }} style={{ background: "transparent", border: 0, color: "var(--primary)", fontWeight: 600, fontSize: 12, cursor: "default" }}>Latest</button>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── NumberRow ────────────────────────────────────────────────────────────────

export function NumberRow({ numbers, supps = [], powerball = null, size = 44, stagger = 60, animate = true }: {
  numbers: number[]; supps?: number[]; powerball?: number | null; size?: number; stagger?: number; animate?: boolean
}) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--gap-2)", alignItems: "center" }}>
      {numbers.map((n, i) => <Ball key={`n-${i}-${n}`} n={n} variant={ballClassFor(i)} size={size} delay={i * stagger} animate={animate} />)}
      {supps.length > 0 && (
        <>
          <span style={{ width: 1, height: size * 0.55, background: "var(--border-strong)", margin: "0 4px", flex: "0 0 auto" }} />
          {supps.map((n, i) => <Ball key={`s-${i}-${n}`} n={n} variant={ballClassFor(numbers.length + i)} size={Math.round(size * 0.85)} bonus delay={(numbers.length + i) * stagger} animate={animate} label={`Supplementary ${n}`} />)}
        </>
      )}
      {powerball != null && (
        <>
          <span style={{ width: 1, height: size * 0.55, background: "var(--border-strong)", margin: "0 4px", flex: "0 0 auto" }} />
          <Ball n={powerball} variant="ball-red" size={size} delay={numbers.length * stagger} animate={animate} label={`Powerball ${powerball}`} />
        </>
      )}
    </div>
  )
}
