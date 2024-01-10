import React from 'react'
import { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmtChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "inr",
    amtDisable = false,
    currencyDisable = false,
    classname = ""
}) {
    const amtId = useId()

    return (
        <div className={`bg-white rounded-lg mx-12 my-5 px-7 py-3 text-sm flex justify-between ${classname}`}>
            {/* left side of the InputBox */}
            {/* it has a label and an amt */}
            <div className='w-1/2'>
                <label 
                htmlFor={amtId}
                className='text-black/40 mb-2 inline-block'>{label}</label>
                <input type="number" 
                id={amtId}
                placeholder='Amount'
                className='outline-none bg-transparent w-full py-1.5'
                disabled={amtDisable}
                value={amount}
                onChange={(e) => onAmtChange && onAmtChange(Number(e.target.value))}
                />
            </div>

            {/* right side of the InputBox */}
            {/* it has a label and a dropdown for currencies */}
            <div className='w-1/8 flex flex-col'>
                <label className='text-black/40 mb-2 inline-block'>Currency Type</label>
                <select
                className='rounded-lg p-2 bg-gray-200 cursor-pointer outline-none'
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
                >
                    {currencyOption.map((index) => (
                        <option 
                        // remember the key in loops in React
                        key={index}
                        value={index}>{index}</option>
                    ))}

                </select>
            </div>


        </div>
    )
}

export default InputBox