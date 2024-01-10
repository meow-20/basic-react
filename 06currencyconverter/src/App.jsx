import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amt, setAmt] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmt, setConvertedAmt] = useState(0)

  // Fetching currency info using custom hooks
  const info = useCurrencyInfo(from)

  // Fetching keys from that API
  const options = Object.keys(info)

  // swapping the contents in that InputBox
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmt(amt)
    setAmt(convertedAmt)
  }

  // converting amt acc to API's value
  const convert = () => {
    setConvertedAmt(amt * info[to])
  }

  return (
    <div className='w-full h-screen flex items-center justify-center bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>

      <div className='h-2/3 w-2/3 py-8 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>

        <form
          onSubmit={(e) => {
          // to prevent on directly submitting to some url
          e.preventDefault();
          convert();
          }}
        >
          {/* upper Box */}
          <div className='w-full mb-1'>
            <InputBox
            label="From"
            amount={amt}
            currencyOption={options}
            onCurrencyChange={(amt) => setAmt(amt)}
            selectCurrency={from}
            onAmtChange={(amt) => setAmt(amt)}
            />
          </div>

          {/* swap button */}
          <div className='relative w-full -top-2.5'>
            <button
            type='button'
            className='absolute h-10 w-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/50 rounded-md bg-blue-600 text-white px-2 py-0.5'
            onClick={swap}
            >SWAP</button>
          </div>

          {/* lower Box */}
          <div className='w-full mb-1'>
          <InputBox
            label="To"
            amount={convertedAmt}
            currencyOption={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amtDisable
            />
          </div>

          {/* conversion button */}
          <div className='flex justify-center'>
          <button type="submit" 
          className="w-[85%] bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()} </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default App


