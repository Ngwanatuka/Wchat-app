import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P@ssw0rd',
    database: 'social',
    port: '3306'
});