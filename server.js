const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'situdyroom'
});
// db.connect();

app.use(bodyParser.json());
// const cors = require('cors')

// app.use(cors({ credentials: true, origin: "http://localhost:3001" }));
app.get("/", function (req, res) {
    res.send("adress : /");
})


app.post("/user", function (req, res) {
    var post = req.body;
    db.query(`select mb_pw from users where mb_id = "${post.inputID}"`, function (err, rows, fields) {
        if (err) console.log(err);
        if (rows[0].mb_pw === post.inputPW){
            console.log('login success');
            res.json(true);
            
        }
        else {
            console.log('login failed');
            res.json(false);
        }
    });
});


app.get("/user", function (req, res) {
    console.log(`app.get req.body : ${req.body}`);
    res.send(req.body);
});

app.post("/register", function (req, res) {
    var post = req.body;
    db.query(`INSERT INTO applying_users (mb_id, mb_pw, name, st_num, phone)
            VALUES ("${post.inputID}", "${post.inputPW}", "${post.inputName}", "${post.inputClassNum}", "${post.inputPhoneNum}")`, function (err, rows, fields) {
        if (err) console.log(err);
        if (rows[0].mb_pw === post.inputPW){
            console.log('register success');
        }
        else {
            console.log('register failed');
        }
      });
    console.log(post);

    res.send('resister1 success');
});


app.listen(3001, () => {
    console.log("Your server is running on port 3000");
});