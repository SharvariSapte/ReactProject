import React, { useEffect, useState } from 'react'

const CurrentDay = (props) => {
const {day, log, setLog, logDate, user} = props
const status = log.some(log => log.date === logDate)
const message = status ? "Done!" : "Habit followed today?"
  return (
    <>
    <div className= 
    {`text-white font-semibold relative text-xl 
    flex flex-col items-center gap-5 p-4 h-[200px] w-[250px] rounded-xl ring-2 bg-black/40 backdrop-blur-[2px] ${status ? "ring-yellow-400" : "ring-white/30"}`}>
        <p className=''>Today</p>
        <p className='text-sm'>{user.habit}</p>
        <button 
        onClick={()=>{
           setLog(prev => [...prev, { date: logDate, count: 5 }])
        }} disabled={status}
        className={`p-3 w-[100%] bg-gradient-to-br from-[#84cc16] to-[#478510] flex justify-center items-center hover:scale-[1.02] text-[1rem] rounded-md ${status ? "bg-gradient-to-br from-yellow-400 to-yellow-700" : "bg-gradient-to-br from-[#84cc16] to-[#478510]"}`}>{message}</button>
    </div>
    </>
  )
}

export default CurrentDay