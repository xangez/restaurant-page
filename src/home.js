
const home = (function() {

  const content = document.querySelector('#content');

  const home = document.createElement('div');
  home.id = 'home';

  const mug = document.createElement('img');
  mug.src = "images/mug.jpg";
  mug.id = 'mug';
  home.appendChild(mug);

  const description = document.createElement('div');
  description.textContent = "Robin & Co is a dessert shop serving up delicious hand-crafted treats in the Hundred Acre Wood.";
  description.id = 'description';
  home.appendChild(description);



  content.appendChild(home);

});


export default home;