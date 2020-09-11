import './style.css';
import './images/background-image.jpg';
import home from './home';
import menu from './menu';
import contact from './contact';

const page = {
  Home: home,
  Menu: menu,
  Contact: contact,
};
const contentDiv = document.getElementById('content');
const nav = document.createElement('nav');
nav.classList.add('nav-container');

const clearPage = () => {
  contentDiv.lastChild.remove();
};

const render = (val) => {
  clearPage();
  contentDiv.appendChild(page[val]);
};

['Home', 'Menu', 'Contact'].forEach(val => {
  const div = document.createElement('div');
  div.classList.add('nav-tabs');
  div.textContent = val;
  div.addEventListener('click', () => render(val));
  nav.appendChild(div);
});

contentDiv.appendChild(nav);
contentDiv.appendChild(home);
