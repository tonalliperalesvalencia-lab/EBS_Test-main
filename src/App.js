import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Title from "./Components/Title";
import Mission from "./Components/Mission";
import Window from "./Components/Window";
import Analytics from "./Components/Analytics";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Catalogue from "./Components/Catalogue";
import Repair from "./Components/Repair";
import PropUp from "./Components/PropUp";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";

function App() {
  const [page, setPage] = useState("home");

  if (page === "catalogue") {
    return <Catalogue onBack={() => { setPage("home"); window.resetScroll?.(); }} onNavigate={setPage}/>;
  }

  if (page === "repair") {
    return <Repair onBack={() => { setPage("home"); window.resetScroll?.(); }} />;
  }

  if (page === "propup") {
    return <PropUp onBack={() => { setPage("home"); window.resetScroll?.(); }} />;
  }

  if (page === "faq") {
    return <FAQ onBack={() => { setPage("home"); window.resetScroll?.(); }} />;
  }

  if (page === "contact") {
    return <Contact onBack={() => { setPage("home"); window.resetScroll?.(); }} />;
  }

  return (
    <div>
      <Navbar onNavigate={setPage} />
      <Title />
      <Mission />
      <Window onNavigate={setPage} />
      <Analytics />
      <Testimonials />
      <Footer onNavigate={setPage} />
    </div>
  );
}

export default App;