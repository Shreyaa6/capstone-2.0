import NavBar from "./components/Navbar";
import Hero from "./components/HeroPage";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

export default function Homepage() {
  return (
    <>
      <NavBar />
      <Hero/>
      {/* <ProductCard/> */}
      <Footer />
    </>
  );
}
