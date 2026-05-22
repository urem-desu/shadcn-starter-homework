import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"
import { LottocheckPage } from "../web/lottocheck/lottocheck-page"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LottocheckPage />
  </StrictMode>
)
