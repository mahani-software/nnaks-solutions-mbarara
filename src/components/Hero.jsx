import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import homeBannerImage0 from "../images/homeBanner0.png";
import homeBannerImage2 from "../images/homeBanner2.png";
import homeBannerImage3 from "../images/homeBanner3.png";
import homeBannerImage4 from "../images/homeBanner4.png";
import homeBannerImage5 from "../images/homeBanner5.png";
import homeBannerImage6 from "../images/homeBanner6.png";
import homeBannerImage8 from "../images/homeBanner8.png";
import homeBannerImage9 from "../images/homeBanner9.png";
import homeBannerImage10 from "../images/homeBanner10.png";
import homeBannerImage11 from "../images/homeBanner11.png";
import homeBannerImage12 from "../images/homeBanner12.png";
import homeBannerImage13 from "../images/homeBanner13.png";
import homeBannerImage14 from "../images/homeBanner14.png";
import homeBannerImage15 from "../images/homeBanner15.png";
import homeBannerImage16 from "../images/homeBanner16.png";
import homeBannerImage17 from "../images/homeBanner17.png";
import homeBannerImage18 from "../images/homeBanner18.png";
import homeBannerImage19 from "../images/homeBanner19.png";
import homeBannerImage20 from "../images/homeBanner20.png";

const bannerPictures = [
  homeBannerImage0, homeBannerImage2, homeBannerImage3, homeBannerImage4, homeBannerImage5, 
  homeBannerImage6, homeBannerImage8, homeBannerImage9, homeBannerImage10, homeBannerImage11,
  homeBannerImage12, homeBannerImage13, homeBannerImage14, homeBannerImage15, homeBannerImage16,
  homeBannerImage17, homeBannerImage18, homeBannerImage18, homeBannerImage19, homeBannerImage20,
];

export const Hero = ({ onShopNow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerPictures.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative overflow-hidden h-screen">
      {/* Background Images with Fade Transition */}
      <div className="absolute inset-0 z-0">
        {bannerPictures.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 py-40">
        <div className="top-0 left-0 m-0 flex flex-col lg:flex-row w-1/2 bg-gradient-to-r from-primary to-transparent">
          <div className="w-full py-10">
            <div className="relative z-20 lg:max-w-2xl lg:w-full">
              <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="sm:text-center lg:text-left">
                  <div className="w-full text-accent block text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">
                    Premium
                  </div>
                  <div className="w-full text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl"> 
                    Electronics 
                  </div>
                  <div className="block text-accent lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl"> 
                    in Mbarara City 
                  </div>
                  <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 drop-shadow-md">
                    DEALERS IN: Electrical & solar systems, Line construction, Electrical consultation, Electrical drawings, etc.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                    <div
                      className="flex items-center justify-center px-8 py-3 my-4 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-blue-600 transition-all shadow-lg"
                    >
                      0789495670, 0777117714
                    </div>
                    <button 
                    onClick={onShopNow}
                    className="flex items-center justify-center px-8 my-4 py-3 border border-accent text-white bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 rounded-md transition-all">
                      nnakssolutions@gmail.com <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {bannerPictures.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white bg-opacity-50 hover:bg-opacity-80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};