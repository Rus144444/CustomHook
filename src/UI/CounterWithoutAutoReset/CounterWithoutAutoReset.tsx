import * as React from "react"
import { useCounter } from "../../BLL/useCounter"
import css  from "./CounterWithoutAutoReset.module.css"


export function CounterWithoutAutoReset () {
    const { count, inc, dec, reset, changeStep } = useCounter(0, 1, 0)
    return (
    <div className={css.wrapper}>
        <h2>{count}</h2>
        <h3>🔒 Без автосброса</h3>
        <button onClick={inc}> + 1 </button>
        <button onClick={dec}> - 1 </button>
        <button onClick={()=> changeStep(5)}>Установить шаг 5</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}
