const { createReadStream } = require('fs');
const { createServer } = require('http');

const server = createServer();

server.on('request', (req, res) => {
  const readable = createReadStream('./big-file.html');
  // readable.on('data', (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on('end', () => {
  //   res.end();
  // });
  readable.pipe(res);
});

server.listen(3000, '127.0.0.1', () => {
  console.log(`running on 3000: 127.0.0.1`);
});
