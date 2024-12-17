import mysql from "mysql";

const conn = mysql.createConnection({
  host: "localhost",
  //   port: "8889",
  user: "root",
  password: "password",
  //socket   : '/Applications/MAMP/tmp/mysql/mysql.sock',
  database: "db_obatin",
});

conn.connect((err) => {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + conn.threadId);
});

module.exports = conn;
