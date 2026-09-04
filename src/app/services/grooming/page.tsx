import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import CertificateGallery from "@/components/ui/CertificateGallery";

import { FAQAccordion } from '@/components/ui/FAQAccordion';
import PackageSelector from '@/components/ui/PackageSelector';
import { getWhatsAppLink } from '@/lib/utils';
import { Check, Scissors, ShieldCheck, Sparkles, Heart, Home, Bath, ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Doorstep Pet Grooming | Bark & Bond',
  description: 'Premium doorstep pet grooming services. Stress-free, professional care brought right to your home.',
};

export default function GroomingPage() {
  const packages = [
    {
      name: 'Hygiene & Shower Package',
      desc: 'Clean. Fresh. Happy.',
      includes: ['Full bath with shampoo & conditioner', 'Nail clipping', 'Ear cleaning', 'Eye cleaning', 'Combing & brushing', 'Blow dry', 'Sanitary trim']
    },
    {
      name: 'Hair Care Package',
      desc: 'Well groomed. Well loved.',
      includes: ['Zero trimming', 'Full body bath & conditioning', 'Blow dry', 'Nail clipping & filing', 'Ears cleaning', 'Herbal perfume spray', 'Teeth cleaning', 'Sanitary cuts (under face, ears, paws)', 'Deep coat conditioning', 'Thorough brush-out', 'Paw pad trim']
    },
    {
      name: 'Tip to Toe Package',
      desc: 'Complete care from head to tail.',
      includes: ['Full body haircut with hair styling/trimming', 'Full body bath & conditioning', 'Blow dry', 'Nail clipping & filing', 'Ears cleaning', 'Herbal perfume spray', 'Teeth cleaning', 'Paw massage', 'Paw wax', 'Sanitary cuts', 'Breed-specific scissor work']
    },
    {
      name: 'Tick Free Package',
      desc: 'Safe. Protected. Happy.',
      includes: ['Gland cleaning', 'Paw wax', 'Calm massage', 'Sanitary cutting', 'De-shedding treatment', 'Tick & flea treatment', 'Fungal infection treatment', 'Full body bath & conditioning', 'Blow dry', 'Nail clipping & filing', 'Ears cleaning', 'Herbal perfume spray', 'Teeth cleaning', 'Manual tick removal', 'Soothing skin treatment', 'Spot-on application (if requested)']
    }
  ];

  const faqs = [
    {
      question: "Do I need to provide towels, shampoo, or a grooming table?",
      answer: "No, we bring a complete professional grooming kit, including premium pet-safe shampoos, a portable table, and sterilized tools. All we need from you is access to a water point!"
    },
    {
      question: "What if my pet is extremely anxious or aggressive?",
      answer: "We specialize in nervous pets. Our patience-first approach means we go at your pet's pace. Because the grooming happens in their own home, travel anxiety is completely eliminated."
    },
    {
      question: "How long does a session take?",
      answer: "Sessions typically range from 45 minutes to 2 hours, depending on your pet's breed, coat condition, and the specific package you select."
    }
  ];

  return (
    <main className="min-h-screen bg-pearl">
      {/* Page Hero Banner */}
      <section className="bg-forest-900 pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className="text-brass-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Spa & Styling</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Doorstep Pet <span className="text-brass-500">Grooming</span>
          </h1>
          <p className="text-taupe-500 text-lg max-w-2xl mx-auto">
            Gentle, professional care for a flawless finish — brought right to your home. No cages, no travel stress.
          </p>
        </div>
      </section>

      {/* Hygiene & Safety Trust Strip */}
      <div className="bg-white border-b border-taupe-200 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-taupe-200 text-center md:text-left">
          <div className="flex items-center gap-3 pt-4 md:pt-0 pl-0 md:pl-6 first:pl-0 first:pt-0 border-none">
            <Sparkles className="w-5 h-5 text-brass-500 flex-shrink-0" />
            <span className="text-forest-900 font-medium text-sm">Premium Pet-Safe Products</span>
          </div>
          <div className="flex items-center gap-3 pt-4 md:pt-0 md:pl-12">
            <ShieldCheck className="w-5 h-5 text-brass-500 flex-shrink-0" />
            <span className="text-forest-900 font-medium text-sm">Tools Sanitized Between Pets</span>
          </div>
          <div className="flex items-center gap-3 pt-4 md:pt-0 md:pl-12">
            <Heart className="w-5 h-5 text-brass-500 flex-shrink-0" />
            <span className="text-forest-900 font-medium text-sm">100% Sedation-Free</span>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <section className="py-24 lg:py-32 bg-pearl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Packages List */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-forest-900 font-heading mb-4">Grooming Packages</h2>
                <p className="text-taupe-600 mb-10 text-lg">Comprehensive care tailored to your pet's exact needs.</p>
                
                <div className="space-y-6">
                  {packages.map((pkg, idx) => (
                    <div key={idx} className="bg-white rounded-3xl p-8 border border-taupe-200 shadow-sm hover:border-brass-400 transition-colors">
                      <h3 className="text-2xl font-bold text-forest-900 mb-2 font-heading">{pkg.name}</h3>
                      <p className="text-taupe-500 mb-6">{pkg.desc}</p>
                      <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="flex items-start text-taupe-600 text-sm">
                            <Check className="w-4 h-4 text-brass-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href={getWhatsAppLink(`Hi! I'm interested in the ${pkg.name}. Can I get a quote?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brass-600 hover:text-forest-900 transition-colors"
                      >
                        Book This Package <ArrowRight size={14} />
                      </a>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={200} className="mt-16 pt-16 border-t border-taupe-200">
                <CertificateGallery type="grooming" />
              </AnimatedSection>
            </div>

            {/* Sidebar (CTA & FAQs) */}
            <div className="lg:col-span-5 space-y-8 sticky top-32">
              <AnimatedSection className="bg-forest-900 rounded-3xl p-10 shadow-xl border border-forest-800 text-white">
                <h3 className="text-2xl font-bold mb-2 font-heading text-white">Ready to Book?</h3>
                <p className="text-taupe-200 mb-6 leading-relaxed text-sm">
                  Select your package and we&apos;ll open WhatsApp with your choice pre-filled.
                </p>
                <PackageSelector />
              </AnimatedSection>
              
              {/* FAQs */}
              <AnimatedSection delay={200}>
                <h3 className="text-2xl font-bold text-forest-900 font-heading mb-6">Common Questions</h3>
                <FAQAccordion items={faqs} />
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-24 bg-oatmeal">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 font-heading mb-4">How Doorstep Grooming Works</h2>
            <p className="text-taupe-600 max-w-2xl mx-auto text-lg">A seamless, stress-free experience from start to finish.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Phone className="w-6 h-6"/>, title: "1. Book & Brief", desc: "Share your pet's breed, temperament, and any skin concerns via WhatsApp." },
              { icon: <Home className="w-6 h-6"/>, title: "2. We Arrive", desc: "Our groomer arrives equipped. All we need is access to a water point." },
              { icon: <Bath className="w-6 h-6"/>, title: "3. The Spa", desc: "A calm, patience-first grooming session in your pet's comfort zone." },
              { icon: <Sparkles className="w-6 h-6"/>, title: "4. Clean Exit", desc: "We clean up completely. Your home stays spotless, your pet looks gorgeous." }
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 100} className="bg-white p-8 rounded-3xl border border-taupe-200 text-center relative hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-6 text-brass-600">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-forest-900 mb-3">{step.title}</h3>
                <p className="text-taupe-600 text-sm leading-relaxed">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
