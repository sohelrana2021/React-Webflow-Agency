import Banner from "./components/Banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Work from "./components/Work/Work";
import Projects from "./components/Projects/Projects";
import Service from "./components/Service/Service";
import Testimonial from "./components/testimonial/Testimonial";
import Frequently from "./components/frequently/Frequently";
import Contract from "./components/contract/Contract";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import FooterBttom from "./components/FooterBootom/FooterBttom";


function App() {
  return (
   <>
   <Navbar/>
    <Banner/>
    <Work/>
    <Projects/>
    <Service/>
    <Testimonial/>
    <Frequently/>
    <Contract/>
    <Blog/>
    <Footer/>
    <FooterBttom/>
   </>
  );
}

export default App;
