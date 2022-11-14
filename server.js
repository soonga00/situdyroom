const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// const cors = require('cors')

// app.use(cors({ credentials: true, origin: "http://localhost:3001" }));
app.get("/", function (req, res) {
    res.send("hi");
})

app.post("/user", function (req, res) {
    var post = req.body;
    console.log(post.firstName, 1)
    res.send('hahaha');
});

app.get("/user", function (req, res) {
    console.log(req.body, 2);
    res.send('haha');
});

app.listen(3001, () => {
    console.log("Your server is running on port 3000");
});