import * as React from "react";
import Navbar from "../pages/Navbar";
import Hero from "../pages/Hero";
import AboutMe from "../pages/AboutMe";
import Experience from "../pages/Experience";
import PersonalCTA from "../pages/PersonalCTA";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      {/* <PersonalCTA /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
