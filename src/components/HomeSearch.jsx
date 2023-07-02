// import React from 'react'
"use client"

import {AiOutlineSearch} from "react-icons/Ai"
import {BsFillMicFill} from "react-icons/bs"
import {useRouter} from 'next/navigation'
import { useState } from "react"


const HomeSearch = () => {

    const router = useRouter();
    const [input, setInput] = useState("");
    const [randomSearchLoading, setRandomSearchLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`)
    }

    const randomSearch = async (e) => {
        setRandomSearchLoading(true)
        e.preventDefault()
        const res=await fetch("https://random-word-api.herokuapp.com/word?number=1").then(res=>res.json()).then(data=>data[0])
        if(!res.trim()) return;
        router.push(`search/web?searchTerm=${res}`)
        setRandomSearchLoading(false)
    }
  return (
    <>
     <form className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md  transition-shadow sm:max-w-xl lg:max-w-2xl"
        onSubmit={handleSubmit}
     >
        <AiOutlineSearch 
            className="text-xl text-gray-500 mr-3"
        />
        <input 
            type="text" 
            className="flex-grow focus:outline-none" onChange={(e)=> setInput(e.target.value)} 
            value={input} 
        />
        <BsFillMicFill className="text-xl text-gray-500 ml-3" />
     </form>
     <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center mt-8">
        <button className="btn" onClick={handleSubmit}>Google Search</button>
        <button className="btn disabled:opacity-80" onClick={randomSearch} disabled={randomSearchLoading}>
            {randomSearchLoading? ("loading..."):("I'm Feeling Lucky")}
        </button>
     </div>
    </>
  )
}

export default HomeSearch
