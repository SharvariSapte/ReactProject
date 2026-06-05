import React, { useState } from 'react'
import './plant.css'
const PlantDashboard = (props) => {
  const {streak, growthStage, plantData} = props
 
  return (
    <>
    <div className="
    relative rounded-xl h-full w-full shadow-lg ring-2 ring-white/30 
    flex justify-center items-center bg-gradient-to-b from-black/60 backdrop-blur-[2px]"
    >
    <div key={growthStage()} className='flex flex-col items-center justify-around h-[100%] w-[100%] appear'>
    <h1 className='text-center text-white text-xl font-bold absolute top-10'>{plantData[growthStage()].message}</h1>
    <img src={plantData[growthStage()].img} className='scale-[0.7] absolute bottom-0 ani'/>
    </div>
    </div>
</>
)
}
export default PlantDashboard