import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutImg from "../assets/new1.jpg";
import Footer from "./Footer";
import '../components/PdfList.css';
import { AddQuestion } from "./quiz/AddQuestion";

function Card8() {
    return(
        <>
            {/* <Hero
                cName="hero-mid" 
                heroImg={AboutImg}
                btnClass="hide"
            /> */}
            <div className="pdf-list-container">
        <AddQuestion></AddQuestion>
      </div>

      <hr></hr>
        <Footer/>
        
        </>
    )

}
export default Card8;