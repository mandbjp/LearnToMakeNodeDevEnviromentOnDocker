const http = require('http');

const data = [
  { text: 'hoge' },
  { text: 'fuga' }
];

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  data.push({text: 'piyo-'+data.length });

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));

}).listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
