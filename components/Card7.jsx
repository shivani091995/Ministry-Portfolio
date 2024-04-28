import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutImg from "../assets/new1.jpg";
import Footer from "./Footer";
import '../components/PdfList.css';
import { GetAllQuiz } from "./quiz/GetAllQuiz";

function Card7() {
    return(
        <>
            {/* <Hero
                cName="hero-mid" 
                heroImg={AboutImg}
                btnClass="hide"
            /> */}
            <div className="pdf-list-container">
        <GetAllQuiz></GetAllQuiz>
      </div>

      <hr></hr>
        <Footer/>
        
        </>
    )

}
export default Card7;