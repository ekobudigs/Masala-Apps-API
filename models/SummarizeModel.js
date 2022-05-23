const Sequelize = require("sequelize");
const db = require("../config/db");

const Summarize = db.define(
    "summarize",
    {
        userID: {type: Sequelize.INTEGER, primaryKey: true},
        username: {type: Sequelize.STRING, allowNull: false},
        caption: {type: Sequelize.STRING, allowNull: false},
        location: {type: Sequelize.STRING, allowNull: false},
        summarize: {type: Sequelize.STRING, allowNull: false},
        typeSummarize: {type: Sequelize.STRING, allowNull: false},
        category: {type: Sequelize.STRING, allowNull: true},
        // createdAt: {type: Sequelize.DATE, allowNull: true},
        // createdBy: {type: Sequelize.STRING, allowNull: true},
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = Summarize;