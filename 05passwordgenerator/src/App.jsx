import { useEffect } from 'react'
import { useRef } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [checknum, setChecknum] = useState(false)
  const [checkchar, setCheckchar] = useState(false)
  const passwordRef = useRef(null)


  // this will generate a random password acc to user preferences
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstvwxyz"

    // if user has checked the num checkbox true
    if (checknum) str += "0123456789"
    // if user has checked the char checkbox true
    if (checkchar) str += "!@#$%^&*()_-=+{}[]`~/?,.<>;:"

    // loop to fetch characters == length that user has seleced
    // this loop will run --> the length times.
    for(let i = 1; i<= length; i++){
      let randomNum = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(randomNum)

      // stored in the var password
      setPassword(pass)
    }

  }, [length, checknum, checkchar])

  // copy to clipboard the password (value)
  const copyPass = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  // it will sync component with external system
  // helps to run the passwordGenerator function
  useEffect(() => {
    passwordGenerator()
  }, [length, checknum, checkchar, passwordGenerator])

  return (
    <>
      <div className='h-screen w-full flex flex-col items-center bg-slate-900'>
        <h1 className='text-white text-3xl pt-5'>Password Generator !</h1>

        <div className='flex flex-wrap items-center justify-center mt-10 h-48 w-1/2 rounded-md bg-slate-800 p-5'>

          {/* password container */}
          <input type="text"
          value={password}
          placeholder='password'
          ref={passwordRef}
          readOnly
          className='p-3 w-3/4 h-11 rounded-lg px-2 text-orange-600 font-semibold selection:bg-blue-300/70'
          />
          {/* on click of this button the value in the input section will copied to clipboard due to copyPass() ref */}
          <button
          onClick={copyPass}
          className='outline-none bg-blue-700 shrink-0 ml-4 h-11 rounded-lg text-white px-3 py-0.5'
          >COPY</button>

          <div className='w-[90%] h-1/3 flex items-center px-2 gap-10 text-orange-600 font-semibold'>
            <div>

              <input type="range"
                min={6}
                max={50}
                defaultValue={length}
                value={length}
                // 'e' hold the returned value of setLength and pass it to length
                onChange={(e) => {setLength(e.target.value)}}
                className='cursor-pointer mr-2'
              />
              <label>Length : ({length})</label>
            </div>
            <div>
              <input type="checkbox" 
              id="numberInput"
              defaultChecked={checknum}
              // on click of the checkbox the value gets altered
              onChange={() => setChecknum(prev => !prev)}
              className='mr-1'
              />
              <label>Numbers</label>
            </div>
            <div>
              <input type="checkbox" 
              id="charInput"
              defaultChecked={checkchar}
              // on click of the checkbox the value gets altered
              onChange={() => setCheckchar(prev => !prev)}
              className='mr-1'
              />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
