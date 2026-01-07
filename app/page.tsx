import Discover from "@/components/Discover";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import { NavBar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Header />
        <NavBar />
        <HeroSection />
        <Discover />
      </div>
    </>
  );
}
