import * as React from "react"
import { StrictMode } from "react"
import { createRoot } from 'react-dom/client'
import { CounterPage } from "./UI/CounterPage/CounterPage"

createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <CounterPage/>
    </StrictMode>
  )

