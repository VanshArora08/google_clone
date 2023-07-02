import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import {RiSettings3Line} from 'react-icons/ri'
import { TbGridDots } from 'react-icons/tb'
import SearchHeaderOptions from './SearchHeaderOptions'

export default function SearchHeader() {
  return (
    <header className='sticky top-0 bg-white '>
        <div className='flex w-full p-6 items-center justify-between'>
            <Link href={"/"}>
                <Image 
                    width={120}
                    height={40}
                    src={"/Google.png"}
                />
            </Link>
            <div className="flex-1">
                <SearchBox/>
            </div>
            <div className='items-center hidden md:inline-flex space-x-2'>
                <RiSettings3Line className='header-icon'/>
                <TbGridDots className='header-icon'/>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2">Sign in</button>
        </div>
        <SearchHeaderOptions/>
    </header>
  )
}
