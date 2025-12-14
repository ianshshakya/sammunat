import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Whychooseus from "./components/Whychooseus";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <div className="font-sans text-gray-900 bg-black">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Cta/>
      <Whychooseus/>
      
      <Footer/>
    </div>
    </>
  );
}