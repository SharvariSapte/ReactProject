import { Flame } from 'lucide-react'
import React from 'react'

const StreakDisplay = (props) => {
  const {streak, setStreak} = props;
  return (
    <div className='text-white
    flex items-center gap-5 p-4 h-[80px] w-[220px] rounded-xl ring-2 ring-white bg-black/40 backdrop-blur-[2px]'>
        <Flame color='cyan' size={45}/><div className='flex flex-col'><p className='text-[12px]'>Streak</p><p className='font-bold'>{streak} Day Streak</p></div></div>
  )
}

export default StreakDisplay



//signup v1 copy
import React, { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [x, setX] = useState(0)

  const mouseevent = (event) => {
    const newX = ((event.clientX / window.innerWidth) - 0.5) * -400
    setX(newX)
  }

  return (
    <div
      className='h-screen w-screen flex justify-center items-center signup overflow-hidden relative'
      onMouseMove={mouseevent}>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '-35vw',
          width: '200vw',
          height: '100%',
          backgroundImage: 'url(/bg.png)',  
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translateX(${x}px)`,
          transition: 'transform 2s ease-out', 
        }}
      />

      <div className='relative z-10 flex flex-col gap-[70px] items-center'>
        <h1 className='text-6xl text-white font-bold text-center flex flex-col gap-5'>
          <span className='text-5xl'>Ready to grow</span>
          THE PLANT OF YOUR HABIT?
        </h1>
        <Link to='/Form'>
          <button className='h-[80px] w-[250px] text-3xl text-white rounded-xl font-bold bg-black/30 ring-1 ring-white/50 hover:scale-[1.02] active:scale-[0.98]'>
            Let's Sow!
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Signup