import React, { useEffect, useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const mouseevent = (event) => {
    const newX = ((event.clientX / window.innerWidth) - 0.5) * -400
    setX(newX)
    const newY = ((event.clientY/ window.innerHeight) - 0.5) * -35
    setY(newY)
  }

    const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = "/bg.png";

    img.onload = () => {
      setLoaded(true);
    };
  }, []);

  return (
    <>
    {!loaded && (
        <div className="h-full flex items-center justify-center">
          <div className="animate-spin h-10 w-10 border-4 border-gray-300 border-t-black rounded-full" />
        </div>
      )}
    {loaded && (
    <div
      className='h-screen w-screen flex justify-center items-center signup overflow-hidden relative'
      onMouseMove={mouseevent}>

      <div
        style={{
          position: 'absolute',
          top: '-2vh',
          left: '-35vw',
          width: '200vw',
          height: '110%',
          backgroundImage: 'url(/bg.png)',  
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translate(${x}px, ${y}px)`,
          transition: 'transform 2s ease-out',
        }}
      />

      <div className='relative z-10 flex flex-col gap-[70px] items-center'>
        <h1 className='text-6xl text-white font-bold text-center flex flex-col gap-5'>
          <span className='text-5xl'>Ready to grow</span>
          <div>THE <span className='fnt'>Plant</span> OF YOUR HABIT?</div>
        </h1>
        <Link to='/Form'>
          <button className='h-[80px] w-[250px] text-3xl text-white rounded-xl font-bold bg-black/30 ring-1 ring-white/50 hover:scale-[1.02] active:scale-[0.98]'>
            Let's Sow!
          </button>
        </Link>
      </div>

    </div>
      )}
      </>
  )
}

export default Signup