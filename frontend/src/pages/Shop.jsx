import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollection from '../components/NewCollections/NewCollection'
import NewsLetter from '../components/NewLetter/NewsLetter'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  )
}

export default Shop
