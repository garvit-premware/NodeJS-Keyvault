require("dotenv").config();

const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

const credential = new DefaultAzureCredential();

console.log(credential);

const vaultName = process.env.KEY_VAULT_NAME;
// const  = "premware-keyvalut";
const url = `https://${vaultName}.vault.azure.net`;
 
const client = new SecretClient(url, credential);
 
const secretName = "Test";
 
async function main() {
  const latestSecret = await client.getSecret(secretName);
  console.log(`Latest version of the secret ${secretName}: `, latestSecret);
  // const specificSecret = await client.getSecret(secretName, { version: latestSecret.properties.version});
  // console.log(`The secret ${secretName} at the version ${latestSecret.properties.version}: `, specificSecret);
}
 
main();