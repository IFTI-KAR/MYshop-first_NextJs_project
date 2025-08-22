import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ProductHighlights from "../app/components/ProductHighlights.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductHighlights />
    </>
  );
}
