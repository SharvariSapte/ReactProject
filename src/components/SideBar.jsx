import { AlarmClockCheck, Focus, House, Settings, Sprout, Timer } from 'lucide-react'
import React from 'react'

const SideBar = (props) => {
  const {growthStage} = props
  return (
    <div className='h-screen bg-black/50 backdrop-blur-sm rounded-l-xl shadow-black shadow-2xl flex flex-col gap-11 p-5
     text-white font-bold w-full min-w-[200px]'>
      <h1 className='text-2xl'>Lorem, ipsum dolor.🌿</h1>
      <div className='flex flex-col gap-11'>
        <div></div>
      <div className='flex gap-2'><House/> <div className='flex flex-col'>Dashboard<div className='h-[1px] hover:w-[full] bg-white'></div></div></div>
      <div className='flex gap-2'><Sprout/> Garden</div>
      <div className='flex gap-2'><AlarmClockCheck /> Focus</div>
      <div className='flex gap-2'><Settings/> Settings</div>
      </div>
    </div>
  )
}

export default SideBar