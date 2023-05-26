import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello World! Hola demo');
  res.end();
}).listen(process.env.PORT);
