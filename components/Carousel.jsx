import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import Img1 from "../assets/1.jpeg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.jpeg"; 
// import Img4 from "../assets/4.jpeg";
import NextArrow from "./NextArrow";


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings}>
      <div>
        <img alt="carousel-img-2" src={Img1} />
      </div>
      
      <div>
        <img alt="carousel-img-1" src={Img2} />
      </div>
      
      <div>
        <img alt="carousel-img-2" src={Img3} />
      </div>
      {/* <div>
        <img alt="carousel-img-2" src={Img4} />
      </div> */}
      
    </Slider>
  );
};

export default Carousel;
