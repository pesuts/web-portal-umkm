import About from "@/components/landing-page/About";
import Footer from "@/components/landing-page/Footer";
import Hero from "@/components/landing-page/Hero";
import Map from "@/components/landing-page/Map";
import Products from "@/components/landing-page/Products";
import Statistic from "@/components/landing-page/Statistic";
import UMKM from "@/components/landing-page/UMKM";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Statistic />
      <Products />
      <UMKM />
      <Map />
      <Footer /> 
    </main>
  );
}
