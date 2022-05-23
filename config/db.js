const sequelize = require("sequelize");

const db = new sequelize("masala-apps", "root", "root", {
    dialect:"mysql"
});

db.sync({});

module.exports = db;