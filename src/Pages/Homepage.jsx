import { useEffect, useRef, useState } from 'react'
import DesktopDashboard from '../components/DesktopDashboard'
import MobileDashboard from '../components/MobileDashboard'

 const formatDate = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1)
  const day = String(date.getDate())
  return `${year}/${month}/${day}`
}
function Homepage(props) {
  const {user} = props
   const [today, setToday] = useState(new Date())
  const prevDayRef = useRef(new Date().toDateString())
  const logDate = formatDate(today);
  const prevDate = formatDate(new Date(today.getTime() - 86400000))
//i need to remember:this is called lazy initialization and when it is direct and func not passed it computes on every render smth smth
 const [log, setLog] = useState(() =>{
  const saved = localStorage.getItem('logArray')
  return saved ? JSON.parse(saved) : []})

useEffect(() => {
  localStorage.setItem('logArray', JSON.stringify(log))
}, [log])

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
 
  const calculateStreak = () => {
  let count = 0
  const current = new Date()
  const todayFormatted = formatDate(current)
  const todayExists = log.some(
    entry => entry.date === todayFormatted
  )
  if (!todayExists) {
    current.setDate(current.getDate() - 1)
  }
  while (true) {
    const formatted = formatDate(current)

    const exists = log.some(
      entry => entry.date === formatted
    )
    if (!exists) {
      break
    }
    count++
    current.setDate(current.getDate() - 1)
  }
  return count
}
    const streak = calculateStreak()

     const plantData=[
    {
    img:'/plant1.png',
    message:'oh no! The plant has withered. What went wrong? (·•᷄‎ࡇ•᷅ )',
    level:'Wilted'
    },
      {
        img:'/plant2.png',
       message: 'Your tiny sapling has sprouted (˶ᵔ ᵕ ᵔ˶)',
       level:'Sprouting'
      },
      {
        img:'plant3.png',
         message: 'Your plant is growing bigger ദ്ദി(˵ •̀ ᴗ - ˵ )',
         level: 'Growing'
      },
      {
        img:'plant4.png',
        message: `You're almost there!( ◡̀_◡́)ᕤ`,
        level:'Thriving'
      },
      {
        img:'/plant5.png',
        message: 'The flowers have bloomed! ◝(ᵔᗜᵔ)◜',
        level:'Blooming!'
      }]

    const growthStage = () => {
  if (streak >= 10) return 4
  if (streak >= 5) return 3
  if (streak >= 3) return 2
  if (streak >= 1) return 1
  return 0
}
  return (
    <>
    <div className='md:block hidden'>
    <DesktopDashboard user={user}
    plantData={plantData} 
    streak={streak} 
    growthStage={growthStage}
    today={today}
    log={log}
    logDate={logDate}
    setLog={setLog}
    /></div>
    <div className='md:hidden'><MobileDashboard user={user}
    plantData={plantData} 
    streak={streak} 
    growthStage={growthStage}
    today={today}
    log={log}
    logDate={logDate}
    setLog={setLog}
    /></div>
    </>
  )
}

export default Homepage