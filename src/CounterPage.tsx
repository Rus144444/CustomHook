import * as React from "react"
import { useState, useEffect } from "react"
 
export const Counter = () => {
  const { count, inc, dec, reset, changeStep } = useCounter(0, 1, 3000)
 
  return (
    <div>
        <h2>{count}</h2>
         <h3>⏰ Автосброс через 3 сек</h3>
        <button onClick={inc}> + 1 </button>
        <button onClick={dec}> - 1 </button>
        <button onClick={()=> changeStep(5)}>Установить шаг 5</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export function CounterWithoutAutoReset () {
    const { count, inc, dec, reset, changeStep } = useCounter(0, 1, 0)
    return (
    <div>
        <h2>{count}</h2>
        <h3>🔒 Без автосброса</h3>
        <button onClick={inc}> + 1 </button>
        <button onClick={dec}> - 1 </button>
        <button onClick={()=> changeStep(5)}>Установить шаг 5</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}
 
const useCounter = (startValue: number = 0, startStep: number = 1, autoResetTime = 9000) => {
    const [count, setCount] = useState(startValue)
    const [step, setStep] = useState(startStep)

    useEffect(() => {
        if (!autoResetTime || autoResetTime <= 0) return
            const id = setTimeout(() => {
            setCount(startValue)
        }, autoResetTime)

        return () => clearTimeout(id)
    }, [autoResetTime, startValue, count])
 

    const inc = () => setCount(prev => prev + step)
    const dec = () => setCount(prev => prev - step)
    const reset = () => {setCount(startValue); setStep(startStep)}
    const changeStep = (count: number) => {
        setStep(count)
        if(count === 5){
            alert("шаг изменился на 5")
        }
    }
  return { count, inc, dec, reset, changeStep}
}

export const CounterPage = () => {
  return (
    <div>
      <Counter />
      <CounterWithoutAutoReset />
    </div>
  )
}

