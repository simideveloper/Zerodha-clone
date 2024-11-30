import React from 'react'

function Awards() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5'>
          <img src="media/images/largestBroker.svg" alt=""/>
        </div>
        <div className='col-6 mt-5'>
          <h1>Largest stock broker in India</h1>
          <p className='mb-5'> 
            2+ million Zerodha clients contributes to over 15% of all the retail order volume in Infia daily by trading and investion in:
          </p>
          <div className='row'>
            <div className='col-6'>
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Comodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className='col-6'>
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct Mutual Funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media\images\pressLogos.png" className='mt-5' style={{width:"90%"}} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Awards