import { Logo, Icon } from "./ui"

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div style={{ fontSize: 11.5, fontWeight: 600, color: "var(--fg-mute)", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 14 }}>{title}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--gap-2-5)" }}>
        {links.map(l => <li key={l}><a href="#" style={{ fontSize: 13, color: "var(--muted-foreground)", fontWeight: 500 }}>{l}</a></li>)}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer style={{ marginTop: "var(--py-15)", padding: "var(--py-10) var(--px-6) var(--py-8)", borderTop: "1px solid var(--border)", background: "rgba(0,0,0,.15)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "var(--gap-8)", alignItems: "flex-start" }} className="footer-grid">
          <div style={{ maxWidth: 360 }}>
            <Logo />
            <p style={{ marginTop: 14, fontSize: 13, color: "var(--fg-mute)", lineHeight: 1.55 }}>
              Lottocheck is an independent, informational tool for viewing publicly available Australian lotto results. We do not sell tickets, take entries, or provide gambling services of any kind.
            </p>
          </div>
          <FooterCol title="Lottos" links={["Oz Lotto", "Powerball", "Saturday Lotto", "Monday & Wednesday", "Set for Life"]} />
          <FooterCol title="Tools" links={["Latest results", "Past draws", "Draw calendar", "Number history"]} />
          <FooterCol title="About" links={["How it works", "Sources", "Contact", "Privacy"]} />
        </div>

        <div style={{ marginTop: "var(--gap-8)", padding: "16px 18px", borderRadius: 14, background: "rgba(203,213,225,.05)", border: "1px solid rgba(203,213,225,.15)", display: "flex", alignItems: "flex-start", gap: "var(--gap-3)" }}>
          <span style={{ flex: "0 0 auto", width: 22, height: 22, borderRadius: 7, background: "rgba(203,213,225,.12)", color: "var(--primary)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
            <Icon name="info" size={13} color="var(--primary)" />
          </span>
          <p style={{ margin: 0, fontSize: 12.5, color: "var(--muted-foreground)", lineHeight: 1.55 }}>
            <strong style={{ color: "var(--foreground)", fontWeight: 600 }}>Disclaimer.</strong>{" "}
            Lottocheck is an informational website only. It does not facilitate gambling, ticket purchases or prize claims. Always verify results directly with the official operator before acting on any winnings. Sample numbers shown here are illustrative placeholders and may not reflect actual draw results.
          </p>
        </div>

        <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--gap-3)", flexWrap: "wrap", fontSize: 12, color: "var(--fg-mute)" }}>
          <div>© 2026 Lottocheck · Made in Australia 🇦🇺 (informational only)</div>
          <div style={{ display: "flex", gap: "var(--gap-4)" }}>
            {["Privacy", "Terms", "Sources"].map(l => <a key={l} href="#" style={{ color: "var(--fg-mute)" }}>{l}</a>)}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1 !important; }
        }
      `}</style>
    </footer>
  )
}
