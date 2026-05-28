import * as React from "react"
import { StrictMode, useState } from "react"
import { createRoot } from 'react-dom/client'
import {TogglePage} from './TogglePage'
import { TextPage } from './TextPage'

createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      {/* <TogglePage /> */}
      <TextPage/>
    </StrictMode>
  )

