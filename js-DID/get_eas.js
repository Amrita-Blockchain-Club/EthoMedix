import { EAS, Offchain, SchemaEncoder, SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';
import {EAS_connection} from './contract.js';

export async function get_eas(eth_address){
    try{
      const provider = await EAS_connection();
      const eas = new EAS(eth_address);
      return eas;
    }catch(err){
      console.log(err);
      return err;
    }
  }
