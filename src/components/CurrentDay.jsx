import React, { useEffect, useState } from 'react'

const CurrentDay = (props) => {
  const [dailyLog, setDailyLog] = useState([{}])
  const [done, setDone] = useState(props.status)
  const [message, setMessage] = useState('Habit followed today?')
 const [newDay, setNewDay] = useState(false)
  useEffect(() => {
      setDone(false)
  }, [props.day])
  
  useEffect(() => {
  setMessage(done ? "Done!" : "Habit followed today?")
}, [done])

  return (
    <>
    <div className= 
    {`text-white font-semibold relative text-xl
    flex flex-col items-center gap-5 p-4 h-[200px] w-[250px] rounded-xl ring-2 bg-black/40 ${done ? "ring-yellow-400" : "ring-white/30"}`}>
        <p className=''>Today</p>
        <button 
        onClick={()=>{
          setDone(prev => !prev);
        }} disabled={done}
        className={`p-3 w-[100%] flex justify-center items-center text-[1rem] rounded-md ${done ? "bg-yellow-400" : "bg-[#b2d521]"}`}>{message}</button>
    </div>
    </>
  )
}

export default CurrentDay