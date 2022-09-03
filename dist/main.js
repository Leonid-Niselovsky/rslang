/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/main/main.scss":
/*!**********************************!*\
  !*** ./src/pages/main/main.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!********************************!*\
  !*** ./src/pages/main/main.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/pages/main/main.scss");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

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
const logout = document.querySelector('.login-text');
const loginButton = document.querySelector('.link_reg');
if (localStorage.getItem('user')) {
    logout.innerText = 'Logout';
    loginButton.href = './index.html';
}
loginButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    localStorage.clear();
}));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFFckIsUUFBUTtBQUNSLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakQsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFFM0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztBQUU1QyxTQUFTLFNBQVMsQ0FBQyxDQUFDO0lBQ2xCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuQixLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwQyxlQUFlLEVBQUUsQ0FBQztBQUNwQixDQUFDO0FBRUQsU0FBUyxlQUFlO0lBQ3RCLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckIsQ0FBQztBQUVELGdCQUFnQjtBQUNoQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBb0IsQ0FBQztBQUN4RSxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBb0IsQ0FBQztBQUczRSxJQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDL0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsV0FBVyxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7Q0FDbkM7QUFFRCxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQVMsRUFBRTtJQUMvQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDdkIsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3BhZ2VzL21haW4vbWFpbi5zY3NzPzg0ZTEiLCJ3ZWJwYWNrOi8vcnNsYW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzbGFuZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9wYWdlcy9tYWluL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9tYWluLnNjc3MnO1xyXG5cclxuLy9CdXJnZXJcclxuY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1cmdlcicpO1xyXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cCcpO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UG9wdXApO1xyXG5cclxuZnVuY3Rpb24gc2hvd1BvcHVwKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RvbnRzY3JvbGwnKTtcclxuICByZW5kZXJQb3B1cE1lbnUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUG9wdXBNZW51KCkge1xyXG4gIHBvcHVwLmFwcGVuZChtZW51KTtcclxufVxyXG5cclxuLy8gQXV0aG9yaXphdGlvblxyXG5jb25zdCBsb2dvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tdGV4dCcpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua19yZWcnKSBhcyBIVE1MTGlua0VsZW1lbnQ7XHJcblxyXG5cclxuaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xyXG4gIGxvZ291dC5pbm5lclRleHQgPSAnTG9nb3V0JztcclxuICBsb2dpbkJ1dHRvbi5ocmVmID0gJy4vaW5kZXguaHRtbCc7XHJcbn1cclxuXHJcbmxvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG59KVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9