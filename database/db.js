const { Sequelize } = require("sequelize")
//local
// const db = new  Sequelize('abogcqvs_node', 'root', '',{
//     host:'localhost',
//     dialect: 'mysql'
// })
//server
const db = new  Sequelize('abogcqvs_nodejs', 'abogcqvs_selin', 'Marcos1683947_',{
    host:'localhost',
    dialect: 'mysql'
})

// export default db
module.exports = db;