import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/new1.jpg";
import Footer from "../components/Footer";
import Gallery from "./Gallery";


import Masonry from "react-responsive-masonry"



function Card3() {
    return(
        <>
        <Navbar /> 
            <Hero
                cName="hero-mid" 
                heroImg={AboutImg}
                // title="Captured Moments"
                btnClass="hide"
            />
            
            <Gallery>
            </Gallery>

      <hr></hr>
        <Footer/>
        
        </>
    )

}
export default Card3;