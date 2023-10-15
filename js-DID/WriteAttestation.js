import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import {eas, provider} from './contract.js';

eas.connect(provider);

const schemaEncoder = new SchemaEncoder("address address, uint8 age, string gender, string nationality, string[] medicalhistory, string[] allergies");
const encodedData = schemaEncoder.encodeData([
  {name: "address", value: "EthoMedix", type: "address"},
  {name: "age", value: 19, type: "uint8" },
  {name:"gender", value: "Male", type: "string"},
  {name:"nationality", value: "Indian", type: "string"},
  {name:"medicalhistory", value: ["None"], type: "string"},
  {name:"allergies", value: ["None"], type: "string"},
]);

const schemaUID = "0xb19e745c50f8c2ccbf8e1211407b4ed5832a253333fea4de1ce38a63d7c62de4";

const tx = await eas.attest({
  schema: schemaUID,
  data: {
    recipient: "0xBa28465C139C98c1E337F7d8832931f8AEa47f4f",
    expirationTime: 0,
    revocable: true, // Be aware that if your schema is not revocable, this MUST be false
    data: encodedData,
  },
});

const newAttestationUID = await tx.wait();

console.log("New attestation UID:", newAttestationUID);
