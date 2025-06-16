import React from 'react'
import tripData from '@/data/db.json'
import Image from 'next/image'

export default function IntroductionMap() {
  const trip = tripData.trip
  return (
    <div className="max-w-[1140px] w-full mx-auto pt-8 pb-10 px-4 justify-center items-center">
      {trip.map((value, index)=>(
        <div key={index} className='pt-20' id={value.id}>
          <div className="text-4xl text-center pb-6">
            {value.main}
          </div>
          <Image
            src={value.mainImg}
            alt={`trip-${value.main}`}
            width={400}
            height={200}
            className="mx-auto pb-6"
          />
          <div className="text-2xl text-center pb-6" >
            {value.mainText}
          </div>
          <div className="text-3xl text-center pb-6">
            {value.food}
          </div>
          <Image
            src={value.foodImg}
            alt={`trip-${value.food}`}
            width={400}
            height={200}
            className="mx-auto pb-6"
          />
          <div className="text-2xl text-center pb-6">
            {value.foodText}
          </div>
        </div>
      ))}
    </div>
  )
}
