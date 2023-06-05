import React from 'react'

function Random({min, max}) {
    const calc = (Math.floor(Math.random() * (max - min + 1) + min))
    return (
    <div className='flex border-2 border-black ml-10 mb-2'><p>Random value between {min} and {max} = {calc}</p></div>
  )
}

export default Random