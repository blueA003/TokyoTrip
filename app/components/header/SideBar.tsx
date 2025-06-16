'use client'

import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from 'react'
import trip from '@/data/db.json'

export default function SideBar() {
  const [open, setOpen] = useState(false)
  const tripData = trip.trip

  const handleNav = (id:string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="text-2xl">
        <TiThMenu />
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white z-1 transform transition-transform duration-300 border-l border-gray-200 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-black mb-4 text-4xl"
          >
            <AiOutlineClose/>
          </button>
          <div>
            {tripData.map((item, index) => (
              <div key={index} className="text-center border-b border-gray-200 py-4">
                <button 
                  onClick={() => handleNav(item.id)}
                  className="text-3xl hover:text-gray-500"
                >
                  {item.main}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
