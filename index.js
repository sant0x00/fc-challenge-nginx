const express = require("express");
const app = express();
const port = 3000;
const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "challenge"
}

const mysql = require("mysql")
const connection = mysql.createConnection(config)

const sql = `INSERT INTO peoples(name) VALUES('Bruce Wayne');`
connection.query(sql)

app.get('/', (req, res) => {
    connection.query("SELECT * FROM `peoples`;", function(error, result, fields) {
        let html = "<h1>Full Cycle Rocks!</h1>"
        html += "<ul>";

        if (error) throw error;
        result.forEach(row => {
            html += `<li>${row.name}</li>`
        })

        html += "</ul>";
        res.send(html)
    })
});

app.listen(port, () => {
    console.log(`Server running in port ${port}...`)
});
