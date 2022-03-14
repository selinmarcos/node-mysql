const express = require('express')
const { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog,  } = require('../controllers/BlogController.js')
const { getAllUsers, createUser } = require('../controllers/UserController.js')

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

module.exports = router