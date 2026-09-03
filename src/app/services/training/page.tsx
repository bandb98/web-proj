import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { getWhatsAppLink } from '@/lib/utils';
import { Check, Clock, ShieldCheck, ArrowRight, Brain, Target, User, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dog Training | Bark & Bond',
  description: 'Professional obedience and behavioral training for dogs of all ages and breeds.',
};

export default function TrainingPage() {
  const basicCommands = [
    'Sit, Down, Stay', 
    'Speak & Hand shake',
    'Yes/No command & Food response', 
    'Leash manners & Place command', 
    'Fetch & Retrieval',
    'Kids & animal socializing',
    'Behaviour correction'
  ];

  const advancedCommands = [
    'Off-leash reliability',
    'Distance & duration commands',
    'Advanced heel walk',
    'Scent work & tracking',
    'Agility & obstacle work',
    'KCI competition training',
    'Personal protection & guard training'
  ];

  const faqs = [
    {
      question: "Do I need to be present during the training?",
      answer: "Yes, owner involvement is crucial for lasting results. We train your dog, but we also coach you on how to maintain the behavior through consistent commands and body language."
    },
    {
      question: "What age should my puppy start training?",
      answer: "Basic obedience can begin as early as 3 to 4 months of age. Early socialization and foundational commands prevent severe behavioral issues later."
    },
    {
      question: "My dog is aggressive. Can you help?",
      answer: "Yes. Behavior correction is a core part of our basic training program. We will assess the severity of the aggression during our initial consultation to create a safe, effective roadmap."
    }
  ];

  return (
    <main className="min-h-screen bg-pearl">
      {/* Page Hero Banner */}
      <section className="bg-forest-900 pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className="text-brass-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Behavior & Obedience</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Dog <span className="text-brass-500">Training</span>
          </h1>
          <p className="text-taupe-500 text-lg max-w-2xl mx-auto">
            Professional, rewards-based training for a well-mannered and confident companion. Backed by 5+ years of expertise.
          </p>
        </div>
      </section>

      {/* Programs & FAQs */}
      <section className="py-24 lg:py-32 bg-pearl">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Packages */}
            <div className="lg:col-span-7 space-y-8">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-forest-900 font-heading mb-8">Training Programs</h2>
                
                {/* Basic */}
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-taupe-200 mb-8 hover:shadow-md transition-shadow">
                  <h3 className="text-3xl font-bold text-forest-900 mb-2 font-heading">Basic Training</h3>
                  <p className="text-taupe-500 mb-6">Perfect for puppies, beginners, and foundational behavior correction.</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-forest-900">₹15,000</span>
                  </div>
                  
                  <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                    {basicCommands.map((item, i) => (
                      <li key={i} className="flex items-start text-taupe-600 text-sm">
                        <Check className="w-5 h-5 text-brass-500 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={getWhatsAppLink("Hello! I'd like to book Basic Training (₹15K) for my dog.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-forest-900 border-2 border-forest-900 hover:bg-forest-900 hover:text-white rounded-full transition-colors w-full sm:w-auto">
                    Book Basic <ArrowRight size={16} />
                  </a>
                </div>

                {/* Advanced */}
                <div className="bg-forest-900 rounded-3xl p-8 lg:p-10 shadow-xl border border-forest-800 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-brass-500/10 rounded-full blur-3xl"></div>
                  <p className="text-brass-400 text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Elite Performance
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-2 font-heading">Advanced Training</h3>
                  <p className="text-taupe-400 mb-6">For graduates of basic training needing elite refinement and specialized skills.</p>
                  
                  <div className="mb-8">
                    <span className="text-sm font-medium text-brass-400 border border-brass-400/50 rounded-full px-4 py-2">Custom Pricing Required</span>
                  </div>
                  
                  <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                    {advancedCommands.map((item, i) => (
                      <li key={i} className="flex items-start text-taupe-200 text-sm">
                        <Check className="w-5 h-5 text-brass-400 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={getWhatsAppLink("Hello! I'm interested in the Advanced Training program.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-forest-900 bg-brass-400 hover:bg-brass-300 rounded-full transition-colors w-full sm:w-auto relative z-10">
                    Enquire Now <ArrowRight size={16} />
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar FAQs */}
            <div className="lg:col-span-5 sticky top-32">
              <AnimatedSection delay={200}>
                <div className="bg-sage-50 border border-sage-300 rounded-3xl p-8 mb-8">
                  <h4 className="text-forest-900 font-bold mb-3">Expectation Management</h4>
                  <p className="text-taupe-600 text-sm leading-relaxed">
                    Basic training typically shows visible improvement within 2-3 weeks of consistent sessions. However, <strong>lasting results depend heavily on owner consistency</strong> between our professional visits.
                  </p>
                </div>
                
                <h3 className="text-2xl font-bold text-forest-900 font-heading mb-6">Common Questions</h3>
                <FAQAccordion items={faqs} />
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <AnimatedSection className="py-24 bg-white border-t border-b border-taupe-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Brain className="w-12 h-12 text-brass-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-8 font-heading">
            Our Training <span className="text-brass-500">Philosophy</span>
          </h2>
          <p className="text-xl leading-relaxed text-taupe-600 mb-8">
            Dogs learn best in short, highly-focused bursts. That's why our sessions are strictly <strong>25 to 45 minutes</strong>—enough to challenge their minds without exhausting them. Every session builds on the last, creating lasting behavioral change through positive reinforcement and structured repetition.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-sage-50 text-forest-900 rounded-full border border-sage-300 font-medium shadow-sm">
            <HeartHandshake className="w-5 h-5 text-brass-600" />
            We train the dog. We coach the owner.
          </div>
        </div>
      </AnimatedSection>

      {/* The Journey */}
      <section className="py-24 bg-oatmeal">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 font-heading mb-4">Your Dog's Training Journey</h2>
            <p className="text-taupe-600 max-w-2xl mx-auto text-lg">A structured, 4-step process to ensure lasting results.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Target />, title: "1. Assessment", desc: "We evaluate your dog's temperament, triggers, and your specific goals as an owner." },
              { icon: <Brain />, title: "2. Custom Plan", desc: "No cookie-cutter programs. We tailor the curriculum to your dog's breed and personality." },
              { icon: <Clock />, title: "3. Active Sessions", desc: "25-45 minutes of intensive, rewards-based professional handling." },
              { icon: <User />, title: "4. Owner Handover", desc: "We teach YOU the commands and timing so the behavior sticks when we leave." }
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 100} className="bg-white p-8 rounded-3xl border border-taupe-200 hover:border-brass-400 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                <div className="w-12 h-12 bg-forest-900 rounded-full flex items-center justify-center text-brass-400 mb-6 group-hover:scale-110 transition-transform">
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
