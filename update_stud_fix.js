const fs = require('fs');
const file = 'src/app/services/stud/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/\{ name: "Rahul C\.", text: "Top-tier stud service. Professional handling and very transparent process. Very satisfied\." \}/, '');
content = content.replace(/,\s*\]/, ']');

fs.writeFileSync(file, content);
