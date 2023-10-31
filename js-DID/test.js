// import React from 'react'

// function test() {
//   return (
//     <div>test</div>
//   )
// }

// export default test
// import {attest} from "./signTx.js";
import { attest } from './signTx.js';
const val = await attest("0x123456789", "0x123456789", "0x123456789");
console.log(val);

export async function testing(){
    console.log("testing")
}