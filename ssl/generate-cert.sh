#!/bin/bash

rm -f server.key
rm -f server.crt

#openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem
read -p "CN (ex. *.mycompany.com): " CN
read -p "SAN (ex. DNS:*.mycompany.com): " SAN
openssl req \
    -newkey rsa:2048 \
    -x509 \
    -nodes \
    -keyout server.key \
    -new \
    -out server.crt \
    -subj /CN=$CN \
    -reqexts SAN \
    -extensions SAN \
    -config <(cat /System/Library/OpenSSL/openssl.cnf \
        <(printf "[SAN]\nsubjectAltName=$SAN")) \
    -sha256 \
    -days 3650
