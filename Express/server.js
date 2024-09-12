import express from 'express'
import posts from './routes/posts.js'
import logger from './middleware/logger.js';
import path from 'path'
import { fileURLToPath } from 'url';
const PORT = process.env.PORT || 8080

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// console.log(__filename,__dirname)

const app = express();


// Logger middleware
app.use(logger)

// Setup static folder
app.use(express.static(path.join(__dirname, 'public')))

// Body parse middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/posts', posts) // Using the post router




// Listen to port 
app.listen(PORT, () => {
    console.log(`Port is Running on port ${PORT}`)
})