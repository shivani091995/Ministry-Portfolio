import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/viksit-bharat-bnr.jpg";
import Footer from "../components/Footer";
import EduDashboard from "../components/EduDashboard";
import './Education.css'; // Import the CSS file

function Education() {
    return(
        <div className="education-container"> {/* Add the container div with the CSS class */}
            <Navbar /> 
            <Hero
                cName="hero-mid" 
                heroImg={AboutImg}
                title=""
                btnClass="hide"
            />
            <EduDashboard />
            <Footer/>
        </div>
    );
}

export default Education;
