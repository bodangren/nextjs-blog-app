const fs = require('fs');
const path = require('path');

const title = process.argv[2];
const slug = title.toLowerCase().replace(/ /g, '-');
const date = new Date().toISOString().split('T')[0];

const template = `---
title: ${title}
date: ${date}
---

Write your blog post here.
`;

fs.writeFileSync(path.join('content', 'blog', `${slug}.md`), template);
console.log(`Created new post: ${slug}.md`);