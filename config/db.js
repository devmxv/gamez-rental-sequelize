require('dotenv').config()

const mysql = require('mysql2')
const Sequelize = require('sequelize')
const db = require('./config.json')

const sequelize = new Sequelize(
  db.development.database,
  db.development.username,
  db.development.password, {
  host: db.development.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
)

module.exports = sequelize
