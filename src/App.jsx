import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Form from './Pages/Form'
import Homepage from './Pages/Homepage'
import Focus from './Pages/Focus'
const App = () => {
  const userData = {
    name:'',
    habit:''
  }
   const [user, setUser] = useState(()=>{
      const saved = localStorage.getItem('user')
      return saved ? JSON.parse(saved) : userData
    });

  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup user={user}/>}/>
          <Route path='/Form' element={<Form user={user} setUser={setUser}/>}/>
          <Route path='/Home' element={<Homepage user={user}/>}/>
        <Route path='/Focus' element={<Focus/>}/>
      </Routes>
    </div>
  )
}

export default App