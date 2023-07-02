// import React from 'react'

import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link"

export default async function WebSearchPage({searchParams}) {
// await new Promise((resolve)=>setTimeout(resolve,10000)
// )
  const res=await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}
  `)
  if(!res.ok) throw new Error("something went wrong")
  const data=await res.json()

  // console.log(data.items);
  const results=data.items;

  if(!results){
    return <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">No results found</h1>
      <p className="text-lg">Try searching for something else or go back to the homepage</p>
      <Link href={"/"} className="text-blue-500">
        Home
      </Link>
    </div>
  }
  // console.log(results)
  return (
    <>
      {results && <WebSearchResults results={data} />}
    </>
  )
}
