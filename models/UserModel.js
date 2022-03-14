const db = require("../database/db.js")
const { DataTypes } = require("sequelize")

const UserModel= db.define('users',{
    user:{type: DataTypes.STRING},
    pass:{type: DataTypes.STRING}
})

module.exports = UserModel