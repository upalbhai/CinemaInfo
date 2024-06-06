import React from 'react'
import Menu from './Menu'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'
export default function Header() {
  return (
    <div className='flex justify-between p-3 max-w-6xl mx-auto' >
      <div className="flex gap-4">
        <Menu title='home' address='/' Icon={AiFillHome} />
        <Menu title='about' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
      
      <div className="flex gap-1 items-center">
      <Link>
         <span className='text-2xl font-serif font-bold mr-2'>Cinema</span><span className='text-lg font-bold bg-orange-500 p-1 rounded-lg' >Info</span>
      </Link>
        
      </div>
    </div>
  )
}
