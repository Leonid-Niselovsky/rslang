import './main.scss';

const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu');
const body = document.body;

burger.addEventListener('click', showPopup);

function showPopup(e) {
  e.preventDefault();
  popup.classList.toggle('open');
  burger.classList.toggle('active');
  body.classList.toggle('dontscroll');
  renderPopupMenu();
}

function renderPopupMenu() {
  popup.append(menu);
}

