import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PlantDashboard from './components/PlantDashboard'
import Calendar from './components/Calendar'
import Logic from './Logic'
import Streak from './components/Streak'
import CurrentDay from './components/CurrentDay'

function App() {
   const [today, setToday] = useState(new Date(2))
   const prevDayRef = useRef(new Date().toDateString())
   const [done, setDone] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentDay = now.toDateString();
      if (currentDay !== prevDayRef.current) {
        setToday(now)
        prevDayRef.current = currentDay
      }
    }, 60000)
    return () => clearInterval(interval)
  }, [])
  
 
  return (
    <>
    <div className='p-10 flex-col'>
      <Navbar img="usericon2.jpg" user="Sharvari" message="Consistency today, growth tomorrow"/>
          <div className='flex gap-5'>
            <PlantDashboard/>
            <div className='flex-col'>
            <div className='flex gap-10'>
            <Streak day={today} status={done}/>
            <CurrentDay day={today} status={done}/>
            </div>
            <Calendar/>
            </div>
          </div>
    </div>
    </>
  )
}

export default App
