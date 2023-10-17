
import promptSync from "prompt-sync";

const prompt = promptSync({sigint: true});

import { encode_func } from './WriteAttestation.js';

function split(seperator, value){
    var array = value.split(seperator);
    return array;
}

// function returnMap(address, age, gender, nationality, medicalhistory, allergies){
//     const user_details = {
//         address: address,
//         age: age,
//         gender: gender,
//         nationality: nationality,
//         medicalhistory: medicalhistory,
//         allergies: allergies
//     };
//     return user_details;
// }

function readValues() {
    const schemaUID = "0x1bcef32b5833330fabc83aedea2c1edaa11b37e379d4fad695a3593fcf438a83";
    const address = prompt("Enter your address: ")

    var input = prompt("Enter your age: ")
    const age = parseInt(input);

    const gender = prompt("Enter your gender: ") 

    const nationality = prompt("Enter your nationality: ")

    input = prompt("Enter your previous medical problems (seperate by commas): ")
    const medicalhistory = split(",", input)

    input = prompt("Enter your allergies (seperate by commas): ")
    const allergies = split(",", input)

    const encoded_data = encode_func(address, age, gender, nationality, medicalhistory, allergies, schemaUID)
    console.log(encoded_data)
};


readValues();