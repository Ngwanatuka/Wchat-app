import React from 'react'
import Homepage from './Homepage'
import './App.css'
import Athentication from './Athentication/Athentication'

function App() {
  const user = useSelector(state => state.user.user)
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