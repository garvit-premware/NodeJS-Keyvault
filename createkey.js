require("dotenv").config();

const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

const credential = new DefaultAzureCredential();

// const vaultName = "<YOUR KEYVAULT NAME>";
const vaultName = process.env.KEY_VAULT_NAME;
const url = `https://${vaultName}.vault.azure.net`;

const client = new SecretClient(url, credential);

const secretName = "NodeDesktopSecret";

async function main() {
  const result = await client.setSecret(secretName, "DemoSecret", {
    enabled: true,
    notBefore: new Date("2021-05-22").toUTCString(),
    expires: new Date("2021-05-23").toUTCString(),
    tags: {
      Test: "test"
    }
  });
}

main();