import React from 'react'
import { useSelector } from 'react-redux';

function Coin() {
    const value = useSelector((state) => state.counter.value)
  return (
    <div>
        <span className='value'>Coin: {value}</span>
    </div>
  )
}

export default Coin;