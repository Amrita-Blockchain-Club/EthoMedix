
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

const express = require("express");
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // Middleware for parsing form data.

app.set("view engine", "ejs"); // Set the view engine to EJS if not already set

app.get("/", (req, res) => {
    res.render("page.ejs");
});

app.post("/submit", (req, res) => {
    const account = req.body.account; // Use req.body to access form data

    if (account) {
        console.log("Received account address:", account);
    
        res.redirect("/test"); // Redirect to the "test" endpoint
    } else {
        // Handle the case when the "account" field is empty
        res.sendStatus(400); // Bad Request
    }
});

app.get("/test", (req, res) => {
    // Render the "test.ejs" page
    res.render("test.ejs");
});

app.post("/test-submit", async function (req, res){
    const { ethAddress, age, gender, nationality, medicalHistory, allergies } = req.body;

    console.log(req.body);
    res.redirect("/test")

});

app.listen(3000, () => {
    console.log("Listening on port 3000... 127.0.0.1:3000");
});
