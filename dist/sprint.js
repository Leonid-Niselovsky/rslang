/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/games/sprint/main.scss":
/*!******************************************!*\
  !*** ./src/pages/games/sprint/main.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/api/apiUsersWords.ts":
/*!**********************************!*\
  !*** ./src/api/apiUsersWords.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ApiUsersWords {
    constructor() {
        this.url = 'https://learnwords124.herokuapp.com/users/';
    }
    getAllUserWords(token, userID) {
        const Url = `${this.url}${userID}/words`;
        const AllUserWords = fetch(Url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        }).then((data) => data.status === 200 ? data.json() : data.status === 402 ?
            console.log(`Access token is missing or invalid`) : console.log(`ошибка ${data.status}`));
        return AllUserWords;
    }
    createUserWord(token, userId, wordId, difficulty, optional) {
        const Url = `${this.url}${userId}/words/${wordId}`;
        const Json = {
            "difficulty": `${difficulty}`,
            "optional": optional
        };
        const UserWord = fetch(Url, {
            method: 'POST',
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
        return UserWord;
    }
    getUserWordById(token, userId, wordId) {
        const Url = `${this.url}${userId}/words/${wordId}`;
        const UserWord = fetch(Url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
            .then((data) => data.status === 200 ? data.json() : data.status === 404 ?
            console.log(`User's word not found`) : data.status === 401 ?
            console.log(`Access token is missing or invalid`) : console.log(`ошибка ${data.status}`));
        return UserWord;
    }
    updateUserWord(token, userId, wordId, difficulty, optional) {
        const Url = `${this.url}${userId}/words/${wordId}`;
        const Json = {
            "difficulty": `${difficulty}`,
            "optional": optional
        };
        const UserWord = fetch(Url, {
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
        return UserWord;
    }
    deleteUserWord(token, userId, wordId) {
        const Url = `${this.url}${userId}/words/${wordId}`;
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
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiUsersWords);


/***/ }),

/***/ "./src/api/apiWords.ts":
/*!*****************************!*\
  !*** ./src/api/apiWords.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ApiWords {
    constructor() {
        this.url = 'https://learnwords124.herokuapp.com/words';
    }
    getChunkOfWords(page, group) {
        const Url = `${this.url}?page=${page}&group=${group}`;
        const ChunkOfWords = fetch(Url)
            .then((data) => data.json());
        return ChunkOfWords;
    }
    getWordById(id) {
        const Url = `${this.url}/${id}`;
        const WordById = fetch(Url)
            .then((data) => data.json());
        return WordById;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiWords);


/***/ }),

/***/ "./src/pages/games/learnedWords/learnedWords.ts":
/*!******************************************************!*\
  !*** ./src/pages/games/learnedWords/learnedWords.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _learnedWordsMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./learnedWordsMethods */ "./src/pages/games/learnedWords/learnedWordsMethods.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class LearnedWords {
    constructor() {
        this.learnedWords = new _learnedWordsMethods__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    addWord(word) {
        return __awaiter(this, void 0, void 0, function* () {
            if (localStorage.user) {
                const user = JSON.parse(localStorage.getItem('user'));
                if (localStorage.rightWordsForUser !== undefined) {
                    let arr = JSON.parse(localStorage.rightWordsForUser);
                    const wordId = word.id;
                    let count = 0;
                    for (let i = 0; i < arr.length; i++) {
                        let id = arr[i].id;
                        if (wordId === id) {
                            count += 1;
                        }
                    }
                    console.log(count);
                    if (count === 2) {
                        arr = arr.filter((el) => {
                            let id = el.id;
                            if (wordId === id) {
                                return false;
                            }
                            return true;
                        });
                        localStorage.setItem('rightWordsForUser', JSON.stringify(arr));
                        yield this.learnedWords.UserWordCreate(user.token, user.userId, wordId, 'learned', word);
                    }
                    else {
                        arr.push(word);
                        localStorage.setItem('rightWordsForUser', JSON.stringify(arr));
                    }
                }
                else {
                    const arr = [word];
                    localStorage.setItem('rightWordsForUser', JSON.stringify(arr));
                }
            }
            else {
                localStorage.setItem('rightWordsForUser', JSON.stringify([]));
            }
        });
    }
    deleteWord(word) {
        if (localStorage.user) {
            const user = JSON.parse(localStorage.getItem('user'));
            this.learnedWords.UserWordDelete(user.token, user.userId, word.id);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LearnedWords);


/***/ }),

/***/ "./src/pages/games/learnedWords/learnedWordsMethods.ts":
/*!*************************************************************!*\
  !*** ./src/pages/games/learnedWords/learnedWordsMethods.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_apiUsersWords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/apiUsersWords */ "./src/api/apiUsersWords.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class LearnedWordsGame {
    constructor() {
        this.apiUsersWords = new _api_apiUsersWords__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    UserWordDelete(token, userId, wordId) {
        return __awaiter(this, void 0, void 0, function* () {
            const Word = yield this.apiUsersWords.getUserWordById(token, userId, wordId);
            if (Word) {
                if (Word.difficulty === 'learned') {
                    yield this.apiUsersWords.deleteUserWord(token, userId, wordId);
                }
            }
        });
    }
    UserWordCreate(token, userId, wordId, difficulty, optional) {
        return __awaiter(this, void 0, void 0, function* () {
            const Word = yield this.apiUsersWords.getUserWordById(token, userId, wordId);
            if (Word) {
                if (Word.difficulty === 'Hard') {
                    yield this.apiUsersWords.updateUserWord(token, userId, wordId, difficulty, optional);
                }
            }
            else {
                yield this.apiUsersWords.createUserWord(token, userId, wordId, difficulty, optional);
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LearnedWordsGame);


/***/ }),

/***/ "./src/pages/games/sprint/finalPage/finalPage.ts":
/*!*******************************************************!*\
  !*** ./src/pages/games/sprint/finalPage/finalPage.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _learnedWords_learnedWords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../learnedWords/learnedWords */ "./src/pages/games/learnedWords/learnedWords.ts");

class FinalPage {
    constructor() {
        this.url = 'https://learnwords124.herokuapp.com/';
        this.learnedWord = new _learnedWords_learnedWords__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    showFinalPage(words, result, points) {
        const finalPage = document.querySelector('.finalPage');
        const gamePage = document.querySelector('.gameSprint');
        gamePage.classList.add('displayNoneForGame');
        finalPage.classList.remove('displayNoneForGame');
        const rightWords = document.querySelector('.finalPageRight');
        const wrongWords = document.querySelector('.finalPageWrong');
        while (rightWords.firstChild) {
            rightWords.removeChild(rightWords.firstChild);
        }
        while (wrongWords.firstChild) {
            wrongWords.removeChild(wrongWords.firstChild);
        }
        for (let i = 0; i < result.length; i++) {
            const resultGame = result[i];
            const word = words[i];
            if (resultGame) {
                this.learnedWord.addWord(word.wordForServer);
                rightWords.insertAdjacentHTML('beforeend', this.fillFinalPage(word.word, word.wordTranslate));
                const soundButton = rightWords.children[rightWords.children.length - 1].children[0];
                soundButton.addEventListener('click', () => this.playAudioFinal(this.url + word.audio));
            }
            else {
                this.learnedWord.deleteWord(word.wordForServer);
                wrongWords.insertAdjacentHTML('beforeend', this.fillFinalPage(word.word, word.wordTranslate));
                const soundButton = wrongWords.children[wrongWords.children.length - 1].children[0];
                soundButton.addEventListener('click', () => this.playAudioFinal(this.url + word.audio));
            }
        }
        const rightWordNodeList = rightWords.children.length;
        const WrongWordNodeList = wrongWords.children.length;
        const pointsForGame = document.querySelector('.finalPageHeader');
        pointsForGame.innerHTML = `Результат: ${points} очков</p>`;
        const rightWordCount = `<p>Правильно: ${rightWordNodeList}</p>`;
        const wrongWordCount = `<p>Неправильно: ${WrongWordNodeList}</p>`;
        rightWords.insertAdjacentHTML('afterbegin', rightWordCount);
        wrongWords.insertAdjacentHTML('afterbegin', wrongWordCount);
    }
    fillFinalPage(word, wordTranslate) {
        const element = `
        <div>
        <svg class='svgFinalPage' width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-sound">
        
        <title>1193</title>
        
        <defs></defs>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M13.987,14.868 C13.987,15.494 13.308,16 12.471,16 L5.957,11.473 C5.118,11.473 4.044,10.965 4.044,10.34 L4.044,5.682 C4.044,5.058 5.118,4.55 5.957,4.55 L12.471,0.022 C13.308,0.022 13.987,0.53 13.987,1.155 L13.987,14.868 L13.987,14.868 Z" fill="#434343" class="si-glyph-fill"></path>
        </g>
    </svg>
        <span>${word} - ${wordTranslate}</span>
        </div>
        `;
        return element;
    }
    playAudioFinal(soundUrl) {
        const audio = new Audio();
        audio.src = soundUrl;
        audio.autoplay = true;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FinalPage);


/***/ }),

/***/ "./src/pages/games/sprint/gameProcess/gameProcess.ts":
/*!***********************************************************!*\
  !*** ./src/pages/games/sprint/gameProcess/gameProcess.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _finalPage_finalPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../finalPage/finalPage */ "./src/pages/games/sprint/finalPage/finalPage.ts");
/* harmony import */ var _startGameTextBook_startSprintTextbook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../startGameTextBook/startSprintTextbook */ "./src/pages/games/startGameTextBook/startSprintTextbook.ts");
/* harmony import */ var _api_apiWords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/apiWords */ "./src/api/apiWords.ts");



class GameProcess {
    constructor() {
        this.pagesLength = 30;
        this.apiWords = new _api_apiWords__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.wordsA1 = [];
        this.wordsA2 = [];
        this.wordsB1 = [];
        this.wordsB2 = [];
        this.wordsC1 = [];
        this.wordsC2 = [];
        this.finalPage = new _finalPage_finalPage__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.words = [];
        this.counter = -1;
        this.interval;
        this.resultArray = [];
        this.animationResult = document.querySelector('.resultAnimation');
        this.arrForFinalPage = [];
        this.startSprintTextbook = new _startGameTextBook_startSprintTextbook__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    showFirstPage(arr) {
        var _a;
        this.words = arr;
        if (arr.length !== 0) {
            const buttonStart = document.querySelector('.startAudioChalengeGame');
            const clone = buttonStart.cloneNode(true);
            const wrongButton = document.querySelector('.wrongButtonForGame');
            const rightButton = document.querySelector('.rightButtonForGame');
            (_a = buttonStart.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(clone, buttonStart);
            clone.addEventListener('click', () => {
                const startPage = document.querySelector('.startPageAudioChalenge');
                const gamePage = document.querySelector('.gameSprint');
                startPage.classList.add('displayNoneForGame');
                gamePage.classList.remove('displayNoneForGame');
                this.interval = window.setInterval(this.timer.bind(this), 1000);
                this.fillGamePage(arr, 'start');
                this.resultArray.pop();
            });
            wrongButton.addEventListener('click', () => {
                this.fillGamePage(arr, false);
            });
            rightButton.addEventListener('click', () => {
                this.fillGamePage(arr, true);
            });
            window.addEventListener('keyup', (e) => {
                const button = e.key;
                if (button === 'ArrowLeft') {
                    this.fillGamePage(arr, false);
                }
                if (button === 'ArrowRight') {
                    this.fillGamePage(arr, true);
                }
            });
        }
    }
    showFirstPageForTextbook(Level) {
        var _a;
        this.getChunkOfWords();
        let arr = [];
        const buttonStart = document.querySelector('.startGameTextbook');
        const clone = buttonStart.cloneNode(true);
        const wrongButton = document.querySelector('.wrongButtonForGame');
        const rightButton = document.querySelector('.rightButtonForGame');
        (_a = buttonStart.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(clone, buttonStart);
        clone.addEventListener('click', () => {
            const randomArr = this.getRandomWordsForGameTextbook(Level);
            arr = this.renderArrayForGame(randomArr);
            this.words = arr;
            const startPage = document.querySelector('.startPageForTextbook');
            const gamePage = document.querySelector('.gameSprint');
            startPage.classList.add('displayNoneForGame');
            gamePage.classList.remove('displayNoneForGame');
            this.interval = window.setInterval(this.timer.bind(this), 1000);
            this.fillGamePage(arr, 'start');
            this.resultArray.pop();
        });
        wrongButton.addEventListener('click', () => {
            this.fillGamePage(arr, false);
        });
        rightButton.addEventListener('click', () => {
            this.fillGamePage(arr, true);
        });
        window.addEventListener('keyup', (e) => {
            const button = e.key;
            if (button === 'ArrowLeft') {
                this.fillGamePage(arr, false);
            }
            if (button === 'ArrowRight') {
                this.fillGamePage(arr, true);
            }
        });
    }
    fillGamePage(arr, result) {
        this.animationResult.classList.remove('resultAnimationdd');
        window.setTimeout(() => this.animationResult.classList.add('resultAnimationdd'), 500);
        this.resultArray.push(result);
        if ((result === true || result === false) && (arr[this.counter].result === this.resultArray[this.counter])) {
            this.rightWord();
        }
        else if ((result === true || result === false) && (arr[this.counter].result !== this.resultArray[this.counter])) {
            this.wrongWord();
        }
        this.counter += 1;
        if (this.counter === this.words.length) {
            this.stopGame();
        }
        const word = arr[this.counter].word;
        const wordGuess = arr[this.counter].guessWord;
        const wordElement = document.querySelector('.wordForSprint');
        const wordElementGuess = document.querySelector('.wordTranslateForSprint');
        wordElement.innerHTML = word;
        wordElementGuess.innerHTML = wordGuess;
        const elem = document.querySelector('.resultAnimation');
    }
    timer() {
        const timer = document.querySelector('.timerForGame');
        const time = Number(timer.innerHTML);
        if (timer.innerHTML === '0') {
            timer.innerHTML = '0';
            this.stopGame();
        }
        else {
            timer.innerHTML = `${time - 1}`;
        }
    }
    stopGame() {
        var _a, _b;
        clearInterval(this.interval);
        const pointsForGame = (_a = document.querySelector('.pointsSprint')) === null || _a === void 0 ? void 0 : _a.innerHTML.slice(26, (_b = document.querySelector('.pointsSprint')) === null || _b === void 0 ? void 0 : _b.innerHTML.length);
        this.finalPage.showFinalPage(this.words, this.arrForFinalPage, pointsForGame);
    }
    rightWord() {
        this.arrForFinalPage.push(true);
        this.animationResult.innerHTML = 'Right';
        this.animationResult.style.color = 'green';
        this.pointsCounter();
        const pointsForGame = document.querySelector('.pointsSprint');
        const pointsForWord = document.querySelector('.pointsForWordSprint');
        const points = Number(pointsForWord.innerHTML.slice(29, 31));
        const pointsAtAll = Number(pointsForGame.innerHTML.slice(26, pointsForGame.innerHTML.length));
        pointsForGame.innerHTML = `<span>Очков всего: </span>${pointsAtAll + points}`;
    }
    wrongWord() {
        this.arrForFinalPage.push(false);
        const pointsForGame = document.querySelectorAll('.pointRightWordSprint');
        const pointsForWord = document.querySelector('.pointsForWordSprint');
        pointsForGame[0].classList.remove('pointRightWordSprintRight');
        pointsForGame[1].classList.remove('pointRightWordSprintRight');
        pointsForGame[2].classList.remove('pointRightWordSprintRight');
        pointsForWord.innerHTML = '<span>Очков за слово: </span>10';
        this.animationResult.innerHTML = 'Wrong';
        this.animationResult.style.color = 'red';
    }
    pointsCounter() {
        const pointsForGame = document.querySelectorAll('.pointRightWordSprint');
        const pointsForWord = document.querySelector('.pointsForWordSprint');
        let firstBlock = false;
        let secondBlock = false;
        if (this.arrForFinalPage[this.arrForFinalPage.length - 1] === true) {
            pointsForGame[0].classList.add('pointRightWordSprintRight');
            if (this.arrForFinalPage[this.arrForFinalPage.length - 2] === true) {
                pointsForGame[1].classList.add('pointRightWordSprintRight');
                if (this.arrForFinalPage[this.arrForFinalPage.length - 3] === true) {
                    pointsForGame[2].classList.add('pointRightWordSprintRight');
                    if (this.arrForFinalPage[this.arrForFinalPage.length - 4] === true) {
                        pointsForWord.innerHTML = `<span>Очков за слово: </span>20`;
                        pointsForGame[0].classList.remove('pointRightWordSprintRight');
                        pointsForGame[1].classList.remove('pointRightWordSprintRight');
                        pointsForGame[2].classList.remove('pointRightWordSprintRight');
                        firstBlock = true;
                    }
                }
            }
        }
        if (this.arrForFinalPage[this.arrForFinalPage.length - 5] === true && firstBlock) {
            pointsForGame[0].classList.add('pointRightWordSprintRight');
            if (this.arrForFinalPage[this.arrForFinalPage.length - 6] === true) {
                pointsForGame[1].classList.add('pointRightWordSprintRight');
                if (this.arrForFinalPage[this.arrForFinalPage.length - 7] === true) {
                    pointsForGame[2].classList.add('pointRightWordSprintRight');
                    if (this.arrForFinalPage[this.arrForFinalPage.length - 8] === true) {
                        pointsForWord.innerHTML = `<span>Очков за слово: </span>40`;
                        pointsForGame[0].classList.remove('pointRightWordSprintRight');
                        pointsForGame[1].classList.remove('pointRightWordSprintRight');
                        pointsForGame[2].classList.remove('pointRightWordSprintRight');
                        secondBlock = true;
                    }
                }
            }
        }
        if (this.arrForFinalPage[this.arrForFinalPage.length - 9] === true && secondBlock) {
            pointsForGame[0].classList.add('pointRightWordSprintRight');
            if (this.arrForFinalPage[this.arrForFinalPage.length - 10] === true) {
                pointsForGame[1].classList.add('pointRightWordSprintRight');
                if (this.arrForFinalPage[this.arrForFinalPage.length - 11] === true) {
                    pointsForGame[2].classList.add('pointRightWordSprintRight');
                    if (this.arrForFinalPage[this.arrForFinalPage.length - 12] === true) {
                        pointsForWord.innerHTML = `<span>Очков за слово: </span>80`;
                    }
                }
            }
        }
    }
    getChunkOfWords() {
        this.wordsA1 = [];
        this.wordsA2 = [];
        this.wordsB1 = [];
        this.wordsB2 = [];
        this.wordsC1 = [];
        this.wordsC2 = [];
        for (let i = 0; i < this.pagesLength; i++) {
            this.apiWords.getChunkOfWords(i, 0)
                .then((val) => this.wordsA1.push(...val));
        }
        for (let i = 0; i < this.pagesLength; i++) {
            this.apiWords.getChunkOfWords(i, 1)
                .then((val) => this.wordsA2.push(...val));
        }
        for (let i = 0; i < this.pagesLength; i++) {
            this.apiWords.getChunkOfWords(i, 2)
                .then((val) => this.wordsB1.push(...val));
        }
        for (let i = 0; i < this.pagesLength; i++) {
            this.apiWords.getChunkOfWords(i, 3)
                .then((val) => this.wordsB2.push(...val));
        }
        for (let i = 0; i < this.pagesLength; i++) {
            this.apiWords.getChunkOfWords(i, 4)
                .then((val) => this.wordsC1.push(...val));
        }
        for (let i = 0; i < this.pagesLength; i++) {
            this.apiWords.getChunkOfWords(i, 5)
                .then((val) => this.wordsC2.push(...val));
        }
    }
    renderArrayForGame(randomArr) {
        const arr = [];
        const arrPages = JSON.parse(localStorage.wordsForGames);
        for (let i = 0; i < arrPages.length; i++) {
            const word = arrPages[i].word;
            const wordID = arrPages[i].id;
            const wordTanslate = arrPages[i].wordTranslate;
            const wordAudio = arrPages[i].audio;
            let wordGuess = this.random(0, 1);
            if (wordGuess === 0) {
                wordGuess = randomArr[i].wordTranslate;
            }
            else {
                wordGuess = arrPages[i].wordTranslate;
            }
            const result = {
                'id': wordID,
                'word': word,
                'wordTranslate': wordTanslate,
                'guessWord': wordGuess,
                'audio': wordAudio,
                'result': wordTanslate === wordGuess,
                'wordForServer': arrPages[i]
            };
            arr.push(result);
        }
        return arr;
    }
    random(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    getRandomWordsForGameTextbook(Level) {
        let arr = [];
        if (Level === 0) {
            arr.push(...this.wordsA1);
        }
        if (Level === 1) {
            arr.push(...this.wordsA2);
        }
        if (Level === 2) {
            arr.push(...this.wordsB1);
        }
        if (Level === 3) {
            arr.push(...this.wordsB2);
        }
        if (Level === 4) {
            arr.push(...this.wordsC1);
        }
        if (Level === 5) {
            arr.push(...this.wordsC2);
        }
        return arr;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameProcess);


/***/ }),

/***/ "./src/pages/games/startGameTextBook/startSprintTextbook.ts":
/*!******************************************************************!*\
  !*** ./src/pages/games/startGameTextBook/startSprintTextbook.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_apiWords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/apiWords */ "./src/api/apiWords.ts");

class StartSprintTextbook {
    constructor() {
        this.arr = [];
        this.apiWords = new _api_apiWords__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.guessWordArrayTextbook = [];
        this.resultGuessWordArrayTextbook = [];
    }
    start() {
        const startPage = document.querySelector('.startPageForTextbook');
        const wrongPage = document.querySelector('.startPageAudioChalenge');
        startPage.classList.remove('displayNoneForGame');
        wrongPage.classList.add('displayNoneForGame');
    }
    renderingGroup() {
        const arrPages = JSON.parse(localStorage.wordsForGames);
        let group = arrPages[0].group;
        if (group === 6) {
            group = 5;
        }
        else {
            group += 1;
        }
        return group;
    }
    renderArrayForGame() {
        const arr = [];
        const arrPages = JSON.parse(localStorage.wordsForGames);
        for (let i = 0; i < this.guessWordArrayTextbook.length; i++) {
            const word = arrPages[i].word;
            const wordID = arrPages[i].id;
            const wordTanslate = arrPages[i].wordTranslate;
            const wordAudio = arrPages[i].audio;
            const wordGuess = this.guessWordArrayTextbook[i].wordTranslate;
            const result = {
                'id': wordID,
                'word': word,
                'wordTranslate': wordTanslate,
                'guessWord': wordGuess,
                'audio': wordAudio,
                'result': wordTanslate === wordGuess
            };
            arr.push(result);
        }
        return arr;
    }
    random(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartSprintTextbook);


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
/*!******************************************!*\
  !*** ./src/pages/games/sprint/sprint.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/pages/games/sprint/main.scss");
/* harmony import */ var _api_apiWords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/apiWords */ "./src/api/apiWords.ts");
/* harmony import */ var _gameProcess_gameProcess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameProcess/gameProcess */ "./src/pages/games/sprint/gameProcess/gameProcess.ts");
/* harmony import */ var _startGameTextBook_startSprintTextbook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startGameTextBook/startSprintTextbook */ "./src/pages/games/startGameTextBook/startSprintTextbook.ts");




class Sprint {
    constructor() {
        this.apiWords = new _api_apiWords__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.wordsA1 = [];
        this.wordsA2 = [];
        this.wordsB1 = [];
        this.wordsB2 = [];
        this.wordsC1 = [];
        this.wordsC2 = [];
        this.pagesLength = 30;
        this.gameProcess = new _gameProcess_gameProcess__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.startSprintTextbook = new _startGameTextBook_startSprintTextbook__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
    addMenu() {
        const btn = document.querySelector('.closeMenu');
        btn.addEventListener('click', () => {
            const menu = document.querySelector('.menu');
            menu.classList.add('closed');
        });
        const butnOpen = document.querySelector('.openMenu');
        butnOpen.addEventListener('click', () => {
            const menu = document.querySelector('.menu');
            menu.classList.remove('closed');
        });
    }
    validator() {
        if (!!window.location.search) {
            this.startSprintTextbook.start();
            const Level = this.startSprintTextbook.renderingGroup();
            this.gameProcess.showFirstPageForTextbook(Level);
        }
        else {
            sprint.getChunkOfWords();
            sprint.addLevel();
        }
    }
    addLevel() {
        const btns = document.querySelector('.levelSelectionAudioChalenge');
        btns.addEventListener('click', (e) => {
            const btnList = btns.childNodes;
            for (let i = 1; i < btnList.length; i += 2) {
                btnList[i].classList.remove('activeLevel');
            }
            const ElementTarget = e.target;
            if (btns !== ElementTarget) {
                ElementTarget.classList.add('activeLevel');
                const Level = ElementTarget.innerHTML;
                const resultArr = this.getRandomWordsForGame(Level);
                this.gameProcess.showFirstPage(resultArr);
            }
        });
    }
    getChunkOfWords() {
        this.wordsA1 = [];
        this.wordsA2 = [];
        this.wordsB1 = [];
        this.wordsB2 = [];
        this.wordsC1 = [];
        this.wordsC2 = [];
        for (let i = 0; i < this.pagesLength; i++) {
            this.apiWords.getChunkOfWords(i, 0)
                .then((val) => this.wordsA1.push(...val));
        }
        for (let i = 0; i < this.pagesLength; i++) {
            this.apiWords.getChunkOfWords(i, 1)
                .then((val) => this.wordsA2.push(...val));
        }
        for (let i = 0; i < this.pagesLength; i++) {
            this.apiWords.getChunkOfWords(i, 2)
                .then((val) => this.wordsB1.push(...val));
        }
        for (let i = 0; i < this.pagesLength; i++) {
            this.apiWords.getChunkOfWords(i, 3)
                .then((val) => this.wordsB2.push(...val));
        }
        for (let i = 0; i < this.pagesLength; i++) {
            this.apiWords.getChunkOfWords(i, 4)
                .then((val) => this.wordsC1.push(...val));
        }
        for (let i = 0; i < this.pagesLength; i++) {
            this.apiWords.getChunkOfWords(i, 5)
                .then((val) => this.wordsC2.push(...val));
        }
    }
    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    random(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    getRandomWordsForGame(Level) {
        let arr = [];
        let resultArray = [];
        if (Level === 'A1') {
            this.shuffle(this.wordsA1);
            arr.push(...this.wordsA1);
        }
        if (Level === 'A2') {
            this.shuffle(this.wordsA2);
            arr.push(...this.wordsA2);
        }
        if (Level === 'B1') {
            this.shuffle(this.wordsB1);
            arr.push(...this.wordsB1);
        }
        if (Level === 'B2') {
            this.shuffle(this.wordsB2);
            arr.push(...this.wordsB2);
        }
        if (Level === 'C1') {
            this.shuffle(this.wordsC1);
            arr.push(...this.wordsC1);
        }
        if (Level === 'C2') {
            this.shuffle(this.wordsC2);
            arr.push(...this.wordsC2);
        }
        for (let i = 0; i < 300; i++) {
            if (arr.length < 600) {
                const elem = document.querySelector(".contentText");
                elem.innerHTML = 'Слова еще не загрузились, попробуй нажать еще раз';
            }
            else {
                const elem = document.querySelector(".contentText");
                elem.innerHTML = 'Попробуй угадать как можно больше слов за минуту.';
            }
            const word = arr[i].word;
            const wordID = arr[i].id;
            const wordTanslate = arr[i].wordTranslate;
            const wordAudio = arr[i].audio;
            let wordGuess = this.random(0, 1);
            if (wordGuess === 0) {
                wordGuess = arr[this.random(301, 599)].wordTranslate;
            }
            else {
                wordGuess = arr[i].wordTranslate;
            }
            const result = {
                'id': wordID,
                'word': word,
                'wordTranslate': wordTanslate,
                'guessWord': wordGuess,
                'audio': wordAudio,
                'result': wordTanslate === wordGuess,
                'wordForServer': arr[i]
            };
            resultArray.push(result);
        }
        return resultArray;
    }
}
const sprint = new Sprint();
sprint.validator();
sprint.addMenu();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQ3hDLE1BQU0sU0FBUyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDN0IsSUFBSSxTQUFTLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUcsU0FBUyxLQUFHLENBQUMsRUFBQztnQkFDYixTQUFTLEdBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYTthQUNwRDtpQkFBSTtnQkFDRCxTQUFTLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWE7YUFDakM7WUFDRCxNQUFNLE1BQU0sR0FBQztnQkFDVCxJQUFJLEVBQUMsTUFBTTtnQkFDWCxNQUFNLEVBQUMsSUFBSTtnQkFDWCxlQUFlLEVBQUMsWUFBWTtnQkFDNUIsV0FBVyxFQUFDLFNBQVM7Z0JBQ3JCLE9BQU8sRUFBQyxTQUFTO2dCQUNqQixRQUFRLEVBQUMsWUFBWSxLQUFHLFNBQVM7Z0JBQ2pDLGVBQWUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDM0I7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0NBRUY7QUFDRCxNQUFNLE1BQU0sR0FBRSxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNuQixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvcGFnZXMvZ2FtZXMvc3ByaW50L21haW4uc2Nzcz9jMzM0Iiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcGkvYXBpVXNlcnNXb3Jkcy50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBpL2FwaVdvcmRzLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9wYWdlcy9nYW1lcy9sZWFybmVkV29yZHMvbGVhcm5lZFdvcmRzLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9wYWdlcy9nYW1lcy9sZWFybmVkV29yZHMvbGVhcm5lZFdvcmRzTWV0aG9kcy50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvcGFnZXMvZ2FtZXMvc3ByaW50L2ZpbmFsUGFnZS9maW5hbFBhZ2UudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3BhZ2VzL2dhbWVzL3NwcmludC9nYW1lUHJvY2Vzcy9nYW1lUHJvY2Vzcy50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvcGFnZXMvZ2FtZXMvc3RhcnRHYW1lVGV4dEJvb2svc3RhcnRTcHJpbnRUZXh0Ym9vay50cyIsIndlYnBhY2s6Ly9yc2xhbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNsYW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yc2xhbmcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc2xhbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvcGFnZXMvZ2FtZXMvc3ByaW50L3NwcmludC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQge1VzZXJXb3Jkc30gZnJvbSAnLi9pbnRlcmZhY2UnXHJcbmNsYXNzIEFwaVVzZXJzV29yZHN7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vbGVhcm53b3JkczEyNC5oZXJva3VhcHAuY29tL3VzZXJzLyc7XHJcbiAgICB9XHJcbiAgICBnZXRBbGxVc2VyV29yZHModG9rZW4sIHVzZXJJRCl7XHJcbiAgICAgIGNvbnN0IFVybD0gYCR7dGhpcy51cmx9JHt1c2VySUR9L3dvcmRzYDtcclxuICAgICAgY29uc3QgQWxsVXNlcldvcmRzOiBQcm9taXNlPCBVc2VyV29yZHNbXSA+ID0gZmV0Y2goVXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9XHJcbiAgICAgIH0pLnRoZW4oKGRhdGEpID0+IGRhdGEuc3RhdHVzPT09MjAwID8gZGF0YS5qc29uKCk6IGRhdGEuc3RhdHVzPT09NDAyID8gXHJcbiAgICAgIGNvbnNvbGUubG9nKGBBY2Nlc3MgdG9rZW4gaXMgbWlzc2luZyBvciBpbnZhbGlkYCk6IGNvbnNvbGUubG9nKGDQvtGI0LjQsdC60LAgJHtkYXRhLnN0YXR1c31gKSk7XHJcbiAgICAgIHJldHVybiBBbGxVc2VyV29yZHM7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVVc2VyV29yZCh0b2tlbiwgdXNlcklkLCB3b3JkSWQsIGRpZmZpY3VsdHksIG9wdGlvbmFsPyl7XHJcbiAgICAgICAgY29uc3QgVXJsPSBgJHt0aGlzLnVybH0ke3VzZXJJZH0vd29yZHMvJHt3b3JkSWR9YDtcclxuICAgICAgICBjb25zdCBKc29uID0ge1xyXG4gICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IGAke2RpZmZpY3VsdHl9YCxcclxuICAgICAgICAgIFwib3B0aW9uYWxcIjogb3B0aW9uYWxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgVXNlcldvcmQ6IFByb21pc2U8VXNlcldvcmRzPiA9IGZldGNoKFVybCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShKc29uKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuc3RhdHVzPT09MjAwID8gZGF0YS5qc29uKCk6IGRhdGEuc3RhdHVzPT09NDAwID8gXHJcbiAgICAgICAgY29uc29sZS5sb2coYEJhZCByZXF1ZXN0YCkgOmRhdGEuc3RhdHVzPT09NDAxID8gXHJcbiAgICAgICAgY29uc29sZS5sb2coYEFjY2VzcyB0b2tlbiBpcyBtaXNzaW5nIG9yIGludmFsaWRgKTogY29uc29sZS5sb2coYNC+0YjQuNCx0LrQsCAke2RhdGEuc3RhdHVzfWApKTtcclxuICAgICAgICByZXR1cm4gVXNlcldvcmQ7XHJcbiAgICB9XHJcbiAgICBnZXRVc2VyV29yZEJ5SWQodG9rZW4sIHVzZXJJZCwgd29yZElkKXtcclxuICAgICAgICBjb25zdCBVcmw9IGAke3RoaXMudXJsfSR7dXNlcklkfS93b3Jkcy8ke3dvcmRJZH1gO1xyXG4gICAgICAgIGNvbnN0IFVzZXJXb3JkOiBQcm9taXNlPCBVc2VyV29yZHMgPiA9IGZldGNoKFVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLnN0YXR1cz09PTIwMCA/IGRhdGEuanNvbigpOiBkYXRhLnN0YXR1cz09PTQwNCA/IFxyXG4gICAgICAgICAgY29uc29sZS5sb2coYFVzZXIncyB3b3JkIG5vdCBmb3VuZGApIDpkYXRhLnN0YXR1cz09PTQwMSA/IFxyXG4gICAgICAgICAgY29uc29sZS5sb2coYEFjY2VzcyB0b2tlbiBpcyBtaXNzaW5nIG9yIGludmFsaWRgKTogY29uc29sZS5sb2coYNC+0YjQuNCx0LrQsCAke2RhdGEuc3RhdHVzfWApKTtcclxuICAgICAgICByZXR1cm4gVXNlcldvcmQ7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVVc2VyV29yZCh0b2tlbiwgdXNlcklkLCB3b3JkSWQsIGRpZmZpY3VsdHksIG9wdGlvbmFsPyl7XHJcbiAgICAgICAgY29uc3QgVXJsPSBgJHt0aGlzLnVybH0ke3VzZXJJZH0vd29yZHMvJHt3b3JkSWR9YDtcclxuICAgICAgICBjb25zdCBKc29uID0ge1xyXG4gICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IGAke2RpZmZpY3VsdHl9YCxcclxuICAgICAgICAgIFwib3B0aW9uYWxcIjogb3B0aW9uYWxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgVXNlcldvcmQ6IFByb21pc2U8VXNlcldvcmRzPiA9IGZldGNoKFVybCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KEpzb24pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5zdGF0dXM9PT0yMDAgPyBkYXRhLmpzb24oKTogZGF0YS5zdGF0dXM9PT00MDAgPyBcclxuICAgICAgICBjb25zb2xlLmxvZyhgQmFkIHJlcXVlc3RgKSA6ZGF0YS5zdGF0dXM9PT00MDEgPyBcclxuICAgICAgICBjb25zb2xlLmxvZyhgQWNjZXNzIHRva2VuIGlzIG1pc3Npbmcgb3IgaW52YWxpZGApOiBjb25zb2xlLmxvZyhg0L7RiNC40LHQutCwICR7ZGF0YS5zdGF0dXN9YCkpO1xyXG4gICAgICAgIHJldHVybiBVc2VyV29yZDtcclxuICAgIH1cclxuICAgIGRlbGV0ZVVzZXJXb3JkKHRva2VuLCB1c2VySWQsIHdvcmRJZCl7XHJcbiAgICAgICAgY29uc3QgVXJsPSBgJHt0aGlzLnVybH0ke3VzZXJJZH0vd29yZHMvJHt3b3JkSWR9YDtcclxuICAgICAgICBjb25zdCBEZWxldGVkVXNlciA9IGZldGNoKFVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5zdGF0dXM9PT0yMDQgPyB0cnVlOiBkYXRhLnN0YXR1cz09PTQwMSA/XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgQWNjZXNzIHRva2VuIGlzIG1pc3Npbmcgb3IgaW52YWxpZGApIDogY29uc29sZS5sb2coYNC+0YjQuNCx0LrQsCAke2RhdGEuc3RhdHVzfWApKTtcclxuICAgICAgICAgIHJldHVybiBEZWxldGVkVXNlcjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcGlVc2Vyc1dvcmRzOyIsImltcG9ydCB7V29yZHN9IGZyb20gJy4vaW50ZXJmYWNlJ1xyXG5jbGFzcyBBcGlXb3Jkc3tcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51cmwgPSAnaHR0cHM6Ly9sZWFybndvcmRzMTI0Lmhlcm9rdWFwcC5jb20vd29yZHMnO1xyXG4gICAgfVxyXG4gICAgZ2V0Q2h1bmtPZldvcmRzKHBhZ2UsIGdyb3VwKXtcclxuICAgICAgY29uc3QgVXJsPSBgJHt0aGlzLnVybH0/cGFnZT0ke3BhZ2V9Jmdyb3VwPSR7Z3JvdXB9YDtcclxuICAgICAgY29uc3QgQ2h1bmtPZldvcmRzOiBQcm9taXNlPFdvcmRzW10+ID0gZmV0Y2goVXJsKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSk7XHJcbiAgICAgIHJldHVybiBDaHVua09mV29yZHM7XHJcbiAgICB9XHJcbiAgICBnZXRXb3JkQnlJZChpZCl7XHJcbiAgICAgIGNvbnN0IFVybD0gYCR7dGhpcy51cmx9LyR7aWR9YDtcclxuICAgICAgY29uc3QgV29yZEJ5SWQ6IFByb21pc2U8V29yZHM+ID0gZmV0Y2goVXJsKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSk7XHJcbiAgICAgIHJldHVybiBXb3JkQnlJZDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcGlXb3JkczsiLCJcclxuaW1wb3J0IExlYXJuZWRXb3Jkc0dhbWUgZnJvbSBcIi4vbGVhcm5lZFdvcmRzTWV0aG9kc1wiO1xyXG5jbGFzcyBMZWFybmVkV29yZHN7XHJcbiAgICBsZWFybmVkV29yZHM6IExlYXJuZWRXb3Jkc0dhbWU7XHJcbiBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5sZWFybmVkV29yZHM9bmV3IExlYXJuZWRXb3Jkc0dhbWUoKTtcclxuIH1cclxuIGFzeW5jIGFkZFdvcmQod29yZCl7ICBcclxuICAgIGlmKGxvY2FsU3RvcmFnZS51c2VyKXtcclxuICAgICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxuICAgICAgaWYobG9jYWxTdG9yYWdlLnJpZ2h0V29yZHNGb3JVc2VyIT09dW5kZWZpbmVkKXtcclxuICAgICAgICBsZXQgYXJyPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnJpZ2h0V29yZHNGb3JVc2VyKVxyXG4gICAgICAgIGNvbnN0IHdvcmRJZD13b3JkLmlkO1xyXG4gICAgICAgIGxldCBjb3VudD0wO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJyLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgaWQ9IGFycltpXS5pZDtcclxuICAgICAgICAgICAgaWYod29yZElkPT09aWQpe1xyXG4gICAgICAgICAgICAgICAgY291bnQrPTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY291bnQpXHJcbiAgICAgICAgaWYoY291bnQ9PT0yKXtcclxuICAgICAgICAgICAgYXJyPWFyci5maWx0ZXIoKGVsKT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkPSBlbC5pZDtcclxuICAgICAgICAgICAgICAgIGlmKHdvcmRJZD09PWlkKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyaWdodFdvcmRzRm9yVXNlcicsIEpTT04uc3RyaW5naWZ5KGFycikpO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmxlYXJuZWRXb3Jkcy5Vc2VyV29yZENyZWF0ZSh1c2VyLnRva2VuLCB1c2VyLnVzZXJJZCwgd29yZElkLCAnbGVhcm5lZCcsIHdvcmQpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKHdvcmQpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyaWdodFdvcmRzRm9yVXNlcicsIEpTT04uc3RyaW5naWZ5KGFycikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgYXJyPSBbd29yZF07XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JpZ2h0V29yZHNGb3JVc2VyJywgSlNPTi5zdHJpbmdpZnkoYXJyKSk7XHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyaWdodFdvcmRzRm9yVXNlcicsIEpTT04uc3RyaW5naWZ5KFtdKSk7XHJcbiAgICB9XHJcbiB9XHJcbiBkZWxldGVXb3JkKHdvcmQpe1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLnVzZXIpe1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXHJcbiAgICAgICAgdGhpcy5sZWFybmVkV29yZHMuVXNlcldvcmREZWxldGUodXNlci50b2tlbiwgdXNlci51c2VySWQsIHdvcmQuaWQpXHJcbiAgICB9XHJcbiB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWFybmVkV29yZHM7IiwiaW1wb3J0IEFwaVVzZXJzV29yZHMgZnJvbSBcIi4uLy4uLy4uL2FwaS9hcGlVc2Vyc1dvcmRzXCI7XHJcblxyXG5jbGFzcyBMZWFybmVkV29yZHNHYW1le1xyXG4gICAgYXBpVXNlcnNXb3JkczogYW55O1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmFwaVVzZXJzV29yZHM9bmV3IEFwaVVzZXJzV29yZHMoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIFVzZXJXb3JkRGVsZXRlKHRva2VuLCB1c2VySWQsIHdvcmRJZCl7XHJcbiAgICAgICAgY29uc3QgV29yZCA9IGF3YWl0IHRoaXMuYXBpVXNlcnNXb3Jkcy5nZXRVc2VyV29yZEJ5SWQodG9rZW4sIHVzZXJJZCwgd29yZElkKVxyXG4gICAgICAgIGlmKFdvcmQpe1xyXG4gICAgICAgICAgICBpZihXb3JkLmRpZmZpY3VsdHk9PT0nbGVhcm5lZCcpe1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hcGlVc2Vyc1dvcmRzLmRlbGV0ZVVzZXJXb3JkKHRva2VuLCB1c2VySWQsIHdvcmRJZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIFVzZXJXb3JkQ3JlYXRlKHRva2VuLCB1c2VySWQsIHdvcmRJZCwgZGlmZmljdWx0eSwgb3B0aW9uYWwpe1xyXG4gICAgICAgIGNvbnN0IFdvcmQgPSBhd2FpdCB0aGlzLmFwaVVzZXJzV29yZHMuZ2V0VXNlcldvcmRCeUlkKHRva2VuLCB1c2VySWQsIHdvcmRJZClcclxuICAgICAgICBpZihXb3JkKXtcclxuICAgICAgICAgICAgaWYoV29yZC5kaWZmaWN1bHR5PT09J0hhcmQnKXtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBpVXNlcnNXb3Jkcy51cGRhdGVVc2VyV29yZCh0b2tlbiwgdXNlcklkLCB3b3JkSWQsIGRpZmZpY3VsdHksIG9wdGlvbmFsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBpVXNlcnNXb3Jkcy5jcmVhdGVVc2VyV29yZCh0b2tlbiwgdXNlcklkLCB3b3JkSWQsIGRpZmZpY3VsdHksIG9wdGlvbmFsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMZWFybmVkV29yZHNHYW1lOyIsImltcG9ydCBMZWFybmVkV29yZHMgZnJvbSAnLi4vLi4vbGVhcm5lZFdvcmRzL2xlYXJuZWRXb3Jkcyc7XHJcbmNsYXNzIEZpbmFsUGFnZXtcclxuICAgIHVybDogc3RyaW5nXHJcbiAgICBsZWFybmVkV29yZDogTGVhcm5lZFdvcmRzO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnVybD0naHR0cHM6Ly9sZWFybndvcmRzMTI0Lmhlcm9rdWFwcC5jb20vJ1xyXG4gICAgICAgIHRoaXMubGVhcm5lZFdvcmQgPSBuZXcgTGVhcm5lZFdvcmRzKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBzaG93RmluYWxQYWdlKHdvcmRzLCByZXN1bHQscG9pbnRzKXtcclxuICAgICAgICBjb25zdCBmaW5hbFBhZ2U9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbmFsUGFnZScpIGFzIEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgZ2FtZVBhZ2U9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVTcHJpbnQnKWFzIEVsZW1lbnQ7XHJcbiAgICAgICAgZ2FtZVBhZ2UuY2xhc3NMaXN0LmFkZCgnZGlzcGxheU5vbmVGb3JHYW1lJylcclxuICAgICAgICBmaW5hbFBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheU5vbmVGb3JHYW1lJylcclxuICAgICAgICBjb25zdCByaWdodFdvcmRzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maW5hbFBhZ2VSaWdodCcpYXMgRWxlbWVudDtcclxuICAgICAgICBjb25zdCB3cm9uZ1dvcmRzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maW5hbFBhZ2VXcm9uZycpYXMgRWxlbWVudDtcclxuICAgICAgICB3aGlsZSAocmlnaHRXb3Jkcy5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICByaWdodFdvcmRzLnJlbW92ZUNoaWxkKHJpZ2h0V29yZHMuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh3cm9uZ1dvcmRzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICB3cm9uZ1dvcmRzLnJlbW92ZUNoaWxkKHdyb25nV29yZHMuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8cmVzdWx0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0R2FtZSA9IHJlc3VsdFtpXVxyXG4gICAgICAgICAgY29uc3Qgd29yZCA9IHdvcmRzW2ldXHJcbiAgICAgICAgICBpZiAocmVzdWx0R2FtZSl7XHJcbiAgICAgICAgICAgIHRoaXMubGVhcm5lZFdvcmQuYWRkV29yZCh3b3JkLndvcmRGb3JTZXJ2ZXIpXHJcbiAgICAgICAgICAgIHJpZ2h0V29yZHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLmZpbGxGaW5hbFBhZ2Uod29yZC53b3JkLCB3b3JkLndvcmRUcmFuc2xhdGUpKTtcclxuICAgICAgICAgICAgY29uc3Qgc291bmRCdXR0b24gPSByaWdodFdvcmRzLmNoaWxkcmVuW3JpZ2h0V29yZHMuY2hpbGRyZW4ubGVuZ3RoIC0xIF0uY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHNvdW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhpcy5wbGF5QXVkaW9GaW5hbCh0aGlzLnVybCArIHdvcmQuYXVkaW8pKVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubGVhcm5lZFdvcmQuZGVsZXRlV29yZCh3b3JkLndvcmRGb3JTZXJ2ZXIpXHJcbiAgICAgICAgICAgIHdyb25nV29yZHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLmZpbGxGaW5hbFBhZ2Uod29yZC53b3JkLCB3b3JkLndvcmRUcmFuc2xhdGUpKTtcclxuICAgICAgICAgICAgY29uc3Qgc291bmRCdXR0b24gPSB3cm9uZ1dvcmRzLmNoaWxkcmVuW3dyb25nV29yZHMuY2hpbGRyZW4ubGVuZ3RoIC0xIF0uY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHNvdW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhpcy5wbGF5QXVkaW9GaW5hbCh0aGlzLnVybCArIHdvcmQuYXVkaW8pKVxyXG4gICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJpZ2h0V29yZE5vZGVMaXN0ID0gcmlnaHRXb3Jkcy5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgV3JvbmdXb3JkTm9kZUxpc3QgPSB3cm9uZ1dvcmRzLmNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBwb2ludHNGb3JHYW1lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maW5hbFBhZ2VIZWFkZXInKWFzIEVsZW1lbnQ7XHJcbiAgICAgICAgcG9pbnRzRm9yR2FtZS5pbm5lckhUTUw9YNCg0LXQt9GD0LvRjNGC0LDRgjogJHtwb2ludHN9INC+0YfQutC+0LI8L3A+YFxyXG4gICAgICAgIGNvbnN0IHJpZ2h0V29yZENvdW50PWA8cD7Qn9GA0LDQstC40LvRjNC90L46ICR7cmlnaHRXb3JkTm9kZUxpc3R9PC9wPmBcclxuICAgICAgICBjb25zdCB3cm9uZ1dvcmRDb3VudD1gPHA+0J3QtdC/0YDQsNCy0LjQu9GM0L3QvjogJHtXcm9uZ1dvcmROb2RlTGlzdH08L3A+YFxyXG4gICAgICAgIHJpZ2h0V29yZHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgcmlnaHRXb3JkQ291bnQpO1xyXG4gICAgICAgIHdyb25nV29yZHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgd3JvbmdXb3JkQ291bnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGZpbGxGaW5hbFBhZ2Uod29yZDogc3RyaW5nLHdvcmRUcmFuc2xhdGU6IHN0cmluZyl7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudD1gXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8c3ZnIGNsYXNzPSdzdmdGaW5hbFBhZ2UnIHdpZHRoPVwiMTdweFwiIGhlaWdodD1cIjE3cHhcIiB2aWV3Qm94PVwiMCAwIDE3IDE3XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiBjbGFzcz1cInNpLWdseXBoIHNpLWdseXBoLXNvdW5kXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPHRpdGxlPjExOTM8L3RpdGxlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEzLjk4NywxNC44NjggQzEzLjk4NywxNS40OTQgMTMuMzA4LDE2IDEyLjQ3MSwxNiBMNS45NTcsMTEuNDczIEM1LjExOCwxMS40NzMgNC4wNDQsMTAuOTY1IDQuMDQ0LDEwLjM0IEw0LjA0NCw1LjY4MiBDNC4wNDQsNS4wNTggNS4xMTgsNC41NSA1Ljk1Nyw0LjU1IEwxMi40NzEsMC4wMjIgQzEzLjMwOCwwLjAyMiAxMy45ODcsMC41MyAxMy45ODcsMS4xNTUgTDEzLjk4NywxNC44NjggTDEzLjk4NywxNC44NjggWlwiIGZpbGw9XCIjNDM0MzQzXCIgY2xhc3M9XCJzaS1nbHlwaC1maWxsXCI+PC9wYXRoPlxyXG4gICAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gICAgICAgIDxzcGFuPiR7d29yZH0gLSAke3dvcmRUcmFuc2xhdGV9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgICBwbGF5QXVkaW9GaW5hbChzb3VuZFVybCl7XHJcbiAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oKTtcclxuICAgICAgICBhdWRpby5zcmMgPSBzb3VuZFVybDtcclxuICAgICAgICBhdWRpby5hdXRvcGxheSA9IHRydWU7XHJcbiAgICAgIH1cclxufSBcclxuZXhwb3J0IGRlZmF1bHQgRmluYWxQYWdlOyIsImltcG9ydCBGaW5hbFBhZ2UgZnJvbSAnLi4vZmluYWxQYWdlL2ZpbmFsUGFnZSc7XHJcbmltcG9ydCBTdGFydFNwcmludFRleHRib29rIGZyb20gJy4uLy4uL3N0YXJ0R2FtZVRleHRCb29rL3N0YXJ0U3ByaW50VGV4dGJvb2snXHJcbmltcG9ydCBBcGlXb3JkcyBmcm9tICcuLi8uLi8uLi8uLi9hcGkvYXBpV29yZHMnO1xyXG5jbGFzcyBHYW1lUHJvY2Vzc3sgXHJcbiAgICBhcGlXb3JkczogQXBpV29yZHM7XHJcbiAgICBpbnRlcnZhbDogYW55O1xyXG4gICAgY291bnRlcjogbnVtYmVyO1xyXG4gICAgcmVzdWx0QXJyYXk6IGFueVtdO1xyXG4gICAgYW5pbWF0aW9uUmVzdWx0OiBIVE1MQm9keUVsZW1lbnQ7XHJcbiAgICBhcnJGb3JGaW5hbFBhZ2U6IGFueVtdO1xyXG4gICAgd29yZHM6IGFueVtdO1xyXG4gICAgZmluYWxQYWdlOiBGaW5hbFBhZ2U7XHJcbiAgICBzdGFydFNwcmludFRleHRib29rOiBTdGFydFNwcmludFRleHRib29rO1xyXG4gICAgd29yZHNBMTogYW55W107XHJcbiAgICB3b3Jkc0EyOiBhbnlbXTtcclxuICAgIHdvcmRzQjE6IGFueVtdO1xyXG4gICAgd29yZHNCMjogYW55W107XHJcbiAgICB3b3Jkc0MxOiBhbnlbXTtcclxuICAgIHdvcmRzQzI6IGFueVtdO1xyXG4gICAgcGFnZXNMZW5ndGg6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5wYWdlc0xlbmd0aD0zMFxyXG4gICAgICAgIHRoaXMuYXBpV29yZHMgPSBuZXcgQXBpV29yZHM7XHJcbiAgICAgICAgdGhpcy53b3Jkc0ExPVtdO1xyXG4gICAgICAgIHRoaXMud29yZHNBMj1bXTtcclxuICAgICAgICB0aGlzLndvcmRzQjE9W107XHJcbiAgICAgICAgdGhpcy53b3Jkc0IyPVtdO1xyXG4gICAgICAgIHRoaXMud29yZHNDMT1bXTtcclxuICAgICAgICB0aGlzLndvcmRzQzI9W107XHJcbiAgICAgICAgdGhpcy5maW5hbFBhZ2U9IG5ldyBGaW5hbFBhZ2UoKTtcclxuICAgICAgICB0aGlzLndvcmRzPVtdXHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gLTE7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbDtcclxuICAgICAgICB0aGlzLnJlc3VsdEFycmF5PVtdO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uUmVzdWx0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRBbmltYXRpb24nKWFzIEhUTUxCb2R5RWxlbWVudFxyXG4gICAgICAgIHRoaXMuYXJyRm9yRmluYWxQYWdlPVtdO1xyXG4gICAgICAgIHRoaXMuc3RhcnRTcHJpbnRUZXh0Ym9vaz1uZXcgU3RhcnRTcHJpbnRUZXh0Ym9vaztcclxuICAgIH1cclxuICAgIHNob3dGaXJzdFBhZ2UoYXJyKXtcclxuICAgICAgICB0aGlzLndvcmRzPWFycjtcclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCE9PTApe1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvblN0YXJ0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydEF1ZGlvQ2hhbGVuZ2VHYW1lJylhcyBFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IGNsb25lID0gYnV0dG9uU3RhcnQuY2xvbmVOb2RlKHRydWUpIGFzIEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgd3JvbmdCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyb25nQnV0dG9uRm9yR2FtZScpYXMgRWxlbWVudDtcclxuICAgICAgICBjb25zdCByaWdodEJ1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHRCdXR0b25Gb3JHYW1lJylhcyBFbGVtZW50O1xyXG4gICAgICAgIGJ1dHRvblN0YXJ0LnBhcmVudE5vZGU/LnJlcGxhY2VDaGlsZChjbG9uZSwgYnV0dG9uU3RhcnQpO1xyXG4gICAgICAgIGNsb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFBhZ2U9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0UGFnZUF1ZGlvQ2hhbGVuZ2UnKWFzIEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGdhbWVQYWdlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lU3ByaW50JylhcyBFbGVtZW50O1xyXG4gICAgICAgICAgICBzdGFydFBhZ2UuY2xhc3NMaXN0LmFkZCgnZGlzcGxheU5vbmVGb3JHYW1lJylcclxuICAgICAgICAgICAgZ2FtZVBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheU5vbmVGb3JHYW1lJylcclxuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCh0aGlzLnRpbWVyLmJpbmQodGhpcyksIDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxHYW1lUGFnZShhcnIsJ3N0YXJ0JylcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRBcnJheS5wb3AoKVxyXG4gICAgICAgIH0pIFxyXG4gICAgICAgIHdyb25nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxHYW1lUGFnZShhcnIsZmFsc2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgdGhpcy5maWxsR2FtZVBhZ2UoYXJyLHRydWUpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLChlKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b249ZS5rZXlcclxuICAgICAgICAgICAgaWYoYnV0dG9uID09PSAnQXJyb3dMZWZ0Jyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxHYW1lUGFnZShhcnIsZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoYnV0dG9uID09PSAnQXJyb3dSaWdodCcpeyBcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbEdhbWVQYWdlKGFycix0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIH1cclxuICAgIHNob3dGaXJzdFBhZ2VGb3JUZXh0Ym9vayhMZXZlbCl7XHJcbiAgICAgICAgdGhpcy5nZXRDaHVua09mV29yZHMoKVxyXG4gICAgICAgIGxldCBhcnI9W107XHJcbiAgICAgICAgY29uc3QgYnV0dG9uU3RhcnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0R2FtZVRleHRib29rJylhcyBFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IGNsb25lID0gYnV0dG9uU3RhcnQuY2xvbmVOb2RlKHRydWUpIGFzIEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgd3JvbmdCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyb25nQnV0dG9uRm9yR2FtZScpYXMgRWxlbWVudDtcclxuICAgICAgICBjb25zdCByaWdodEJ1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHRCdXR0b25Gb3JHYW1lJylhcyBFbGVtZW50O1xyXG4gICAgICAgIGJ1dHRvblN0YXJ0LnBhcmVudE5vZGU/LnJlcGxhY2VDaGlsZChjbG9uZSwgYnV0dG9uU3RhcnQpO1xyXG4gICAgICAgIGNsb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21BcnIgPXRoaXMuZ2V0UmFuZG9tV29yZHNGb3JHYW1lVGV4dGJvb2soTGV2ZWwpXHJcbiAgICAgICAgICAgIGFycj10aGlzLnJlbmRlckFycmF5Rm9yR2FtZShyYW5kb21BcnIpXHJcbiAgICAgICAgICAgIHRoaXMud29yZHM9YXJyO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFBhZ2U9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0UGFnZUZvclRleHRib29rJylhcyBFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBnYW1lUGFnZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZVNwcmludCcpYXMgRWxlbWVudDtcclxuICAgICAgICAgICAgc3RhcnRQYWdlLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXlOb25lRm9yR2FtZScpXHJcbiAgICAgICAgICAgIGdhbWVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXlOb25lRm9yR2FtZScpXHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy50aW1lci5iaW5kKHRoaXMpLCAxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5maWxsR2FtZVBhZ2UoYXJyLCdzdGFydCcpXHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0QXJyYXkucG9wKClcclxuICAgICAgICB9KSBcclxuICAgICAgICB3cm9uZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgdGhpcy5maWxsR2FtZVBhZ2UoYXJyLGZhbHNlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbEdhbWVQYWdlKGFycix0cnVlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywoZSk9PntcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uPWUua2V5XHJcbiAgICAgICAgICAgIGlmKGJ1dHRvbiA9PT0gJ0Fycm93TGVmdCcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsR2FtZVBhZ2UoYXJyLGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGJ1dHRvbiA9PT0gJ0Fycm93UmlnaHQnKXsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxHYW1lUGFnZShhcnIsdHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBmaWxsR2FtZVBhZ2UoYXJyLHJlc3VsdCl7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25SZXN1bHQuY2xhc3NMaXN0LnJlbW92ZSgncmVzdWx0QW5pbWF0aW9uZGQnKVxyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpPT50aGlzLmFuaW1hdGlvblJlc3VsdC5jbGFzc0xpc3QuYWRkKCdyZXN1bHRBbmltYXRpb25kZCcpLDUwMClcclxuICAgICAgICB0aGlzLnJlc3VsdEFycmF5LnB1c2gocmVzdWx0KVxyXG4gICAgICAgIGlmKChyZXN1bHQgPT09dHJ1ZXx8cmVzdWx0ID09PWZhbHNlKSYmKGFyclt0aGlzLmNvdW50ZXJdLnJlc3VsdD09PXRoaXMucmVzdWx0QXJyYXlbdGhpcy5jb3VudGVyXSkpe1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0V29yZCgpXHJcbiAgICAgICAgfWVsc2UgaWYoKHJlc3VsdCA9PT10cnVlfHxyZXN1bHQgPT09ZmFsc2UpJiYoYXJyW3RoaXMuY291bnRlcl0ucmVzdWx0IT09dGhpcy5yZXN1bHRBcnJheVt0aGlzLmNvdW50ZXJdKSl7XHJcbiAgICAgICAgICAgIHRoaXMud3JvbmdXb3JkKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb3VudGVyKz0xO1xyXG4gICAgICAgIGlmKHRoaXMuY291bnRlcj09PXRoaXMud29yZHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy5zdG9wR2FtZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHdvcmQ9YXJyW3RoaXMuY291bnRlcl0ud29yZFxyXG4gICAgICAgIGNvbnN0IHdvcmRHdWVzcz1hcnJbdGhpcy5jb3VudGVyXS5ndWVzc1dvcmRcclxuICAgICAgICBjb25zdCB3b3JkRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yZEZvclNwcmludCcpYXMgRWxlbWVudDtcclxuICAgICAgICBjb25zdCB3b3JkRWxlbWVudEd1ZXNzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JkVHJhbnNsYXRlRm9yU3ByaW50JylhcyBFbGVtZW50O1xyXG4gICAgICAgIHdvcmRFbGVtZW50LmlubmVySFRNTD13b3JkO1xyXG4gICAgICAgIHdvcmRFbGVtZW50R3Vlc3MuaW5uZXJIVE1MPXdvcmRHdWVzcztcclxuICAgICAgICBjb25zdCBlbGVtPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRBbmltYXRpb24nKSBhcyBIVE1MQm9keUVsZW1lbnRcclxuICAgIH1cclxuICAgIHRpbWVyKCl7XHJcbiAgICAgICAgY29uc3QgdGltZXIgPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lckZvckdhbWUnKWFzIEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgdGltZT1OdW1iZXIodGltZXIuaW5uZXJIVE1MKVxyXG4gICAgICAgIGlmKHRpbWVyLmlubmVySFRNTD09PScwJyl7XHJcbiAgICAgICAgICAgIHRpbWVyLmlubmVySFRNTD0nMCdcclxuICAgICAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aW1lci5pbm5lckhUTUw9YCR7dGltZS0xfWBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdG9wR2FtZSgpe1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcclxuICAgICAgICBjb25zdCBwb2ludHNGb3JHYW1lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2ludHNTcHJpbnQnKT8uaW5uZXJIVE1MLnNsaWNlKDI2LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9pbnRzU3ByaW50Jyk/LmlubmVySFRNTC5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuZmluYWxQYWdlLnNob3dGaW5hbFBhZ2UodGhpcy53b3Jkcyx0aGlzLmFyckZvckZpbmFsUGFnZSxwb2ludHNGb3JHYW1lKVxyXG4gICAgfVxyXG4gICAgcmlnaHRXb3JkKCl7XHJcbiAgICAgICAgdGhpcy5hcnJGb3JGaW5hbFBhZ2UucHVzaCh0cnVlKVxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uUmVzdWx0LmlubmVySFRNTD0nUmlnaHQnXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25SZXN1bHQuc3R5bGUuY29sb3I9J2dyZWVuJ1xyXG4gICAgICAgIHRoaXMucG9pbnRzQ291bnRlcigpXHJcbiAgICAgICAgY29uc3QgcG9pbnRzRm9yR2FtZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9pbnRzU3ByaW50JylhcyBFbGVtZW50O1xyXG4gICAgICAgY29uc3QgcG9pbnRzRm9yV29yZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9pbnRzRm9yV29yZFNwcmludCcpYXMgRWxlbWVudDtcclxuICAgICAgIGNvbnN0IHBvaW50cz1OdW1iZXIocG9pbnRzRm9yV29yZC5pbm5lckhUTUwuc2xpY2UoMjksIDMxKSlcclxuICAgICAgIGNvbnN0IHBvaW50c0F0QWxsPU51bWJlcihwb2ludHNGb3JHYW1lLmlubmVySFRNTC5zbGljZSgyNiwgcG9pbnRzRm9yR2FtZS5pbm5lckhUTUwubGVuZ3RoKSlcclxuICAgICAgIHBvaW50c0ZvckdhbWUuaW5uZXJIVE1MPWA8c3Bhbj7QntGH0LrQvtCyINCy0YHQtdCz0L46IDwvc3Bhbj4ke3BvaW50c0F0QWxsK3BvaW50c31gXHJcbiAgICB9XHJcbiAgICB3cm9uZ1dvcmQoKXtcclxuICAgICAgICB0aGlzLmFyckZvckZpbmFsUGFnZS5wdXNoKGZhbHNlKVxyXG4gICAgICAgIGNvbnN0IHBvaW50c0ZvckdhbWU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvaW50UmlnaHRXb3JkU3ByaW50Jyk7XHJcbiAgICAgICAgY29uc3QgcG9pbnRzRm9yV29yZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9pbnRzRm9yV29yZFNwcmludCcpYXMgRWxlbWVudDtcclxuICAgICAgICBwb2ludHNGb3JHYW1lWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3BvaW50UmlnaHRXb3JkU3ByaW50UmlnaHQnKVxyXG4gICAgICAgIHBvaW50c0ZvckdhbWVbMV0uY2xhc3NMaXN0LnJlbW92ZSgncG9pbnRSaWdodFdvcmRTcHJpbnRSaWdodCcpXHJcbiAgICAgICAgcG9pbnRzRm9yR2FtZVsyXS5jbGFzc0xpc3QucmVtb3ZlKCdwb2ludFJpZ2h0V29yZFNwcmludFJpZ2h0JylcclxuICAgICAgICBwb2ludHNGb3JXb3JkLmlubmVySFRNTD0nPHNwYW4+0J7Rh9C60L7QsiDQt9CwINGB0LvQvtCy0L46IDwvc3Bhbj4xMCdcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblJlc3VsdC5pbm5lckhUTUw9J1dyb25nJ1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uUmVzdWx0LnN0eWxlLmNvbG9yPSdyZWQnXHJcbiAgICB9XHJcbiAgICBwb2ludHNDb3VudGVyKCl7XHJcbiAgICAgICAgY29uc3QgcG9pbnRzRm9yR2FtZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9pbnRSaWdodFdvcmRTcHJpbnQnKTtcclxuICAgICAgICBjb25zdCBwb2ludHNGb3JXb3JkPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2ludHNGb3JXb3JkU3ByaW50JylhcyBFbGVtZW50O1xyXG4gICAgbGV0IGZpcnN0QmxvY2s9ZmFsc2U7XHJcbiAgICBsZXQgc2Vjb25kQmxvY2s9ZmFsc2U7XHJcbiAgICAgICAgaWYodGhpcy5hcnJGb3JGaW5hbFBhZ2VbdGhpcy5hcnJGb3JGaW5hbFBhZ2UubGVuZ3RoLTFdPT09dHJ1ZSl7XHJcbiAgICAgICAgICAgIHBvaW50c0ZvckdhbWVbMF0uY2xhc3NMaXN0LmFkZCgncG9pbnRSaWdodFdvcmRTcHJpbnRSaWdodCcpXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYXJyRm9yRmluYWxQYWdlW3RoaXMuYXJyRm9yRmluYWxQYWdlLmxlbmd0aC0yXT09PXRydWUpe1xyXG4gICAgICAgICAgICAgIHBvaW50c0ZvckdhbWVbMV0uY2xhc3NMaXN0LmFkZCgncG9pbnRSaWdodFdvcmRTcHJpbnRSaWdodCcpXHJcbiAgICAgICAgICAgICAgaWYodGhpcy5hcnJGb3JGaW5hbFBhZ2VbdGhpcy5hcnJGb3JGaW5hbFBhZ2UubGVuZ3RoLTNdPT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgIHBvaW50c0ZvckdhbWVbMl0uY2xhc3NMaXN0LmFkZCgncG9pbnRSaWdodFdvcmRTcHJpbnRSaWdodCcpXHJcbiAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYXJyRm9yRmluYWxQYWdlW3RoaXMuYXJyRm9yRmluYWxQYWdlLmxlbmd0aC00XT09PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9pbnRzRm9yV29yZC5pbm5lckhUTUw9YDxzcGFuPtCe0YfQutC+0LIg0LfQsCDRgdC70L7QstC+OiA8L3NwYW4+MjBgXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb2ludHNGb3JHYW1lWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3BvaW50UmlnaHRXb3JkU3ByaW50UmlnaHQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9pbnRzRm9yR2FtZVsxXS5jbGFzc0xpc3QucmVtb3ZlKCdwb2ludFJpZ2h0V29yZFNwcmludFJpZ2h0JylcclxuICAgICAgICAgICAgICAgICAgICAgIHBvaW50c0ZvckdhbWVbMl0uY2xhc3NMaXN0LnJlbW92ZSgncG9pbnRSaWdodFdvcmRTcHJpbnRSaWdodCcpICBcclxuICAgICAgICAgICAgICAgICAgICAgIGZpcnN0QmxvY2s9dHJ1ZTtcclxuICAgICAgICAgIH19fX1cclxuICAgICAgICAgIGlmKHRoaXMuYXJyRm9yRmluYWxQYWdlW3RoaXMuYXJyRm9yRmluYWxQYWdlLmxlbmd0aC01XT09PXRydWUmJmZpcnN0QmxvY2spe1xyXG4gICAgICAgICAgICAgIHBvaW50c0ZvckdhbWVbMF0uY2xhc3NMaXN0LmFkZCgncG9pbnRSaWdodFdvcmRTcHJpbnRSaWdodCcpXHJcbiAgICAgICAgICAgICAgaWYodGhpcy5hcnJGb3JGaW5hbFBhZ2VbdGhpcy5hcnJGb3JGaW5hbFBhZ2UubGVuZ3RoLTZdPT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICBwb2ludHNGb3JHYW1lWzFdLmNsYXNzTGlzdC5hZGQoJ3BvaW50UmlnaHRXb3JkU3ByaW50UmlnaHQnKVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcnJGb3JGaW5hbFBhZ2VbdGhpcy5hcnJGb3JGaW5hbFBhZ2UubGVuZ3RoLTddPT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzRm9yR2FtZVsyXS5jbGFzc0xpc3QuYWRkKCdwb2ludFJpZ2h0V29yZFNwcmludFJpZ2h0JylcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmFyckZvckZpbmFsUGFnZVt0aGlzLmFyckZvckZpbmFsUGFnZS5sZW5ndGgtOF09PT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvaW50c0ZvcldvcmQuaW5uZXJIVE1MPWA8c3Bhbj7QntGH0LrQvtCyINC30LAg0YHQu9C+0LLQvjogPC9zcGFuPjQwYFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9pbnRzRm9yR2FtZVswXS5jbGFzc0xpc3QucmVtb3ZlKCdwb2ludFJpZ2h0V29yZFNwcmludFJpZ2h0JylcclxuICAgICAgICAgICAgICAgICAgICAgIHBvaW50c0ZvckdhbWVbMV0uY2xhc3NMaXN0LnJlbW92ZSgncG9pbnRSaWdodFdvcmRTcHJpbnRSaWdodCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb2ludHNGb3JHYW1lWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ3BvaW50UmlnaHRXb3JkU3ByaW50UmlnaHQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2Vjb25kQmxvY2s9dHJ1ZSAgXHJcbiAgICAgICAgICB9fX19XHJcbiAgICAgICAgICBpZih0aGlzLmFyckZvckZpbmFsUGFnZVt0aGlzLmFyckZvckZpbmFsUGFnZS5sZW5ndGgtOV09PT10cnVlJiZzZWNvbmRCbG9jayl7XHJcbiAgICAgICAgICAgICAgcG9pbnRzRm9yR2FtZVswXS5jbGFzc0xpc3QuYWRkKCdwb2ludFJpZ2h0V29yZFNwcmludFJpZ2h0JylcclxuICAgICAgICAgICAgICBpZih0aGlzLmFyckZvckZpbmFsUGFnZVt0aGlzLmFyckZvckZpbmFsUGFnZS5sZW5ndGgtMTBdPT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgIHBvaW50c0ZvckdhbWVbMV0uY2xhc3NMaXN0LmFkZCgncG9pbnRSaWdodFdvcmRTcHJpbnRSaWdodCcpXHJcbiAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYXJyRm9yRmluYWxQYWdlW3RoaXMuYXJyRm9yRmluYWxQYWdlLmxlbmd0aC0xMV09PT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvaW50c0ZvckdhbWVbMl0uY2xhc3NMaXN0LmFkZCgncG9pbnRSaWdodFdvcmRTcHJpbnRSaWdodCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmFyckZvckZpbmFsUGFnZVt0aGlzLmFyckZvckZpbmFsUGFnZS5sZW5ndGgtMTJdPT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzRm9yV29yZC5pbm5lckhUTUw9YDxzcGFuPtCe0YfQutC+0LIg0LfQsCDRgdC70L7QstC+OiA8L3NwYW4+ODBgXHJcbiAgICAgICAgICB9fX19XHJcbiAgICB9XHJcbiAgICBnZXRDaHVua09mV29yZHMoKXtcclxuICAgICAgICB0aGlzLndvcmRzQTE9W107IFxyXG4gICAgICAgIHRoaXMud29yZHNBMj1bXTtcclxuICAgICAgICB0aGlzLndvcmRzQjE9W107XHJcbiAgICAgICAgdGhpcy53b3Jkc0IyPVtdO1xyXG4gICAgICAgIHRoaXMud29yZHNDMT1bXTtcclxuICAgICAgICB0aGlzLndvcmRzQzI9W107XHJcbiAgICBmb3IobGV0IGk9MDtpPHRoaXMucGFnZXNMZW5ndGg7aSsrKXtcclxuICAgICAgdGhpcy5hcGlXb3Jkcy5nZXRDaHVua09mV29yZHMoaSwwKVxyXG4gICAgICAudGhlbigodmFsKT0+dGhpcy53b3Jkc0ExLnB1c2goLi4udmFsKSlcclxuICAgIH1cclxuICAgIGZvcihsZXQgaT0wO2k8dGhpcy5wYWdlc0xlbmd0aDtpKyspe1xyXG4gICAgICAgIHRoaXMuYXBpV29yZHMuZ2V0Q2h1bmtPZldvcmRzKGksMSlcclxuICAgICAgICAudGhlbigodmFsKT0+dGhpcy53b3Jkc0EyLnB1c2goLi4udmFsKSlcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IGk9MDtpPHRoaXMucGFnZXNMZW5ndGg7aSsrKXtcclxuICAgICAgICB0aGlzLmFwaVdvcmRzLmdldENodW5rT2ZXb3JkcyhpLDIpXHJcbiAgICAgICAgLnRoZW4oKHZhbCk9PnRoaXMud29yZHNCMS5wdXNoKC4uLnZhbCkpXHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnBhZ2VzTGVuZ3RoO2krKyl7XHJcbiAgICAgICAgdGhpcy5hcGlXb3Jkcy5nZXRDaHVua09mV29yZHMoaSwzKVxyXG4gICAgICAgIC50aGVuKCh2YWwpPT50aGlzLndvcmRzQjIucHVzaCguLi52YWwpKVxyXG4gICAgICB9XHJcbiAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5wYWdlc0xlbmd0aDtpKyspe1xyXG4gICAgICAgIHRoaXMuYXBpV29yZHMuZ2V0Q2h1bmtPZldvcmRzKGksNClcclxuICAgICAgICAudGhlbigodmFsKT0+dGhpcy53b3Jkc0MxLnB1c2goLi4udmFsKSlcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IGk9MDtpPHRoaXMucGFnZXNMZW5ndGg7aSsrKXtcclxuICAgICAgICB0aGlzLmFwaVdvcmRzLmdldENodW5rT2ZXb3JkcyhpLDUpXHJcbiAgICAgICAgLnRoZW4oKHZhbCk9PnRoaXMud29yZHNDMi5wdXNoKC4uLnZhbCkpXHJcbiAgICAgIH1cclxuICB9XHJcbiAgICAgIHJlbmRlckFycmF5Rm9yR2FtZShyYW5kb21BcnIpe1xyXG4gICAgICAgICAgY29uc3QgYXJyPVtdO1xyXG4gICAgICAgICAgY29uc3QgYXJyUGFnZXM9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uud29yZHNGb3JHYW1lcylcclxuICAgICAgICAgIGZvcihsZXQgaT0wO2k8YXJyUGFnZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgY29uc3Qgd29yZD1hcnJQYWdlc1tpXS53b3JkO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHdvcmRJRD1hcnJQYWdlc1tpXS5pZFxyXG4gICAgICAgICAgICAgIGNvbnN0IHdvcmRUYW5zbGF0ZT1hcnJQYWdlc1tpXS53b3JkVHJhbnNsYXRlO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHdvcmRBdWRpbz1hcnJQYWdlc1tpXS5hdWRpbztcclxuICAgICAgICAgICAgICBsZXQgd29yZEd1ZXNzPSB0aGlzLnJhbmRvbSgwLDEpXHJcbiAgICAgICAgICAgICAgaWYod29yZEd1ZXNzPT09MCl7XHJcbiAgICAgICAgICAgICAgICB3b3JkR3Vlc3M9cmFuZG9tQXJyW2ldLndvcmRUcmFuc2xhdGVcclxuICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHdvcmRHdWVzcz1hcnJQYWdlc1tpXS53b3JkVHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBjb25zdCByZXN1bHQ9e1xyXG4gICAgICAgICAgICAgICAgICAnaWQnOndvcmRJRCxcclxuICAgICAgICAgICAgICAgICAgJ3dvcmQnOndvcmQsXHJcbiAgICAgICAgICAgICAgICAgICd3b3JkVHJhbnNsYXRlJzp3b3JkVGFuc2xhdGUsXHJcbiAgICAgICAgICAgICAgICAgICdndWVzc1dvcmQnOndvcmRHdWVzcyxcclxuICAgICAgICAgICAgICAgICAgJ2F1ZGlvJzp3b3JkQXVkaW8sXHJcbiAgICAgICAgICAgICAgICAgICdyZXN1bHQnOndvcmRUYW5zbGF0ZT09PXdvcmRHdWVzcyxcclxuICAgICAgICAgICAgICAgICAgJ3dvcmRGb3JTZXJ2ZXInOmFyclBhZ2VzW2ldXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGFyci5wdXNoKHJlc3VsdClcclxuICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICByZXR1cm4gYXJyICAgIFxyXG4gICAgICB9XHJcbiAgICAgIHJhbmRvbShtaW4sIG1heCkge1xyXG4gICAgICAgICAgbGV0IHJhbmQgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pO1xyXG4gICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IocmFuZCk7XHJcbiAgICAgIH1cclxuICAgICAgZ2V0UmFuZG9tV29yZHNGb3JHYW1lVGV4dGJvb2soTGV2ZWwpe1xyXG4gICAgICAgIGxldCBhcnI6YW55W109W107XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoTGV2ZWw9PT0wKXtcclxuICAgICAgICAgICAgYXJyLnB1c2goLi4udGhpcy53b3Jkc0ExKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihMZXZlbD09PTEpe1xyXG4gICAgICAgICAgICBhcnIucHVzaCguLi50aGlzLndvcmRzQTIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKExldmVsPT09Mil7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKC4uLnRoaXMud29yZHNCMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoTGV2ZWw9PT0zKXtcclxuICAgICAgICAgICAgYXJyLnB1c2goLi4udGhpcy53b3Jkc0IyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihMZXZlbD09PTQpe1xyXG4gICAgICAgICAgICBhcnIucHVzaCguLi50aGlzLndvcmRzQzEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKExldmVsPT09NSl7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKC4uLnRoaXMud29yZHNDMilcclxuICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gYXJyIFxyXG4gICAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZVByb2Nlc3M7IiwiaW1wb3J0IEFwaVdvcmRzIGZyb20gJy4uLy4uLy4uL2FwaS9hcGlXb3Jkcyc7XHJcbmNsYXNzIFN0YXJ0U3ByaW50VGV4dGJvb2t7XHJcbiAgICBhcnI6IGFueVtdO1xyXG4gICAgZ3Vlc3NXb3JkQXJyYXlUZXh0Ym9vazogYW55W107XHJcbiAgICBhcGlXb3JkczogQXBpV29yZHM7XHJcbiAgICByZXN1bHRHdWVzc1dvcmRBcnJheVRleHRib29rOiBhbnlbXTtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5hcnI9W107XHJcbiAgICAgICAgdGhpcy5hcGlXb3JkcyA9IG5ldyBBcGlXb3JkcztcclxuICAgICAgICB0aGlzLmd1ZXNzV29yZEFycmF5VGV4dGJvb2sgPSBbXTtcclxuICAgICAgICB0aGlzLnJlc3VsdEd1ZXNzV29yZEFycmF5VGV4dGJvb2sgPSBbXTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRQYWdlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydFBhZ2VGb3JUZXh0Ym9vaycpXHJcbiAgICAgICAgY29uc3Qgd3JvbmdQYWdlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydFBhZ2VBdWRpb0NoYWxlbmdlJylcclxuICAgICAgICBzdGFydFBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheU5vbmVGb3JHYW1lJylcclxuICAgICAgICB3cm9uZ1BhZ2UuY2xhc3NMaXN0LmFkZCgnZGlzcGxheU5vbmVGb3JHYW1lJylcclxuICAgIH1cclxuICAgIHJlbmRlcmluZ0dyb3VwKCl7XHJcbiAgICAgIGNvbnN0IGFyclBhZ2VzPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLndvcmRzRm9yR2FtZXMpXHJcbiAgICAgICAgbGV0IGdyb3VwID0gYXJyUGFnZXNbMF0uZ3JvdXBcclxuICAgICAgICBpZiAoZ3JvdXAgPT09Nil7XHJcbiAgICAgICAgICAgIGdyb3VwPTVcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZ3JvdXArPTFcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwXHJcbiAgICB9XHJcbiAgICByZW5kZXJBcnJheUZvckdhbWUoKXsgXHJcbiAgICAgICAgY29uc3QgYXJyPVtdO1xyXG4gICAgICAgIGNvbnN0IGFyclBhZ2VzPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLndvcmRzRm9yR2FtZXMpXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmd1ZXNzV29yZEFycmF5VGV4dGJvb2subGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmQ9YXJyUGFnZXNbaV0ud29yZDtcclxuICAgICAgICAgICAgY29uc3Qgd29yZElEPWFyclBhZ2VzW2ldLmlkXHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmRUYW5zbGF0ZT1hcnJQYWdlc1tpXS53b3JkVHJhbnNsYXRlO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JkQXVkaW89YXJyUGFnZXNbaV0uYXVkaW87XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmRHdWVzcz10aGlzLmd1ZXNzV29yZEFycmF5VGV4dGJvb2tbaV0ud29yZFRyYW5zbGF0ZTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0PXtcclxuICAgICAgICAgICAgICAgICdpZCc6d29yZElELFxyXG4gICAgICAgICAgICAgICAgJ3dvcmQnOndvcmQsXHJcbiAgICAgICAgICAgICAgICAnd29yZFRyYW5zbGF0ZSc6d29yZFRhbnNsYXRlLFxyXG4gICAgICAgICAgICAgICAgJ2d1ZXNzV29yZCc6d29yZEd1ZXNzLFxyXG4gICAgICAgICAgICAgICAgJ2F1ZGlvJzp3b3JkQXVkaW8sXHJcbiAgICAgICAgICAgICAgICAncmVzdWx0Jzp3b3JkVGFuc2xhdGU9PT13b3JkR3Vlc3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcnIucHVzaChyZXN1bHQpXHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICByZXR1cm4gYXJyICAgIFxyXG4gICAgfVxyXG4gICAgcmFuZG9tKG1pbiwgbWF4KSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJ0U3ByaW50VGV4dGJvb2s7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vbWFpbi5zY3NzJztcclxuaW1wb3J0IEFwaVdvcmRzIGZyb20gJy4uLy4uLy4uL2FwaS9hcGlXb3Jkcyc7XHJcbmltcG9ydCBHYW1lUHJvY2VzcyBmcm9tICcuL2dhbWVQcm9jZXNzL2dhbWVQcm9jZXNzJztcclxuaW1wb3J0IFN0YXJ0U3ByaW50VGV4dGJvb2sgZnJvbSAnLi4vc3RhcnRHYW1lVGV4dEJvb2svc3RhcnRTcHJpbnRUZXh0Ym9vaydcclxuY2xhc3MgU3ByaW50e1xyXG4gICAgYXBpV29yZHM6IEFwaVdvcmRzO1xyXG4gICAgcGFnZXNMZW5ndGg6IG51bWJlcjtcclxuICAgIHdvcmRzQTE6IGFueVtdO1xyXG4gICAgd29yZHNBMjogYW55W107XHJcbiAgICB3b3Jkc0IxOiBhbnlbXTtcclxuICAgIHdvcmRzQjI6IGFueVtdO1xyXG4gICAgd29yZHNDMTogYW55W107XHJcbiAgICB3b3Jkc0MyOiBhbnlbXTtcclxuICAgIGdhbWVQcm9jZXNzOiBHYW1lUHJvY2VzcztcclxuICAgIHN0YXJ0U3ByaW50VGV4dGJvb2s6IFN0YXJ0U3ByaW50VGV4dGJvb2s7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYXBpV29yZHMgPSBuZXcgQXBpV29yZHM7XHJcbiAgICAgICAgdGhpcy53b3Jkc0ExPVtdO1xyXG4gICAgICAgIHRoaXMud29yZHNBMj1bXTtcclxuICAgICAgICB0aGlzLndvcmRzQjE9W107XHJcbiAgICAgICAgdGhpcy53b3Jkc0IyPVtdO1xyXG4gICAgICAgIHRoaXMud29yZHNDMT1bXTtcclxuICAgICAgICB0aGlzLndvcmRzQzI9W107XHJcbiAgICAgICAgdGhpcy5wYWdlc0xlbmd0aD0zMFxyXG4gICAgICAgIHRoaXMuZ2FtZVByb2Nlc3M9bmV3IEdhbWVQcm9jZXNzO1xyXG4gICAgICAgIHRoaXMuc3RhcnRTcHJpbnRUZXh0Ym9vaz1uZXcgU3RhcnRTcHJpbnRUZXh0Ym9vaztcclxuICAgIH1cclxuICAgIGFkZE1lbnUoKXtcclxuICAgICAgICBjb25zdCBidG49IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZU1lbnUnKWFzIEVsZW1lbnQ7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JylhcyBFbGVtZW50O1xyXG4gICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKVxyXG4gICAgICAgIH0pICBcclxuICAgICAgICBjb25zdCBidXRuT3Blbj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW5NZW51JylhcyBFbGVtZW50O1xyXG4gICAgICAgIGJ1dG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JylhcyBFbGVtZW50O1xyXG4gICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZWQnKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgdmFsaWRhdG9yKCl7XHJcbiAgICAgIGlmKCEhd2luZG93LmxvY2F0aW9uLnNlYXJjaCl7XHJcbiAgICAgICAgdGhpcy5zdGFydFNwcmludFRleHRib29rLnN0YXJ0KClcclxuICAgICAgICBjb25zdCBMZXZlbCA9IHRoaXMuc3RhcnRTcHJpbnRUZXh0Ym9vay5yZW5kZXJpbmdHcm91cCgpXHJcbiAgICAgICAgdGhpcy5nYW1lUHJvY2Vzcy5zaG93Rmlyc3RQYWdlRm9yVGV4dGJvb2soTGV2ZWwpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBzcHJpbnQuZ2V0Q2h1bmtPZldvcmRzKCk7XHJcbiAgICAgICAgc3ByaW50LmFkZExldmVsKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgYWRkTGV2ZWwoKXtcclxuICAgICAgICBjb25zdCBidG5zPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGV2ZWxTZWxlY3Rpb25BdWRpb0NoYWxlbmdlJykgYXMgRWxlbWVudDtcclxuICAgICAgICBidG5zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcclxuICAgICAgICAgICAgY29uc3QgYnRuTGlzdCA9IGJ0bnMuY2hpbGROb2RlcyBhcyBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MTtpPGJ0bkxpc3QubGVuZ3RoO2krPTIpe1xyXG4gICAgICAgICAgICAgICAgYnRuTGlzdFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVMZXZlbCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IEVsZW1lbnRUYXJnZXQ9ZS50YXJnZXQgYXMgRWxlbWVudDtcclxuICAgICAgICAgICAgaWYoYnRucyE9PUVsZW1lbnRUYXJnZXQpe1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVMZXZlbCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgTGV2ZWw9RWxlbWVudFRhcmdldC5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRBcnI9dGhpcy5nZXRSYW5kb21Xb3Jkc0ZvckdhbWUoTGV2ZWwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQcm9jZXNzLnNob3dGaXJzdFBhZ2UocmVzdWx0QXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgZ2V0Q2h1bmtPZldvcmRzKCl7XHJcbiAgICAgICAgdGhpcy53b3Jkc0ExPVtdOyBcclxuICAgICAgICB0aGlzLndvcmRzQTI9W107XHJcbiAgICAgICAgdGhpcy53b3Jkc0IxPVtdO1xyXG4gICAgICAgIHRoaXMud29yZHNCMj1bXTtcclxuICAgICAgICB0aGlzLndvcmRzQzE9W107XHJcbiAgICAgICAgdGhpcy53b3Jkc0MyPVtdO1xyXG4gICAgZm9yKGxldCBpPTA7aTx0aGlzLnBhZ2VzTGVuZ3RoO2krKyl7XHJcbiAgICAgIHRoaXMuYXBpV29yZHMuZ2V0Q2h1bmtPZldvcmRzKGksMClcclxuICAgICAgLnRoZW4oKHZhbCk9PnRoaXMud29yZHNBMS5wdXNoKC4uLnZhbCkpXHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGk9MDtpPHRoaXMucGFnZXNMZW5ndGg7aSsrKXtcclxuICAgICAgICB0aGlzLmFwaVdvcmRzLmdldENodW5rT2ZXb3JkcyhpLDEpXHJcbiAgICAgICAgLnRoZW4oKHZhbCk9PnRoaXMud29yZHNBMi5wdXNoKC4uLnZhbCkpXHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnBhZ2VzTGVuZ3RoO2krKyl7XHJcbiAgICAgICAgdGhpcy5hcGlXb3Jkcy5nZXRDaHVua09mV29yZHMoaSwyKVxyXG4gICAgICAgIC50aGVuKCh2YWwpPT50aGlzLndvcmRzQjEucHVzaCguLi52YWwpKVxyXG4gICAgICB9XHJcbiAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5wYWdlc0xlbmd0aDtpKyspe1xyXG4gICAgICAgIHRoaXMuYXBpV29yZHMuZ2V0Q2h1bmtPZldvcmRzKGksMylcclxuICAgICAgICAudGhlbigodmFsKT0+dGhpcy53b3Jkc0IyLnB1c2goLi4udmFsKSlcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IGk9MDtpPHRoaXMucGFnZXNMZW5ndGg7aSsrKXtcclxuICAgICAgICB0aGlzLmFwaVdvcmRzLmdldENodW5rT2ZXb3JkcyhpLDQpXHJcbiAgICAgICAgLnRoZW4oKHZhbCk9PnRoaXMud29yZHNDMS5wdXNoKC4uLnZhbCkpXHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnBhZ2VzTGVuZ3RoO2krKyl7XHJcbiAgICAgICAgdGhpcy5hcGlXb3Jkcy5nZXRDaHVua09mV29yZHMoaSw1KVxyXG4gICAgICAgIC50aGVuKCh2YWwpPT50aGlzLndvcmRzQzIucHVzaCguLi52YWwpKVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIHNodWZmbGUoYXJyYXkpIHtcclxuICAgIGFycmF5LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgfVxyXG4gIHJhbmRvbShtaW4sIG1heCkge1xyXG4gICAgbGV0IHJhbmQgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pO1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IocmFuZCk7XHJcbiAgfVxyXG4gIGdldFJhbmRvbVdvcmRzRm9yR2FtZShMZXZlbCl7XHJcbiAgICBsZXQgYXJyOmFueVtdPVtdO1xyXG4gICAgbGV0IHJlc3VsdEFycmF5OmFueVtdPVtdO1xyXG4gICAgaWYoTGV2ZWw9PT0nQTEnKXtcclxuICAgICAgICB0aGlzLnNodWZmbGUodGhpcy53b3Jkc0ExKTtcclxuICAgICAgICBhcnIucHVzaCguLi50aGlzLndvcmRzQTEpXHJcbiAgICB9XHJcbiAgICBpZihMZXZlbD09PSdBMicpe1xyXG4gICAgICAgIHRoaXMuc2h1ZmZsZSh0aGlzLndvcmRzQTIpO1xyXG4gICAgICAgIGFyci5wdXNoKC4uLnRoaXMud29yZHNBMilcclxuICAgIH1cclxuICAgIGlmKExldmVsPT09J0IxJyl7XHJcbiAgICAgICAgdGhpcy5zaHVmZmxlKHRoaXMud29yZHNCMSk7XHJcbiAgICAgICAgYXJyLnB1c2goLi4udGhpcy53b3Jkc0IxKVxyXG4gICAgfVxyXG4gICAgaWYoTGV2ZWw9PT0nQjInKXtcclxuICAgICAgICB0aGlzLnNodWZmbGUodGhpcy53b3Jkc0IyKTtcclxuICAgICAgICBhcnIucHVzaCguLi50aGlzLndvcmRzQjIpXHJcbiAgICB9XHJcbiAgICBpZihMZXZlbD09PSdDMScpe1xyXG4gICAgICAgIHRoaXMuc2h1ZmZsZSh0aGlzLndvcmRzQzEpO1xyXG4gICAgICAgIGFyci5wdXNoKC4uLnRoaXMud29yZHNDMSlcclxuICAgIH1cclxuICAgIGlmKExldmVsPT09J0MyJyl7XHJcbiAgICAgICAgdGhpcy5zaHVmZmxlKHRoaXMud29yZHNDMik7XHJcbiAgICAgICAgYXJyLnB1c2goLi4udGhpcy53b3Jkc0MyKVxyXG4gICAgfVxyXG4gICAgZm9yKGxldCBpPTA7aTwzMDA7aSsrKXtcclxuICAgICAgaWYoYXJyLmxlbmd0aCA8IDYwMCl7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFRleHRcIilhcyBFbGVtZW50O1xyXG4gICAgICAgIGVsZW0uaW5uZXJIVE1MPSfQodC70L7QstCwINC10YnQtSDQvdC1INC30LDQs9GA0YPQt9C40LvQuNGB0YwsINC/0L7Qv9GA0L7QsdGD0Lkg0L3QsNC20LDRgtGMINC10YnQtSDRgNCw0LcnXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRUZXh0XCIpYXMgRWxlbWVudDtcclxuICAgICAgICBlbGVtLmlubmVySFRNTD0n0J/QvtC/0YDQvtCx0YPQuSDRg9Cz0LDQtNCw0YLRjCDQutCw0Log0LzQvtC20L3QviDQsdC+0LvRjNGI0LUg0YHQu9C+0LIg0LfQsCDQvNC40L3Rg9GC0YMuJ1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgICAgY29uc3Qgd29yZD1hcnJbaV0ud29yZDtcclxuICAgICAgICBjb25zdCB3b3JkSUQ9YXJyW2ldLmlkXHJcbiAgICAgICAgY29uc3Qgd29yZFRhbnNsYXRlPWFycltpXS53b3JkVHJhbnNsYXRlO1xyXG4gICAgICAgIGNvbnN0IHdvcmRBdWRpbz1hcnJbaV0uYXVkaW87XHJcbiAgICAgICAgbGV0IHdvcmRHdWVzcz0gdGhpcy5yYW5kb20oMCwxKVxyXG4gICAgICAgIGlmKHdvcmRHdWVzcz09PTApe1xyXG4gICAgICAgICAgICB3b3JkR3Vlc3M9YXJyW3RoaXMucmFuZG9tKDMwMSw1OTkpXS53b3JkVHJhbnNsYXRlXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHdvcmRHdWVzcz1hcnJbaV0ud29yZFRyYW5zbGF0ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQ9e1xyXG4gICAgICAgICAgICAnaWQnOndvcmRJRCxcclxuICAgICAgICAgICAgJ3dvcmQnOndvcmQsXHJcbiAgICAgICAgICAgICd3b3JkVHJhbnNsYXRlJzp3b3JkVGFuc2xhdGUsXHJcbiAgICAgICAgICAgICdndWVzc1dvcmQnOndvcmRHdWVzcyxcclxuICAgICAgICAgICAgJ2F1ZGlvJzp3b3JkQXVkaW8sXHJcbiAgICAgICAgICAgICdyZXN1bHQnOndvcmRUYW5zbGF0ZT09PXdvcmRHdWVzcyxcclxuICAgICAgICAgICAgJ3dvcmRGb3JTZXJ2ZXInOmFycltpXVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHRBcnJheS5wdXNoKHJlc3VsdClcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRBcnJheTtcclxuICB9XHJcbiAgICAgXHJcbn1cclxuY29uc3Qgc3ByaW50PSBuZXcgU3ByaW50KCk7XHJcbnNwcmludC52YWxpZGF0b3IoKTtcclxuc3ByaW50LmFkZE1lbnUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9