import React from 'react'
import Navbar from './components/shared/Navbar'
import Landing from './components/shared/Landing'
import Listings from './features/product/Listings'
import Section from './layouts/Section'




function App() {
  

  return (
    <div>
   <Navbar/>
   <Landing/>
   <Listings/>
   <Section/>
    </div>
  )
}

export default App
