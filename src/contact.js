const createContactPage = () => {
  const contactPage = document.createElement('div');
  contactPage.classList.add('contact-page', 'full-h');

  const contactWrapper = document.createElement('div');
  contactWrapper.classList.add('contact-wrapper', 'd-flex', 'flex-col');

  const contactPhone = document.createElement('p');
  contactPhone.classList.add('contact-info');
  contactPhone.textContent = 'Call us at +1 408-370-0826';

  const contactEmail = document.createElement('p');
  contactEmail.classList.add('contact-info');
  contactEmail.textContent = 'E-mail: info@lapizzeria.us';

  const contactAddress = document.createElement('p');
  contactAddress.classList.add('contact-info');
  contactAddress.textContent = 'Visit us at 373 E Campbell Ave, Campbell, CA 95008, United States';
  
  const contactMapWrapper = document.createElement('div');
  contactMapWrapper.innerHTML = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.736032940111!2d-121.94332158477648!3d37.28714637833569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e34de5f7e03dd%3A0x776421da3eb3cd6e!2sLa%20Pizzeria%20Italian%20Pizza%20and%20Bar!5e0!3m2!1sen!2sbr!4v1617637434207!5m2!1sen!2sbr"
      class="contact-map"
      style="border:0;"
      allowfullscreen=""
      loading="lazy">
    </iframe>
  `

  contactWrapper.appendChild(contactPhone);
  contactWrapper.appendChild(contactEmail);
  contactWrapper.appendChild(contactAddress);
  contactWrapper.appendChild(contactMapWrapper);
  contactPage.appendChild(contactWrapper);

  return contactPage;
}

export { createContactPage }
