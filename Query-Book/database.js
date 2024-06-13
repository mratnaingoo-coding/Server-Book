import mysql from 'mysql2'
import 'dotenv/config'

const connection = mysql.createPool(
    {
        host:"localhost",
        port:3306,
        password:process.env.DB_PASSWORD,
        user:process.env.USER,
        database:process.env.DB
    }
).promise()



// await insertUser("Mg Kaung","Male");


export default connection 