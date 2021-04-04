const createHomePage = () => {
  const homePage = document.createElement('div');
  homePage.classList.add('home-page');

  const homeWrapper = document.createElement('div');
  homeWrapper.classList.add('home-wrapper', 'd-flex', 'flex-col');

  const homeHeading = document.createElement('h1');
  homeHeading.classList.add('home-heading');
  homeHeading.textContent = 'La Pizzeria';

  const homeDescription = document.createElement('p');
  homeDescription.classList.add('home-description');
  homeDescription.textContent = "The best traditional, wood-fired pizza recipe in town: from our family to yours";

  const homeOrderBtn = document.createElement('a');
  homeOrderBtn.classList.add('home-order-btn');
  homeOrderBtn.textContent = 'Order now';
  //TODO: SET BUTTON HREF TO MENU PAGE

  homePage.appendChild(homeWrapper)
  homeWrapper.appendChild(homeHeading);
  homeWrapper.appendChild(homeDescription);
  homeWrapper.appendChild(homeOrderBtn);

  return homePage;
}

export { createHomePage }
