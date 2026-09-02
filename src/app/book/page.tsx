import { Metadata } from "next";
import Link from "next/link";
import { Scissors, GraduationCap, ShoppingBag, PawPrint, Heart, Phone, MessageCircle, CheckCircle, ArrowRight, Shield, Clock, MapPin } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book Now | Bark & Bond — Premium Pet Care in Chennai",
  description: "Book doorstep pet grooming, professional dog training, pet walking, and more. Premium pet care services delivered to your home in Chennai.",
};

const services = [
  {
    icon: Scissors,
    title: "Premium Grooming",
    desc: "Full bath, haircut, nail trim & more — at your doorstep",
    color: "bg-brass-500/10 text-brass-600",
    href: "/services/grooming",
  },
  {
    icon: GraduationCap,
    title: "Dog Training",
    desc: "Basic obedience to advanced training by certified pros",
    color: "bg-forest-900/10 text-forest-900",
    href: "/services/training",
  },
  {
    icon: ShoppingBag,
    title: "Pet Sales",
    desc: "KCI-standard breeds — Labrador, Golden Retriever & more",
    color: "bg-brass-500/10 text-brass-600",
    href: "/puppies",
  },
  {
    icon: PawPrint,
    title: "Pet Walking",
    desc: "Daily walks with care & attention around Tambaram",
    color: "bg-forest-900/10 text-forest-900",
    href: "/services/walking",
  },
];

const trustPoints = [
  { icon: Shield, text: "5+ Years Experience" },
  { icon: CheckCircle, text: "Certified Trainer" },
  { icon: MapPin, text: "Doorstep Service" },
  { icon: Clock, text: "All Across Chennai" },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-pearl">

      {/* HERO — The Hook */}
      <section className="bg-forest-900 pt-32 pb-14 lg:pt-36 lg:pb-20 relative overflow-hidden bg-noise">
        {/* Subtle glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-brass-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          {/* Gold line */}
          <div className="flex justify-center mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-brass-500 to-transparent"></div>
          </div>

          <p className="text-brass-400 text-sm font-medium tracking-[0.25em] uppercase mb-6">Premium Pet Care in Chennai</p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Your Pet Deserves the{" "}
            <span className="gradient-text-gold font-cormorant uppercase tracking-[0.02em] font-bold">
              Best Care
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-taupe-200 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Professional grooming, training & pet care — delivered right to your doorstep by an experienced, certified team.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={getWhatsAppLink("Hi Bark & Bond! I'd like to book a service.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-brass-500 hover:bg-brass-600 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Book on WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+919677555002"
              className="inline-flex items-center gap-3 border-2 border-white/20 hover:border-brass-400 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:bg-white/5"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          {/* Trust Strip */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {trustPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-2 text-taupe-200 text-sm md:text-base">
                  <Icon className="w-4 h-4 text-brass-400" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES — Quick Overview */}
      <section className="py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-brass-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 text-center">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 text-center mb-10 font-heading">
            Everything Your Pet Needs, <span className="text-brass-500">Under One Roof</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="bg-white rounded-2xl p-8 border-[3px] border-taupe-100 hover:border-brass-500 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 flex items-start gap-5 group"
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${service.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-forest-900 font-heading mb-1 group-hover:text-brass-600 transition-colors">{service.title}</h3>
                    <p className="text-taupe-500 leading-relaxed">{service.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US — Social Proof */}
      <section className="py-14 lg:py-20 bg-oatmeal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-brass-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-10 font-heading">
            Trusted by Pet Parents <span className="text-brass-500">Across Chennai</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-taupe-200">
              <div className="text-5xl font-bold gradient-text-gold font-cormorant mb-3">5+</div>
              <p className="text-forest-900 font-semibold mb-1">Years of Experience</p>
              <p className="text-taupe-500 text-sm">Handling all breeds with care and expertise</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-taupe-200">
              <div className="text-5xl font-bold gradient-text-gold font-cormorant mb-3">KCI</div>
              <p className="text-forest-900 font-semibold mb-1">Standards Expertise</p>
              <p className="text-taupe-500 text-sm">Professional breeding and training standards</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-taupe-200">
              <div className="text-5xl font-bold gradient-text-gold font-cormorant mb-3">100%</div>
              <p className="text-forest-900 font-semibold mb-1">Doorstep Service</p>
              <p className="text-taupe-500 text-sm">We come to you — no travel stress for your pet</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA — The Close */}
      <section className="py-14 lg:py-20 bg-forest-900 relative overflow-hidden bg-noise">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading leading-tight">
            Ready to Give Your Pet the <span className="gradient-text-gold">Care They Deserve?</span>
          </h2>
          <p className="text-xl text-taupe-200 mb-10 font-light max-w-xl mx-auto">
            Just one message away. Book your service now and we&apos;ll take care of the rest.
          </p>

          <a
            href={getWhatsAppLink("Hi Bark & Bond! I'd like to book a service.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-brass-500 hover:bg-brass-600 text-white font-semibold px-12 py-5 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mb-8"
          >
            <MessageCircle className="w-6 h-6" />
            Book on WhatsApp Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-taupe-200 hover:text-brass-400 transition-colors text-base font-medium"
            >
              Explore Our Full Website
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
