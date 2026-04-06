import fs from 'fs';
import https from 'https';

https.get('https://play.google.com/store/apps/details?id=com.imeuswe.app&hl=en_IN', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Match URLs ending with w240-h480-rw or similar which are screenshots
    const matches = data.match(/(https:\/\/play-lh\.googleusercontent\.com\/[^"'\s\\]+)/gi);
    if (matches) {
       const clean = matches.map(m => m.replace(/\\u003d/g, '=').replace(/\\u0026/g, '&'));
       // Get unique base URLs and append =w480-h960 to them for high quality
       const baseUrls = [...new Set(clean.map(url => url.split('=')[0]))];
       fs.writeFileSync('playstore_images.json', JSON.stringify({ images: baseUrls.slice(0, 10).map(u => u + '=w480-h960') }, null, 2), 'utf8');
    }
  });
});
