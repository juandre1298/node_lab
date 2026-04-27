import http from 'node:http';

const DESIRED_PORT = 3000;

const server = http.createServer((req, res) => {
    console.log('Request received');
    res.end('Hello world');
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.warn(`[Warning] Port ${DESIRED_PORT} is in use. Falling back to a random port...`);

        server.listen(0); 
    } else {
        console.error('Fatal server error:', err);
        process.exit(1);
    }
});

server.listen(DESIRED_PORT, () => {
    console.log(`Server successfully listening on port ${server.address().port}`);
});