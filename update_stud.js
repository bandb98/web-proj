const fs = require('fs');
const file = 'src/app/services/stud/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const importStatement = `import ServiceReviews from "@/components/ui/ServiceReviews";\n`;
content = content.replace(/(import .*?\n)+/, match => match + importStatement);

const reviewsCode = `
      {/* Service Reviews */}
      <ServiceReviews reviews={[
        { name: "Hemanth Kumar", text: "Got my frst GSDs from Bark & Bond 5years ago... they suggested a good female for mating purpose and gave me a stud puppy too..and both turned out really well. honestly, they’ve been amazing." },
        { name: "Rahul C.", text: "Top-tier stud service. Professional handling and very transparent process. Very satisfied." }
      ]} />
`;

content = content.replace(/(\{\/\* Stud Grid \*\/\})/, reviewsCode + '\n      $1');

fs.writeFileSync(file, content);
