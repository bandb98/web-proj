"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Champion {
  name: string;
  breed: string;
  description: string;
  photos: { src: string; alt: string }[];
  stats: { value: string; label: string }[];
}

const champions: Champion[] = [
  {
    name: "Yako",
    breed: "Wire Fox Terrier",
    description:
      "Trained by the Bark & Bond Team, Yako went on to dominate the ring at prestigious dog shows — a testament to the discipline, dedication, and elite handling that defines our training program.",
    photos: [
      { src: "/dog win1.jpeg", alt: "Yako — Championship winning dog with trophy" },
      { src: "/dog win2.jpeg", alt: "Yako — Championship dog show victory" },
      { src: "/dog win3.jpeg", alt: "Yako — Overall championship celebration" },
    ],
    stats: [
      { value: "🏆", label: "No.1 Best In Show" },
      { value: "🥇", label: "Best Of Breed" },
      { value: "⭐", label: "Best Puppy In Show" },
    ],
  },
  {
    name: "Drummer",
    breed: "Jack Russell Terrier",
    description:
      "Trained by the Bark & Bond Team, Drummer went on to compete in prestigious UK dog shows — winning titles at 5 championship-level events under internationally renowned judges.",
    photos: [
      { src: "/training-wins/win1.jpeg", alt: "Drummer — Best Minor Puppy at West Midland Terrier Society" },
      { src: "/training-wins/win2.jpeg", alt: "Drummer — Best Puppy & Group 3rd" },
      { src: "/training-wins/win3.jpeg", alt: "Drummer — Best Puppy & Group 4th at Chesterfield Canine Society" },
      { src: "/training-wins/win4.jpeg", alt: "Drummer — Best Puppy at Bath Canine Society" },
      { src: "/training-wins/win5.jpeg", alt: "Drummer — Best Puppy at West of England Ladies Kennel Society" },
    ],
    stats: [
      { value: "5", label: "Competition Wins" },
      { value: "UK", label: "International Shows" },
      { value: "🏆", label: "Best Puppy" },
    ],
  },
];

// ---------- Photo Carousel (internal) ----------
function PhotoCarousel({ photos }: { photos: Champion["photos"] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Reset when photos change (dog switch)
  useEffect(() => setCurrent(0), [photos]);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    if (paused || photos.length <= 1) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next, photos.length]);

  const handleManualNav = (direction: "prev" | "next") => {
    if (direction === "prev") setCurrent((p) => (p - 1 + photos.length) % photos.length);
    else next();
    setPaused(true);
    setTimeout(() => setPaused(false), 8000);
  };

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-forest-700 aspect-[4/3] group bg-forest-900">
      {photos.map((img, idx) => (
        <div
          key={img.src}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Blurred backdrop fill */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
            aria-hidden="true"
          />
          {/* Actual image — fully visible, no crop */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent pointer-events-none" />

      {/* Nav buttons */}
      {photos.length > 1 && (
        <>
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
        </>
      )}

      {/* Dots */}
      {photos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {photos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrent(idx);
                setPaused(true);
                setTimeout(() => setPaused(false), 8000);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === current ? "bg-brass-400 w-6" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ---------- Main Component ----------
export default function ChampionShowcase() {
  const [activeDog, setActiveDog] = useState(0);
  const [autoPaused, setAutoPaused] = useState(false);

  // Auto-switch between dogs every 10 seconds
  useEffect(() => {
    if (autoPaused) return;
    const timer = setInterval(() => {
      setActiveDog((prev) => (prev + 1) % champions.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [autoPaused]);

  const handleChipClick = (idx: number) => {
    setActiveDog(idx);
    setAutoPaused(true);
    setTimeout(() => setAutoPaused(false), 20000); // pause auto-switch for 20s after manual selection
  };

  const dog = champions[activeDog];

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Photo Carousel */}
      <div
        className="transition-opacity duration-500"
        key={dog.name} // forces remount for smooth photo reset
      >
        <PhotoCarousel photos={dog.photos} />
      </div>

      {/* Text + Stats */}
      <div className="space-y-8">
        {/* Dog selector chips */}
        <div className="flex gap-3">
          {champions.map((c, idx) => (
            <button
              key={c.name}
              onClick={() => handleChipClick(idx)}
              className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 border ${
                idx === activeDog
                  ? "bg-brass-500 text-forest-900 border-brass-500 shadow-[0_0_16px_rgba(214,163,101,0.3)]"
                  : "bg-transparent text-taupe-300 border-forest-700 hover:border-brass-500/50 hover:text-white"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Dog info — animated transition */}
        <div key={dog.name} className="animate-fadeIn">
          <h3 className="text-2xl md:text-3xl font-bold text-white font-heading mb-1">
            {dog.name}
          </h3>
          <p className="text-brass-400 text-sm font-medium tracking-wider uppercase mb-4">
            {dog.breed}
          </p>
          <p className="text-taupe-300 leading-relaxed">
            {dog.description}
          </p>
        </div>

        {/* Stats */}
        <div className={`grid gap-4 ${dog.stats.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
          {dog.stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-2xl bg-forest-800/50 border border-forest-700 flex flex-col justify-center"
            >
              <span className="text-2xl md:text-3xl font-bold text-brass-400 block mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-taupe-300 uppercase tracking-wider font-medium leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
