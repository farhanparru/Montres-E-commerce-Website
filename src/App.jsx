import React from "react";
import Navbar from "./components/shared/Navbar";
import Landing from "./components/shared/Landing";
import Listings from "./features/product/Listings";
import BrandNew from "./layouts/BrandNew";
import Form from "./components/ui/WatheForm";
import ChatRobot from "./components/ui/ChatRobot";
import WatchBrand from "./layouts/WatchBrand";
import AddSection from "./layouts/AddSection";
import PremiumBrands from "./layouts/PremiumBrands";

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Listings />
      <AddSection />
      <BrandNew />
      <Form />
      <ChatRobot />
      <WatchBrand />
      <PremiumBrands />
    </div>
  );
}

export default App;
