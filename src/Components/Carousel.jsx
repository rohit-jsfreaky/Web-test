import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false); // To manage transition state

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  const prevSlide = () => {
    setIsTransitioning(true); // Start transition
    setTimeout(() => {
      setCurrentIndex(currentIndex === 1 ? 4 : currentIndex - 1);
      setIsTransitioning(false); // End transition
    }, 700); // Match the duration of the CSS transition
  };

  const nextSlide = () => {
    setIsTransitioning(true); // Start transition
    setTimeout(() => {
      setCurrentIndex(currentIndex === 4 ? 1 : currentIndex + 1);
      setIsTransitioning(false); // End transition
    }, 700); // Match the duration of the CSS transition
  };

  return (
    <div className="relative w-full h-[50vw] sm:h-[50vw] xs:h-[90vw] overflow-hidden">
      {/* Images */}
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {currentIndex === 1 && (
          <img src="page1.jpeg" className="w-full h-full object-cover" alt="" />
        )}

        {currentIndex === 2 && (
          <img src="page2.jpeg" className="w-full h-full object-cover" alt="" />
        )}

        {currentIndex === 3 && (
          <img src="page3.jpeg" className="w-full h-full object-cover" alt="" />
        )}

        {currentIndex === 4 && (
          <img src="page4.jpeg" className="w-full h-full object-cover" alt="" />
        )}
      </div>

      <div className="absolute flex justify-evenly gap-10 items-center h-full w-full z-10 top-0 text-2xl">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-black/50 text-black p-2 rounded-full shadow-lg"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-black/50 text-black p-2 rounded-full shadow-lg"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
