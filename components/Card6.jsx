import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutImg from "../assets/new1.jpg";
import Footer from "./Footer";
import '../components/PdfList.css';
import AttemptQuiz from "./quiz/AttemptQuiz";

function Card6() {
    return(
        <>
            {/* <Hero
                cName="hero-mid" 
                heroImg={AboutImg}
                btnClass="hide"
            /> */}
            <div className="pdf-list-container">
        <AttemptQuiz></AttemptQuiz>
      </div>

      <hr></hr>
        <Footer/>
        
        </>
    )

}
export default Card6;