const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const mysql2 = require('sync-mysql');

var db2 = new mysql2({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'situdyroom'
});
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'situdyroom'
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
        if (rows[0].mb_pw === post.inputPW) {
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
        if (rows[0].mb_pw === post.inputPW) {
            console.log('register success');
        }
        else {
            console.log('register failed');
        }
    });
    console.log(post);

    res.send('resister1 success');
});

app.post("/database", function (req, res) {
    var today = new Date();
    db.query(`SELECT date from d0 where id=1;`, function (err, results) {
        if (today > results[0].date) {
            for (var i = 1; i <= 6; i++) {
                db.query(`UPDATE d${i} set date_num=date_num-1`);
            }
            db.query(`DROP TABLE d0`);
            db.query(`RENAME TABLE d1 TO d0, d2 TO d1, d3 TO d2, d4 TO d3, d5 TO d4, d6 TO d5`);
            db.query(`CREATE TABLE d6 SELECT * FROM template`);
            db.query(`UPDATE d6 SET date=date_add(now(), INTERVAL 7 day)`);
            db.query(`UPDATE d6 SET date=date_add(date, INTERVAL -1 minute)`);
            db.query(`UPDATE d6 SET date_num=6`);
        }
    });
});

app.post("/check", function (req, res) {
    var data = [];
    for (var i = 0; i <= 6; i++) {
        let a = db2.query(`SELECT id, date_num FROM d${i} WHERE reserved=1`);
        data.push(a);
        // let a = db.query(`SELECT id, date_num FROM d${i} WHERE reserved=1`, function (err, rows) {
        //     data.push(a);
        // });
    }
    // for (var i = 0; i <= 6; i++)
    //     data.shift();
    console.log(data);
    res.send(data);
});

app.post("/reserve", function (req, res) {
    var post = req.body;
    db.query(`SELECT reserved FROM d${post.date} WHERE id='${post.time}';`, function (err, rows, fields) {
        if (err) console.log(err);
        if (rows[0].reserved === 0) {
            for (var i = 0; i < post.duration; i++) {
                var time = post.time + i;
                db.query(`UPDATE d${post.date} SET user1_id='${post.user1}', user2_id='${post.user2}', user3_id='${post.user3}', user4_id='${post.user4}', reserved=1 WHERE id='${time}';`, function (err) {
                    if (err) console.log(err);
                });
                db.query(`select time from d${post.date} where id=${time}`, function (err, times) {
                    if (post.user1)
                        db.query(`INSERT INTO reservations (st_num, date, time, room) VALUES (${post.user1}, '${post.date}', '${times[0].time}', 'STUDYROOM 1')`)
                    if (post.user2)
                        db.query(`INSERT INTO reservations (st_num, date, time, room) VALUES (${post.user2}, '${post.date}', '${times[0].time}', 'STUDYROOM 1')`)
                    if (post.user3)
                        db.query(`INSERT INTO reservations (st_num, date, time, room) VALUES (${post.user3}, '${post.date}', '${times[0].time}', 'STUDYROOM 1')`)
                    if (post.user4)
                        db.query(`INSERT INTO reservations (st_num, date, time, room) VALUES (${post.user4}, '${post.date}', '${times[0].time}', 'STUDYROOM 1')`)
                });

            }
            res.json(true);
        }
        else {
            res.json(false);
        }
    });
});

app.post("/info", function (req, res) {
    var post = req.body;
    db.query(`SELECT * FROM users where mb_id='${post.inputID}'`, function (err, results) {
        res.json(results[0]);
    });
});

app.post("/my_reservation", function (req, res) {
    var post = req.body;
    var my_data = [];
    db.query(`SELECT date, time, room FROM reservations INNER JOIN users ON users.st_num=reservations.st_num WHERE mb_id='${post.inputID}'`, function (err, rows) {
        for (var row in rows) {
            my_data.push(rows[row]);
        }
        console.log(my_data);
        res.json(my_data);
    });
})
app.listen(3001, () => {
    console.log("Your server is running on port 3000");
});