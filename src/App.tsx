import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StandardSearch from "./pages/StandardSearch";
import Listing from "./pages/Listing";
import MainPage from "./pages/MainPage";
import ImageGallery from "./components/ImageGallery";
import { PricingProvider } from "./components/PricingContext"; // Adjust path as necessary

function App() {
  return (
    // <Router>
      <PricingProvider>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/Search/:city_name' element={<StandardSearch />} />
          <Route path='/listing/:id' element={<Listing />} />
          <Route path="/gallery" element={<ImageGallery />} />
        </Routes>
      </PricingProvider>
    // </Router>
  );
}

export default App;
