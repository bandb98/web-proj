const fs = require('fs');
const file = 'src/app/services/walking/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const importStatement = `import ServiceReviews from "@/components/ui/ServiceReviews";\n`;
content = content.replace(/(import .*?\n)+/, match => match + importStatement);

const reviewsCode = `
      {/* Service Reviews */}
      <ServiceReviews reviews={[
        { name: "Niranjan", text: "I had a really great experience with Bark & Bond! I took daily walking service for my dog Milo..and Their walking service was excellent, and they were very punctual and professional. They took good care and made sure everything was handled smoothly." },
        { name: "Sandeep Anbumani", text: "Best place to board your pets" }
      ]} />
`;

content = content.replace(/(\{\/\* Pricing Plans \*\/\})/, reviewsCode + '\n      $1');

fs.writeFileSync(file, content);
