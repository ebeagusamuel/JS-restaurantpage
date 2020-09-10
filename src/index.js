import './style.css'
import './images/background-image.jpg'

const contentDiv = document.getElementById('content');
const nav = document.createElement('nav')
nav.classList.add('nav-container');

['Home', 'Menu','Contact'].forEach(val => {
  var div = document.createElement('div')
  div.classList.add('nav-tabs');
  div.textContent = val;
  div.addEventListener('click', () => {
    console.log(val)
  })
  nav.appendChild(div);
})

contentDiv.appendChild(nav);