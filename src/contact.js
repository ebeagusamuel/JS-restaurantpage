const contact = (() => {
  let contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-div');

  let contactDivH2 = document.createElement('h2');
  contactDivH2.textContent = 'We are located at 23 russel avenue yaba, Lagos State. We open at 10:00AM and close at 9:00PM'
  
  contactDiv.appendChild(contactDivH2);

  return contactDiv
})();

export default contact