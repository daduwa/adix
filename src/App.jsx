import React from "react";
import NavigationBar from "./components/NavigationBar";
import LandingPage from "./components/LandingPage";
import MarqueeSection from "./components/MarqueeSection";
import AboutPage from "./components/AboutPage";
import EyeCatch from "./components/EyeCatch";
import FeaturedProjects from "./components/FeaturedProjects";
import CardGallery from "./components/CardGallery";
import ReadyProjectShowCase from "./components/ReadyProjectShowCase";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

export default function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <NavigationBar />
      <LandingPage />
      <MarqueeSection />
      <AboutPage />
      <EyeCatch />
      <FeaturedProjects />
      <CardGallery />
      <ReadyProjectShowCase />
      <Footer />
    </div>
  );
}
