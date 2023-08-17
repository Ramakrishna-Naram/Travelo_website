import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutimg from "../images/img-2.jpg";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";

function About (){
    return(
        <>
        <Navbar />
    <Hero 
    cName="hero-mid"
    heroImg={Aboutimg}
    title="About"
    btnClass="hide"
    />
    <Aboutus />
    <Footer />
        </>
    );
    }
    
    export default About;