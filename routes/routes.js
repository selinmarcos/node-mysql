import express from 'express'
import { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog,  } from '../controllers/BlogController.js'
import { getAllUsers, createUser } from '../controllers/UserController.js'

const router = express.Router()
//BLOGS
router.get('/blogs', getAllBlogs)
router.get('/blogs/:id', getBlog)
router.post('/blogs', createBlog)
router.put('/blogs/:id', updateBlog)
router.delete('/blogs/:id', deleteBlog)

//USERS
router.get('/users', getAllUsers)
router.post('/register', createUser)

export default router