import './main.scss';
import ApiUsers from '../../api/apiUsers';

// FORM ANIMATION

const signInBtn = document.querySelector('.signin_btn') as HTMLBodyElement;
const signUpBtn = document.querySelector('.signup_btn') as HTMLBodyElement;
const form = document.querySelector('.form') as HTMLBodyElement;
const body = document.body;

signUpBtn.addEventListener('click', function () {
  form.classList.add('active');
  body.classList.add('active');
});

signInBtn.addEventListener('click', function () {
  form.classList.remove('active');
  body.classList.remove('active');
});

// Registration
const formSignUp = document.querySelector('.form-wrapper_signup') as HTMLBodyElement;
const login = document.querySelector('.reg-login') as HTMLBodyElement;
const email = document.querySelector('.reg-email') as HTMLBodyElement;
const password = document.querySelector('.reg-password') as HTMLBodyElement;

formSignUp.addEventListener('submit', function())