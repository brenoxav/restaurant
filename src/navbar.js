const createNavbar = () => {
  const tabNames = ['home', 'menu', 'contact'];

  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  tabNames.forEach((tabName) => {
    const tab = document.createElement('div');
    tab.classList.add('nav-btn');
    tab.textContent = tabName.toUpperCase();
    navbar.appendChild(tab);
  });

  return navbar;
};

export default createNavbar;
