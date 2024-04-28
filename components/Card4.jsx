import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/new1.jpg";
import Footer from "../components/Footer";
import '../components/PdfList.css';
import CreateQuiz from "./quiz/CreateQuiz";

function Card4() {
    return(
        <>
      
            {/* <Hero
                cName="hero-mid" 
                heroImg={AboutImg}
                btnClass="hide"
            /> */}
            <div className="pdf-list-container">
        <CreateQuiz/>
      </div>

      <hr></hr>
        <Footer/>
        
        </>
    )

}
export default Card4;