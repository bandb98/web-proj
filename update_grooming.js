const fs = require('fs');
const file = 'src/app/services/grooming/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const importStatement = `import ServiceReviews from "@/components/ui/ServiceReviews";\n`;
content = content.replace(/(import .*?\n)+/, match => match + importStatement);

const reviewsCode = `
      {/* Service Reviews */}
      <ServiceReviews reviews={[
        { name: "John Jpb", text: "Excellent doorstep grooming service! 🐾❤️ I had a wonderful experience with Bark N Bond... The groomer was very gentle, patient, and handled my pet with great care throughout the session. The biggest advantage is being able to get professional grooming done right at home." },
        { name: "Karthik Subramaniam", text: "Really happy with the door-step grooming service... He handled my Shih Tzu so patiently without causing any stress and gave such a beautiful finishing cut.. My dog looked absolutely gorgeous after the grooming!" },
        { name: "Abilash Rokze", text: "The groomer was professional, gentle, and handled my pet with great care. The doorstep service was extremely convenient and saved me a lot of time. My pet looked clean, fresh, and well-groomed after the session." }
      ]} />
`;

content = content.replace(/(\{\/\* Packages Section \*\/\})/, reviewsCode + '\n      $1');

fs.writeFileSync(file, content);
