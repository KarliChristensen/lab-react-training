import React from 'react'

function Random({min, max}) {
    const calc = (Math.floor(Math.random() * (max - min + 1) + min))
    return (
    <div className='flex border-2 border-black m-10'><p>Random value between {min} and {max} => {calc}</p></div>
  )
}

export default Random