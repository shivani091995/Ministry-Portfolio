import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/new1.jpg";
import Footer from "../components/Footer";
import PdfList from "../components/PdfList";
import '../components/PdfList.css';
import NewsSection from "../components/NewsSection";



function Card1() {
    return(
        <>
        <Navbar /> 
            <Hero
                cName="hero-mid" 
                heroImg={AboutImg}
                title="News"
                btnClass="hide"
            />
            <div className="pdf-list-container">
   
        <NewsSection />
        
      </div>

      <hr></hr>
        <Footer/>
        
        </>
    )

}
export default Card1;