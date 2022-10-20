import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductsList from "../components/products/ProductsList";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <ProductsList />
      <Footer />
    </div>
  );
};

export default Home;
