const fs = require('fs');
const file = 'src/app/puppies/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const importStatement = `import ServiceReviews from "@/components/ui/ServiceReviews";\n`;
content = content.replace(/(import .*?\n)+/, match => match + importStatement);

const reviewsCode = `
      {/* Service Reviews */}
      <ServiceReviews reviews={[
        { name: "Kamal", text: "I purchased my Shih Tzu from Bark N Bond 3 years ago, They provided me with an excellent-quality puppy who has grown into a very healthy, loving, and wonderful companion for our family. Even after 3 years, our Shih Tzu continues to bring so much happiness..." },
        { name: "Akash Komagan", text: "I got my GSD puppy from them 8 months ago when he was just 35 days old…and he came with KCI certification. He has turned out to be an excellent-quality dog with a really good character. What I really appreciate is that they still guide us..." },
        { name: "Raghu", text: "It was a great experience, from buying a puppy to training. They did well, highly recommended." }
      ]} />
`;

content = content.replace(/(\{\/\* Available Breeds \(Moved to Top\) \*\/\})/, reviewsCode + '\n      $1');

fs.writeFileSync(file, content);
