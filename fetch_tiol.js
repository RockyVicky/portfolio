import fs from 'fs';
import https from 'https';

const getImages = (url, regex) => {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = data.match(regex);
        if (matches) resolve([...new Set(matches)]);
        else resolve([]);
      });
    }).on('error', (e) => {
      resolve([]);
    });
  });
};

const run = async () => {
  let images = await getImages('https://tiolawards.in/', /(https:\/\/[a-zA-Z0-9_\-\.\/]+(?:tiolawards)[a-zA-Z0-9_\-\.\/]+\.(?:png|jpg|jpeg|webp))/gi);
  if (!images.length) {
    const relative = await new Promise(resolve => {
      https.get('https://tiolawards.in/', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
        let d = ''; res.on('data', c => d += c); res.on('end', () => {
          const m = d.match(/src=["']([^"']+\.(?:png|jpg|jpeg|webp))["']/gi);
          resolve(m ? m.map(x => {
            let p = x.slice(5, -1);
            if (p.startsWith('http')) return p;
            if (p.startsWith('/')) return 'https://tiolawards.in' + p;
            return 'https://tiolawards.in/' + p;
          }) : []);
        });
      });
    });
    if (relative.length) images = relative;
  }
  fs.writeFileSync('tiol_images.json', JSON.stringify({ images: [...new Set(images)].slice(0, 10) }, null, 2), 'utf8');
};
run();
