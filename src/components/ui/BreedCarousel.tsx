"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

const breeds = [
  { name: "Shih Tzu", trait: "Affectionate & Playful", img: "/breeds/shih-tzu.jpg" },
  { name: "Doberman", trait: "Loyal & Protective", img: "/breeds/doberman.jpg" },
  { name: "Beagle", trait: "Merry & Curious", img: "/breeds/beagle.jpg" },
  { name: "Poodle", trait: "Intelligent & Active", img: "/breeds/poodle.jpg" },
  { name: "Golden Retriever", trait: "Intelligent & Gentle", img: "/breeds/golden.jpg" },
  { name: "Labrador Retriever", trait: "Friendly & Loyal", img: "/breeds/labrador.jpg" },
  { name: "German Shepherd", trait: "Confident & Smart", img: "/breeds/gsd.jpg" }
];

export default function BreedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, breeds.length - itemsPerView);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-scroll every 4 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isHovered, next]);

  return (
    <div 
      className="relative max-w-6xl mx-auto group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden px-4 py-8">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {breeds.map((breed, idx) => (
            <div 
              key={breed.name} 
              className="flex-none px-4"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="bg-white rounded-3xl p-8 border border-taupe-200 shadow-sm hover:shadow-lg hover:border-brass-400 transition-all text-center h-full flex flex-col group/card">
                {/* Visual Placeholder for Image */}
                <div className="w-full aspect-square bg-sage-50 rounded-2xl mb-6 flex items-center justify-center border border-taupe-200 group-hover/card:border-brass-300 transition-colors overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center text-taupe-400 text-sm font-medium">
                     <span className="opacity-50">Upload {breed.name} Image</span>
                   </div>
                   {/* 
                     We can drop real images here later like:
                     <img src={breed.img} alt={breed.name} className="w-full h-full object-cover relative z-10" />
                   */}
                </div>
                <h3 className="text-2xl font-bold text-forest-900 mb-2 font-heading">{breed.name}</h3>
                <p className="text-brass-600 font-medium text-sm tracking-wider uppercase mb-6 flex-grow">{breed.trait}</p>
                <a 
                  href={getWhatsAppLink(`Hello! I'm interested in getting a ${breed.name} puppy. Could you tell me about current availability?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-3 px-6 text-sm font-semibold uppercase tracking-wider text-forest-900 border-2 border-forest-900 hover:bg-forest-900 hover:text-white rounded-full transition-colors"
                >
                  Check Availability
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-4 w-12 h-12 bg-white border border-taupe-200 hover:border-brass-400 hover:text-brass-600 shadow-lg rounded-full flex items-center justify-center text-forest-900 transition-all duration-300 z-10 hidden md:flex"
        aria-label="Previous breed"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-4 w-12 h-12 bg-white border border-taupe-200 hover:border-brass-400 hover:text-brass-600 shadow-lg rounded-full flex items-center justify-center text-forest-900 transition-all duration-300 z-10 hidden md:flex"
        aria-label="Next breed"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-brass-500 w-8" : "bg-taupe-300 w-2 hover:bg-brass-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
