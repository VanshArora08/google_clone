// import React from 'react'
"use client"

import { useEffect, useState } from "react"


const CountryLookup = () => {
  const [country, setCountry] = useState("US")
  useEffect( () => {
     fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_EXTREMEIP_API_KEY}`)
    .then((res)=>res.json())
    .then((data)=>{setCountry(data.country)
        console.log(data)
        console.log(process.env.NEXT_PUBLIC_EXTREMEIP_API_KEY)
    })}, [])
  return (
    <div>
      {country}
    </div>
  )
}

export default CountryLookup
