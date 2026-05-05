import React, { useState, useEffect } from 'react'

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
    <div>
        <img src={props.img} className='h-[50px] w-[50px] rounded-full bg-white'></img>
    </div>
    </div>
    </>
  )
}

export default Navbar

