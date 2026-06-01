import React from 'react'

const Level = (props) => {
    const {growthStage, plantData} = props
  return (
     <div className=
     'h-[50%] w-[100%] bg-black/50 text-white ring-1 backdrop-blur-[2px] ring-white/60 flex gap-5 px-6 items-center rounded-xl'>
        <span className=
        'flex justify-center items-center h-[60%] w-[40%] text-2xl bg-black/30 rounded-full'>🌱</span>
        <div>
           <div className='text-md font-semibold'>Level {growthStage()}</div>
           <div className='text-sm'>{plantData[growthStage()].level}</div>
        </div>  
        </div>
  )
}

export default Level