Nodejs Local Proxy for SSL Termination
======================================
First generate a self-signed SSL cert:
```sh
cd ssl
./generate-cert.sh
```
Fill out the required fields, for CN, see the following excerpt from IBM:
  
```
Write down the Common Name (CN) for your SSL Certificate. The CN is the fully qualified name for the system that uses the certificate. If you are using Dynamic DNS, your CN should have a wild-card, for example: *.api.com. Otherwise, use the hostname or IP address set in your Gateway Cluster (for example. 192.16.183.131 or dp1.acme.com).
```  

This should generate the two necessary .pem files in the ssl directory.

Next install npm dependencies...
```sh
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
