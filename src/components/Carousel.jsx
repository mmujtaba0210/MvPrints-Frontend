'use client';

import { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = ({ slides, autoplay = true, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides when isPlaying is true
  useEffect(() => {
    let slideInterval;
    
    if (isPlaying) {
      slideInterval = setInterval(() => {
        nextSlide();
      }, interval);
    }
    
    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [isPlaying, nextSlide, interval]);

  // Pause autoplay when user interacts with carousel
  const handleInteraction = () => {
    if (isPlaying) {
      setIsPlaying(false);
      // Resume autoplay after 10 seconds of inactivity
      setTimeout(() => setIsPlaying(true), 10000);
    }
  };

  return (
    <div 
      className="relative w-full h-[520px] mx-auto" 
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(autoplay)}
    >
      {/* Carousel wrapper */}
      <div className="relative h-[570px] overflow-hidden w-full rounded-lg">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.alt || `Slide ${index + 1}`}
              className="absolute block object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-4 -translate-x-1/2 -bottom-4 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => {
              handleInteraction();
              goToSlide(index);
            }}
          ></button>
        ))}
      </div>

      {/* Previous button */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={() => {
          handleInteraction();
          prevSlide();
        }}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <FiChevronLeft className="w-6 h-6 text-white" />
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next button */}
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={() => {
          handleInteraction();
          nextSlide();
        }}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <FiChevronRight className="w-6 h-6 text-white" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel; 