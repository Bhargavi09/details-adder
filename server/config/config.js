require("dotenv").config();

const config = {
  app: {
    port: 5000,
  },
  db: {
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
  },
};

module.exports = config;
