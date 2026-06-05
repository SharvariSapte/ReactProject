import React, { useEffect, useState } from 'react'
import './Form.css'
import { Link } from 'react-router-dom'
const Form = (props) => {
  const {user, setUser} = props
  const submitHandler = (e)=>{
    e.preventDefault();
  }
 const inputHandler = (e) =>{
  setUser({...user, [e.target.name] :e.target.value})
 }
 useEffect(() => {
   console.log(user)
   localStorage.setItem('user',JSON.stringify(user))
 }, [user])
 
  return (
    <>
    <div className='formbg h-screen w-full flex justify-center items-center fade-in'>

      <form onSubmit={submitHandler} className='flex flex-col gap-8 enter'>
        <div><label htmlFor="name" className='text-white text-2xl'>What's your name?</label></div>
        <input type="text" name="name" value={user.name} onChange={inputHandler}
        className='h-[40px] rounded-md px-5 w-[40vw] min-w-[300px] bg-white/80'/>

       <div><label htmlFor="habit" className='text-white text-2xl'>What Habit do you want to sow?</label></div>
        <input type="text" name="habit" value={user.habit} onChange={inputHandler}
        className='h-[40px] rounded-md px-5 w-[40vw] min-w-[300px] bg-white/80'/>
        
        <Link to='/Home'><div><button className='h-[50px] w-[15vw] min-w-[130px] text-white bg-black/30 ring-1 border rounded-lg hover:scale-[1.02] active:scale-[0.98]'>Done!</button></div></Link>
        </form>
    </div>
    </>
  )
}

export default Form
//3. Conditional Redirects (Navigate component)
//The <Navigate> component is used when you want to redirect a user immediately upon a component rendering—for example, sending an unauthenticated user to a login page. 
//GeeksforGeeks
//import { Navigate } from "react-router-dom";
//
//function PrivatePage({ user }) {
//  if (!user) {
//    return <Navigate to="/login" replace />;
//  }
//  return <div>Welcome to the secret area!</div>;
//}