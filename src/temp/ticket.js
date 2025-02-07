import React from 'react'

function ticket(props) {
    return (
        <div className='ticket'>

            <h3>Jackpot</h3>
            <img src="/ticket1.png" className="img-logo" alt="Opsol Logo" width="100" height="100" />
            <h2>100 ETH</h2>
            <p className='p-tag'>18:06:00 time left</p>
            
        </div>
    );
}

export default ticket