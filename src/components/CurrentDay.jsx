import React, { useEffect, useState } from 'react'

const CurrentDay = (props) => {
const {day, log, setLog, logDate, user} = props
const status = log.some(log => log.date === logDate)
const message = status ? "Done!" : "Mark today complete"
  return (
    <>
    <div className= 
    {`text-white relative text-lg justify-evenly
    flex flex-col items-center gap-5 p-4 h-full w-full rounded-xl ring-1 bg-black/50 backdrop-blur-[2px] ${status ? "ring-yellow-400" : "ring-white/60"}`}>
        <p className='font-semibold'>Today</p>
        <div className='text-sm flex justify-center items-center gap-5'><div className={`h-[10px] w-[10px] ring-2 ring-white ${status ? "bg-gradient-to-br from-[#84cc16] to-[#478510]" : "bg-none"}`}></div><div>{user.habit}</div></div>
        <button 
        onClick={()=>{
           setLog(prev => [...prev, { date: logDate, count: 5 }])
        }} disabled={status}
        className={`p-3 w-[100%] bg-gradient-to-br from-[#84cc16] to-[#478510] flex justify-center font-semibold items-center hover:scale-[1.02] text-[0.9rem] rounded-md ${status ? "bg-gradient-to-br from-yellow-400 to-yellow-700" : "bg-gradient-to-br from-[#84cc16] to-[#478510]"}`}>{message}</button>
    </div>
    </>
  )
}

export default CurrentDay