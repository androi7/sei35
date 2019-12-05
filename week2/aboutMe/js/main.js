document.body.style.fontFamily = 'Arial, sans-serif';
document.getElementById('nickname').innerText = 'Gab';
document.getElementById('favorites').innerText = 'Sport';
document.getElementById('hometown').innerText = 'Schaan';

const listElements = document.querySelectorAll('li');

for (let li of listElements) {
  li.className = 'listitem';
}

const newImage = document.createElement('img');
newImage.src = "https://www.indiewire.com/wp-content/uploads/2019/05/07956f40-77c4-11e9-9073-657a85982e73.jpg?w=780";
document.body.appendChild(newImage);
