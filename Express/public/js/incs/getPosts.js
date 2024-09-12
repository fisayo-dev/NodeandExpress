import { errMsg, output } from './selectors.js'

const getPosts = async () => {
    const res = await fetch('http://localhost:5000/api/posts')
    if (!res.ok) throw new Error('Failed to fetch posts')

    output.innerHTML = ''
    errMsg.innerText = '';
    const posts = await res.json();
    posts.map((post) => {
        const element = document.createElement('div');
        element.innerHTML = `
            <h3>Id: ${post.id}</h3>
            <p>Title: ${post.title}</p>
        `
        output.appendChild(element)
    })
}

export default getPosts