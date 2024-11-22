import About from "./(components)/About";
import Contact from "./(components)/Contact";
import Gallery from "./(components)/Gallery";
import Hero from "./(components)/HeroSection";
import Menu from "./(components)/Menu";



export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Menu />
      <Gallery />
      <Contact />
    </>
  );
}
