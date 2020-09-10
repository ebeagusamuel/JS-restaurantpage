import Menu1 from './images/menu-1.jpg';
import Menu2 from './images/menu-2.jpg';
import Menu3 from './images/menu-3.jpg';
import Menu4 from './images/menu-4.jpg';
import Menu5 from './images/menu-5.jpg';
import Menu6 from './images/menu-6.jpg';
import Menu7 from './images/menu-7.jpg';
import Menu8 from './images/menu-8.jpg';

const menu = (() => {
  let menuArr = [Menu1, Menu2, Menu3, Menu4, Menu5, Menu6, Menu7, Menu8];
  let menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-div');

  let menuDivH2 = document.createElement('h2');
  menuDivH2.textContent = 'Check out varieties amazing dishes we have for you.';

  let menuGrid = document.createElement('div');
  menuGrid.classList.add('menu-grid');
  
  for(let i = 0; i < 8; i++){
    let menu = document.createElement('div');
    menu.classList.add('menu');

    let menuImg = new Image();
    menuImg.src = menuArr[i];
    menuImg.style.width = '100%';
    menuImg.style.height = '300px';
    menuImg.style.objectFit = 'cover';
    menuImg.style.borderRadius = '5px';

    menu.appendChild(menuImg);
    menuGrid.appendChild(menu);
  }

  menuDiv.appendChild(menuDivH2);
  menuDiv.appendChild(menuGrid);

  return menuDiv 
})();

export default menu