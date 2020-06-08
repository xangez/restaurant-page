
const menu = (function() {

  const content = document.querySelector('#content');

  const menu = document.createElement('div');
  menu.id = "menu";

  const foodItems = [['pancakes.jpg', 'Pancakes', '$6'],['brownies.jpg', 'Brownies', '$5'], ['muffin.jpg', 'Muffin', '$4']];

  for (let i=0; i<3; i++) {
    let item = document.createElement('div');
    item.classList.add('item');
    menu.appendChild(item);

    let img = document.createElement('img');
    img.src = 'images/' + foodItems[i][0];
    img.classList.add('food')
    item.appendChild(img);

    let name = document.createElement('p');
    name.textContent = foodItems[i][1];
    item.appendChild(name);

    let price = document.createElement('p');
    price.textContent = foodItems[i][2];
    item.appendChild(price);
  }

  content.appendChild(menu);

});

export default menu;