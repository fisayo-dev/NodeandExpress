import { errMsg, output, searchField } from './selectors.js'
const searchPosts = async () => {
    const res = await fetch(`http://localhost:5000/api/posts/${searchField.value}`)
    if (!res.ok) return errMsg.innerText = 'Failed to Fetch Post';

    errMsg.innerText = '';
    const [post] = await res.json()
    console.log(post)
    
    output.innerHTML = ''
    const element = document.createElement('div');
    element.innerHTML = `
        <h3>Id: ${post.id}</h3>
        <p>Title: ${post.title}</p>
    `
    output.appendChild(element)
}

export default searchPosts
