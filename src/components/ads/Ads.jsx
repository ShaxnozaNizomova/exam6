import React from 'react'
import '../ads/Ads.css'
function Ads() {
  return (
    <div className='ads'>
      <div className='ads__card1'>
          <p className='ads__text'>Everyday Fresh & <br />Clean with Our <br /> Products</p>
          <button className='ads__btn'>Shop more</button>
      </div>
      <div className='ads__card2'>
          <p className='ads__text'>Make your Breakfast <br />Healthy and Easy</p>
          <button className='ads__btn'>Shop more</button>
      </div>
      <div className='ads__card3'>
          <p className='ads__text'>The best Organic <br />Products Online</p>
          <button className='ads__btn'>Shop more</button>
      </div>
    </div>
  )
}

export default Ads
