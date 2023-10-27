
export async function test_file(eas, provider){
    // const eas = JSON.parse(JSONeas);
    // const provider = JSON.parse(JSONprovider);
    console.log(typeof(eas), typeof(provider))
    if(eas.connect(provider)){
        console.log("Connected");
    }else{
        console.log("Not Connected");
    }
}