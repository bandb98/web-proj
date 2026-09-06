import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { getWhatsAppLink } from '@/lib/utils';
import { Check, MapPin } from 'lucide-react';
import ServiceReviews from "@/components/ui/ServiceReviews";

export const metadata: Metadata = {
  title: 'Pet Walking | Premium Services',
  description: 'Reliable, energetic pet walking services to keep your dog active, healthy, and happy.',
};

export default function WalkingPage() {
  return (
    <main className="min-h-screen bg-pearl">
      {/* Page Hero Banner */}
      <section className="bg-forest-900 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brass-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Health & Fitness</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Pet <span className="text-brass-500">Walking</span>
          </h1>
          <p className="text-taupe-500 text-lg max-w-2xl mx-auto">
            Reliable, energetic walks ensuring your pet stays active and healthy.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-900 font-heading">
              Walking <span className="text-brass-500">Plans</span>
            </h2>
            <div className="w-16 h-px bg-brass-400 mx-auto mt-8 mb-6"></div>
            <p className="text-taupe-600 text-lg">Consistent exercise tailored to your pet's stamina.</p>
            <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-sage-50 text-forest-900 rounded-full border border-sage-300 font-medium">
              <MapPin className="w-4 h-4 text-brass-600" />
              Service Area: Tambaram & Surrounding areas (6-8km radius)
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Silver Plan */}
            <AnimatedSection delay={100} className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-taupe-200 flex flex-col">
              <h3 className="text-3xl font-bold text-forest-900 mb-2 font-heading">Silver Plan</h3>
              <p className="text-taupe-500 mb-6 text-lg">Perfect for daily maintenance.</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-forest-900">₹6,000</span>
                <span className="text-taupe-500"> / month</span>
              </div>
              
              <ul className="space-y-5 mb-10 flex-grow">
                {['1 Morning Session per day', '20-Minute Walk', 'Suitable for Large & Small breeds', 'Neighborhood route', 'Waste cleanup included'].map((item, i) => (
                  <li key={i} className="flex items-center text-taupe-600 text-lg">
                    <Check className="w-5 h-5 text-brass-500 mr-4 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={getWhatsAppLink("Hello! I'm interested in the Silver Walking Plan (₹6K).")} target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center text-sm font-semibold uppercase tracking-wider text-forest-900 border-2 border-forest-900 hover:bg-forest-900 hover:text-white rounded-full transition-colors">Book Silver Plan</a>
            </AnimatedSection>

            {/* Gold Plan */}
            <AnimatedSection delay={200} className="bg-forest-900 rounded-3xl p-10 shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brass-500/30 flex flex-col relative overflow-hidden transform md:-translate-y-4 md:hover:-translate-y-6">
              <div className="absolute top-6 right-6 bg-brass-400 text-forest-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Popular</div>
              <h3 className="text-3xl font-bold text-white mb-2 font-heading">Gold Plan</h3>
              <p className="text-taupe-500 mb-6 text-lg">For high-energy breeds needing more.</p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-white">₹12,000</span>
                <span className="text-taupe-400"> / month</span>
              </div>

              <ul className="space-y-5 mb-10 flex-grow">
                {['2 Sessions per day (Morning & Evening)', '20-Minute Walk per session', 'Suitable for Large & Small breeds', 'Active park/trail routes', 'Waste cleanup included'].map((item, i) => (
                  <li key={i} className="flex items-center text-taupe-200 text-lg">
                    <Check className="w-5 h-5 text-brass-400 mr-4 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={getWhatsAppLink("Hello! I'm interested in the Gold Walking Plan (₹12K).")} target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center text-sm font-semibold uppercase tracking-wider text-forest-900 bg-brass-400 hover:bg-brass-300 rounded-full transition-colors">Book Gold Plan</a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
