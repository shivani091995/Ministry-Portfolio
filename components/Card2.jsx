import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/new1.jpg";
import Footer from "../components/Footer";
import PdfList from "../components/PdfList";
import '../components/PdfList.css';

function Card2() {
    return(
        <>
        <Navbar /> 
            <Hero
                cName="hero-mid" 
                heroImg={AboutImg}
                btnClass="hide"
            />
            <div className="pdf-list-container">
        <PdfList />
      </div>

      <hr></hr>
        <Footer/>
        
        </>
    )

}
export default Card2;