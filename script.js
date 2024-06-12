// JavaScript til menu synlighed



document.getElementById('burger-menu').addEventListener('click', function() {
  var menu = document.querySelector('.menu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});