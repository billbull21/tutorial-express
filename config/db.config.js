require("dotenv").config();

const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT, DB_DRIVER } = process.env;

module.exports = {
  HOST: DB_HOST,
  USER: DB_USER,
  PASSWORD: DB_PASS,
  DB: DB_NAME,
  dialect: DB_DRIVER,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
