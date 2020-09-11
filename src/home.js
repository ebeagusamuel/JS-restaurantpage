const home = (() => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('homepage');

  const homeH2 = document.createElement('h2');
  homeH2.textContent = 'Welcome to your favourite restaurant.';

  const homeP1 = document.createElement('p');
  homeP1.textContent = 'We know how important delicious food is to our customers, that is why we don not fall short in making sure that we provide the most sumptous and healthy of foods for the satisfaction of our customers.';

  const homeP2 = document.createElement('p');
  homeP2.textContent = 'Head over to our menu to see the varieties of awesome dishes we have for you.';

  homeDiv.appendChild(homeH2);
  homeDiv.appendChild(homeP1);
  homeDiv.appendChild(homeP2);

  return homeDiv;
})();

export default home;