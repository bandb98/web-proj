"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

interface TransformData {
  breed: string;
  before: string;
  after: string;
  profile?: string;
  description: string;
}

const transforms: TransformData[] = [
  {
    breed: "Bichon Frise",
    before: "/before-after/Bichon/before.jpeg",
    after: "/before-after/Bichon/after 1.jpeg",
    profile: "/before-after/Bichon/after 2.jpeg",
    description: "From heavily matted and tangled coat to a perfectly sculpted, show-quality finish. This level of precision requires expert scissor work and deep breed knowledge.",
  },
  {
    breed: "Shih Tzu",
    before: "/before-after/ShihTzu/BEFORE.jpeg",
    after: "/before-after/ShihTzu/AFTER.jpeg",
    description: "A signature Shih Tzu 'puppy cut'. We removed the unruly, overgrown coat and gave them a fresh, adorable teddy-bear face while keeping the ears and tail fluffy.",
  },
  {
    breed: "Chow Chow",
    before: "/before-after/ChowChow/BEFORE.jpeg",
    after: "/before-after/ChowChow/AFTER.jpeg",
    description: "Expert deshedding and styling for a double-coated Chow Chow. We thinned out the heavy undercoat to keep them cool and shaped the outer coat for a majestic lion-like appearance.",
  }
];

export default function BeforeAfterShowcase() {
  const [activeBreed, setActiveBreed] = useState(0);
  const t = transforms[activeBreed];

  return (
    <section className="py-16 lg:py-32 bg-forest-900 relative overflow-hidden bg-noise">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brass-500/8 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-brass-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">The Transformation</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-4">
              See the <span className="text-brass-400">Difference</span>
            </h2>
            <p className="text-taupe-400 text-lg max-w-2xl mx-auto mb-8">
              Drag the slider to reveal the transformation. This is the level of precision grooming your pet deserves.
            </p>

            {/* Breed Tabs — only show if more than 1 breed */}
            {transforms.length > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-3">
                {transforms.map((breed, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveBreed(idx)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      idx === activeBreed
                        ? "bg-brass-500 text-forest-900 shadow-[0_0_15px_rgba(214,163,101,0.3)]"
                        : "bg-forest-800 text-taupe-300 border border-forest-700 hover:border-brass-500 hover:text-white"
                    }`}
                  >
                    {breed.breed}
                  </button>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Slider - takes 3 columns */}
          <div className="lg:col-span-3">
            <ImageSlider key={activeBreed} before={t.before} after={t.after} />
          </div>

          {/* Info + Profile Image - takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-center lg:text-left">
              <span className="text-brass-400 text-xs font-bold tracking-[0.2em] uppercase block mb-2">Breed Spotlight</span>
              <h3 className="text-3xl font-bold text-white font-heading mb-3">{t.breed}</h3>
              <p className="text-taupe-300 leading-relaxed mb-5 text-sm lg:text-base">{t.description}</p>
              <a
                href={getWhatsAppLink(`Hi! I saw the ${t.breed} grooming transformation on your website. I'd love to book a session for my pet!`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brass-500 hover:bg-brass-400 text-forest-900 font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(214,163,101,0.3)] text-sm"
              >
                Book This Style <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Profile shot — hidden on mobile to avoid excessive scrolling */}
            {t.profile && (
              <div className="hidden lg:block rounded-2xl overflow-hidden border border-forest-700 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.profile}
                  alt={`${t.breed} side profile after grooming`}
                  className="w-full object-contain"
                />
                <div className="bg-forest-800 px-4 py-3 text-center">
                  <span className="text-xs text-brass-400 font-medium uppercase tracking-wider">Finished Look — Side Profile</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageSlider({ before, after }: { before: string; after: string }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [containerWidth, setContainerWidth] = useState(1000);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(el);
    setContainerWidth(el.offsetWidth);
    return () => observer.disconnect();
  }, []);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateSlider(e.clientX);
  }, [updateSlider]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updateSlider(e.clientX);
  }, [updateSlider]);

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/5] max-h-[700px] rounded-3xl overflow-hidden border border-forest-700 shadow-2xl cursor-col-resize select-none touch-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {/* After Image (full background) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={after}
        alt="After grooming"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before Image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt="Before grooming"
          className="absolute top-0 left-0 h-full object-cover"
          style={{ width: `${containerWidth}px`, maxWidth: "none" }}
          draggable={false}
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        {/* Drag Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-forest-900">
            <path d="M8 6L4 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 6L20 12L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels - fade based on how much of their image is visible */}
      <div 
        className="absolute top-4 left-4 bg-forest-900/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full z-10 pointer-events-none transition-opacity duration-300"
        style={{ opacity: sliderPos > 15 ? 1 : 0 }}
      >
        Before
      </div>
      <div 
        className="absolute top-4 right-4 bg-brass-500/90 backdrop-blur-sm text-forest-900 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full z-10 pointer-events-none transition-opacity duration-300"
        style={{ opacity: sliderPos < 85 ? 1 : 0 }}
      >
        After
      </div>
    </div>
  );
}
