const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

connection.connect();
connection.query(`CREATE TABLE IF NOT EXISTS people (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
)`);

connection.query(`INSERT INTO people (nome) VALUES ('Dayvison Favacho')`);

connection.query(`SELECT * FROM people`,() =>{
  res.send(`
    <h1>Full Cycle Rocks!</h1>
    <ul>
      ${results.map(name => `<li>${name}</li>`).join('\n')}
    </ul>
  `);
});


const names = result.map(row => row.name);

res.send(`
  <h1>Full Cycle Rocks!</h1>
  <ul>
    ${names.map(name => `<li>${name}</li>`).join('\n')}
  </ul>
`);

connection.end();

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});



