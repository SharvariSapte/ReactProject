import { Flame } from 'lucide-react'
import React from 'react'

const StreakDisplay = (props) => {
  const {streak, setStreak} = props;
  return (
    <div className='text-white
    flex items-center gap-5 p-4 h-full w-full rounded-xl ring-1 ring-white bg-black/50 backdrop-blur-[2px]'>
        <Flame color='cyan' size={45}/><div className='flex flex-col'><p className='text-[12px]'>Streak</p><p className='font-bold'>{streak} Day Streak</p></div></div>
  )
}

export default StreakDisplay