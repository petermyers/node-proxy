Nodejs Local Proxy for SSL Termination
======================================
First generate a self-signed SSL cert:
```sh
cd ssl
./generate-cert.sh
```
This will prompt you for two required fields, ```CN``` and ```SAN```.  
For local development, you can use:
```
CN=*.yourdomain.com
SAN=DNS:*.yourdomain.com

This should generate the two necessary files in the ssl directory.

Next install npm dependencies...
```sh
cd ..
npm install
```

Setup port mappings...
```sh
cp port-mappings.json.sample port-mappings.json
```

Configure the port mappings as you need them in ```port-mappings.json```.

Finally, start it up...  
```
npm start
```
