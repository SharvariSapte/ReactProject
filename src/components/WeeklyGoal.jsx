import React, { useEffect, useState } from 'react'
import { Flame } from 'lucide-react';

const Streak = (props) => {
    const [streakDays, setStreakDays] = useState(0)
     const [days, setDays] = useState([
        {day:"S", done:false},
        {day:"M", done:false},
        {day:"T", done:false},
        {day:"W", done:false},
        {day:"T", done:false},
        {day:"F", done:false},
        {day:"S", done:false},
    ])

  return (
    <>
    <div className='flex flex-col'>
        <div></div>
        <div className='flex flex-col justify-around items-center h-[200px] rounded-xl ring-2 ring-white/30 bg-black/40 backdrop-blur-[2px]'>
        <Flame color='cyan' size={70}/>
        <div className='text-white font-semibold text-xl'>{streakDays} day Streak</div>
        <div className='flex gap-2 pb-4 px-2'>
        {days.map((d,idx)=>(
            <div key={idx} className={`h-5 w-5 flex justify-center items-center text-sm font-semibold rounded-full ${d.done ? "bg-[#b2d521]" : "bg-[#FBF4C8]"}`}>{days[idx].day}</div>
        ))}
        </div>
        </div>
    </div>
    </>
  )
}

export default Streak













