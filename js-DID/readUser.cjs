
const prompt=require("prompt-sync")({sigint:true}); 

function split(seperator, value){
    var array = value.split(seperator);
    return array;
}

function returnMap(name, age, gender, nationality, medicalhistory, allergies){
    const user_details = {
        name: name,
        age: age,
        gender: gender,
        nationality: nationality,
        medicalhistory: medicalhistory,
        allergies: allergies
    };
    return user_details;
}

function readValues(){
    const address = prompt("Enter your address: ")

    var input = prompt("Enter your age: ")
    const age = parseInt(input);

    const gender = prompt("Enter your gender: ")

    const nationality = prompt("Enter your nationality: ")

    input = prompt("Enter your previous medical problems (seperate by commas): ")
    const medicalhistory = split(",", input)

    input = prompt("Enter your allergies (seperate by commas): ")
    const allergies = split(",", input)

    return(returnMap(name, age, gender, nationality, medicalhistory, allergies))
}
