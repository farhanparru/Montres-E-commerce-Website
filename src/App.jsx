import React from 'react'
import Navbar from './components/shared/Navbar'
import Landing from './components/shared/Landing'
import Listings from './features/product/Listings'
import Section from './layouts/Section'
import BrandNew from './layouts/BrandNew'
import Form from './components/ui/WatheForm'
import ChatRobot from './components/ui/ChatRobot'
import WatchBrand from './layouts/WatchBrand'



function App() {
  

  return (
    <div>
   <Navbar/>
   <Landing/>
   <Listings/>
   <Section/>
   <BrandNew/>
   <Form/>
   <ChatRobot/>
   <WatchBrand/>
    </div>
  )
}

export default App
