const createHomePage = () => {
  const homePage = document.createElement('div');
  homePage.classList.add('home-page');

  const homeWrapper = document.createElement('div');
  homeWrapper.classList.add('home-wrapper');

  const homeHeading = document.createElement('h1');
  homeHeading.classList.add('home-heading');
  homeHeading.textContent = 'La Pizzeria';

  const homeDescription = document.createElement('p');
  homeDescription.classList.add('homeDescription');
  homeDescription.textContent = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';

  homePage.appendChild(homeWrapper)
  homeWrapper.appendChild(homeHeading);
  homeWrapper.appendChild(homeDescription);

  return homePage;
}

export { createHomePage }
