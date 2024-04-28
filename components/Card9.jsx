import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutImg from "../assets/new1.jpg";
import Footer from "./Footer";
import '../components/PdfList.css';
import { GetQuestionsFromQuiz } from "./quiz/GetQuestionsFromQuiz";

function Card9() {
    return(
        <>
            {/* <Hero
                cName="hero-mid" 
                heroImg={AboutImg}
                btnClass="hide"
            /> */}
            <div className="pdf-list-container">
        <GetQuestionsFromQuiz/>
      </div>

      <hr></hr>
        <Footer/>
        
        </>
    )

}
export default Card9;