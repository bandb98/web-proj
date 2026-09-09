"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const wins = [
  {
    src: "/training-wins/win1.jpeg",
    title: "Best Minor Puppy",
    event: "West Midland Terrier Society",
    judge: "Mrs. Gill Knight",
  },
  {
    src: "/training-wins/win2.jpeg",
    title: "Best Puppy & Group 3rd",
    event: "Championship Show",
    judge: "Mrs. Gill Knight",
  },
  {
    src: "/training-wins/win3.jpeg",
    title: "Best Puppy & Group 4th",
    event: "Chesterfield Canine Society",
    judge: "Mr. Edward Allen",
  },
  {
    src: "/training-wins/win4.jpeg",
    title: "Best Puppy",
    event: "Bath Canine Society",
    judge: "Mrs. Debra Kay",
  },
  {
    src: "/training-wins/win5.jpeg",
    title: "Best Puppy",
    event: "West of England Ladies Kennel Society",
    judge: "Mrs. Allison Kenny Marriot",
  },
];

export default function TrainingWinsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % wins.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + wins.length) % wins.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const handleManualNav = (direction: "prev" | "next") => {
    if (direction === "prev") prev();
    else next();
    setPaused(true);
    setTimeout(() => setPaused(false), 8000);
  };

  const w = wins[current];

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-forest-700 group">
      {/* Image */}
      <div className="relative aspect-[3/4]">
        {wins.map((img, idx) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={idx}
            src={img.src}
            alt={`${img.title} - ${img.event}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/30 to-transparent pointer-events-none"></div>
      </div>

      {/* Caption overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <span className="inline-block bg-brass-500 text-forest-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
          🏆 {w.title}
        </span>
        <p className="text-white font-semibold text-sm mb-1">{w.event}</p>
        <p className="text-taupe-300 text-xs">Judge: {w.judge}</p>
      </div>

      {/* Navigation */}
      <button
        onClick={() => handleManualNav("prev")}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-forest-900/60 hover:bg-brass-500 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-forest-900 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
        aria-label="Previous"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleManualNav("next")}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-forest-900/60 hover:bg-brass-500 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-forest-900 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
        aria-label="Next"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {wins.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx);
              setPaused(true);
              setTimeout(() => setPaused(false), 8000);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? "bg-brass-400 w-4" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
