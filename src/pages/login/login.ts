import './main.scss';
import ApiUsers from '../../api/apiUsers';
import ApiSignIn from '../../api/apiSignIn';

// FORM ANIMATION
const signInBtn = document.querySelector('.signin_btn') as HTMLBodyElement;
const signUpBtn = document.querySelector('.signup_btn') as HTMLBodyElement;
const form = document.querySelector('.form') as HTMLBodyElement;
const body = document.body;
const incorrectReg = document.querySelector('.error-registration') as HTMLParagraphElement;

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
    incorrectReg.style.display = 'block';
    incorrectReg.innerText = 'incorrect email';
    email.style.backgroundColor = 'pink';
    email.focus();
    return;
  }
  if(!validationPass.test(password.value)) {
    incorrectReg.style.display = 'block';
    incorrectReg.innerText = 'incorrect password';
    password.style.backgroundColor = 'pink';
    password.focus();
    return;
  }

  const contentLogin = login.value;
  const contentEmail = email.value;
  const contentPass = password.value;

  
  const createUser = await signup.createUser(contentLogin, contentEmail, contentPass)
  if(createUser.status === 200) {
    const loginAfterReg = await signIn.signIn(contentEmail, contentPass);
    localStorage.setItem('user', JSON.stringify(await loginAfterReg.json()));
    redirect('./index.html');
  } else if(createUser.status === 417) {
    incorrectReg.style.display = 'block';
    incorrectReg.innerText = 'email is already registered';
  } else {
    incorrectReg.style.display = 'block';
  }
});


// LoginIn
const formSignIn = document.querySelector('.form-wrapper_signin') as HTMLInputElement;
const emailSignIn = document.querySelector('.signin-email') as HTMLInputElement;
const passwordSignIn = document.querySelector('.signin-pass') as HTMLInputElement;
const incorrect = document.querySelector('.error-registr') as HTMLParagraphElement;

formSignIn.addEventListener('submit', async (e) => {
  e.preventDefault();

  const textSignInEmail = emailSignIn.value;
  const textSignInPass = passwordSignIn.value;
  // email qwerty@qwerty.ru
  // pass 123456789


  const login = await signIn.signIn(textSignInEmail, textSignInPass);
  if(login.status === 200) {
    localStorage.setItem('user', JSON.stringify(await login.json()));
    redirect('./index.html');
  } else if(login.status === 403) {
      incorrect.style.display = 'block';
      emailSignIn.style.backgroundColor = 'pink';
      passwordSignIn.style.backgroundColor = 'pink';
    } else {
      incorrect.style.display = 'block';
      incorrect.innerText = 'you\'re not registred';
      emailSignIn.style.backgroundColor = 'pink';
      passwordSignIn.style.backgroundColor = 'pink';
    }
    
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