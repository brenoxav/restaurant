import './assets/css/style.css'

import { createNavbar } from './navbar'
import { createHomePage } from './home'
import { createMenuPage } from './menu'
import { createContactPage } from './contact'

const content = document.querySelector('#content');
content.appendChild(createNavbar());

const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
content.appendChild(mainContainer);

const navButtons = document.querySelectorAll('.nav-btn');

const changeTab = (btnText) => {
  navButtons.forEach((navBtn) => {
    if(navBtn.textContent.toLowerCase() == btnText.toLowerCase()) {
      navBtn.classList.add('nav-btn-active');
    }
    else {
      navBtn.classList.remove('nav-btn-active');
    }
  });
}

const loadPage = (btnText) => {
  switch (btnText.toLowerCase()) {
    case 'home':
      mainContainer.appendChild(createHomePage());
      break;
    case 'menu':
      mainContainer.appendChild(createMenuPage());
      break;
    case 'contact':
      mainContainer.appendChild(createContactPage());
      break;
    default:
      mainContainer.appendChild(createHomePage());
      break;
  }
  changeTab(btnText);
}

navButtons.forEach((navBtn) => {
  navBtn.addEventListener('click', (event) => {
    let btnText = event.target.textContent.toLowerCase();
    mainContainer.innerHTML = '';
    loadPage(btnText);
  });
});

mainContainer.appendChild(createHomePage());
changeTab('home');
