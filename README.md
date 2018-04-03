Nodejs Local Proxy for SSL Termination
======================================
First generate a self-signed SSL cert:
```sh
cd ssl
./generate-cert.sh
```  

This will prompt you for two required fields, ```CN``` and ```SAN```.  
For local development, you can use: 

```sh
CN=*.yourdomain.com
SAN=DNS:*.yourdomain.com
```  

Note that the ```DNS:``` in the SAN entry is important, and you need to include it.

This should generate the two necessary files in the ssl directory.  

It can be helpful to let your computer know to trust that generated certificate. Otherwise, you may encounter ```net::ERR_CERT_AUTHORITY_INVALID``` errors. In OSX, open up your Keychain Access app.

Next, open up the 'Certificates' category near the bottom left. Drag and drop your generated ```server.crt``` file into the keychain app.  

Double click the installed certificate you just added, and expand 'Trust'. Next to 'Whenever using this certificate', select 'Always Trust'.

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
