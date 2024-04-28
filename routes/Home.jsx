import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel"; 
import HomeImg from "../assets/new1.jpg";
import Homecontent from "../components/HomeContent";
import News from "../components/News";
import Footer from "../components/Footer";
import "./bar.css";
import Logo from "../assets/digi.png";
import Logo1 from "../assets/dig.png";
import SecondLogo from "../assets/govt.png";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <div class="top-bar">
        <div class="navbar-left">
          <h1 className="navbar-logo">
            <img alt="minImg" src={SecondLogo} />
          </h1>
        </div>
        <div class="navbar-right">
          <h1 className="navbar-logo1" id="second">
            <img alt="minImg" src={Logo} />
          </h1>
          <h1 className="navbar-logo1" id="second">
            <img alt="minImg" src={Logo1} />
          </h1>
        </div>
      </div>
      <br></br>
      <Carousel />
      
      {/* <Hero
        cName="hero"
        heroImg={HomeImg}
      /> */}
      
      <News />
      <Homecontent />
     
      <Footer/>
    </div>
  );
}

export default Home;
