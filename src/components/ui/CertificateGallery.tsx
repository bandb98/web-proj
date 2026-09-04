"use client";

import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { X, Scissors, GraduationCap } from 'lucide-react';

interface CertificateGalleryProps {
  type?: 'all' | 'grooming' | 'training';
}

export default function CertificateGallery({ type = 'all' }: CertificateGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const CertificateCard = ({ num, title }: { num: number, title: string }) => (
    <AnimatedSection delay={num * 100} className="relative group cursor-pointer h-full">
      {/* Premium Frame Effect */}
      <div 
        className="bg-white p-3 rounded-2xl shadow-sm border border-taupe-200 group-hover:border-brass-400 group-hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-1 h-full flex flex-col"
        onClick={() => setSelectedImage(`/Certification/cert ${num}.png`)}
      >
        <div className="relative w-full rounded-xl overflow-hidden bg-sage-50 border border-taupe-100 flex-1 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={`/Certification/cert ${num}.png`}
            alt={title}
            className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700 ease-in-out block"
          />
          <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/10 transition-colors duration-500 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 bg-forest-900/90 text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-widest transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
              Tap to Expand
            </span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );

  return (
    <div className="space-y-16">
      
      {/* Grooming Certifications */}
      {(type === 'all' || type === 'grooming') && (
        <div>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-8 max-w-4xl mx-auto">
            <Scissors className="w-6 h-6 text-brass-500" />
            <h3 className="text-2xl font-bold text-forest-900 font-heading">Certified Professional Groomer</h3>
            <div className="flex-1 h-px bg-taupe-200 ml-6 hidden sm:block"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <CertificateCard num={1} title="Professional Grooming Certification 1" />
            <CertificateCard num={4} title="Professional Grooming Certification 2" />
          </div>
        </div>
      )}

      {/* Training Certifications */}
      {(type === 'all' || type === 'training') && (
        <div>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-8 max-w-4xl mx-auto">
            <GraduationCap className="w-6 h-6 text-brass-500" />
            <h3 className="text-2xl font-bold text-forest-900 font-heading">Certified Professional Trainer</h3>
            <div className="flex-1 h-px bg-taupe-200 ml-6 hidden sm:block"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <CertificateCard num={2} title="Professional Training Certification 1" />
            <CertificateCard num={3} title="Professional Training Certification 2" />
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-900/95 backdrop-blur-sm p-4 sm:p-8 transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 sm:top-10 sm:right-10 p-3 bg-white/10 hover:bg-brass-500 text-white rounded-full transition-colors z-[101]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          
          <div 
            className="relative w-full max-w-5xl h-full flex items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={selectedImage} 
              alt="Expanded Certification" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
