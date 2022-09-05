/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/login/main.scss":
/*!***********************************!*\
  !*** ./src/pages/login/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/api/apiSignIn.ts":
/*!******************************!*\
  !*** ./src/api/apiSignIn.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ApiSignIn {
    constructor() {
        this.url = 'https://learnwords124.herokuapp.com/signin';
    }
    signIn(email, password) {
        const Json = {
            "email": `${email}`,
            "password": `${password}`
        };
        const Token = fetch(this.url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Json)
        });
        // .then((data) => data.status===200 ? data.json(): data.status===403 ? 
        //   console.log(`Incorrect e-mail or password`): console.log(`ошибка ${data.status}`));
        return Token;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiSignIn);


/***/ }),

/***/ "./src/api/apiUsers.ts":
/*!*****************************!*\
  !*** ./src/api/apiUsers.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ApiUsers {
    constructor() {
        this.url = 'https://learnwords124.herokuapp.com/users';
    }
    createUser(name, email, password) {
        const Json = {
            "name": `${name}`,
            "email": `${email}`,
            "password": `${password}`
        };
        const createdUser = fetch(this.url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Json)
        });
        // .then((data) => data.status===200 ? data.json(): data.status===422 ? 
        // console.log(`Incorrect e-mail or password`): console.log(`ошибка ${data.status}`));
        return createdUser;
    }
    getUser(token, id) {
        const Url = `${this.url}/${id}`;
        const UserById = fetch(Url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then((data) => data.status === 200 ? data.json() : data.status === 401 ?
            console.log(`Access token is missing or invalid`) : data.status === 404 ?
            console.log(`User not found`) : console.log(`ошибка ${data.status}`));
        return UserById;
    }
    updateUser(token, id, email, password) {
        const Json = {
            "email": `${email}`,
            "password": `${password}`
        };
        const Url = `${this.url}/${id}`;
        const UpdatedUser = fetch(Url, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Json)
        })
            .then((data) => data.status === 200 ? data.json() : data.status === 400 ?
            console.log(`Bad request`) : data.status === 401 ?
            console.log(`Access token is missing or invalid`) : console.log(`ошибка ${data.status}`));
        return UpdatedUser;
    }
    deleteUser(token, id) {
        const Url = `${this.url}/${id}`;
        const DeletedUser = fetch(Url, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((data) => data.status === 204 ? true : data.status === 401 ?
            console.log(`Access token is missing or invalid`) : console.log(`ошибка ${data.status}`));
        return DeletedUser;
    }
    getUsersTokens(token, id) {
        const Url = `${this.url}/${id}/tokens`;
        const Tokens = fetch(Url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then((data) => data.status === 200 ? data.json() : data.status === 403 ?
            console.log(`Access token is missing, expired or invalid`) : console.log(`ошибка ${data.status}`));
        return Tokens;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiUsers);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/pages/login/login.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/pages/login/main.scss");
/* harmony import */ var _api_apiUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/apiUsers */ "./src/api/apiUsers.ts");
/* harmony import */ var _api_apiSignIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/apiSignIn */ "./src/api/apiSignIn.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



// FORM ANIMATION
const signInBtn = document.querySelector('.signin_btn');
const signUpBtn = document.querySelector('.signup_btn');
const form = document.querySelector('.form');
const body = document.body;
const incorrectReg = document.querySelector('.error-registration');
signUpBtn.addEventListener('click', function () {
    form.classList.add('active');
    body.classList.add('active');
});
signInBtn.addEventListener('click', function () {
    form.classList.remove('active');
    body.classList.remove('active');
});
// Registration
const formSignUp = document.querySelector('.form-wrapper_signup');
const login = document.querySelector('.reg-login');
const email = document.querySelector('.reg-email');
const password = document.querySelector('.reg-password');
const signup = new _api_apiUsers__WEBPACK_IMPORTED_MODULE_1__["default"]();
const signIn = new _api_apiSignIn__WEBPACK_IMPORTED_MODULE_2__["default"]();
const redirect = (url) => window.location.href = url;
formSignUp.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    // отвязаться от события перезагрузка страницы из-за отсутствия аттрибута action<form>
    e.preventDefault();
    let validationEmail = /\w+@\w+\.\w{2,20}/gi;
    let validationPass = /\w{8,20}/gi;
    // валидность email и pass, если false то розовый цвет и фокус 
    if (!validationEmail.test(email.value)) {
        incorrectReg.style.display = 'block';
        incorrectReg.innerText = 'incorrect email';
        email.style.backgroundColor = 'pink';
        email.focus();
        return;
    }
    if (!validationPass.test(password.value)) {
        incorrectReg.style.display = 'block';
        incorrectReg.innerText = 'incorrect password';
        password.style.backgroundColor = 'pink';
        password.focus();
        return;
    }
    const contentLogin = login.value;
    const contentEmail = email.value;
    const contentPass = password.value;
    const createUser = yield signup.createUser(contentLogin, contentEmail, contentPass);
    if (createUser.status === 200) {
        const loginAfterReg = yield signIn.signIn(contentEmail, contentPass);
        localStorage.setItem('user', JSON.stringify(yield loginAfterReg.json()));
        redirect('./index.html');
    }
    else if (createUser.status === 417) {
        incorrectReg.style.display = 'block';
        incorrectReg.innerText = 'email is already registered';
    }
    else {
        incorrectReg.style.display = 'block';
    }
}));
// LoginIn
const formSignIn = document.querySelector('.form-wrapper_signin');
const emailSignIn = document.querySelector('.signin-email');
const passwordSignIn = document.querySelector('.signin-pass');
const incorrect = document.querySelector('.error-registr');
formSignIn.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const textSignInEmail = emailSignIn.value;
    const textSignInPass = passwordSignIn.value;
    // email qwerty@qwerty.ru
    // pass 123456789
    const login = yield signIn.signIn(textSignInEmail, textSignInPass);
    if (login.status === 200) {
        localStorage.setItem('user', JSON.stringify(yield login.json()));
        redirect('./index.html');
    }
    else if (login.status === 403) {
        incorrect.style.display = 'block';
        emailSignIn.style.backgroundColor = 'pink';
        passwordSignIn.style.backgroundColor = 'pink';
    }
    else {
        incorrect.style.display = 'block';
        incorrect.innerText = 'you\'re not registred';
        emailSignIn.style.backgroundColor = 'pink';
        passwordSignIn.style.backgroundColor = 'pink';
    }
}));
// test user
// login qwerty 
// email qwerty@qwerty.ru
// pass 123456789
// message: "Authenticated"
// name: "qwerty"
// refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGFlMDlmMDRhY2M4MDAxNjlhNjhlZSIsInRva2VuSWQiOiIwMTBmMWU4MC00MDhkLTQ4NTgtYjUwNi00NWQwNTQ0ZDEzNmIiLCJpYXQiOjE2NjE2NTcyODEsImV4cCI6MTY2MTY3MzQ4MX0.TewOw86gSXTQ-bTd2Pj5wNPZ1gosD5nUKci4QU111lg"
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGFlMDlmMDRhY2M4MDAxNjlhNjhlZSIsImlhdCI6MTY2MTY1NzI4MSwiZXhwIjoxNjYxNjcxNjgxfQ.SiNvJex1NYkFB38NDJ33FvHO2hvE_GEuuxSuOpeAsuc"
// userId: "630ae09f04acc800169a68ee"

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM7QUFFSCxZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakIsMkJBQTJCO0FBQzNCLGlCQUFpQjtBQUNqQiwrUEFBK1A7QUFDL1AsdUxBQXVMO0FBQ3ZMLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JzbGFuZy8uL3NyYy9wYWdlcy9sb2dpbi9tYWluLnNjc3M/OTBiZSIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBpL2FwaVNpZ25Jbi50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBpL2FwaVVzZXJzLnRzIiwid2VicGFjazovL3JzbGFuZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc2xhbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzbGFuZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JzbGFuZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9wYWdlcy9sb2dpbi9sb2dpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQge1NpZ25Jbn0gZnJvbSAnLi9pbnRlcmZhY2UnXHJcbmNsYXNzIEFwaVNpZ25JbntcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51cmwgPSAnaHR0cHM6Ly9sZWFybndvcmRzMTI0Lmhlcm9rdWFwcC5jb20vc2lnbmluJztcclxuICAgIH1cclxuICAgIHNpZ25JbihlbWFpbCwgcGFzc3dvcmQpe1xyXG4gICAgICBjb25zdCBKc29uID0ge1xyXG4gICAgICAgICAgXCJlbWFpbFwiOiBgJHtlbWFpbH1gLFxyXG4gICAgICAgICAgXCJwYXNzd29yZFwiOiBgJHtwYXNzd29yZH1gXHJcbiAgICAgICAgfVxyXG4gICAgICBjb25zdCBUb2tlbj0gZmV0Y2godGhpcy51cmwsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoSnNvbilcclxuICAgICAgfSlcclxuICAgICAgLy8gLnRoZW4oKGRhdGEpID0+IGRhdGEuc3RhdHVzPT09MjAwID8gZGF0YS5qc29uKCk6IGRhdGEuc3RhdHVzPT09NDAzID8gXHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coYEluY29ycmVjdCBlLW1haWwgb3IgcGFzc3dvcmRgKTogY29uc29sZS5sb2coYNC+0YjQuNCx0LrQsCAke2RhdGEuc3RhdHVzfWApKTtcclxuICAgICAgcmV0dXJuIFRva2VuO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwaVNpZ25JbjsiLCJpbXBvcnQge1VzZXJ9IGZyb20gJy4vaW50ZXJmYWNlJ1xyXG5jbGFzcyBBcGlVc2Vyc3tcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vbGVhcm53b3JkczEyNC5oZXJva3VhcHAuY29tL3VzZXJzJztcclxuICAgIH1cclxuICAgIGNyZWF0ZVVzZXIobmFtZSwgZW1haWwsIHBhc3N3b3JkKXtcclxuICAgICAgY29uc3QgSnNvbjogVXNlciA9IHtcclxuICAgICAgICBcIm5hbWVcIjogYCR7bmFtZX1gLFxyXG4gICAgICAgIFwiZW1haWxcIjogYCR7ZW1haWx9YCxcclxuICAgICAgICBcInBhc3N3b3JkXCI6IGAke3Bhc3N3b3JkfWBcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBjcmVhdGVkVXNlciA9IGZldGNoKHRoaXMudXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KEpzb24pXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIC50aGVuKChkYXRhKSA9PiBkYXRhLnN0YXR1cz09PTIwMCA/IGRhdGEuanNvbigpOiBkYXRhLnN0YXR1cz09PTQyMiA/IFxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhgSW5jb3JyZWN0IGUtbWFpbCBvciBwYXNzd29yZGApOiBjb25zb2xlLmxvZyhg0L7RiNC40LHQutCwICR7ZGF0YS5zdGF0dXN9YCkpO1xyXG4gICAgICByZXR1cm4gY3JlYXRlZFVzZXI7XHJcbiAgICB9XHJcbiAgICBnZXRVc2VyKHRva2VuLCBpZCkge1xyXG4gICAgICBjb25zdCBVcmw9IGAke3RoaXMudXJsfS8ke2lkfWA7XHJcbiAgICAgIGNvbnN0IFVzZXJCeUlkID0gZmV0Y2goVXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLnN0YXR1cz09PTIwMCA/IGRhdGEuanNvbigpOiBkYXRhLnN0YXR1cz09PTQwMSA/IFxyXG4gICAgICBjb25zb2xlLmxvZyhgQWNjZXNzIHRva2VuIGlzIG1pc3Npbmcgb3IgaW52YWxpZGApIDogZGF0YS5zdGF0dXM9PT00MDQgP1xyXG4gICAgICBjb25zb2xlLmxvZyhgVXNlciBub3QgZm91bmRgKSA6IGNvbnNvbGUubG9nKGDQvtGI0LjQsdC60LAgJHtkYXRhLnN0YXR1c31gKSk7XHJcbiAgICAgIHJldHVybiBVc2VyQnlJZDtcclxuICAgIH1cclxuICAgIHVwZGF0ZVVzZXIodG9rZW4sIGlkLCBlbWFpbCwgcGFzc3dvcmQpe1xyXG4gICAgICBjb25zdCBKc29uID0ge1xyXG4gICAgICAgIFwiZW1haWxcIjogYCR7ZW1haWx9YCxcclxuICAgICAgICBcInBhc3N3b3JkXCI6IGAke3Bhc3N3b3JkfWBcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBVcmwgPSBgJHt0aGlzLnVybH0vJHtpZH1gO1xyXG4gICAgICBjb25zdCBVcGRhdGVkVXNlciA9IGZldGNoKFVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShKc29uKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5zdGF0dXM9PT0yMDAgPyBkYXRhLmpzb24oKTogZGF0YS5zdGF0dXM9PT00MDAgPyBcclxuICAgICAgY29uc29sZS5sb2coYEJhZCByZXF1ZXN0YCkgOiBkYXRhLnN0YXR1cz09PTQwMSA/XHJcbiAgICAgIGNvbnNvbGUubG9nKGBBY2Nlc3MgdG9rZW4gaXMgbWlzc2luZyBvciBpbnZhbGlkYCkgOiBjb25zb2xlLmxvZyhg0L7RiNC40LHQutCwICR7ZGF0YS5zdGF0dXN9YCkpO1xyXG4gICAgICByZXR1cm4gVXBkYXRlZFVzZXI7XHJcbiAgICB9XHJcbiAgICBkZWxldGVVc2VyKHRva2VuLCBpZCl7XHJcbiAgICAgIGNvbnN0IFVybCA9IGAke3RoaXMudXJsfS8ke2lkfWA7XHJcbiAgICAgIGNvbnN0IERlbGV0ZWRVc2VyID0gZmV0Y2goVXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5zdGF0dXM9PT0yMDQgPyB0cnVlOiBkYXRhLnN0YXR1cz09PTQwMSA/XHJcbiAgICAgIGNvbnNvbGUubG9nKGBBY2Nlc3MgdG9rZW4gaXMgbWlzc2luZyBvciBpbnZhbGlkYCkgOiBjb25zb2xlLmxvZyhg0L7RiNC40LHQutCwICR7ZGF0YS5zdGF0dXN9YCkpO1xyXG4gICAgICByZXR1cm4gRGVsZXRlZFVzZXI7XHJcbiAgICB9XHJcbiAgICBnZXRVc2Vyc1Rva2Vucyh0b2tlbiwgaWQpe1xyXG4gICAgICBjb25zdCBVcmwgPSBgJHt0aGlzLnVybH0vJHtpZH0vdG9rZW5zYDtcclxuICAgICAgY29uc3QgVG9rZW5zID0gZmV0Y2goVXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLnN0YXR1cz09PTIwMCA/IGRhdGEuanNvbigpOiBkYXRhLnN0YXR1cz09PTQwMyA/XHJcbiAgICAgIGNvbnNvbGUubG9nKGBBY2Nlc3MgdG9rZW4gaXMgbWlzc2luZywgZXhwaXJlZCBvciBpbnZhbGlkYCkgOiBjb25zb2xlLmxvZyhg0L7RiNC40LHQutCwICR7ZGF0YS5zdGF0dXN9YCkpO1xyXG4gICAgICByZXR1cm4gVG9rZW5zO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwaVVzZXJzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL21haW4uc2Nzcyc7XHJcbmltcG9ydCBBcGlVc2VycyBmcm9tICcuLi8uLi9hcGkvYXBpVXNlcnMnO1xyXG5pbXBvcnQgQXBpU2lnbkluIGZyb20gJy4uLy4uL2FwaS9hcGlTaWduSW4nO1xyXG5cclxuLy8gRk9STSBBTklNQVRJT05cclxuY29uc3Qgc2lnbkluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZ25pbl9idG4nKSBhcyBIVE1MQm9keUVsZW1lbnQ7XHJcbmNvbnN0IHNpZ25VcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWdudXBfYnRuJykgYXMgSFRNTEJvZHlFbGVtZW50O1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKSBhcyBIVE1MQm9keUVsZW1lbnQ7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5jb25zdCBpbmNvcnJlY3RSZWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItcmVnaXN0cmF0aW9uJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcblxyXG5zaWduVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICBib2R5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbnNpZ25JbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuLy8gUmVnaXN0cmF0aW9uXHJcbmNvbnN0IGZvcm1TaWduVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS13cmFwcGVyX3NpZ251cCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZy1sb2dpbicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZy1lbWFpbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZy1wYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG5jb25zdCBzaWdudXAgPSBuZXcgQXBpVXNlcnMoKTtcclxuY29uc3Qgc2lnbkluID0gbmV3IEFwaVNpZ25JbigpO1xyXG5cclxuY29uc3QgcmVkaXJlY3QgPSAodXJsOiBzdHJpbmcpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG5cclxuZm9ybVNpZ25VcC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xyXG4gIC8vINC+0YLQstGP0LfQsNGC0YzRgdGPINC+0YIg0YHQvtCx0YvRgtC40Y8g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutCwINGB0YLRgNCw0L3QuNGG0Ysg0LjQty3Qt9CwINC+0YLRgdGD0YLRgdGC0LLQuNGPINCw0YLRgtGA0LjQsdGD0YLQsCBhY3Rpb248Zm9ybT5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGxldCB2YWxpZGF0aW9uRW1haWwgPSAvXFx3K0BcXHcrXFwuXFx3ezIsMjB9L2dpO1xyXG4gIGxldCB2YWxpZGF0aW9uUGFzcyA9IC9cXHd7OCwyMH0vZ2k7XHJcblxyXG4gIC8vINCy0LDQu9C40LTQvdC+0YHRgtGMIGVtYWlsINC4IHBhc3MsINC10YHQu9C4IGZhbHNlINGC0L4g0YDQvtC30L7QstGL0Lkg0YbQstC10YIg0Lgg0YTQvtC60YPRgSBcclxuICBpZighdmFsaWRhdGlvbkVtYWlsLnRlc3QoZW1haWwudmFsdWUpKSB7XHJcbiAgICBpbmNvcnJlY3RSZWcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBpbmNvcnJlY3RSZWcuaW5uZXJUZXh0ID0gJ2luY29ycmVjdCBlbWFpbCc7XHJcbiAgICBlbWFpbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncGluayc7XHJcbiAgICBlbWFpbC5mb2N1cygpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZighdmFsaWRhdGlvblBhc3MudGVzdChwYXNzd29yZC52YWx1ZSkpIHtcclxuICAgIGluY29ycmVjdFJlZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGluY29ycmVjdFJlZy5pbm5lclRleHQgPSAnaW5jb3JyZWN0IHBhc3N3b3JkJztcclxuICAgIHBhc3N3b3JkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdwaW5rJztcclxuICAgIHBhc3N3b3JkLmZvY3VzKCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb250ZW50TG9naW4gPSBsb2dpbi52YWx1ZTtcclxuICBjb25zdCBjb250ZW50RW1haWwgPSBlbWFpbC52YWx1ZTtcclxuICBjb25zdCBjb250ZW50UGFzcyA9IHBhc3N3b3JkLnZhbHVlO1xyXG5cclxuICBcclxuICBjb25zdCBjcmVhdGVVc2VyID0gYXdhaXQgc2lnbnVwLmNyZWF0ZVVzZXIoY29udGVudExvZ2luLCBjb250ZW50RW1haWwsIGNvbnRlbnRQYXNzKVxyXG4gIGlmKGNyZWF0ZVVzZXIuc3RhdHVzID09PSAyMDApIHtcclxuICAgIGNvbnN0IGxvZ2luQWZ0ZXJSZWcgPSBhd2FpdCBzaWduSW4uc2lnbkluKGNvbnRlbnRFbWFpbCwgY29udGVudFBhc3MpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeShhd2FpdCBsb2dpbkFmdGVyUmVnLmpzb24oKSkpO1xyXG4gICAgcmVkaXJlY3QoJy4vaW5kZXguaHRtbCcpO1xyXG4gIH0gZWxzZSBpZihjcmVhdGVVc2VyLnN0YXR1cyA9PT0gNDE3KSB7XHJcbiAgICBpbmNvcnJlY3RSZWcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBpbmNvcnJlY3RSZWcuaW5uZXJUZXh0ID0gJ2VtYWlsIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGluY29ycmVjdFJlZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vIExvZ2luSW5cclxuY29uc3QgZm9ybVNpZ25JbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXdyYXBwZXJfc2lnbmluJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgZW1haWxTaWduSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lnbmluLWVtYWlsJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgcGFzc3dvcmRTaWduSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lnbmluLXBhc3MnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBpbmNvcnJlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItcmVnaXN0cicpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5cclxuZm9ybVNpZ25Jbi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgY29uc3QgdGV4dFNpZ25JbkVtYWlsID0gZW1haWxTaWduSW4udmFsdWU7XHJcbiAgY29uc3QgdGV4dFNpZ25JblBhc3MgPSBwYXNzd29yZFNpZ25Jbi52YWx1ZTtcclxuICAvLyBlbWFpbCBxd2VydHlAcXdlcnR5LnJ1XHJcbiAgLy8gcGFzcyAxMjM0NTY3ODlcclxuXHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXdhaXQgc2lnbkluLnNpZ25Jbih0ZXh0U2lnbkluRW1haWwsIHRleHRTaWduSW5QYXNzKTtcclxuICBpZihsb2dpbi5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeShhd2FpdCBsb2dpbi5qc29uKCkpKTtcclxuICAgIHJlZGlyZWN0KCcuL2luZGV4Lmh0bWwnKTtcclxuICB9IGVsc2UgaWYobG9naW4uc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgaW5jb3JyZWN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBlbWFpbFNpZ25Jbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncGluayc7XHJcbiAgICAgIHBhc3N3b3JkU2lnbkluLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdwaW5rJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluY29ycmVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgaW5jb3JyZWN0LmlubmVyVGV4dCA9ICd5b3VcXCdyZSBub3QgcmVnaXN0cmVkJztcclxuICAgICAgZW1haWxTaWduSW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3BpbmsnO1xyXG4gICAgICBwYXNzd29yZFNpZ25Jbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncGluayc7XHJcbiAgICB9XHJcbiAgICBcclxufSk7XHJcblxyXG4vLyB0ZXN0IHVzZXJcclxuLy8gbG9naW4gcXdlcnR5IFxyXG4vLyBlbWFpbCBxd2VydHlAcXdlcnR5LnJ1XHJcbi8vIHBhc3MgMTIzNDU2Nzg5XHJcbi8vIG1lc3NhZ2U6IFwiQXV0aGVudGljYXRlZFwiXHJcbi8vIG5hbWU6IFwicXdlcnR5XCJcclxuLy8gcmVmcmVzaFRva2VuOiBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWXpNR0ZsTURsbU1EUmhZMk00TURBeE5qbGhOamhsWlNJc0luUnZhMlZ1U1dRaU9pSXdNVEJtTVdVNE1DMDBNRGhrTFRRNE5UZ3RZalV3TmkwME5XUXdOVFEwWkRFek5tSWlMQ0pwWVhRaU9qRTJOakUyTlRjeU9ERXNJbVY0Y0NJNk1UWTJNVFkzTXpRNE1YMC5UZXdPdzg2Z1NYVFEtYlRkMlBqNXdOUFoxZ29zRDVuVUtjaTRRVTExMWxnXCJcclxuLy8gdG9rZW46IFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpZek1HRmxNRGxtTURSaFkyTTRNREF4TmpsaE5qaGxaU0lzSW1saGRDSTZNVFkyTVRZMU56STRNU3dpWlhod0lqb3hOall4TmpjeE5qZ3hmUS5TaU52SmV4MU5Za0ZCMzhOREozM0Z2SE8yaHZFX0dFdXV4U3VPcGVBc3VjXCJcclxuLy8gdXNlcklkOiBcIjYzMGFlMDlmMDRhY2M4MDAxNjlhNjhlZVwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9