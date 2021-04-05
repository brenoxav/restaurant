const createNavbar = () => {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar')

  const navBtnHome = document.createElement('div');
  navBtnHome.classList.add('nav-btn');
  navBtnHome.textContent = 'Home';

  const navBtnMenu = document.createElement('div');
  navBtnMenu.classList.add('nav-btn');
  navBtnMenu.textContent = 'Menu';

  const navBtnContact = document.createElement('div');
  navBtnContact.classList.add('nav-btn', 'nav-btn-active');
  navBtnContact.textContent = 'Contact';

  navbar.appendChild(navBtnHome);
  navbar.appendChild(navBtnMenu);
  navbar.appendChild(navBtnContact);

  return navbar;
}

export { createNavbar }
