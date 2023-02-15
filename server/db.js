const config = require('./config/config')
const Pool = require("pg").Pool;

console.log(config.db)

// const { db: {
//     user,
//     password,
//     host,
//     port,
//     database
//     }} = config

const pool = new Pool(config.db);

module.exports = pool;
