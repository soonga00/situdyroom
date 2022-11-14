const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("hi");
})

app.get("/user", function (req, res) {
    // const id = req;
    res.send(req.data);
    console.log(req);
});

app.listen(3000, () => {
    console.log("Your server is running on port 3000");
});