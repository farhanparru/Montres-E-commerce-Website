import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Landing from "./components/shared/Landing";
import Listings from "./features/product/Listings";
import BrandNew from "./layouts/BrandNew";
import Form from "./components/ui/WatheForm";
import ChatRobot from "./components/ui/ChatRobot";
import WatchBrand from "./layouts/WatchBrand";
import AddSection from "./layouts/AddSection";
import PremiumBrands from "./layouts/PremiumBrands";
import Register from "./features/auth/Registerpage";
import LoginPage from "./features/auth/LoginPage";
import CustomerReviews from "./components/ui/CustomerReviews";
import Footer from "./components/shared/Footer";
import JustforyouWatch from "./components/ui/JustforyouWatch";
import ItemCart from "./features/cart/ItemCart";

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/register", "/login"];
  const showNavbar = !hideNavbarPaths.includes(location.pathname.toLowerCase());

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <>
              <Landing />
              <Listings />
              <AddSection />
              <BrandNew />
              <Form />
              <ChatRobot />
              <WatchBrand />
              <PremiumBrands />
              <JustforyouWatch />
              <CustomerReviews />
             
            </>
          }
        />
        <Route path="/cart" element={<ItemCart />} />
        
      </Routes>
       <Footer />
    </div>
  );
}

export default App;
