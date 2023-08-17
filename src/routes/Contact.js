import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutimg from "../images/img-5.jpg";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";

function Contact (){
    return(
        <>
         <Navbar />
    <Hero 
    cName="hero-mid"
    heroImg={Aboutimg}
    title="Contact"
    btnClass="hide"
    />
    <Contactform />
    <Footer />
        </>
    );
}

export default Contact;