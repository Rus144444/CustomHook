import * as React from "react"
import {useState} from "react"
 
export const TitleEditor = () => {
  const [text, setText]= useState("Test test")
 
  const titleChangeToUp = () => {
    setText(prev => prev.toLocaleUpperCase())
  }

  const titleChangeToLower = () => {
    setText(prev=>prev.toLowerCase()) 
  }

  return (
    <div>
      <h2>{text || "Пусто"}</h2>
      <button onClick={titleChangeToUp}>To up per case</button>
      <button onClick={titleChangeToLower}>To lower case</button>
      <button onClick={()=> setText("New title")}>New title</button>
      <button onClick={()=> setText("")}>Clear text</button>
    </div>
  )
}
 
export const GreetingCard = () => {
  const [text, setText]= useState("root")
 
  const titleChangeToUp = () => {
    setText(prev => prev.toLocaleUpperCase())
  }

  const titleChangeToLower = () => {
    setText(prev=>prev.toLowerCase()) 
  }
  return (
    <div>
      <h2>💬 {text || "..."}</h2>
       <button onClick={titleChangeToUp}>To up per case</button>
      <button onClick={titleChangeToLower}>To lower case</button>
      <button onClick={()=> setText("New title")}>New title</button>
      <button onClick={()=> setText("")}>Clear text</button>
    </div>
  )
}
 
export const TextPage = () => {
  return (
    <div>
      <TitleEditor />
      <GreetingCard />
    </div>
  )
}