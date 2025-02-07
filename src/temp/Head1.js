import React from 'react'


const header = (props) => {
  return (
    <div className='Head' style={{ color: "white" }}>
         <img src="/img3.png" className="img-logo" alt="Opsol Logo" width="80" height="80"/>
        <h1 className='h1-tag'>Opsol lottery prize pool</h1>
        <h2 className='h1-tag'>12,003,333 ETH</h2>
        <h3 className='h3-tag'>4000$</h3>
    </div>
  )
}

export default header