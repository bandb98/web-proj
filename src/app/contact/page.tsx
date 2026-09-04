import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Bark & Bond',
  description: 'Get in touch with us for premium door-step pet care services, grooming, and training inquiries.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-pearl">
      {/* Page Hero Banner */}
      <section className="bg-forest-900 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brass-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Reach Out</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get In <span className="text-brass-500">Touch</span>
          </h1>
          <p className="text-taupe-500 text-lg max-w-2xl mx-auto">
            We are here to assist you with any inquiries regarding our premium doorstep pet care services.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Contact Info */}
            <AnimatedSection className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 font-heading mb-8">Contact Information</h2>
              
              <div className="flex items-start">
                <div className="w-14 h-14 bg-white shadow-sm border border-taupe-200 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <MessageCircle className="w-6 h-6 text-brass-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-900 mb-2">WhatsApp / Phone</h3>
                  <p className="text-taupe-600 mb-3">Fastest way to reach us for bookings.</p>
                  <a href="https://wa.me/919677555002" target="_blank" rel="noopener noreferrer" className="text-brass-600 font-semibold hover:text-brass-500 transition-colors block">
                    +91 96775 55002
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-taupe-200"></div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-white shadow-sm border border-taupe-200 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <MessageCircle className="w-6 h-6 text-brass-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-900 mb-2">Email</h3>
                  <p className="text-taupe-600 mb-3">Drop us a line for detailed queries.</p>
                  <a href="mailto:barkandbond98@gmail.com" className="text-forest-900 font-semibold hover:text-brass-500 transition-colors">
                    barkandbond98@gmail.com
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-taupe-200"></div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-white shadow-sm border border-taupe-200 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <MessageCircle className="w-6 h-6 text-brass-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-900 mb-2">Instagram</h3>
                  <p className="text-taupe-600 mb-3">Follow us for updates and cute pictures!</p>
                  <a href="https://www.instagram.com/the.furstylist?igsi=cXp4MjY4bmIyajMy" target="_blank" rel="noopener noreferrer" className="text-forest-900 font-semibold hover:text-brass-500 transition-colors">
                    @the.furstylist
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-taupe-200"></div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-white shadow-sm border border-taupe-200 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <Clock className="w-6 h-6 text-brass-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-900 mb-2">Working Hours</h3>
                  <p className="text-taupe-600">Everyday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="w-full h-px bg-taupe-200"></div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-white shadow-sm border border-taupe-200 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <MapPin className="w-6 h-6 text-brass-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-900 mb-2">Location</h3>
                  <p className="text-taupe-600 leading-relaxed">
                    We currently do not operate a physical office. We provide premium <strong>door-step services</strong> directly to your home.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Dynamic WhatsApp Form */}
            <AnimatedSection delay={200} className="bg-white p-10 lg:p-14 rounded-3xl shadow-xl border border-taupe-200">
              <h2 className="text-3xl font-bold text-forest-900 font-heading mb-4">Send an Enquiry</h2>
              <p className="text-taupe-600 mb-8 leading-relaxed">
                Fill out the details below and it will instantly prepare a WhatsApp message for our team to review!
              </p>
              
              <ContactForm />

            </AnimatedSection>

          </div>
        </div>
      </section>
    </main>
  );
}
