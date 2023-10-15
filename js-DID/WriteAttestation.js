import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import {eas, provider} from './contract.js';

eas.connect(provider);

const schemaEncoder = new SchemaEncoder("string name, uint8 age, string gender, string nationality, string[] medicalhistory, string[] allergies");
const encodedData = schemaEncoder.encodeData([
  {name: "name", value: "EthoMedix", type: "string"},
  {name: "age", value: 19, type: "uint8" },
  {name:"gender", value: "Male", type: "string"},
  {name:"nationality", value: "Indian", type: "string"},
  {name:"medicalhistory", value: ["None"], type: "string"},
  {name:"allergies", value: ["None"], type: "string"},
]);

const schemaUID = "0x4674c00536e8ee07f8c02fc862fffbb70dd9e8acf213784100650d6c0c46cf36";

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
