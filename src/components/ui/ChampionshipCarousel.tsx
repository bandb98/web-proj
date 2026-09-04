"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/dog win1.jpeg", alt: "Championship winning dog with trophy" },
  { src: "/dog win2.jpeg", alt: "Championship dog show victory" },
  { src: "/dog win3.jpeg", alt: "Overall championship celebration" },
];

export default function ChampionshipCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  // Pause auto-scroll for 8s after manual navigation
  const handleManualNav = (direction: "prev" | "next") => {
    if (direction === "prev") prev();
    else next();
    setPaused(true);
    setTimeout(() => setPaused(false), 8000);
  };

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-forest-700 aspect-[4/3] group">
      {/* Images */}
      {images.map((img, idx) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={idx}
          src={img.src}
          alt={img.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent pointer-events-none"></div>

      {/* Navigation Buttons */}
      <button
        onClick={() => handleManualNav("prev")}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-forest-900/60 hover:bg-brass-500 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-forest-900 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => handleManualNav("next")}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-forest-900/60 hover:bg-brass-500 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-forest-900 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx);
              setPaused(true);
              setTimeout(() => setPaused(false), 8000);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-brass-400 w-6"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
