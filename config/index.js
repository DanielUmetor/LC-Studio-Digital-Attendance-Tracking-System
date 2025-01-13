import { createPool } from "mysql2";
import 'dotenv/config'

let connection = createPool ({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PWD_DB,
    database: process.env.DBNAME,
    multipleStatements: true,
    connectionLimit: 380
})

connection.on('connection', (pool) => {
    if(!pool) throw new Error(e)
})

export {
    connection
}