import { EAS, Offchain, SchemaEncoder, SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';

export async function EAS_connection(){

  const provider = ethers.providers.getDefaultProvider(
    "sepolia"
  );
  return provider;
}

const provider = await EAS_connection();
// console.log(provider);
const eas = new EAS("0xe0ac4a11c90392465f51440efa55ed6e535e97c3");
// console.log(eas.connect(provider));

let methods = Object.getOwnPropertyNames(eas).filter(function(property) {
  return typeof obj[property] === 'connect';
});