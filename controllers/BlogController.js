import BlogModel from "../models/BlogModel.js";

//Metodos para CRUD

//GET
export const getAllBlogs = async (req, res) => {
    try{
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    }
    catch(error){
        res.json({message: error.message})
    }
}
//GET ONE 
export const getBlog = async (req, res) => {
    try{
        const blogs = await BlogModel.findAll({
            where:{id:req.params.id}
        })
        res.json(blogs[0])
    }
    catch(error){
        res.json({message: error.message})
    }
}
//POST
export const createBlog = async (req, res) => {

    try{
        await BlogModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente!"
        })
    }
    catch(error){
        res.json({message: error.message})
    }
}

//EDIT

export const updateBlog = async (req, res) =>{
    try {
        await BlogModel.update(req.body, {
            where:{id:req.params.id}
        })
        res.json({
            "message": "Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//DELETE

export const deleteBlog = async(req, res) =>{
    try {
        await BlogModel.destroy({
            where:{id:req.params.id}
        })
        res.json({
            "message": "Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}