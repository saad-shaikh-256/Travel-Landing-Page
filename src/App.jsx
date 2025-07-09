import "./App.css";
import Footer from "./Components/Footer";

// Setting Up Lenis
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Subscribe from "./Components/Subscribe";
import FAQs from "./Components/FAQs";

function App() {
  // Lenis Setup
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <FAQs />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
