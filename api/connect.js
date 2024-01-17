import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'moses',
    password: 'P@ssw0rd',
    database: 'social'
});