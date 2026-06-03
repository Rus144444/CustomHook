import { useState, useEffect } from "react"

export const useCounter = (startValue: number = 0, startStep: number = 1, autoResetTime = 9000) => {
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
