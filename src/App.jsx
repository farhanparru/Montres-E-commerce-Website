import React from 'react'
import Navbar from './components/shared/Navbar'
import Landing from './components/shared/Landing'
import Listings from './features/product/Listings'




function App() {
  

  return (
    <div>
   <Navbar/>
   <Landing/>
   <Listings/>
    </div>
  )
}

export default App
