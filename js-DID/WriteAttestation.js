import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import {EAS_connection} from './contract.js';
// import {test_file} from './test.js';

export async function encode_func(eth_address, age, gender, nationality, medicalhistory, allergies, schemaUID){
  try{
    const provider = await EAS_connection();
    const eas = new EAS(eth_address);
    eas.connect(provider);
  }catch(err){
    console.log(err);
    return err;
  }
    try{
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
    }catch(err){
      console.log(err);
      return err;
    }

}

