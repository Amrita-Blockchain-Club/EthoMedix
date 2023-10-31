const { EAS } = require("@ethereum-attestation-service/eas-sdk");

const express = require("express");
const session = require("express-session");
const app = express();

let EAS_connection;
(async () => {
    const module = await import("./contract.js");
    EAS_connection = module.EAS_connection;
})();

let get_eas;
(async () => {
    const module = await import("./get_eas.js");
    get_eas = module.get_eas;
})();

let encode_func;
(async () => {
    const module = await import("./WriteAttestation.js");
    encode_func = module.encode_func;
})();


const schemaUID = "0x1bcef32b5833330fabc83aedea2c1edaa11b37e379d4fad695a3593fcf438a83";


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // Middleware for parsing form data.
app.use(session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true
})); // Middleware for session management

app.use(express.json()); 

app.set("view engine", "ejs"); 

app.get("/", (req, res) => {
    res.render("page.ejs");
});

app.post("/submit", (req, res) => {
    const account = req.body.account; 

    if (account) {
        console.log("Received account address:", account);
    
        req.session.account = account; 
        res.redirect("/test"); 
    } else {
        res.sendStatus(400); 
    }
});

app.get("/test", (req, res) => {
    const account = req.session.account; 
    res.render("test.ejs", { account });
    
});

app.post("/test-submit", async function (req, res){
    const { age, gender, nationality, medicalHistory, allergies } = req.body;

    console.log(req.body);

    const encoded_data = await encode_func(req.session.account, age, gender, nationality, medicalHistory, allergies, schemaUID);

    req.session.encoded_data = encoded_data;
    console.log("Encoded Data: ",req.session.encoded_data);

    if (req.session.encoded_data){
        res.sendStatus(200);
    }else{
        res.sendStatus(400);
        res.redirect("/test");
    }

});

// app.get("/transaction", (req, res) => {

//     const eas = new EAS(req.session.account);
//     res.render("transaction.ejs",{
//         account: req.session.account, 
//         schemaUID: schemaUID, 
//         encoded_data: req.session.encoded_data,
//     });
// });

// app.post("/submit-transaction", async function (req, res){
//     console.log("Transaction Done Submission");
//     res.sendStatus(200);
// });

// app.post("/eas", async function (req, res) {
//     try {
//       if (!req.session.account) {
//         // If account information is missing, return an error.
//         console.error("Error: Account information is missing.");
//         return res.sendStatus(400);
//       }
  
//       // Ensure that the session data is fully available before proceeding.
//       await new Promise((resolve) => req.session.save(resolve));
  
//       const eas = new EAS(req.session.account);
//       const provider = await EAS_connection();
  
//       if (eas && provider) {
//         const responseData = {
//           eas: eas,
//           provider: provider,
//           easConnect : eas.connect(provider)
//         };
//         console.log("Attest Type: ",typeof(eas.attest));
//         console.log("eas: ", typeof responseData.eas);
  
//         res.json(responseData);
//       } else {
//         console.log("Error: EAS or provider is undefined.");
//         res.sendStatus(400);
//       }
//     } catch (err) {
//       console.error("Error while fetching EAS data:", err);
//       res.sendStatus(400);
//     }
//     console.log("eas Done");
//   });

async function makeAttestation(encodedData, schemaUID, public_key) {
    try {
        const module = await import('./signTx.js');
        const { attest } = module;

        const result = await attest(encodedData, schemaUID, public_key);
        console.log("result: ", result);
        return {
            hash: result.hash,
            uid: result.uid,
        };
    } catch (error) {
        console.log(error);

    }
}

app.get("/transaction", async (req, res) => {
    try {

      res.render("Transact.ejs",{
          account: req.session.account, 
          schemaUID: schemaUID, 
          encoded_data: req.session.encoded_data,
      });
    } catch (error) {
      console.error(error);
      console.log(error)
      res.status(500).send("Internal Server Error");
    }
  });

app.post("/submit-transaction", async function (req, res){
    console.log("Transaction Done Submission");
    res.sendStatus(200);
});

app.post("/eas", async function (req, res) {
    try {
      if (!req.session.account) {
       
        console.error("Error: Account information is missing.");
        return res.sendStatus(400);
      }

      const {hash, uid} = await makeAttestation(req.session.encoded_data, schemaUID, req.session.account);
  
      if (hash && uid) {
        const responseData = {
          hash: hash,
          uid: uid
        };
  
        res.json(responseData);

      } else {
        console.log("Error: EAS or provider is undefined.");
        res.sendStatus(400);
      }
    } catch (err) {
      console.error("Error while fetching EAS data:", err);
      res.sendStatus(400);
    }
    // console.log("eas Done");
  });


app.listen(3000, () => {
    console.log("Listening on port 3000... 127.0.0.1:3000");

});

