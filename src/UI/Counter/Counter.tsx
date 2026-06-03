import * as React from "react"
import { useCounter } from "../../BLL/useCounter"
import css from "./Counter.module.css"
 
export const Counter = () => {
  const { count, inc, dec, reset, changeStep } = useCounter(0, 1, 3000)
 
  return (
    <div className={css.wrapper}>
        <h2>{count}</h2>
         <h3>⏰ Автосброс через 3 сек</h3>
        <button onClick={inc}> + 1 </button>
        <button onClick={dec}> - 1 </button>
        <button onClick={()=> changeStep(5)}>Установить шаг 5</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}
