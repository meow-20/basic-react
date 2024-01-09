import { useState } from 'react'
import Buttons from './Buttons'


function App() {
  const [color, setColor] = useState("seagreen")

  return (
    <div className='w-full h-screen duration-200'
    style={{ backgroundColor: color}}>

      

      <div className='fixed bottom-11 rounded-full inset-x-12 flex flex-wrap gap-5 justify-center p-2 bg-slate-50'>

        <button
          className='px-5 py-2 align-middle rounded-full text-slate-900'
          style={{backgroundColor: "green"}}
          onClick={() => setColor("green")}
          >green</button>

        <button
          className='px-5 py-2 align-middle rounded-full text-slate-900'
          style={{backgroundColor: "powderblue"}}
          onClick={() => setColor("powderblue")}
          >powderblue</button>
          
          <button
          className='px-5 py-2 align-middle rounded-full text-slate-900'
          style={{backgroundColor: "violet"}}
          onClick={() => setColor("violet")}
          >violet</button>
          
          <button
          className='px-5 py-2 align-middle rounded-full text-slate-900'
          style={{backgroundColor: "lightslategrey"}}
          onClick={() => setColor("lightslategrey")}
          >lightslategrey</button>
          
          <button
          className='px-5 py-2 align-middle rounded-full text-slate-900'
          style={{backgroundColor: "mistyrose"}}
          onClick={() => setColor("mistyrose")}
          >mistyrose</button>
          
          <button
          className='px-5 py-2 align-middle rounded-full text-slate-900'
          style={{backgroundColor: "maroon"}}
          onClick={() => setColor("maroon")}
          >maroon</button>
          
          <button
          className='px-5 py-2 align-middle rounded-full text-slate-900'
          style={{backgroundColor: "lavender"}}
          onClick={() => setColor("lavender")}
          >lavender</button>
          
          <button
          className='px-5 py-2 align-middle rounded-full text-slate-900'
          style={{backgroundColor: "skyblue"}}
          onClick={() => setColor("skyblue")}
          >skyblue</button>
          
          <button
          className='px-5 py-2 align-middle rounded-full text-slate-900'
          style={{backgroundColor: "saddlebrown"}}
          onClick={() => setColor("saddlebrown")}
          >saddlebrown</button>
      </div>
    </div>
  )
}

export default App
