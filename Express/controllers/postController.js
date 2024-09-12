// In a real application it would be importing from a database - mongoose
const posts = [
    { id: 1, title: 'Ronaldo just created a Youtube Channel' },
    { id: 2, title: 'Some other news' },
    { id: 3, title: 'Billgates foundation supports Ethopian farmers' },
];

//  @desc  Create all post
//  @route POST /api/posts
export const createPost = (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
    }
    console.log(newPost)
    if (!newPost.title) return res.status(400).json({ message: 'The post does not have a title' })
    posts.push(newPost)
    res.status(201).json(newPost);
}

//  @desc  Get single post
//  @route GET /api/posts/:id
export const getPost = (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id == id)

    if (post) return res.status(200).json(posts.filter((post) => post.id === id))
    
    res.status(404).json({message:`Post with the id of ${id} does not exist`})
}

//  @desc Get all post
//  @route GET /api/posts
export const getPosts = (req, res) => {
    const limit = parseInt(req.query.limit)

    if (!isNaN(limit) && limit > 0) return res.status(200).json(posts.slice(0, limit))
    
    res.json(posts)
}

//  @desc  Update all post
//  @route PUT /api/posts
export const updatePost = (req, res) => {
    // Get post id
    const id = parseInt(req.params.id)
    // Find post
    const post = posts.find((post) => post.id == id)
    // If post does not exist, show error message
    if (!post)  return res.status(404).send({ message: `Post with ${id} does not exit` })
    // If post exist change post title to the title
    post.title = req.body.title
    res.status(200).send(posts)
}

//  @desc  Delete all post
//  @route DELETE /api/posts
export const deletePost = (req, res) => {
    const id = parseInt(req.params.id) 
    const post = posts.find((post) => post.id == id)

    if (!post)  return res.status(404).send({message: `Post with ${id} does not exit`})   

    posts.filter((post) => post.id !== id)
    res.status(200).send(posts)
}