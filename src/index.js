import home from './home';
import menu from './menu';
import contacts from './contacts';

(function(){

  //create header
  const content = document.querySelector('#content');
  const header = document.createElement('header');

  const heading = document.createElement('div');
  heading.textContent = 'Robin & Co';
  heading.id = 'heading';
  header.appendChild(heading);

  const nav = document.createElement('nav');

  let navContent = ['Home', 'Menu', 'Contacts']
  for (let i=0; i<3; i++){
    let div = document.createElement('div');
    div.textContent = navContent[i];
    div.id = navContent[i];
    nav.appendChild(div);
  }

  header.appendChild(nav);

  content.appendChild(header);

  window.onload = home();


  //togglePage

  const menuNav = document.querySelector('#Menu');
  menuNav.addEventListener('click', menuPage);

  const homeNav = document.querySelector('#Home');
  homeNav.addEventListener('click', homePage);

  const contactNav = document.querySelector('#Contacts');
  contactNav.addEventListener('click', contactsPage);

  function homePage() {
    content.removeChild(content.lastChild)
    home();
  }

  function menuPage() {
    content.removeChild(content.lastChild)
    menu();
  }

  function contactsPage() {
    content.removeChild(content.lastChild)
    contacts();
  }




})();