import React from 'react'

const Buttons = ({btnColor, setColor}) => {
return (
    <button
    className='px-3 py-1 rounded-full text-white'
    style={{backgroundColor: btnColor}}
    onClick={() => setColor({btnColor})}
    >{btnColor}</button>
)
}

export default Buttons