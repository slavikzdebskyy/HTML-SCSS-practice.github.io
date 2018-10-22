'use strict';

const $searchForm = document.getElementById('srch-frm');
const $sidebarBtn = document.getElementById('open-close-btn');
const $sidebarMenu = document.getElementById('sidebar-menu');
const $navbar = document.getElementById('navbar-btn');

// Event on button for open or close sidebar 
$sidebarBtn.addEventListener('click', () => {
  $sidebarMenu.classList.toggle('opened');
  $searchForm.classList.toggle('search-form-hidden');
});

//  event for activation item in navBar
$navbar.addEventListener('click', ({target}) => {
  const $liList = $navbar.getElementsByTagName('li');
  if(!target.className){
    for(let el of $liList){
      el.className = '';
    }
    target.className = 'active';
  }
});
