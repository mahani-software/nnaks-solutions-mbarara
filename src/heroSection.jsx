import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ceilingLightMain from "./assets/ceiling-lights-main.jpg"
import solarPannel5 from "./assets/solarpannel5.jpeg"

const HeroSection = () => {
  const slides = [
    {url: ceilingLightMain, title: ""},
    {url: solarPannel5, title: ""},
    { url: "https://storage.googleapis.com/nnaks-solutions-mbarara/homeBanner4.webp", title: 'Complete Solar Solutions Store' },
    { url: "https://storage.googleapis.com/nnaks-solutions-mbarara/homeBanner2.webp", title: 'Premium Inverters & Batteries Section' },
    { url: "https://storage.googleapis.com/nnaks-solutions-mbarara/homeBanner0.webp", title: 'Modern Solar & Electronics Showroom' },
    { url: "https://storage.googleapis.com/nnaks-solutions-mbarara/homeBanner13.webp", title: 'Complete Solar Solutions Store' },
    { url: "https://storage.googleapis.com/nnaks-solutions-mbarara/homeBanner14.webp", title: 'Complete Solar Solutions Store' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.url}
              alt={slide.title}
              className="h-full w-full object-cover animate-[zoom_20s_ease-in-out_infinite]"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Navigation Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 p-2 md:p-3 hover:bg-white transition"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8 text-gray-800" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Text Panel - Left side with curved right edge */}
      <div className="absolute inset-y-0 left-0 z-10 flex items-center">
        <div className="
          w-[65vw] max-w-xl 
          md:w-[50vw] md:max-w-2xl
          xl:w-[40vw] md:max-w-3xl 
          h-full 
          flex items-center 
          bg-black/50 
          backdrop-blur-sm
          rounded-r-[4rem]
        ">
          <div className="px-8 md:px-12 lg:px-16 text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-xl">
              NNAKS SOLUTION ENGINEERING LTD
              <br /><br />
              <span className="text-yellow-400 text-2xl md:text-4xl lg:text-5xl">
                Your Trusted Electronics Shop in Mbarara
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg lg:text-xl text-gray-200 max-w-lg drop-shadow-md">
              Discover high-quality solar products, lights, cables, circuit breakers, and more. 
              We provide reliable, professional solutions for your home and business needs.
            </p>
            <br/>
            <p className="text-yellow-400 text-xl md:text-2xl lg:text-3xl">
              +256-777-117714
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;