"use client";

import { Star, ExternalLink, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

// Real Google Reviews
const reviews = [
  { name: "Praba Karan", text: "I had a great experience at Bark & Bond! Mr. Karthik did an amazing job with my dog’s training and grooming. He was very patient, professional, and handled my dog with great care and affection. I’m really happy with the results and the overall service. Highly recommend Mr. Karthik and Bark & Bond for anyone looking for excellent pet care! 🐾❤️" },
  { name: "elakiya Jiyaa", text: "Good service Well done guys 💥👌 The team is well-trained and handled my 4-year-old German Shepherd so well! She’s quite aggressive and doesn’t even allow me to cut her nails, but the Bark & Bond team did an amazing job without any complications. Really impressed with their patience, professionalism, and care. ❤️ Thank you so much, guys! Highly recommended! Good service 👍👌🐾👏 Price assessment Reasonable price Services Dog ear cleaning, Dog bathing and blow dry, Dog nail trimming" },
  { name: "Selvakumar Chinnaya", text: "I have 2 dogs at home...I know bark & bond for past three years..glad that I could know them...I can really suggest to everyon for their punctuality and care and love they show to the pets...bark & bond is highly recommend for all the services..thank you Karthik and naveen for taking care of my pets with love and passion.." },
  { name: "prakash kp", text: "Amazing people for amazing work…i would surely recommend to all pet parents.." },
  { name: "joel raja", text: "Excellent service Done ✅, Very professional and friendly to the pet, loved your work, see you next month 🤞" },
  { name: "Deep Teja", text: "I’ve been with them for almost two years now, and they’ve been wonderful with my dog. They’re caring, dependable, and genuinely treat him with so much love and attention. I’ve never had any issues and always feel reassured knowing he’s in their care. Couldn’t ask for a better service! 🐾❤️" },
  { name: "Raghu", text: "It was a great experience, from buying a puppy to training. They did well, highly recommended." },
  { name: "shomli swastika", text: "Good caring to our dog excellent work" },
  { name: "Gopi Alagarsamy", text: "I had a wonderful experience with this dog pet care service! The staff are very caring, friendly, and professional. They took excellent care of my dog and made sure he was comfortable, happy, and well looked after. I really appreciate their patience and genuine love for pets. I would definitely recommend this place to anyone looking for a safe and reliable pet care service for their furry friends!" },
  { name: "Manikandan Duraikannu", text: "I Had an amazing experience with Naveen and his team at Bark and Bond! He was extremely friendly, professional, and genuinely caring throughout. Highly recommend Naveen and Bark and Bond for their excellent service and wonderful experience.." },
  { name: "Sandeep Anbumani", text: "Best place to board your pets" },
  { name: "Karthik Subramaniam", text: "Really happy with the door-step grooming service from Bark and Bond I’m from Anna Nagar and recently met Naveen, who is an amazing dog stylist..and He handled my Shih Tzu so patiently without causing any stress and gave such a beautiful finishing cut.. My dog looked absolutely gorgeous after the grooming! Highly recommend Bark and Bond and especially Naveen for his excellent work." },
  { name: "Hemanth Kumar", text: "These guys are amazing for the people around Tambaram..cuz I Got my frst GSDs from Bark & Bond 5years ago and they are guiding me very well from the day 1..They started training them from 3 months itself,and later 2 years they suggested a good female for mating purpose and gave me a stud puppy too..and both turned out really well. honestly, they’ve been amazing. I’ve also been getting their grooming done here till now, and they always do a great job. Really happy with them and would definitely recommend them and ill attach few photos too Thank you Bark n Bond ♥️" },
  { name: "Akash Komagan", text: "I was honestly a little nervous about getting a puppy, but that changed after I met Bark & Bond. I got my GSD puppy from them 8 months ago when he was just 35 days old…and he came with KCI certification. He has turned out to be an excellent-quality dog with a really good character. What I really appreciate is that they still guide us whenever we have doubts and give us proper instructions. Really happy with my experience with Bark & Bond." },
  { name: "Adarsh Singh Rajput", text: "Great service by naveen, he was very kind and friendly with the pet and the owner." },
  { name: "John Jpb", text: "Excellent doorstep grooming service! 🐾❤️ I had a wonderful experience with Bark N Bond. Their doorstep grooming service is extremely convenient, professional, and stress-free for both pets and pet parents. The groomer was very gentle, patient, and handled my pet with great care throughout the session. I really appreciate the professionalism, punctuality, cleanliness, and attention to detail. The grooming was done beautifully, and my pet looked fresh, clean, and happy afterward 🐶✨ The biggest advantage is being able to get professional grooming done right at home, without the stress of travelling or waiting at a salon Highly recommended Bark N Bond to every pet parent looking for safe, convenient, and quality grooming services ❤️🐾 Thank you, Bark N Bond, for taking such great care of my furry baby 🥰" },
  { name: "Niranjan", text: "I had a really great experience with Bark & Bond! I took daily walking service for my dog Milo..and Their walking service was excellent, and they were very punctual and professional. They took good care and made sure everything was handled smoothly. Really appreciate their reliability and service. Highly recommended! 🐾❤️" },
  { name: "Kamal", text: "I purchased my Shih Tzu from Bark N Bond 3 years ago, They provided me with an excellent-quality puppy who has grown into a very healthy, loving, and wonderful companion for our family. Even after 3 years, our Shih Tzu continues to bring so much happiness and love into our home. He has been a perfect family companion, and we are truly grateful to Bark N Bond for bringing him into our lives. Thank you to the entire Bark N Bond team for providing us with such a healthy and adorable puppy. Highly recommended! ❤️🐾" },
  { name: "Abilash Rokze", text: "I Had a great experience with Bark & Bond for my pet’s grooming! The groomer was professional, gentle, and handled my pet with great care. The doorstep service was extremely convenient and saved me a lot of time. My pet looked clean, fresh, and well-groomed after the session. Highly recommended Bark & Bond for their excellent service and pet-friendly approach" },
  { name: "Gau Tam", text: "Really happy with the training provided by Bark N Bond! They trained my dog very well and brought a lot of positive changes in his behaviour. The trainers were patient, caring, and handled my dog in a very professional manner. I’m really glad I chose Bark N Bond for my dog’s training. Highly recommended for anyone looking for good and reliable dog training! ♥️" },
  { name: "Alex Rtr", text: "Ive been taking service from bark & bond for almost a year of time.. I can suggest this team for door step grooming because they are best to handle all the pets especially pets with high temperament Thank you Bark & bond for cost efficient and best service" }
];

const topRow = reviews.slice(0, 11);
const bottomRow = reviews.slice(11, 21);

export default function GoogleReviews() {
  return (
    <section className="py-24 bg-oatmeal relative overflow-hidden border-y border-taupe-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <AnimatedSection className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-forest-900 font-bold text-xl ml-2">5.0</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 font-heading mb-4">
              Loved by Pets. <br />
              <span className="text-brass-600">Trusted by Owners.</span>
            </h2>
            <p className="text-taupe-600 text-lg">
              Based on 24+ verified 5-star reviews on Google.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            {/* Google Maps Link */}
            <a 
              href="https://www.google.com/maps/place/Bark+%26+Bond/@12.9063733,80.099992,17z/data=!4m16!1m9!3m8!1s0x3a525f68378309ab:0x9833293f18bbb226!2sBark+%26+Bond!8m2!3d12.9063733!4d80.1025669!9m1!1b1!16s%2Fg%2F11zfhnk97s!3m5!1s0x3a525f68378309ab:0x9833293f18bbb226!8m2!3d12.9063733!4d80.1025669!16s%2Fg%2F11zfhnk97s?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-taupe-300 hover:border-brass-400 text-forest-900 font-semibold rounded-full transition-all duration-300 hover:shadow-lg group"
            >
              <img 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                alt="Google" 
                className="h-5 opacity-90 group-hover:opacity-100 transition-opacity" 
              />
              <span className="ml-2">Read all Reviews</span>
              <ExternalLink className="w-4 h-4 text-taupe-400 group-hover:text-brass-500 transition-colors" />
            </a>
          </AnimatedSection>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6">
        
        {/* Top Row Marquee */}
        <div className="animate-marquee items-center gap-6" style={{ animationDuration: "120s" }}>
          {[...topRow, ...topRow].map((review, idx) => (
            <ReviewCard key={`top-${idx}`} review={review} />
          ))}
        </div>

        {/* Bottom Row Marquee */}
        <div className="animate-marquee items-center gap-6" style={{ animationDuration: "135s", animationDirection: "reverse" }}>
          {[...bottomRow, ...bottomRow].map((review, idx) => (
            <ReviewCard key={`bottom-${idx}`} review={review} />
          ))}
        </div>
        
        {/* Gradient fades on left and right for smooth entry/exit */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-oatmeal to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-oatmeal to-transparent pointer-events-none z-10"></div>
      </div>

    </section>
  );
}

function ReviewCard({ review }: { review: { name: string, text: string } }) {
  return (
    <div className="w-[350px] md:w-[450px] h-full flex-shrink-0 bg-white p-8 rounded-3xl border border-taupe-200 shadow-sm hover:shadow-lg hover:border-brass-300 transition-all duration-300 relative group flex flex-col">
      <Quote className="absolute top-6 right-6 w-8 h-8 text-sage-100 group-hover:text-brass-100 transition-colors pointer-events-none" />
      
      <div className="flex text-amber-500 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      
      <p className="text-taupe-600 leading-relaxed mb-6 flex-grow relative z-10 font-light text-sm italic line-clamp-6">
        "{review.text}"
      </p>
      
      <div className="flex items-center justify-between border-t border-taupe-100 pt-4 mt-auto">
        <span className="font-bold text-forest-900 text-sm">{review.name}</span>
      </div>
    </div>
  );
}
