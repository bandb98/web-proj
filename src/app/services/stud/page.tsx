import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { getWhatsAppLink } from '@/lib/utils';
import { ShieldCheck, Info } from 'lucide-react';
import ServiceReviews from "@/components/ui/ServiceReviews";

export const metadata: Metadata = {
  title: 'Stud Services | Bark & Bond',
  description: 'Connect with top-tier pedigrees for responsible and healthy breeding. All our studs are KCI registered.',
};

export default function StudPage() {
  const breeds = [
    'German Shepherd (GSD)',
    'Doberman',
    'Malinois',
    'Beagle',
    'Labrador Retriever',
    'Golden Retriever',
    'Shih Tzu',
    'Poodle',
    'Indian Native Breeds (Chippi, Kombai)'
  ];

  return (
    <main className="min-h-screen bg-pearl">
      {/* Page Hero Banner */}
      <section className="bg-forest-900 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brass-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Pedigree Lineage</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Stud <span className="text-brass-500">Services</span>
          </h1>
          <p className="text-taupe-500 text-lg max-w-2xl mx-auto">
            Exceptional bloodlines for responsible breeding. All our studs are KCI registered.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brass-400 text-forest-900 mb-6">
                <ShieldCheck className="w-8 h-8" />
             </div>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-900 font-heading mb-6">
              Our Certified <span className="text-brass-500">Roster</span>
             </h2>
             <p className="text-taupe-600 text-lg leading-relaxed mb-6">
              We take breeding seriously. Our selection of premier stud dogs features excellent conformation, exceptional temperaments, and clean health records. <strong>Every stud in our roster is KCI registered.</strong>
             </p>
             <div className="inline-flex items-center gap-2 px-6 py-2 bg-sage-50 text-forest-900 rounded-full border border-sage-300 font-medium text-sm">
              <Info className="w-4 h-4 text-brass-600" />
              Stud fees vary by breed. Contact us for specific pricing and 3-4 photos of the available studs.
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100} className="bg-white rounded-3xl p-10 shadow-lg border border-taupe-200">
            <h3 className="text-2xl font-bold text-forest-900 mb-8 font-heading text-center border-b border-taupe-200 pb-6">Available Breeds</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {breeds.map((breed, idx) => (
                <div key={idx} className="bg-pearl rounded-xl p-4 text-center text-forest-900 font-medium border border-taupe-200 hover:border-brass-400 hover:bg-sage-50 transition-colors">
                  {breed}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a 
                href={getWhatsAppLink("Hello, I would like to inquire about your KCI registered stud services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-forest-900 bg-brass-400 hover:bg-brass-300 rounded-full transition-colors shadow-lg"
              >
                Inquire & Request Photos via WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
