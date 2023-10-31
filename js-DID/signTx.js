import { EAS, SchemaEncoder, SchemaRegistry } from '@ethereum-attestation-service/eas-sdk'
import { ethers } from 'ethers'
import dotenv from 'dotenv';
dotenv.config();
const addresses = {
  'mainnet': {
    schemaRegistryContractAddress: '0xA7b39296258348C78294F95B872b282326A97BDF',
    EASContractAddress: '0xA1207F3BBa224E2c9c3c6D5aF63D0eb1582Ce587',
    schemaUID: '0x47a1041b689b790b4d3fa58ae2289a1d903dcc5b4e00d14f941090b59d947971'
  },
  'sepolia': {
    schemaRegistryContractAddress: '0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0', // Sepolia 0.26
    EASContractAddress: '0xC2679fBD37d54388Ce493F1DB75320D236e1815e', // Sepolia v0.26
    schemaUID: '0x47a1041b689b790b4d3fa58ae2289a1d903dcc5b4e00d14f941090b59d947971'
  },
  'optimism-goerli': {
    schemaRegistryContractAddress: '0x7b24c7f8af365b4e308b6acb0a7dfc85d034cb3f',
    EASContractAddress: '0x1a5650d0ecbca349dd84bafa85790e3e6955eb84',
    schemaUID: '0x47a1041b689b790b4d3fa58ae2289a1d903dcc5b4e00d14f941090b59d947971'
  },
  'optimism': {
    schemaRegistryContractAddress: '0x4200000000000000000000000000000000000020',
    EASContractAddress: '0x4200000000000000000000000000000000000021',
    schemaUID: '0x47a1041b689b790b4d3fa58ae2289a1d903dcc5b4e00d14f941090b59d947971'
  }
}
export async function attest(encodedData, schemaUID, public_key) {
    const privateKey = process.env.privateKey;
    const rpcUrl = process.env.rpcUrl;
    const network = process.env.network;

    const provider = new ethers.providers.StaticJsonRpcProvider(rpcUrl)
  
    const signer = new ethers.Wallet(privateKey, provider)
    const EASContractAddress = addresses[network].EASContractAddress
    if (!EASContractAddress) {
      throw new Error(`EASContractAddress is not available for network "${network}"`)
    }
    const eas = new EAS(EASContractAddress)
    eas.connect(signer)
  
    if (!schemaUID) {
      throw new Error(`schemaUID is not available for network "${network}"`)
    }

    // console.log("encodedData: ", encodedData, "\nSchemaUID: ", schemaUID, "\nPublic Key: ", public_key)
    // console.log("eas: ", EASContractAddress, "\nSigner: ", signer)


    const res = await eas.attest({
      schema: schemaUID,
      data: {
        recipient: public_key,
        expirationTime: 0,
        revocable: true,
        data: encodedData,
      },
    })
  
    const hash = res.tx.hash
    const newAttestationUID = await res.wait()
  
    return {
      hash,
      uid: newAttestationUID
    }

  }
// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
//   export async function attest(encodedData, schemaUID, public_key) {
//     await sleep(10000);
//     return {
//       hash: "0x1234567890",
//       uid: "0x1234567890"
//     }
//   }

// const {hash, uid} = await attest("encodedData", "schemaUID", "public_key")
// console.log("hash: ", hash, "\nuid: ", uid)