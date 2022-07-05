import React from 'react'
import { Rings } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='loading'>
        <Rings color="#00BFFF" height={100} width={100} />
        <h1>Loading...</h1>
    </div>
  )
}

export default Loader