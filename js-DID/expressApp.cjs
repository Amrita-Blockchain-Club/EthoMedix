
const express = require("express");
const session = require("express-session");
const app = express();

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
        res.redirect("/transaction");
    }else{
        res.sendStatus(400);
        res.redirect("/test");
    }

});

app.get("/transaction", (req, res) => {
    res.render("transaction.ejs",{account: req.session.account, schemaUID: schemaUID, encoded_data: req.session.encoded_data});
    console.log("Transaction Done")
});

app.post("/submit-transaction", async function (req, res){
    console.log("Transaction Done Submission");
    res.sendStatus(200);
});


app.listen(3000, () => {
    console.log("Listening on port 3000... 127.0.0.1:3000");

});

