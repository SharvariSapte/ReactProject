import React from 'react'

const Note = () => {
  return (
    <div className='bg-black/30 ring-white/60 ring-1 h-[140%] rounded-xl backdrop-blur-[2px] flex flex-col gap-4 items-center p-2 px-3 text-white'>
        <div>Notes</div>
        <textarea name="note" placeholder="Write here..." className='p-4 bg-black/35 h-[80%] w-[100%] rounded-xl'/>
    </div>
  )
}

export default Note