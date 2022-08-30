import './main.scss';
import ApiUsers from '../../api/apiUsers';
import ApiSignIn from '../../api/apiSignIn';

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
const formSignUp = document.querySelector('.form-wrapper_signup') as HTMLInputElement;
const login = document.querySelector('.reg-login') as HTMLInputElement;
const email = document.querySelector('.reg-email') as HTMLInputElement;
const password = document.querySelector('.reg-password') as HTMLInputElement;

const signup = new ApiUsers();
const signIn = new ApiSignIn();

const redirect = (url: string) => window.location.href = url;

formSignUp.addEventListener('submit', async (e) => {
  // отвязаться от события перезагрузка страницы из-за отсутствия аттрибута action<form>
  e.preventDefault();

  let validationEmail = /\w+@\w+\.\w{2,20}/gi;
  let validationPass = /\w{8,20}/gi;

  // валидность email и pass, если false то розовый цвет и фокус 
  if(!validationEmail.test(email.value)) {
    email.style.backgroundColor = 'pink';
    email.focus();
    return;
  }
  if(!validationPass.test(password.value)) {
    password.style.backgroundColor = 'pink';
    password.focus();
    return;
  }

  const contentLogin = login.value;
  const contentEmail = email.value;
  const contentPass = password.value;

  const createUser = await signup.createUser(contentLogin, contentEmail, contentPass);

  const loginAfterReg = await signIn.signIn(contentEmail, contentPass);

  for (let key in loginAfterReg) {
    localStorage.setItem(key, loginAfterReg[key]);
  }

  redirect('./index.html');
});

// LoginIn
const formSignIn = document.querySelector('.form-wrapper_signin') as HTMLInputElement;
const emailSignIn = document.querySelector('.signin-email') as HTMLInputElement;
const passwordSignIn = document.querySelector('.signin-pass') as HTMLInputElement;

formSignIn.addEventListener('submit', async (e) => {
  e.preventDefault();

  const textSignInEmail = emailSignIn.value;
  const textSignInPass = passwordSignIn.value;

  const login = await signIn.signIn(textSignInEmail, textSignInPass);

  let getTokenId = await signup.getUser(login.token, login.userId);

  for (let key in login) {
    localStorage.setItem(key, login[key]);
  }

  redirect('./index.html');
});

// test user
// login qwerty 
// email qwerty@qwerty.ru 
// pass 123456789
// message: "Authenticated"
// name: "qwerty"
// refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGFlMDlmMDRhY2M4MDAxNjlhNjhlZSIsInRva2VuSWQiOiIwMTBmMWU4MC00MDhkLTQ4NTgtYjUwNi00NWQwNTQ0ZDEzNmIiLCJpYXQiOjE2NjE2NTcyODEsImV4cCI6MTY2MTY3MzQ4MX0.TewOw86gSXTQ-bTd2Pj5wNPZ1gosD5nUKci4QU111lg"
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGFlMDlmMDRhY2M4MDAxNjlhNjhlZSIsImlhdCI6MTY2MTY1NzI4MSwiZXhwIjoxNjYxNjcxNjgxfQ.SiNvJex1NYkFB38NDJ33FvHO2hvE_GEuuxSuOpeAsuc"
// userId: "630ae09f04acc800169a68ee"