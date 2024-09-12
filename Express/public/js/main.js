import getPosts from './incs/getPosts.js'
import searchPosts from './incs/searchPosts.js'
import addPosts from './incs/addPosts.js'

const btn = document.querySelector('#btn');
const searchBtn = document.querySelector('#search-btn');
const form = document.querySelector('#form');

btn.addEventListener('click', getPosts)
searchBtn.addEventListener('click', searchPosts)
form.addEventListener('submit', addPosts)
