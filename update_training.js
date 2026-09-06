const fs = require('fs');
const file = 'src/app/services/training/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const importStatement = `import ServiceReviews from "@/components/ui/ServiceReviews";\n`;
content = content.replace(/(import .*?\n)+/, match => match + importStatement);

const reviewsCode = `
      {/* Service Reviews */}
      <ServiceReviews reviews={[
        { name: "Gau Tam", text: "Really happy with the training provided by Bark N Bond! They trained my dog very well and brought a lot of positive changes in his behaviour. The trainers were patient, caring, and handled my dog in a very professional manner." },
        { name: "Praba Karan", text: "Mr. Karthik did an amazing job with my dog’s training... He was very patient, professional, and handled my dog with great care and affection. I’m really happy with the results and the overall service." },
        { name: "elakiya Jiyaa", text: "The team is well-trained and handled my 4-year-old German Shepherd so well! She’s quite aggressive... but the Bark & Bond team did an amazing job without any complications. Really impressed with their patience, professionalism, and care." }
      ]} />
`;

content = content.replace(/(\{\/\* Programs Grid \*\/\})/, reviewsCode + '\n      $1');

fs.writeFileSync(file, content);
