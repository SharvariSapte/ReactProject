import HeatMap from '@uiw/react-heat-map';
import React, { useState } from 'react'

const Calendar = (props) => {
  const {log} = props

  return (
   <>
   <div className='h-[160px] px-2 min-w-[700px] bg-black/40 rounded-xl flex justify-center items-center pt-5 ring-1 ring-white/60 backdrop-blur-[2px]'>
     <HeatMap value={log} width={700} height={140} legendCellSize={0}
        startDate={new Date('2026/01/01')} style={{ color: 'white'}}
      panelColors={{
        0:  '#FBF4C8',
        7:  '#b2d521',
        14: '#b2d521',
        21: '#b2d521',
        28: '#b2d521',
        35: '#b2d521'
      }}
     />
   </div>
   </>
  )
}

export default Calendar