import { clear } from "console"
import { useState,useEffect } from "react"
import * as React from "react"
 
export function useText (initialValue = "") {
  const [text, setTextState] = useState(initialValue)

  const setText = (value: string) => {
    setTextState(value)
  }

   const clear = () => {
    setTextState("")
  }

  const toUpperCase = () => {
    setTextState(prev => prev.toUpperCase())
  }

  const toLowerCase = () => {
    setTextState(prev => prev.toLocaleLowerCase())
  }

  return{
    text,
    setText,
    clear,
    toUpperCase,
    toLowerCase
  }
}

function useToggle(initialValue: boolean) {
  const [isOn, setToggle] = useState(initialValue)

  const toggle = () => {
    setToggle(prev => !prev)
  }

  const setIsOn = (value: boolean) => {
    setToggle(value)
  }

  const reset = () => {
    setToggle(initialValue)
  }

  return {
    isOn,
    toggle,
    setIsOn,
    reset
  }
}

export const NotificationSwitch = () => {
  const {isOn, toggle, setIsOn, reset } = useToggle(false)
 
  return (
    <div>
      <h2>Настройки уведомлений</h2>
      {isOn ? "🔔 Уведомления включены" : "🔕 Уведомления выключены"}
      <div>
        <button onClick={toggle}>Переключить</button>
        <button onClick={() => setIsOn(true)}>Включить</button>
        <button onClick={reset}>Сбросить по умолчанию</button>
      </div>
    </div>
  )
}


export const LightSwitch = () => {
  const {isOn, toggle} = useToggle(false)
  const {text, setText} = useText()
   
 
  const toggle1 = () => toggle()
  const setTextChanges = (text: any) => {
      setText(text)
  } 
  
  return (
    <div>
      <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
      <h2>{isOn ? "💡 Свет включен" : "🌙 Свет выключен"}</h2>
      <button onClick={toggle1}>Переключить свет</button>
    </div>
  )
}
 
export const VisibilityToggle = () => {
  const {isOn, setIsOn} = useToggle(false)
 
  return (
    <div>
      <h2>{"Секретное сообщение"}</h2>
      <h2>{isOn && "Это секретное сообщение"}</h2>
      <div><button onClick={() => setIsOn(true)}>Показать</button></div>
      <div><button onClick={() => setIsOn(false)}>Скрыть</button></div>
    </div>
  )
}
 
export const TogglePage = () => {
  return (
    <div>
      <GreetingCard/>
      <TitleEditor/>
      <LightSwitch />
      <VisibilityToggle />
      <NotificationSwitch />
    </div>
  )
}

function TitleEditor () {
  const {text, setText, toUpperCase,toLowerCase, clear} = useText("Заголовок статьи")

  const changeTitle = () => {
    setText("Изменить на 'Новый заголовок")
  }
  
  return <div>
    <div>///////////////////////////////////////////////////////////////////////////</div>
      Lesson 1
      <h2>
          {text}

          <div>
            <button onClick={clear}>clear</button>
            <button onClick={changeTitle}>Изменить на 'Новый заголовок</button>
            <button onClick={toUpperCase}>toUpperCase</button>
            <button onClick={toLowerCase}>toLowerCase</button>
          </div>
      </h2>
      <div>///////////////////////////////////////////////////////////////////////////</div>
  </div>
}


const GreetingCard= () => {
  

  const {text,toUpperCase, toLowerCase, setText, clear} = useText("Привет")
    return<div>
      💬 {text}

      <div>
        <div><button onClick={toUpperCase}>ГРОМКО</button></div>
        <div><button onClick={toLowerCase}>тихо</button></div>
        <div><button onClick={()=> setText("Добро пожаловать!")}>Сказать - Добро пожаловать!</button></div>
        <div><button onClick={clear}>Молчать</button></div>
      </div>
    </div>  
}