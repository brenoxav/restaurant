const createMenuPage = () => {
  const menuPage = document.createElement('div');
  menuPage.classList.add('menu-page', 'full-h');

  const menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menu-wrapper', 'd-flex');

  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const menuItemImg = document.createElement('img');
  menuItemImg.classList.add('menu-item-img');

  const menuItemTitle = document.createElement('h3');
  menuItemTitle.classList.add('menu-item-title');

  const menuItemDescription = document.createElement('p');
  menuItemDescription.classList.add('menu-item-description');

  return menuPage;
}

export { createMenuPage }
