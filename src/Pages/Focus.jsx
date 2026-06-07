import React, { useEffect, useState } from 'react'
import "./Focus.css"
import { Info } from 'lucide-react';
const Focus = () => {
  const [focus, setFocus] = useState(10); 
  const [isRunning, setIsRunning] = useState(false);
  const [breaks, setBreaks] = useState(5);
  const [toggle, setToggle] = useState(true)
  const [modal, setModal] = useState(false)
  const bell = new Audio('/bell.mp3');
  const bell2 = new Audio('/focus.mp3');
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      if(toggle){
      setFocus(prev => {
        if (prev <= 1) {
          setToggle(false);
          bell.play();
          return 10;
        }
        return prev - 1;
      });
    }else if(!toggle){
       setBreaks(prev => {
        if (prev <= 1) {
          setToggle(true);
           bell2.play();
          return 5;
        }
        return prev - 1;
      });
    }
    }, 1000);

    return () => clearInterval(interval); 
  }, [isRunning, toggle]);

  const format = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

   const reset = () => {
    setIsRunning(false);
    setToggle(true);
    setFocus(1500);
    setBreaks(300);
  };
  
  return (
    <>
    <div className='bgi fade-in h-screen w-full' onClick={() =>{setModal(false)}}>
      <div className='h-full w-full flex flex-col justify-center gap-10 pt-16 items-center'>
        <div className={`h-[45%] aspect-square rounded-full ring-[1px] ring-white
        flex justify-center items-center ${isRunning? "text-[50px]" : "text-[40px]"} text-white font-serif ${isRunning? "glowing" : "shadow-2xl"}`}>
          {toggle ? format(focus) : format(breaks)}
        </div>
        <div className='text-[25px] font-serif text-white'>{isRunning ? (toggle ? "Focus( ◡̀_◡́)ᕤ" : "Take a Break (～￣▽￣)～"): "Ready to lock-in?"}</div>
        <div className='flex gap-11'>
        <button className='w-[100px] h-[45px] rounded-md 
        font-serif backdrop-blur-sm text-white ring-white ring-1
        bg-black/25' 
        onClick={()=>{setIsRunning(prev => !prev)}}>
          {isRunning ? "Pause" : "Start"}</button>
          <button className='w-[100px] h-[45px] rounded-md 
        font-serif backdrop-blur-sm text-white ring-white ring-1
        bg-black/25' 
        onClick={()=>{reset()}}>
          Reset</button>
      </div></div>
    </div>

    <div className='absolute top-5 right-5 rounded-full shadow-2xl shadow-black'>
          <button><Info color='white' size={24} className="hover:scale-[1.1]" onClick={() => {setModal(true)}}/></button>
    </div>
    {modal && <div className=
    'absolute top-10 right-10 rounded-md h-[280px] w-[220px] bg-white/30 p-5 font-mono text-sm flex flex-col justify-evenly'
    >
      The focus timer will Run for 25 Minutes followed by a break of 5 minutes to keep you going...
      <span>Reset whenever desired.</span>Good luck! 
      <span className='text-[10px]'>
        (click anywhere on the screen to close the dialog)
        </span>
        </div>}
    </>
  )
}

export default Focus