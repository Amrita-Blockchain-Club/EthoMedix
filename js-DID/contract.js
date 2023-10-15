import { EAS, Offchain, SchemaEncoder, SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';

export const EASContractAddress = "0x59a0Ee7fDc4Eb1A941ff8c3c6bcdF69446398D38"; 

// Initialize the sdk with the address of the EAS Schema contract address
export const eas = new EAS(EASContractAddress);

// Gets a default provider (in production use something else like infura/alchemy)
export const provider = ethers.providers.getDefaultProvider(
  "sepolia"
);

// Connects an ethers style provider/signingProvider to perform read/write functions.
// MUST be a signer to do write operations!
eas.connect(provider);
console.log(provider)

