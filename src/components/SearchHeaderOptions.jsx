"use client"

// import React from 'react'
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/Ai'
import { usePathname,useRouter,useSearchParams } from 'next/navigation'

export default function SearchHeaderOptions() {
  const pathName=usePathname();
  const searchParams=useSearchParams()
  const searchTerm=searchParams.get("searchTerm")
  console.log(searchTerm)
  // term=searchTerm.get("searchTerm")
  const router=useRouter();
  const selectTab=(tab)=>{
    router.push(`/search/${tab.toLowerCase()}?searchTerm=${searchTerm}`)
  }
  return (
    <div className='flex items-center space-x-2 justify-center md:justify-start md:pl-56 select-none border-b w-full text-gray-700 text-sm'>
      <div
        onClick={()=>{selectTab("web")}}
        className={`flex items-center space-x-1 border-b-[3px] border-transparent cursor-pointer pb-3 px-2 ${pathName==="/search/web" && "!text-blue-600 !border-blue-600 rounded-sm"}`}>
        <AiOutlineSearch className='text-md'
      />
        <p>All</p>
      </div>
      <div
        onClick={()=>{selectTab("image")}}
        className={`flex items-center space-x-1 border-b-[3px] border-transparent cursor-pointer pb-3 px-2 ${pathName==="/search/image" && "!text-blue-600 !border-blue-600 rounded-sm"}`}>
        <AiOutlineCamera className='text-md'
      />
        <p>Images</p>
      </div>
    </div>
  )
}
