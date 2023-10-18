import { EAS, Offchain, SchemaEncoder, SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';

export async function EAS_connection(){

  const provider = ethers.providers.getDefaultProvider(
    "sepolia"
  );
  return provider;
}
