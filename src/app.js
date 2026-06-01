const http = require('http');
const os = require('os');

const PORT = process.env.PORT || 3000;
const ENV = process.env.APP_ENV || 'development';
const VERSION = process.env.APP_VERSION || '1.0.0';

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'healthy' }));
    return;
  }

  const response = {
    message: `Hello from ${ENV}!`,
    hostname: os.hostname(),
    version: VERSION,
    environment: ENV,
    timestamp: new Date().toISOString()
  };

  console.log(`[${ENV}] Request from ${req.headers['x-forwarded-for'] || 'localhost'}`);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(response, null, 2));
});

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📦 Version: ${VERSION}`);
  console.log(`🌍 Environment: ${ENV}`);
});
