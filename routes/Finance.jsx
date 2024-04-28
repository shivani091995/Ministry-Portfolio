import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/new1.jpg";
import Footer from "../components/Footer";





function Finance() {
    return(
        <>
        <Navbar /> 
            <Hero
                cName="hero-mid" 
                heroImg={AboutImg}
                title="Service"
                btnClass="hide"
            />
            <div className="pdf-list-container">
        
      </div>

      <hr></hr>
        <Footer/>
        
        </>
    )

}
export default Finance;