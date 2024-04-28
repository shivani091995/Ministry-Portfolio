import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/new1.jpg";
import Footer from "../components/Footer";
import { DefenceContent } from "../components/DefenceContent";
import NavigationBar from "../components/NavigationBar";



function Defence() {
    return(
        <>
<NavigationBar />
        <DefenceContent />
        {/* <Navbar /> 
            <Hero
                cName="hero-mid" 
                heroImg={AboutImg}
                title="Service"
                
                btnClass="hide"
            />
        <Footer/> */}
        </>
    )

}
export default Defence;