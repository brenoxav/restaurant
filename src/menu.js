const createMenuPage = () => {
  const menuPage = document.createElement('div');
  menuPage.classList.add('menu-page');

  const menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menu-wrapper');

  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const menuItemImg = document.createElement('img');
  
  const menuItemTitle = document.createElement('h3');

  const menuItemDescription = document.createElement('p');

  return menuPage;
}

export { createMenuPage }
