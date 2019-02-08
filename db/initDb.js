require('dotenv').config();

const mysql = require('mysql2/promise');

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sercav1575',
    database: 'Prospectos_db'
  });
};


/* const databaseName = process.env.DATABASE_NAME;
//Start a connection with mysql
mysql
.createConnection({
 host: process.env.DATABASE_URL,
 port: process.env.DATABASE_PORT,
 user: process.env.DATABASE_USER,
 password: process.env.DATABASE_PASSWORD,
})
.then((connection) => {
 //Run a query to create our database
 connection
 .query(`CREATE DATABASE IF NOT EXISTS ${databaseName};`)
 .then(() => {
   console.info("Database create or successfully checked");
   //End the script
   process.exit(0);
 });
}); */
