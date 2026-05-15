import React, { useState, useEffect } from 'react'
import { Volume2 } from 'lucide-react';
import { VolumeOff } from 'lucide-react';
const Navbar = (props) => {
        const [greeting, setGreeting] = useState("")
        useEffect(()=>{
            const updateGreeting = () => {
            const hour = new Date().getHours();
            if(hour >= 5 && hour <12){
                setGreeting("Good Morning")
            } else if(hour >= 12 && hour <17){
                setGreeting("Good Afternoon")
            } else if(hour >=17 && hour <=21){
                setGreeting("Good Evening")
            } else{
                setGreeting("Good Night");
            }
        };
             updateGreeting();
            const interval = setInterval(updateGreeting, 60000);
            return () => clearInterval(interval);
        },[]);
  return (
    <>
    <div className='flex justify-between w-full mb-9'>
    <div>
    <h1 className='text-white font-semibold text-2xl'>{greeting}, {props.user} ! 🌿</h1>
    <h3 className='text-white font-semibold text-xl'>{props.message}</h3>
    </div>
    <div className='flex justify-between gap-10 items-center'>
    <div className='bg-black/30  text-white rounded-full h-[38px] w-[148px] flex items-center justify-evenly drop-shadow-xl ring-2 ring-[#b1d421] text-sm ring-offset-[0.5px] ring-offset-black/80'><Volume2 strokeWidth={3} size={20}/>Lorem</div>
        <img src={props.img} className='h-[50px] w-[50px] rounded-full ring-2 ring-[#b1d421] drop-shadow-xl'></img>
    </div>
    </div>
    </>
  )
}

export default Navbar

