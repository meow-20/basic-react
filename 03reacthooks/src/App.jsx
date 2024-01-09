import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [chai, setChai] = useState(0)

  function add(){
    if(chai<20)
    // here 'c' is fetching the previous value of the chai and then updating (increasing) it by 1.
  // such that the react don't take it as batch process and combines it.
    setChai(c => c + 1)
  }
  function del(){
    if(chai>0)
    setChai(c => c - 1)
  }

  return (
    <>
      <h1>Number of Chai today : {chai}</h1>

      <button
      onClick={add}
      >Add Chai</button>

      <button
      onClick={del}
      >Remove Chai</button>
    </>
  )
}

export default App
