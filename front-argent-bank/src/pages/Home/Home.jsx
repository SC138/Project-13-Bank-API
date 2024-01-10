import { NavBar } from "../../components/NavBar.jsx";
import { Hero } from "../../components/Hero.jsx";
import { Features } from "../../components/Features.jsx";
import { Footer } from "../../components/Footer.jsx";

export function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

// test