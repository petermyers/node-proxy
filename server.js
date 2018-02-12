const http = require('http');
const https = require('https');
var httpProxy = require('http-proxy');
const fs = require('fs');

const options = {
  key: fs.readFileSync('ssl/key.pem'),
  cert: fs.readFileSync('ssl/certificate.pem')
}

const portMappings = JSON.parse(fs.readFileSync('port-mappings.json'));
const proxy = httpProxy.createProxyServer(options);

proxy.on('error', (e) => {
  console.error(e);
});

const forwardLogic = (req, res) => {
  let localPort = portMappings[req.headers.host];
  console.log(`Forwarding request from:\n${req.headers.host}${req.url} -> http://localhost:${localPort}${req.url}`);
  proxy.web(req, res, { target: `http://localhost:${localPort}` }); 
};

let servers = [
  https.createServer(options, forwardLogic).listen(443), 
  http.createServer(forwardLogic).listen(80)
];

