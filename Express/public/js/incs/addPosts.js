import getPosts from './getPosts.js';
import { errMsg, output, searchField, addField } from './selectors.js'
const form = document.querySelector('#form')

const addPosts = async (e) => {
    e.preventDefault(); 

    // Getting title value from the form using thr name property
    const formData = new FormData(form)
    const title = formData.get('title')
    console.log(title)

    try {
        // Making post request to create a new post
        const res = await fetch('http://localhost:5000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title}),
        })
        
        if (!res.ok) {
            return errMsg.innerText = 'Failed to create post!'
        }
        // Clear Dom values
        errMsg.innerText = ''
        output.innerText = ''
        
        // Create DOM Post
        const newPost = await res.json();
        const newEl = document.createElement('div')
        newEl.innerHTML = `
            <p>Id: ${newPost.id} </p>
            <p>Title: ${newPost.title}</p>
        `;
        addField.value = ''
        getPosts()

    } catch (error) {
        // console.error(error.message)
    }

}

export default addPosts