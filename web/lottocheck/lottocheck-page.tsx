import "./lottocheck.css"
import { Nav }           from "./components/nav"
import { Hero }          from "./components/hero"
import { QuickAccess }   from "./components/quick-access"
import { LatestResults } from "./components/latest-results"
import { Footer }        from "./components/footer"

export function LottocheckPage() {
  return (
    <div className="lottocheck">
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <QuickAccess />
        <LatestResults />
      </main>
      <Footer />
    </div>
  )
}
