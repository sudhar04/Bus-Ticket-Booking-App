import React from 'react'
import Hero from './Hero.jsx'
import Search from './Search.jsx'
import Category from './Category.jsx'
import Offer from './Offer.jsx'

const HomeContainer = () => {
  return (
    <main className="w-full overflow-x-hidden">
       
        <Hero />
        <Search />
        <Category />
        <Offer />
    </main>
  )
}

export default HomeContainer
