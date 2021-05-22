require("dotenv").config();

const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");
 
const credential = new DefaultAzureCredential();
 
const vaultName = process.env.KEY_VAULT_NAME;
const url = `https://${vaultName}.vault.azure.net`;
 
const client = new SecretClient(url, credential);
 
const secretName = "Test";
 
async function main() {
  await client.beginDeleteSecret(secretName);
}
 
main();