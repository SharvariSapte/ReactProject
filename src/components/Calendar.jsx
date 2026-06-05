import HeatMap from '@uiw/react-heat-map';
import React, { useState } from 'react'

const Calendar = (props) => {
  const {log} = props

  return (
   <>
   <div className='h-full px-2 w-full overflow-x-auto bg-black/40 rounded-xl flex justify-center items-center pt-5 ring-1 ring-white/60 backdrop-blur-[2px]'>
     <div className='w-[1200px]'><HeatMap className="w-full" value={log} height={140} legendCellSize={0}
        startDate={new Date('2026/01/01')} style={{ color: 'white'}}
      panelColors={{
        0:  '#FBF4C8',
        7:  '#b2d521',
        14: '#b2d521',
        21: '#b2d521',
        28: '#b2d521',
        35: '#b2d521'
      }}
     /></div>
   </div>
   </>
  )
}

export default Calendar