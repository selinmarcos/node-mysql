const db = require("../database/db.js")
const{ DataTypes } = require ("sequelize")

const BlogModel= db.define('blogs',{
    title:{type: DataTypes.STRING},
    content:{type: DataTypes.STRING}
})

module.exports =  BlogModel