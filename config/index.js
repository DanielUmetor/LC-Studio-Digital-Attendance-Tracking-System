import { createPool } from "mysql2";
import 'dotenv/config'

let connection = createPool ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    multipleStatements: true,
    connectionLimit: 100
})

connection.on('connection', (pool) => {
    if(!pool) throw new Error(e)
})

export {
    connection
}