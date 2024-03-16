import { Toaster } from "react-hot-toast";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Projects from "../components/Projects";

function Main() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 8000,
          style: {
            backgroundColor: "#373b41",
            color: "#fff",
            fontSize: "1.5rem",
          },
        }}
      />
    </>
  );
}

export default Main;
