const express = require('express');
const request = require('request');
require("dotenv").config();
var rp = require('request-promise');
const { DefaultAzureCredential } = require("@azure/identity");
const credential = new DefaultAzureCredential();
const vaultName = process.env.KEY_VAULT_NAME;
// const  = "premware-keyvalut";
// const url = `https://${vaultName}.vault.azure.net`;

console.log(credential);
var url = "https://" + vaultName + ".vault.azure.net/secrets/Test/b004484fb2ce4b88b89858c39806db75";
rp(url)
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    });


// request({
//     "rejectUnauthorized": false,
//     "url": url,
//     "method": "GET",
//     // "body": JSON.stringify({ "request": { "action": "challenge", "user": "cdrapi", "version": "1.0" } }),
//     "headers": {
//         "Content-Type": "application/json",
//         "charset": "UTF-8"
//     },
// }, function (err, response, body) {
//     console.log("Hello World");
// });