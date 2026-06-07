import { Quote } from 'lucide-react';
import React, { useEffect, useState } from 'react'

 const DailyMessage = () => {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v2/quoteoftheday", {
      method: "GET",
      headers: {
        "X-API-Key": "dWdNuXzoBB0kJOmdPy7inaVtRNmuXwzxkgQCglSf",
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMsg(data[0].quote);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='w-full h-full ring-1 ring-white/60 flex justify-center items-center bg-black/50 backdrop-blur-[2px] rounded-md text-white p-5 text-center text-sm'>
        <Quote className='mr-3'/>{msg}
    </div>
  )
}

export default DailyMessage