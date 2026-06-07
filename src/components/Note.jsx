import React, { useState } from 'react'

const Note = () => {
  const [data, setData] = useState("")
  const note = (e) =>{
    setData(e.target.value)
    console.log(data)
  }
  const submitHandler = (e)=>{
    e.preventDefault();
  }

  return (
    <div className='bg-black/30 ring-white/60 ring-1 h-full w-full rounded-xl backdrop-blur-[2px] flex flex-col gap-4 items-center p-2 px-3 text-white'>
        <div>Notes</div>
        <textarea name="note" onChange={note} value={data} placeholder="Write here..." className='p-4 bg-black/35 h-[80%] w-[100%] rounded-xl'/>
    </div>
  )
}

export default Note