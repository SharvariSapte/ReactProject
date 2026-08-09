import { useEffect, useRef, useState } from 'react'
import './DesktopDashboard.css'
import Navbar from './Navbar'
import PlantDashboard from './PlantDashboard'
import Calendar from './Calendar'
import StreakDisplay from './StreakDisplay'
import CurrentDay from './CurrentDay'
import DailyMessage from './DailyMessage'
import SideBar from './SideBar'
import Level from './Level'
import Note from './Note'

function DesktopDashboard(props) {
  const {user, plantData,streak,growthStage,today,log,logDate,setLog} = props
   const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = "/background.png";

    img.onload = () => {
      setLoaded(true);
    };
  }, []);
  
  return (
       <>
    <div className={`${loaded ? "homepage" : ""} fade-in h-screen w-full`}>
      {!loaded && (
        <div className="h-full flex items-center justify-center">
          <div className="animate-spin h-10 w-10 border-4 border-gray-300 border-t-black rounded-full" />
        </div>
      )}
      {loaded&&(
    <div className='flex justify-between'>
    <div className='p-8 max-w-[1080px]'>
    <Navbar img="usericon2.jpg" user={user.name} message="Consistency today, growth tomorrow"/>

<div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] grid-rows-5 gap-4 w-full max-h-[70vh] px-2">
    <div className="row-span-5">
       <PlantDashboard streak={streak} growthStage={growthStage} plantData={plantData}/>
    </div>
    <div className="row-span-2">
     <CurrentDay day={today} log={log} logDate={logDate} setLog={setLog} streak={streak} user={user}/>
    </div>
    <div >
      <StreakDisplay streak={streak} day={today} />
      </div>
    <div className="col-start-3 row-start-2">
      <Level growthStage={growthStage} plantData={plantData}/>
      </div>
    <div className="col-span-2 col-start-2 row-start-3">
      <DailyMessage />
    </div>
    <div className="col-span-3 row-span-2 col-start-2 row-start-4">
       <Calendar log={log} logDate={logDate} setLog={setLog}/>
    </div>
    <div className="row-span-3 col-start-4 row-start-1">  <Note /></div>
</div>
</div>
<div className='hidden min-[1140px]:block'><SideBar growthStage={growthStage}/></div>
</div>)}
    </div>
    </>
  )
}

export default DesktopDashboard
