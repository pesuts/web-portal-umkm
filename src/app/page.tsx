import About from "@/components/landing-page/About";
import Hero from "@/components/landing-page/Hero";
import Products from "@/components/landing-page/Products";
import Statistic from "@/components/landing-page/Statistic";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Statistic />
      <Products />
    </main>
  );
}
