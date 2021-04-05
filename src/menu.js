const createMenuPage = () => {
  const menuItems = [
    {
      title: 'Tomato & Mozzarella',
      description: 'Pizza dough, tomato sauce, mozzarella cheese, tomato cubes, oregano',
      image_url: '/src/assets/images/menu-pizza-1.jpg'
    },
    {
      title: 'Margherita',
      description: 'Pizza dough, tomato sauce, mozzarella cheese, tomato slices, basil leaves',
      image_url: '/src/assets/images/menu-pizza-2.jpg'
    },
    {
      title: 'Ground Meat',
      description: 'Pizza dough, tomato sauce, mozzarella cheese, tomato cubes, oregano',
      image_url: '/src/assets/images/menu-pizza-3.jpg'
    },
    {
      title: 'Italian',
      description: 'Pizza dough, tomato sauce, mozzarella cheese, bell pepper, corn, olives, oregano',
      image_url: '/src/assets/images/menu-pizza-4.jpg'
    },
    {
      title: 'Pepperoni & Meat',
      description: 'Pizza dough, tomato sauce, mozzarella cheese, pepperoni slices, meat cubes',
      image_url: '/src/assets/images/menu-pizza-5.jpg'
    },
    {
      title: 'Fiesta',
      description: 'Pizza dough, tomato sauce, mozzarella cheese, tomato cubes, champignon, olives',
      image_url: '/src/assets/images/menu-pizza-6.jpg'
    },
  ]

  const createMenuItems = (menuArr) => {
    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menu-wrapper', 'd-flex');

    menuArr.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');

      const menuItemImg = document.createElement('img');
      menuItemImg.classList.add('menu-item-img');
      menuItemImg.setAttribute('src', item.image_url);
      menuItemImg.setAttribute('alt', item.title);

      const menuItemTitle = document.createElement('h3');
      menuItemTitle.classList.add('menu-item-title');
      menuItemTitle.textContent = item.title;

      const menuItemDescription = document.createElement('p');
      menuItemDescription.classList.add('menu-item-description');
      menuItemDescription.textContent = item.description;

      menuItem.appendChild(menuItemImg);
      menuItem.appendChild(menuItemTitle);
      menuItem.appendChild(menuItemDescription);

      menuWrapper.appendChild(menuItem);
    });

    return menuWrapper;
  }

  const menuPage = document.createElement('div');
  menuPage.classList.add('menu-page', 'full-h');

  menuPage.appendChild(createMenuItems(menuItems));

  return menuPage;
}

export { createMenuPage }
