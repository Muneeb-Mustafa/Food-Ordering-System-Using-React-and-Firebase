import React from "react";  
import Hero from "../../components/HeroSection/Hero"; 
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import Section3 from "../../components/Section3/Section3";
import Section4 from "../../components/Section4/Section4"; 
import CardImageSlider from "../../components/ImageSlider/ImageSlider"; 

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <PopularProducts />
      <Section3 />
      <Section4 />
      <CardImageSlider />
    </main>
  );
}

export default Home;
