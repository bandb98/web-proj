"use client";

import { Star, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export interface ServiceReview {
  name: string;
  text: string;
}

interface ServiceReviewsProps {
  reviews: ServiceReview[];
}

export default function ServiceReviews({ reviews }: ServiceReviewsProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-forest-900 font-heading mb-4">
            What Our <span className="text-brass-500">Clients Say</span>
          </h3>
          <div className="w-16 h-px bg-brass-400 mx-auto"></div>
        </AnimatedSection>

        <div className={`grid gap-8 max-w-5xl mx-auto ${reviews.length === 1 ? 'md:grid-cols-1 max-w-2xl' : reviews.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {reviews.map((review, idx) => (
            <AnimatedSection key={idx} delay={idx * 150} className="bg-white p-8 rounded-3xl border border-taupe-200 shadow-sm hover:shadow-lg hover:border-brass-300 transition-all duration-300 relative group flex flex-col">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-sage-100 group-hover:text-brass-100 transition-colors pointer-events-none" />
              
              <div className="flex text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-taupe-600 leading-relaxed mb-6 flex-grow relative z-10 font-light text-sm italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between border-t border-taupe-100 pt-4 mt-auto">
                <span className="font-bold text-forest-900 text-sm">{review.name}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
