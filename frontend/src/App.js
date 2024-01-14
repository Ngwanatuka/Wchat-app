import React from 'react'
import Homepage from './Homepage'
import './App.css'
import Athentication from './Athentication/Athentication'
import { useSelector } from 'react-redux'
import UserPropfile from './components/UserProfile'


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
    {/* <UserPropfile /> */}
    </div>
  )
}

export default App