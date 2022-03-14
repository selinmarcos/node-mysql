import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UserModel= db.define('users',{
    user:{type: DataTypes.STRING},
    pass:{type: DataTypes.STRING}
})

export default UserModel