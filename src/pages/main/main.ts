import './main.scss';

//Burger
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

// Authorization
const logout = document.querySelector('.login-text') as HTMLSpanElement;
const loginButton = document.querySelector('.link_reg') as HTMLLinkElement;


if(localStorage.getItem('name')) {
  logout.innerText = 'Logout';
  loginButton.href = './index.html';
}

loginButton.addEventListener('click', async () => {
  localStorage.clear();
})

