const http = require('http');

function makeRequest(path) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: 'localhost',
      port: 3000,
      path: path,
      method: 'GET'
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({
        statusCode: res.statusCode,
        body: JSON.parse(data)
      }));
    });
    req.on('error', reject);
    req.end();
  });
}

async function runTests() {
  console.log('Running tests...\n');
  let passed = 0;
  let failed = 0;

  // Test 1: Health endpoint
  try {
    const res = await makeRequest('/health');
    if (res.statusCode === 200 && res.body.status === 'healthy') {
      console.log('✅ Health check endpoint works');
      passed++;
    } else {
      console.log('❌ Health check failed');
      failed++;
    }
  } catch (e) {
    console.log('❌ Health check error:', e.message);
    failed++;
  }

  // Test 2: Root endpoint
  try {
    const res = await makeRequest('/');
    if (res.statusCode === 200 && res.body.message) {
      console.log('✅ Root endpoint works:', res.body.message);
      passed++;
    } else {
      console.log('❌ Root endpoint failed');
      failed++;
    }
  } catch (e) {
    console.log('❌ Root endpoint error:', e.message);
    failed++;
  }

  console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

runTests();
