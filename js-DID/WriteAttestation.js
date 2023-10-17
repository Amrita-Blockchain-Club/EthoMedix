import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import {eas, provider} from './contract.js';


export function encode_func(eth_address, age, gender, nationality, medicalhistory, allergies, schemaUID){

      eas.connect(provider);
      const schemaEncoder = new SchemaEncoder("address eth_address, uint8 age, string gender, string nationality, string[] medicalhistory, string[] allergies");
      const encodedData = schemaEncoder.encodeData([
        {name:"eth_address", value: eth_address, type: "address"},
        {name:"age", value: age, type: "uint8" },
        {name:"gender", value: gender, type: "string"},
        {name:"nationality", value: nationality, type: "string"},
        {name:"medicalhistory", value: medicalhistory, type: "string[]"},
        {name:"allergies", value: allergies, type: "string[]"},
      ]);

      return encodedData;
}


// const schemaUID = "0x1bcef32b5833330fabc83aedea2c1edaa11b37e379d4fad695a3593fcf438a83";

// const tx = await eas.attest({
//   schema: schemaUID,
//   data: {
//     recipient: "0xBa28465C139C98c1E337F7d8832931f8AEa47f4f",
//     expirationTime: 0,
//     revocable: true, // Be aware that if your schema is not revocable, this MUST be false
//     data: encodedData,
//   },
// });

// const newAttestationUID = await tx.wait();

// console.log("New attestation UID:", newAttestationUID);