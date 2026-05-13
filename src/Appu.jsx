import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PlantDashboard from './components/PlantDashboard'
import Calendar from './components/Calendar'
import StreakDisplay from './components/StreakDisplay'
import CurrentDay from './components/CurrentDay'
import DailyMessage from './components/DailyMessage'
import SideBar from './components/SideBar'

 const formatDate = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1)
  const day = String(date.getDate())
  return `${year}/${month}/${day}`
}
function Appu() {
   const [today, setToday] = useState(new Date())
  const prevDayRef = useRef(new Date().toDateString())
  const logDate = formatDate(today);
  const prevDate = formatDate(new Date(today.getTime() - 86400000))
  
  const [streak, setStreak] = useState(()=>{
    const saved = localStorage.getItem('streak')
    return saved ? JSON.parse(saved) : 0
  })

  console.log(prevDate);
//i need to remember:this is called lazy initialization and when it is direct and func not passed it computes on every render smth smth
 const [log, setLog] = useState(() =>{
  const saved = localStorage.getItem('logArray')
  return saved ? JSON.parse(saved) : []})

useEffect(() => {
  localStorage.setItem('logArray', JSON.stringify(log))
}, [log])

useEffect(() => {
  localStorage.setItem('streak', JSON.stringify(streak))
}, [streak])

useEffect(() => {
  const prevDayExists = log.some(entry => entry.date === prevDate)
   const todayExists = log.some(entry => entry.date === logDate)
  if (!todayExists && !prevDayExists && streak > 0) setStreak(0)
}, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentDay = now.toDateString();
      if (currentDay !== prevDayRef.current) {
        setToday(now)
        prevDayRef.current = currentDay
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])
 
  return (
    <>
    
    <div className='flex gap-2'>

    <div>
    <div className='p-8 flex-col'>
      <Navbar img="usericon2.jpg" user="Sharvari" message="Consistency today, growth tomorrow"/>
          <div className='flex gap-4'>
            <PlantDashboard/>
            <div className='flex flex-col justify-between'>

            <div className='flex gap-4 ml-[200px]'>
            <CurrentDay day={today} log={log} logDate={logDate} setLog={setLog} streak={streak} setStreak={setStreak}/>
             <StreakDisplay streak={streak} setStreak={setStreak} day={today} />
            </div>
            <Calendar log={log} logDate={logDate} setLog={setLog}/>
            </div>
          </div>
    </div>
    </div>
    
<div>
    <SideBar/>
    </div>


    </div>
    </>
  )
}

export default Appu
