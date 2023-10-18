
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

app.set("view engine", "ejs"); // Set the view engine to EJS if not already set

app.get("/", (req, res) => {
    res.render("page.ejs");
});

app.post("/submit", (req, res) => {
    const account = req.body.account; // Use req.body to access form data

    if (account) {
        console.log("Received account address:", account);
    
        req.session.account = account; // Store the account value in a session variable
        res.redirect("/test"); // Redirect to the "test" endpoint
    } else {
        // Handle the case when the "account" field is empty
        res.sendStatus(400); // Bad Request
    }
});

app.get("/test", (req, res) => {
    const account = req.session.account; 
    // Render the "test.ejs" page with the account value
    res.render("test.ejs", { account });
    
});

app.post("/test-submit", async function (req, res){
    const { age, gender, nationality, medicalHistory, allergies } = req.body;

    console.log(req.body);

    const encode_data = await encode_func(req.session.account, age, gender, nationality, medicalHistory, allergies, schemaUID);
    console.log("Encoded Data: ",encode_data);

    res.redirect("/test")

});


app.listen(3000, () => {
    console.log("Listening on port 3000... 127.0.0.1:3000");
});

