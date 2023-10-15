// const express = require("express");
// const app = express();
// app.use(express.static('public'));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/page.html");
// });

// app.listen(3000, () => {
//     console.log("Listening on port 3000... 127.0.0.1:3000");
// });

const express = require("express");
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // Middleware for parsing form data.

app.get("/", (req, res) => {
    const account = req.query.account;
    if (account) {
        console.log("Received account address:", account);
        // Here, you can process the account data as needed.
        res.sendStatus(200);
    } else {
        res.sendFile(__dirname + "/public/page.html");
    }
});

app.listen(3000, () => {
    console.log("Listening on port 3000... 127.0.0.1:3000");
});
