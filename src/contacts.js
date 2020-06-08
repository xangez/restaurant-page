
const contacts = (function() {

  const content = document.querySelector('#content');

  const contacts = document.createElement('div');
  contacts.id = 'contacts';

  const para1 = document.createElement('h3');
  para1.textContent = "You can find us at:";
  contacts.appendChild(para1);

  const para2 = document.createElement('p');
  para2.textContent = "100 Acre Wood";
  contacts.appendChild(para2);

  const map = document.createElement('img');
  map.src = "images/map.jpg";
  contacts.appendChild(map);

  const para3 = document.createElement('p');
  para3.textContent = "Contact Christopher Robin: 2222 2222";
  contacts.appendChild(para3);

  content.appendChild(contacts);

});

export default contacts;