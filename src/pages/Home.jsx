import React from 'react'
import Hero from '../components/hero/Hero'
import Feature from '../components/feature/Feature'
import Ads from '../components/ads/Ads'
import Products from '../components/products/Products'
import Banner from '../components/banner/Banner'
import Services from '../components/services/Services'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Feature/>
      <Ads/>
      <Products/>
      <Banner/>
      <Services/>
    </div>
  )
}

export default Home
