import express from 'express'
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postController.js'
const router = express.Router()

// Getting all posts.
router.get('/', getPosts)

// Getting a particular post
router.get('/:id', getPost)

// Creating a newPost 
router.post('/', createPost)

// Update a post
router.put('/:id', updatePost)

// Delete a post 
router.delete('/:id', deletePost)

export default router