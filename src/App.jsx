import "./App.css";
import Footer from "./Components/Footer";

// Setting Up Lenis
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Subscribe from "./Components/Subscribe";
import FAQs from "./Components/FAQs";
import Wonders from "./Components/Wonders";
import Explore from "./Components/Explore";
import Video from "./Components/Video";
import Popular from "./Components/Popular";
import Header from "./Components/Header";

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
      <Header />
      <Popular />
      <Video />
      <Explore />
      <Wonders />
      <FAQs />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
