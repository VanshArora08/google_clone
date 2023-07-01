// import React from 'react'
"use client"
import { useEffect } from "react"

export default function Error({error,reset}) {
    useEffect(()=>{
        console.log("Error: ",error)
    },[error])
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">Something went wrong</h1>
      <button onClick={reset} className="text-blue-500">Try again</button>
    </div>
  )
}
