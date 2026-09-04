import { Metadata } from "next";
import { Scissors, GraduationCap, PawPrint, Heart, Shield, ChevronDown, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ChampionshipCarousel from "@/components/ui/ChampionshipCarousel";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Bark & Bond in Chennai | Pet Grooming & Training",
  description: "Exceptional care for your best friend. Professional grooming, training, and pet care services delivered by experienced professionals.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 01: Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center bg-forest-900 overflow-hidden bg-noise">
        {/* Subtle radial gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-brass-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex-1 flex flex-col justify-center">
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="flex justify-center mb-8">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-brass-500 to-transparent"></div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              <span className="block font-light text-taupe-200 text-3xl md:text-5xl lg:text-6xl mb-2">Welcome to</span>
              <span className="gradient-text-gold block mb-4 font-cormorant uppercase tracking-[0.02em] font-bold py-2">
                BARK <span className="text-[0.85em] mx-[0.3em]">&amp;</span> BOND
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex justify-center mb-10">
              <div className="h-px w-12 bg-brass-500"></div>
            </div>
            <p className="text-xl md:text-2xl text-taupe-200 max-w-2xl mx-auto mb-12 font-light">
              Professional grooming, training, and pet care delivered by an experienced team.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={500}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/services" className="px-10 py-4 bg-brass-500 hover:bg-brass-400 text-forest-900 font-semibold rounded-full transition-all duration-300 w-full sm:w-auto text-center hover:shadow-[0_0_20px_rgba(214,163,101,0.3)]">
                Explore Services
              </a>
              <a href={getWhatsAppLink("Hello! I'd like to know more about your pet care services.")} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-transparent border border-taupe-600 hover:border-brass-500 hover:text-brass-500 text-white font-medium rounded-full transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2">
                Talk to Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70">
          <span className="text-xs text-brass-500 tracking-widest uppercase">Scroll</span>
          <ChevronDown className="text-brass-500 w-5 h-5" />
        </div>
        
        {/* Integrated Trust Strip */}
        <div className="absolute bottom-0 left-0 w-full bg-forest-900/60 backdrop-blur-md border-t border-forest-800/80 pb-safe">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-between items-center gap-4 text-sm sm:text-base text-taupe-200 font-medium">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-brass-500" />
              <span>5+ Years Experience</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-forest-700"></div>
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-brass-500" />
              <span>Professional Team</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-forest-700"></div>
            <div className="flex items-center gap-3">
              <PawPrint className="w-5 h-5 text-brass-500" />
              <span>Premium Facilities</span>
            </div>
          </div>
        </div>
      </section>

      {/* 02: Brand Statement Section */}
      <section className="py-24 lg:py-40 bg-pearl relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fade-in">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
              <div className="lg:w-2/3 relative">
                {/* Decorative gold bracket/line */}
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-brass-400 via-brass-500 to-transparent opacity-50"></div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-forest-900 leading-[1.4] tracking-tight">
                  "We understand that your pet isn't just an animal—<span className="text-brass-600 italic">they're a beloved member of your family.</span>"
                </h2>
                <p className="mt-8 text-xl text-taupe-600 leading-relaxed font-light">
                  That's why we bring patience, expertise, and genuine care to every grooming session, training lesson, and walk. We provide the peace of mind you deserve.
                </p>
              </div>
              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-brass-300/30 flex items-center justify-center relative">
                  <div className="absolute inset-2 rounded-full border border-brass-400/50"></div>
                  <Heart className="w-16 h-16 text-brass-500 opacity-80" strokeWidth={1} />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Championship Showcase */}
      <section className="py-24 lg:py-32 bg-forest-900 relative overflow-hidden bg-noise">
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brass-500/8 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <span className="text-brass-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Award-Winning Excellence</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading">
                Our Dogs Don&apos;t Just Train.<br />
                <span className="text-brass-400">They Win.</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo */}
            <AnimatedSection animation="fade-up" delay={200}>
              <ChampionshipCarousel />
            </AnimatedSection>

            {/* Stats & Description */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="space-y-8">
                <div>
                  <p className="text-xl md:text-2xl text-taupe-200 leading-relaxed font-light mb-6">
                    Meet <span className="text-white font-semibold">Yako</span>. Trained by the <span className="text-brass-400 font-medium">Bark &amp; Bond Team</span>, Yako went on to dominate the ring at a prestigious dog show — a testament to the discipline, dedication, and elite handling that defines our training program.
                  </p>
                  <p className="text-taupe-400 leading-relaxed">
                    This isn&apos;t just training. This is building champions. The same level of expertise and care goes into every session, whether it&apos;s basic obedience or competition preparation.
                  </p>
                </div>

                {/* Achievement Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-2xl bg-forest-800/50 border border-forest-700 flex flex-col justify-center">
                    <span className="text-3xl md:text-4xl font-bold text-brass-400 block mb-2">🏆</span>
                    <span className="text-xs text-taupe-300 uppercase tracking-wider font-medium leading-tight">No.1 Best In Show</span>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-forest-800/50 border border-forest-700 flex flex-col justify-center">
                    <span className="text-3xl md:text-4xl font-bold text-brass-400 block mb-2">🥇</span>
                    <span className="text-xs text-taupe-300 uppercase tracking-wider font-medium leading-tight">Best Of Breed</span>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-forest-800/50 border border-forest-700 flex flex-col justify-center">
                    <span className="text-3xl md:text-4xl font-bold text-brass-400 block mb-2">⭐</span>
                    <span className="text-xs text-taupe-300 uppercase tracking-wider font-medium leading-tight">Best Puppy In Show</span>
                  </div>
                </div>

                <a 
                  href="/services/training" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brass-500 hover:bg-brass-400 text-forest-900 font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(214,163,101,0.3)]"
                >
                  Explore Our Training <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 03: Services Overview */}
      <section className="py-24 lg:py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <div className="mb-20">
              <span className="text-brass-600 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">What We Do</span>
              <h2 className="text-4xl md:text-6xl font-medium text-forest-900 mb-6">Premium Care Services.</h2>
              <p className="text-xl text-taupe-600 max-w-2xl font-light">Elevated experiences tailored to your pet's specific needs, ensuring they always look and feel their absolute best.</p>
            </div>
          </AnimatedSection>
          
          {/* Main 3 Services */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
            {[
              {
                title: "Grooming",
                desc: "Expert grooming and styling tailored to your pet's breed and coat requirements.",
                icon: Scissors,
                link: "/services/grooming"
              },
              {
                title: "Training",
                desc: "From foundational obedience to advanced behavioral shaping by experts.",
                icon: GraduationCap,
                link: "/services/training"
              },
              {
                title: "Walking",
                desc: "Structured, enriching walks designed around your pet's unique energy levels.",
                icon: PawPrint,
                link: "/services/walking"
              }
            ].map((service, idx) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={idx * 150}>
                <a href={service.link} className="group block h-full bg-gradient-to-b from-oatmeal to-white rounded-3xl p-10 lg:p-12 border border-taupe-200 hover:border-brass-300 hover:shadow-[0_20px_40px_-15px_rgba(214,163,101,0.15)] transition-all duration-500 relative overflow-hidden flex flex-col">
                  {/* Gold top border accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brass-300 via-brass-500 to-brass-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  <div className="w-20 h-20 bg-pearl rounded-2xl flex items-center justify-center mb-10 text-taupe-500 group-hover:text-brass-500 group-hover:bg-sage-50 transition-colors duration-500 shadow-sm border border-taupe-200">
                    <service.icon className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-medium mb-4 text-forest-900">{service.title}</h3>
                  <p className="text-taupe-600 leading-relaxed font-light flex-grow">{service.desc}</p>
                  
                  <div className="mt-10 flex items-center text-sm font-medium text-forest-900 group-hover:text-brass-600 transition-colors">
                    Learn more <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Secondary 2 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <AnimatedSection animation="fade-up" delay={400}>
              <a href="/puppies" className="group flex items-center bg-oatmeal rounded-2xl p-8 border border-taupe-200 hover:border-brass-300 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-full flex-shrink-0 flex items-center justify-center text-taupe-500 group-hover:text-brass-500 group-hover:bg-sage-50 transition-colors shadow-sm border border-taupe-200 mr-6">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1 text-forest-900">Pet Sales</h3>
                  <p className="text-taupe-600 text-sm font-light">Thoughtfully sourced puppies with a transparent process.</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-taupe-200 group-hover:text-brass-500 transform group-hover:translate-x-1 transition-all" />
              </a>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={500}>
              <a href="/services/stud" className="group flex items-center bg-oatmeal rounded-2xl p-8 border border-taupe-200 hover:border-brass-300 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-full flex-shrink-0 flex items-center justify-center text-taupe-500 group-hover:text-brass-500 group-hover:bg-sage-50 transition-colors shadow-sm border border-taupe-200 mr-6">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1 text-forest-900">Stud Services</h3>
                  <p className="text-taupe-600 text-sm font-light">Professional and carefully managed stud services.</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-taupe-200 group-hover:text-brass-500 transform group-hover:translate-x-1 transition-all" />
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 04: Final CTA */}
      <section className="py-16 lg:py-24 bg-forest-900 relative overflow-hidden bg-noise">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">
              <span className="text-white block mb-2 font-light text-4xl md:text-5xl">Welcome to</span>
              <span className="gradient-text-gold block font-cormorant uppercase tracking-[0.02em] font-bold py-2">
                BARK <span className="text-[0.85em] mx-[0.3em]">&amp;</span> BOND
              </span>
            </h1>
            <p className="text-xl text-taupe-500 mb-14 font-light max-w-2xl mx-auto">
              Join the family of pet owners who trust us with their companions' well-being and happiness.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/services" className="px-12 py-4 bg-white hover:bg-taupe-200 text-forest-900 font-medium rounded-full transition-all duration-300 w-full sm:w-auto text-center">
                Book a Service
              </a>
              <a href={getWhatsAppLink("Hi! I'm interested in booking a service for my pet.")} target="_blank" rel="noopener noreferrer" className="px-12 py-4 bg-brass-600 hover:bg-brass-500 text-forest-900 font-medium rounded-full transition-all duration-300 w-full sm:w-auto text-center shadow-[0_0_20px_rgba(214,163,101,0.2)]">
                Talk on WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
