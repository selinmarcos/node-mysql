import UserModel from "../models/UserModel.js"

//Metodos para CRUD

//GET
export const getAllUsers = async (req, res) => {
    try{
        const users = await UserModel.findAll()
        console.log("llegue")
        res.json(users)
    }
    catch(error){
        res.json({message: error.message})
    }
}

//POST
export const createUser = async (req, res) => {

    try{
        await UserModel.create({
            user: req.body.user,
            pass: req.body.pwd    
        })
        res.json({
            "message": "Registro creado correctamente!"
        })
    }
    catch(error){
        res.json({message: error.message})
    }
}