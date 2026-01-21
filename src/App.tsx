import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-gray-800 antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
