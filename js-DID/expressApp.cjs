
// const express = require("express");
// const app = express();

// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true })); // Middleware for parsing form data.

// app.get("/", (req, res) => {
//     const account = req.query.account;
//     if (account) {
//         console.log("Received account address:", account);
//         // Here, you can process the account data as needed.
//         res.sendStatus(200);
//     } else {
//         // res.sendFile(__dirname + "/public/page.html");
//         res.render("page.ejs");
//     }
// });

// app.listen(3000, () => {
//     console.log("Listening on port 3000... 127.0.0.1:3000");
// });


// const express = require("express");
// const app = express();

// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true })); // Middleware for parsing form data.

// app.set("view engine", "ejs"); // Set the view engine to EJS if not already set

// app.get("/", (req, res) => {
//     res.render("page.ejs");
// });

// app.post("/submit", (req, res) => {
//     const account = req.body.account; // Use req.body to access form data

//     if (account) {
//         console.log("Received account address:", account);
    
//         res.redirect("/test"); // Redirect to the "test" endpoint
//     } else {
//         // Handle the case when the "account" field is empty
//         res.sendStatus(400); // Bad Request
//     }
// });

// app.get("/test", (req, res) => {
//     // Render the "test.ejs" page
//     res.render("test.ejs");
// });

// app.post("/test-submit", async function (req, res){
//     const { ethAddress, age, gender, nationality, medicalHistory, allergies } = req.body;

//     console.log(req.body);
//     res.redirect("/test")

// });

// app.listen(3000, () => {
//     console.log("Listening on port 3000... 127.0.0.1:3000");
// });


const express = require("express");
const session = require("express-session");
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // Middleware for parsing form data.
app.use(session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true
})); // Middleware for session management

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
    const account = req.session.account; // Get the account value from the session variable

    // Render the "test.ejs" page with the account value
    res.render("test.ejs", { account });
    // console.log(account);
    
});

app.post("/test-submit", async function (req, res){
    const { ethAddress, age, gender, nationality, medicalHistory, allergies } = req.body;

    console.log("ethAddress:", ethAddress);
    console.log("age:", age);
    console.log("gender:", gender);
    console.log("nationality:", nationality);
    console.log("medicalHistory:", medicalHistory);
    console.log("allergies:", allergies);
    res.redirect("/test")

});

app.listen(3000, () => {
    console.log("Listening on port 3000... 127.0.0.1:3000");
});
