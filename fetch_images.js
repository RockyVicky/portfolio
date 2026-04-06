import fs from 'fs';
import https from 'https';

const getImages = (url, regex) => {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = data.match(regex);
        if (matches) {
           const clean = matches.map(m => m.replace(/\\u003d/g, '=').replace(/\\u0026/g, '&'));
           resolve([...new Set(clean)].slice(0, 5));
        } else resolve([]);
      });
    });
  });
};

const run = async () => {
  const playStore = await getImages('https://play.google.com/store/apps/details?id=com.imeuswe.app&hl=en_IN', /(https:\/\/play-lh\.googleusercontent\.com\/[a-zA-Z0-9_\-]+[=A-Za-z0-9-]*)/gi);
  const website = await getImages('https://www.imeuswe.in/home', /(https:\/\/[a-zA-Z0-9_\-\.\/]+\.(?:png|jpg|jpeg|webp))/gi);
  fs.writeFileSync('fetch_out.json', JSON.stringify({ playStore, website }, null, 2), 'utf8');
};
run();
