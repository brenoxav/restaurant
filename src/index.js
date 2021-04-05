import './assets/css/style.css'

import { createNavbar } from './navbar'
import { createHomePage } from './home'
import { createMenuPage } from './menu'
import { createContactPage } from './contact'

const content = document.querySelector('#content');

const tabsRow = document.createElement('nav').classList.add('tabs-row');
const tabBtn = document.createElement('div').classList.add('tab-btn');

content.appendChild(createNavbar());
//content.appendChild(createHomePage());
//content.appendChild(createMenuPage());
content.appendChild(createContactPage());
