import React from 'react'
import '../banner/Banner.css'
import banner from '../../assets/images/ban.png'
function Banner() {
  return (
    <div className='banner'>
      <img src={banner} alt="banner" width={1420} />
    </div>
  )
}

export default Banner
