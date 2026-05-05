import React from 'react'

const PlantDashboard = () => {
  const plantData =[
    {
    img:'/plant1.png',
    message:'oh no! The plant has withered. What went wrong? (·•᷄‎ࡇ•᷅ )'
    },
      {
        img:'/plant2.png',
        message: 'Your tiny sapling is growing bigger ദ്ദി(˵ •̀ ᴗ - ˵ )'
      },
      {
        img:'plant3.png',
        message: 'your plant is healthy and growing (˶ᵔ ᵕ ᵔ˶)'
      },
      {
        img:'/plant5.png',
        message: 'The flowers have bloomed! ◝(ᵔᗜᵔ)◜'
      }]
  return (
    <>
    <div className="
    relative rounded-xl h-[450px] max-h-[450px] w-[25%] min-w-[280px] shadow-lg ring-2 ring-white/30 
    flex flex-col items-center justify-around bg-gradient-to-b from-black/60"
    >
    <h1 className='text-center text-white text-xl font-bold absolute top-10'>{plantData[3].message}</h1>
    <img src={plantData[3].img} className='scale-[0.7] absolute bottom-0'/>
    </div>   
</>
)
}

export default PlantDashboard