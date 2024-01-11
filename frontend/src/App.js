import React from 'react'
import Homepage from './Homepage'
import './App.css'
import Athentication from './Athentication/Athentication'
import { useSelector } from 'react-redux'


function App() {
  const user = useSelector(state => state.data.user.user)

  console.log(user)
  return (
    <div className='app'>
    {user ? (
      <Homepage />
    ) : (
      <Athentication />
    )}
    </div>
  )
}

export default App