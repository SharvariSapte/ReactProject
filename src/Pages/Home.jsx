import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import PlantDashboard from '../components/PlantDashboard'
import Calendar from '../components/Calendar'
import StreakDisplay from '../components/StreakDisplay'
import CurrentDay from '../components/CurrentDay'
import DailyMessage from '../components/DailyMessage'
import SideBar from '../components/SideBar'
import Level from '../components/Level'
import Note from '../components/Note'

function Home(props) {
  const {user, plantData,streak,growthStage,today,log,logDate,setLog} = props
  return (
       <>
    
    <div className='homepage fade-in'>
    <div className='flex gap-2'>
    <div>
    <div className='p-8'>
    <Navbar img="usericon2.jpg" user={user.name} message="Consistency today, growth tomorrow"/>
       <div className='flex gap-4'>
         <PlantDashboard streak={streak} growthStage={growthStage} plantData={plantData}/>
         <div className='flex flex-col justify-between'>
           <div className='flex gap-3'>
            <CurrentDay day={today} log={log} logDate={logDate} setLog={setLog} streak={streak} user={user}/>
            <div className='flex flex-col gap-4'> 
              <StreakDisplay streak={streak} day={today} />
              <Level growthStage={growthStage} plantData={plantData}/>
            </div>
             <Note />
            </div>
            <DailyMessage />
            <Calendar log={log} logDate={logDate} setLog={setLog}/>
            </div>
          </div>
    </div>
    </div>
    
<div>
    <SideBar growthStage={growthStage}/>
    </div>
    </div>
    </div>
    </>
  )
}

export default Home
