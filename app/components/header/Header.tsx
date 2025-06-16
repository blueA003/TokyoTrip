import Image from 'next/image'
import React from 'react'
import SideBar from './SideBar'


export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-200">
      <div className=' w-full mx-auto py-2 px-16 flex justify-between items-center'>
        <div className='flex whitespace-nowrap gap-1 items-center'>
          <Image src={'/image/header.png'} alt='메인' width={40} height={40}/>
          TokyoTrip
        </div>
        <div className='flex whitespace-nowrap gap-1 items-center'>
          <div>
            <SideBar></SideBar>
          </div>
        </div>
      </div>
    </div>
  )
}