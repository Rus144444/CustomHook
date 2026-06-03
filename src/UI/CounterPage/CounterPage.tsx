import * as React from "react"
import { Counter } from "../Counter/Counter"
import { CounterWithoutAutoReset } from "../CounterWithoutAutoReset/CounterWithoutAutoReset"
import css from "./CounterPage.module.css"

export const CounterPage = () => {
  return (
    <div className={css.block}>
      <Counter />
      <CounterWithoutAutoReset />
    </div>
  )
}

