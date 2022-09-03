/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/games/audioChalenge/main.scss":
/*!*************************************************!*\
  !*** ./src/pages/games/audioChalenge/main.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/games/main.scss":
/*!***********************************!*\
  !*** ./src/pages/games/main.scss ***!
  \***********************************/
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

/***/ "./src/pages/games/audioChalenge/audioChalenge.ts":
/*!********************************************************!*\
  !*** ./src/pages/games/audioChalenge/audioChalenge.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/pages/games/audioChalenge/main.scss");
/* harmony import */ var _learnedWords_learnedWords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../learnedWords/learnedWords */ "./src/pages/games/learnedWords/learnedWords.ts");
/* harmony import */ var _api_apiWords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/apiWords */ "./src/api/apiWords.ts");



class AudioChalenge {
    constructor() {
        this.learnedWord = new _learnedWords_learnedWords__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.pagesLength = 29;
        this.apiWords = new _api_apiWords__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.words = [];
        this.randomFourWords = [];
        this.counter = 0;
        this.rightWordButton = 0;
        this.url = 'https://learnwords124.herokuapp.com/';
        this.resultArray = [];
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
                this.getChunkOfWords(Level);
            }
        });
    }
    getRandomGroup() {
        return Math.floor(Math.random() * (this.pagesLength + 1));
    }
    getChunkOfWords(group) {
        let numGroup = 0;
        if (group === 'A1')
            numGroup = 0;
        if (group === 'A2')
            numGroup = 1;
        if (group === 'B1')
            numGroup = 2;
        if (group === 'B2')
            numGroup = 3;
        if (group === 'C1')
            numGroup = 4;
        if (group === 'C2')
            numGroup = 5;
        this.apiWords.getChunkOfWords(this.getRandomGroup(), numGroup)
            .then((val) => this.getRandomWordsFromGroup(val));
    }
    getRandomWordsFromGroup(ChunkOfWords) {
        const random = Math.floor(Math.random() * (2));
        let arrayOfWords = [];
        if (random === 0) {
            arrayOfWords = ChunkOfWords.slice(0, 10);
        }
        if (random === 1) {
            arrayOfWords = ChunkOfWords.slice(10, 20);
        }
        this.words = arrayOfWords;
    }
    addStart() {
        const butnStart = document.querySelector('.startAudioChalengeGame');
        const startPage = document.querySelector('.startPageAudioChalenge');
        const gamePage = document.querySelector('.gameAudioChalenge');
        butnStart.addEventListener('click', () => {
            if (this.words.length === 10) {
                startPage.classList.add('displayNoneForGame');
                gamePage.classList.remove('displayNoneForGame');
                this.counter = 0;
                this.fillGamePage(this.counter);
                window.addEventListener('keyup', (e) => {
                    this.keyboardEvent(e);
                });
            }
        });
    }
    getChunkOfWordsTextbook() {
        const lklStrg = JSON.parse(localStorage.wordsForGames);
        this.words = lklStrg.slice(lklStrg.length - 10, lklStrg.length);
    }
    addStartTextbook() {
        this.getChunkOfWordsTextbook();
        const butnStart = document.querySelector('.startGameTextbook');
        const startPage = document.querySelector('.startPageForTextbook');
        const gamePage = document.querySelector('.gameAudioChalenge');
        butnStart.addEventListener('click', () => {
            if (this.words.length === 10) {
                startPage.classList.add('displayNoneForGame');
                gamePage.classList.remove('displayNoneForGame');
                this.counter = 0;
                this.fillGamePage(this.counter);
                window.addEventListener('keyup', (e) => {
                    this.keyboardEvent(e);
                });
            }
        });
    }
    keyboardEvent(e) {
        const Word = this.words[this.counter];
        const key = Number(e.key);
        const wordImage = Word.image;
        const wordInEnglich = Word.word;
        const gameButtons = document.querySelector('.gameButtons').children;
        let rightWord = Word.wordTranslate;
        for (let i = 0; i < gameButtons.length; i++) {
            if (gameButtons[i].innerHTML === rightWord) {
                rightWord = gameButtons[i];
            }
        }
        if (key === 1) {
            if (gameButtons[0].innerHTML === Word.wordTranslate) {
                this.rightWord(gameButtons[0], wordImage, wordInEnglich);
            }
            else {
                this.wrongWord(gameButtons[0], rightWord, wordImage, wordInEnglich);
            }
        }
        if (key === 2) {
            if (gameButtons[1].innerHTML === Word.wordTranslate) {
                this.rightWord(gameButtons[1], wordImage, wordInEnglich);
            }
            else {
                this.wrongWord(gameButtons[1], rightWord, wordImage, wordInEnglich);
            }
        }
        if (key === 3) {
            if (gameButtons[2].innerHTML === Word.wordTranslate) {
                this.rightWord(gameButtons[2], wordImage, wordInEnglich);
            }
            else {
                this.wrongWord(gameButtons[2], rightWord, wordImage, wordInEnglich);
            }
        }
        if (key === 4) {
            if (gameButtons[3].innerHTML === Word.wordTranslate) {
                this.rightWord(gameButtons[3], wordImage, wordInEnglich);
            }
            else {
                this.wrongWord(gameButtons[3], rightWord, wordImage, wordInEnglich);
            }
        }
        if (key === 5) {
            if (gameButtons[4].innerHTML === Word.wordTranslate) {
                this.rightWord(gameButtons[4], wordImage, wordInEnglich);
            }
            else {
                this.wrongWord(gameButtons[4], rightWord, wordImage, wordInEnglich);
            }
        }
    }
    fillGamePage(numberWord) {
        const nextButton = document.querySelector('.gameNextButton');
        const wordInEnglish = document.querySelector('.wordInEnglish');
        const Img = document.querySelector('.gameImg');
        wordInEnglish.innerHTML = '';
        nextButton.innerHTML = 'Не знаю';
        Img.removeAttribute('src');
        const gameButtonsContainer = document.querySelector('.gameButtons');
        const Word = this.words[numberWord];
        this.rightWordButton = Word;
        const soundUrl = this.url + Word.audio;
        this.playAudio(soundUrl);
        this.getRundomFourWords(numberWord)
            .then((val) => {
            const gameButtons = gameButtonsContainer.children;
            const wordImage = Word.image;
            const wordInEnglich = Word.word;
            let rightWord = Word.wordTranslate;
            val.push(Word);
            this.shuffle(val);
            for (let i = 0; i < gameButtons.length; i++) {
                const button = gameButtons[i];
                button.innerHTML = val[i].wordTranslate;
                const clone = button.cloneNode(true);
                gameButtonsContainer.replaceChild(clone, button);
                if (clone.innerHTML === rightWord) {
                    rightWord = clone;
                }
                clone.addEventListener('click', () => {
                    if (clone.innerHTML === Word.wordTranslate) {
                        this.rightWord(clone, wordImage, wordInEnglich);
                    }
                    else {
                        this.wrongWord(clone, rightWord, wordImage, wordInEnglich);
                    }
                });
            }
        });
    }
    playAudio(soundUrl) {
        const audio = new Audio();
        audio.src = soundUrl;
        audio.autoplay = true;
        const audioButton = document.querySelector('.svgSoundIcon');
        const gameWrapper = document.querySelector('.gameAudioChalenge');
        const clone = audioButton.cloneNode(true);
        gameWrapper.replaceChild(clone, audioButton);
        clone.addEventListener('click', () => this.playAudio(soundUrl));
    }
    getRundomFourWords(numberWord) {
        let arr = [];
        const randomPage = Math.floor(Math.random() * (30));
        const WordPage = this.words[numberWord].page;
        const WordGroup = this.words[numberWord].group;
        if (WordPage === randomPage) {
            this.getRundomFourWords(numberWord);
        }
        for (let i = 0; arr.length < 5; i++) {
            const randomWord = Math.floor(Math.random() * (20));
            if (arr.indexOf(randomWord) === -1) {
                arr.push(randomWord);
            }
        }
        const rundomFourWords = this.apiWords.getChunkOfWords(randomPage, WordGroup)
            .then((val) => {
            const randomWords = [];
            randomWords.push(val[arr[0]]);
            randomWords.push(val[arr[1]]);
            randomWords.push(val[arr[2]]);
            randomWords.push(val[arr[3]]);
            return randomWords;
        });
        return rundomFourWords;
    }
    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        return array;
    }
    rightWord(button, wordImage, wordInEnglich) {
        this.clickWord(wordImage, wordInEnglich);
        button.classList.add('rightWord');
        this.resultArray.push(true);
    }
    wrongWord(button, rightButton, wordImage, wordInEnglich) {
        this.clickWord(wordImage, wordInEnglich);
        button.classList.add('wrongWord');
        rightButton.classList.add('rightWord');
        this.resultArray.push(false);
    }
    clickWord(wordImage, wordInEnglich) {
        const nextButton = document.querySelector('.gameNextButton');
        const wordInEnglish = document.querySelector('.wordInEnglish');
        const img = document.querySelector('.gameImg');
        img.setAttribute('src', this.url + wordImage);
        nextButton.innerHTML = 'Next';
        wordInEnglish.innerHTML = wordInEnglich;
    }
    nextWord() {
        const button = document.querySelector('.gameNextButton');
        button.addEventListener('click', () => {
            const Text = button.innerHTML;
            Text === 'Next' ? this.nextButton() : this.doNotKnowButton();
        });
    }
    doNotKnowButton() {
        const wordImage = this.rightWordButton.image;
        const wordInEnglish = this.rightWordButton.word;
        const wordTranslate = this.rightWordButton.wordTranslate;
        const gameButtonsContainer = document.querySelector('.gameButtons');
        const gameButtons = gameButtonsContainer.children;
        for (let i = 0; i < gameButtons.length; i++) {
            const button = gameButtons[i];
            if (button.innerHTML === wordTranslate) {
                this.clickWord(wordImage, wordInEnglish);
                button.classList.add('rightWord');
                this.resultArray.push(false);
            }
        }
    }
    nextButton() {
        const gameButtonsContainer = document.querySelector('.gameButtons');
        const gameButtons = gameButtonsContainer.children;
        for (let i = 0; i < gameButtons.length; i++) {
            gameButtons[i].classList.remove('rightWord');
            gameButtons[i].classList.remove('wrongWord');
        }
        this.counter += 1;
        if (this.counter < 10) {
            this.fillGamePage(this.counter);
        }
        else {
            this.showFinalPage();
        }
    }
    showFinalPage() {
        const finalPage = document.querySelector('.finalPage');
        const gamePage = document.querySelector('.gameAudioChalenge');
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
        for (let i = 0; i < this.words.length; i++) {
            const result = this.resultArray[i];
            const word = this.words[i];
            if (result) {
                this.learnedWord.addWord(word);
                rightWords.insertAdjacentHTML('beforeend', this.fillFinalPage(word.word, word.wordTranslate));
                const soundButton = rightWords.children[rightWords.children.length - 1].children[0];
                soundButton.addEventListener('click', () => this.playAudioFinal(this.url + word.audio));
            }
            else {
                this.learnedWord.deleteWord(word);
                wrongWords.insertAdjacentHTML('beforeend', this.fillFinalPage(word.word, word.wordTranslate));
                const soundButton = wrongWords.children[wrongWords.children.length - 1].children[0];
                soundButton.addEventListener('click', () => this.playAudioFinal(this.url + word.audio));
            }
        }
        const rightWordNodeList = rightWords.children.length;
        const WrongWordNodeList = wrongWords.children.length;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AudioChalenge);


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

/***/ "./src/pages/games/startGameTextBook/startAudioCallTextbook.ts":
/*!*********************************************************************!*\
  !*** ./src/pages/games/startGameTextBook/startAudioCallTextbook.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class StartAudioCallTextbook {
    start() {
        const startPage = document.querySelector('.startPageForTextbook');
        const wrongPage = document.querySelector('.startPageAudioChalenge');
        startPage.classList.remove('displayNoneForGame');
        wrongPage.classList.add('displayNoneForGame');
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartAudioCallTextbook);


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
  !*** ./src/pages/games/games.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/pages/games/main.scss");
/* harmony import */ var _audioChalenge_audioChalenge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audioChalenge/audioChalenge */ "./src/pages/games/audioChalenge/audioChalenge.ts");
/* harmony import */ var _startGameTextBook_startAudioCallTextbook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startGameTextBook/startAudioCallTextbook */ "./src/pages/games/startGameTextBook/startAudioCallTextbook.ts");



const audioChalenge = new _audioChalenge_audioChalenge__WEBPACK_IMPORTED_MODULE_1__["default"]();
const startAudioCallTextbook = new _startGameTextBook_startAudioCallTextbook__WEBPACK_IMPORTED_MODULE_2__["default"]();
audioChalenge.addMenu();
if (!!window.location.search) {
    startAudioCallTextbook.start();
    audioChalenge.addStartTextbook();
}
else {
    audioChalenge.addLevel();
    audioChalenge.addStart();
}
audioChalenge.nextWord();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZS9tYWluLnNjc3M/NTQ3YyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvcGFnZXMvZ2FtZXMvbWFpbi5zY3NzPzQwMGYiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwaS9hcGlVc2Vyc1dvcmRzLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcGkvYXBpV29yZHMudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3BhZ2VzL2dhbWVzL2F1ZGlvQ2hhbGVuZ2UvYXVkaW9DaGFsZW5nZS50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvcGFnZXMvZ2FtZXMvbGVhcm5lZFdvcmRzL2xlYXJuZWRXb3Jkcy50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvcGFnZXMvZ2FtZXMvbGVhcm5lZFdvcmRzL2xlYXJuZWRXb3Jkc01ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3BhZ2VzL2dhbWVzL3N0YXJ0R2FtZVRleHRCb29rL3N0YXJ0QXVkaW9DYWxsVGV4dGJvb2sudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzbGFuZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnNsYW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNsYW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3BhZ2VzL2dhbWVzL2dhbWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7VXNlcldvcmRzfSBmcm9tICcuL2ludGVyZmFjZSdcclxuY2xhc3MgQXBpVXNlcnNXb3Jkc3tcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51cmwgPSAnaHR0cHM6Ly9sZWFybndvcmRzMTI0Lmhlcm9rdWFwcC5jb20vdXNlcnMvJztcclxuICAgIH1cclxuICAgIGdldEFsbFVzZXJXb3Jkcyh0b2tlbiwgdXNlcklEKXtcclxuICAgICAgY29uc3QgVXJsPSBgJHt0aGlzLnVybH0ke3VzZXJJRH0vd29yZHNgO1xyXG4gICAgICBjb25zdCBBbGxVc2VyV29yZHM6IFByb21pc2U8IFVzZXJXb3Jkc1tdID4gPSBmZXRjaChVcmwsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH1cclxuICAgICAgfSkudGhlbigoZGF0YSkgPT4gZGF0YS5zdGF0dXM9PT0yMDAgPyBkYXRhLmpzb24oKTogZGF0YS5zdGF0dXM9PT00MDIgPyBcclxuICAgICAgY29uc29sZS5sb2coYEFjY2VzcyB0b2tlbiBpcyBtaXNzaW5nIG9yIGludmFsaWRgKTogY29uc29sZS5sb2coYNC+0YjQuNCx0LrQsCAke2RhdGEuc3RhdHVzfWApKTtcclxuICAgICAgcmV0dXJuIEFsbFVzZXJXb3JkcztcclxuICAgIH1cclxuICAgIGNyZWF0ZVVzZXJXb3JkKHRva2VuLCB1c2VySWQsIHdvcmRJZCwgZGlmZmljdWx0eSwgb3B0aW9uYWw/KXtcclxuICAgICAgICBjb25zdCBVcmw9IGAke3RoaXMudXJsfSR7dXNlcklkfS93b3Jkcy8ke3dvcmRJZH1gO1xyXG4gICAgICAgIGNvbnN0IEpzb24gPSB7XHJcbiAgICAgICAgICBcImRpZmZpY3VsdHlcIjogYCR7ZGlmZmljdWx0eX1gLFxyXG4gICAgICAgICAgXCJvcHRpb25hbFwiOiBvcHRpb25hbFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBVc2VyV29yZDogUHJvbWlzZTxVc2VyV29yZHM+ID0gZmV0Y2goVXJsLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KEpzb24pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5zdGF0dXM9PT0yMDAgPyBkYXRhLmpzb24oKTogZGF0YS5zdGF0dXM9PT00MDAgPyBcclxuICAgICAgICBjb25zb2xlLmxvZyhgQmFkIHJlcXVlc3RgKSA6ZGF0YS5zdGF0dXM9PT00MDEgPyBcclxuICAgICAgICBjb25zb2xlLmxvZyhgQWNjZXNzIHRva2VuIGlzIG1pc3Npbmcgb3IgaW52YWxpZGApOiBjb25zb2xlLmxvZyhg0L7RiNC40LHQutCwICR7ZGF0YS5zdGF0dXN9YCkpO1xyXG4gICAgICAgIHJldHVybiBVc2VyV29yZDtcclxuICAgIH1cclxuICAgIGdldFVzZXJXb3JkQnlJZCh0b2tlbiwgdXNlcklkLCB3b3JkSWQpe1xyXG4gICAgICAgIGNvbnN0IFVybD0gYCR7dGhpcy51cmx9JHt1c2VySWR9L3dvcmRzLyR7d29yZElkfWA7XHJcbiAgICAgICAgY29uc3QgVXNlcldvcmQ6IFByb21pc2U8IFVzZXJXb3JkcyA+ID0gZmV0Y2goVXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuc3RhdHVzPT09MjAwID8gZGF0YS5qc29uKCk6IGRhdGEuc3RhdHVzPT09NDA0ID8gXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgVXNlcidzIHdvcmQgbm90IGZvdW5kYCkgOmRhdGEuc3RhdHVzPT09NDAxID8gXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgQWNjZXNzIHRva2VuIGlzIG1pc3Npbmcgb3IgaW52YWxpZGApOiBjb25zb2xlLmxvZyhg0L7RiNC40LHQutCwICR7ZGF0YS5zdGF0dXN9YCkpO1xyXG4gICAgICAgIHJldHVybiBVc2VyV29yZDtcclxuICAgIH1cclxuICAgIHVwZGF0ZVVzZXJXb3JkKHRva2VuLCB1c2VySWQsIHdvcmRJZCwgZGlmZmljdWx0eSwgb3B0aW9uYWw/KXtcclxuICAgICAgICBjb25zdCBVcmw9IGAke3RoaXMudXJsfSR7dXNlcklkfS93b3Jkcy8ke3dvcmRJZH1gO1xyXG4gICAgICAgIGNvbnN0IEpzb24gPSB7XHJcbiAgICAgICAgICBcImRpZmZpY3VsdHlcIjogYCR7ZGlmZmljdWx0eX1gLFxyXG4gICAgICAgICAgXCJvcHRpb25hbFwiOiBvcHRpb25hbFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBVc2VyV29yZDogUHJvbWlzZTxVc2VyV29yZHM+ID0gZmV0Y2goVXJsLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoSnNvbilcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLnN0YXR1cz09PTIwMCA/IGRhdGEuanNvbigpOiBkYXRhLnN0YXR1cz09PTQwMCA/IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBCYWQgcmVxdWVzdGApIDpkYXRhLnN0YXR1cz09PTQwMSA/IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBBY2Nlc3MgdG9rZW4gaXMgbWlzc2luZyBvciBpbnZhbGlkYCk6IGNvbnNvbGUubG9nKGDQvtGI0LjQsdC60LAgJHtkYXRhLnN0YXR1c31gKSk7XHJcbiAgICAgICAgcmV0dXJuIFVzZXJXb3JkO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlVXNlcldvcmQodG9rZW4sIHVzZXJJZCwgd29yZElkKXtcclxuICAgICAgICBjb25zdCBVcmw9IGAke3RoaXMudXJsfSR7dXNlcklkfS93b3Jkcy8ke3dvcmRJZH1gO1xyXG4gICAgICAgIGNvbnN0IERlbGV0ZWRVc2VyID0gZmV0Y2goVXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLnN0YXR1cz09PTIwNCA/IHRydWU6IGRhdGEuc3RhdHVzPT09NDAxID9cclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBBY2Nlc3MgdG9rZW4gaXMgbWlzc2luZyBvciBpbnZhbGlkYCkgOiBjb25zb2xlLmxvZyhg0L7RiNC40LHQutCwICR7ZGF0YS5zdGF0dXN9YCkpO1xyXG4gICAgICAgICAgcmV0dXJuIERlbGV0ZWRVc2VyO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwaVVzZXJzV29yZHM7IiwiaW1wb3J0IHtXb3Jkc30gZnJvbSAnLi9pbnRlcmZhY2UnXHJcbmNsYXNzIEFwaVdvcmRze1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnVybCA9ICdodHRwczovL2xlYXJud29yZHMxMjQuaGVyb2t1YXBwLmNvbS93b3Jkcyc7XHJcbiAgICB9XHJcbiAgICBnZXRDaHVua09mV29yZHMocGFnZSwgZ3JvdXApe1xyXG4gICAgICBjb25zdCBVcmw9IGAke3RoaXMudXJsfT9wYWdlPSR7cGFnZX0mZ3JvdXA9JHtncm91cH1gO1xyXG4gICAgICBjb25zdCBDaHVua09mV29yZHM6IFByb21pc2U8V29yZHNbXT4gPSBmZXRjaChVcmwpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKTtcclxuICAgICAgcmV0dXJuIENodW5rT2ZXb3JkcztcclxuICAgIH1cclxuICAgIGdldFdvcmRCeUlkKGlkKXtcclxuICAgICAgY29uc3QgVXJsPSBgJHt0aGlzLnVybH0vJHtpZH1gO1xyXG4gICAgICBjb25zdCBXb3JkQnlJZDogUHJvbWlzZTxXb3Jkcz4gPSBmZXRjaChVcmwpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKTtcclxuICAgICAgcmV0dXJuIFdvcmRCeUlkO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwaVdvcmRzOyIsImltcG9ydCAnLi9tYWluLnNjc3MnO1xyXG5pbXBvcnQgTGVhcm5lZFdvcmRzIGZyb20gJy4uL2xlYXJuZWRXb3Jkcy9sZWFybmVkV29yZHMnO1xyXG5pbXBvcnQgQXBpV29yZHMgZnJvbSAnLi4vLi4vLi4vYXBpL2FwaVdvcmRzJztcclxuY2xhc3MgQXVkaW9DaGFsZW5nZXtcclxuICBsZWFybmVkV29yZDogTGVhcm5lZFdvcmRzO1xyXG4gICAgYXBpV29yZHM6IEFwaVdvcmRzO1xyXG4gICAgcGFnZXNMZW5ndGg6IG51bWJlcjtcclxuICAgIHdvcmRzOiBhbnlbXTtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgcmFuZG9tRm91cldvcmRzOiBhbnlbXTtcclxuICAgIGNvdW50ZXI6IG51bWJlcjtcclxuICAgIHJpZ2h0V29yZEJ1dHRvbjogYW55O1xyXG4gICAgcmVzdWx0QXJyYXk6IGJvb2xlYW5bXTtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHRoaXMubGVhcm5lZFdvcmQgPSBuZXcgTGVhcm5lZFdvcmRzKCk7XHJcbiAgICAgIHRoaXMucGFnZXNMZW5ndGg9Mjk7XHJcbiAgICAgIHRoaXMuYXBpV29yZHMgPSBuZXcgQXBpV29yZHM7XHJcbiAgICAgIHRoaXMud29yZHM9W107XHJcbiAgICAgIHRoaXMucmFuZG9tRm91cldvcmRzPVtdO1xyXG4gICAgICB0aGlzLmNvdW50ZXI9MDtcclxuICAgICAgdGhpcy5yaWdodFdvcmRCdXR0b249MDtcclxuICAgICAgdGhpcy51cmw9J2h0dHBzOi8vbGVhcm53b3JkczEyNC5oZXJva3VhcHAuY29tLyc7XHJcbiAgICAgIHRoaXMucmVzdWx0QXJyYXk9W107XHJcbiAgICB9XHJcbiAgYWRkTWVudSgpe1xyXG4gICAgY29uc3QgYnRuPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VNZW51Jyk7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpXHJcbiAgICB9KSAgXHJcbiAgICBjb25zdCBidXRuT3Blbj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW5NZW51Jyk7XHJcbiAgICBidXRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2VkJylcclxuICAgIH0pXHJcbiAgfVxyXG4gIGFkZExldmVsKCl7XHJcbiAgICBjb25zdCBidG5zPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGV2ZWxTZWxlY3Rpb25BdWRpb0NoYWxlbmdlJykgYXMgRWxlbWVudDtcclxuICAgIGJ0bnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xyXG4gICAgICAgIGNvbnN0IGJ0bkxpc3QgPSBidG5zLmNoaWxkTm9kZXMgYXMgTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgICAgICBmb3IobGV0IGk9MTtpPGJ0bkxpc3QubGVuZ3RoO2krPTIpe1xyXG4gICAgICAgICAgICBidG5MaXN0W2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUxldmVsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IEVsZW1lbnRUYXJnZXQ9ZS50YXJnZXQgYXMgRWxlbWVudDtcclxuICAgICAgICBpZihidG5zIT09RWxlbWVudFRhcmdldCl7XHJcbiAgICAgICAgICAgIEVsZW1lbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlTGV2ZWwnKTtcclxuICAgICAgICAgICAgY29uc3QgTGV2ZWw9RWxlbWVudFRhcmdldC5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2h1bmtPZldvcmRzKExldmVsKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcbiAgcHJpdmF0ZSBnZXRSYW5kb21Hcm91cCgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5wYWdlc0xlbmd0aCsxKSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0Q2h1bmtPZldvcmRzKGdyb3VwOiBzdHJpbmcpe1xyXG4gICAgbGV0IG51bUdyb3VwPTA7XHJcbiAgICBpZihncm91cD09PSdBMScpbnVtR3JvdXA9MDtcclxuICAgIGlmKGdyb3VwPT09J0EyJyludW1Hcm91cD0xO1xyXG4gICAgaWYoZ3JvdXA9PT0nQjEnKW51bUdyb3VwPTI7XHJcbiAgICBpZihncm91cD09PSdCMicpbnVtR3JvdXA9MztcclxuICAgIGlmKGdyb3VwPT09J0MxJyludW1Hcm91cD00O1xyXG4gICAgaWYoZ3JvdXA9PT0nQzInKW51bUdyb3VwPTUgO1xyXG4gICAgdGhpcy5hcGlXb3Jkcy5nZXRDaHVua09mV29yZHModGhpcy5nZXRSYW5kb21Hcm91cCgpLG51bUdyb3VwKVxyXG4gICAgLnRoZW4oKHZhbCk9PnRoaXMuZ2V0UmFuZG9tV29yZHNGcm9tR3JvdXAodmFsKSlcclxuICB9XHJcbiAgcHJpdmF0ZSBnZXRSYW5kb21Xb3Jkc0Zyb21Hcm91cChDaHVua09mV29yZHMpe1xyXG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDIpKTtcclxuICAgIGxldCBhcnJheU9mV29yZHM9W107XHJcbiAgICBpZihyYW5kb209PT0wKXtcclxuICAgICAgICBhcnJheU9mV29yZHM9Q2h1bmtPZldvcmRzLnNsaWNlKDAsMTApXHJcbiAgICB9XHJcbiAgICBpZihyYW5kb209PT0xKXtcclxuICAgICAgICBhcnJheU9mV29yZHM9Q2h1bmtPZldvcmRzLnNsaWNlKDEwLDIwKVxyXG4gICAgfVxyXG4gICAgdGhpcy53b3Jkcz1hcnJheU9mV29yZHM7XHJcbiAgfVxyXG4gIGFkZFN0YXJ0KCl7XHJcbiAgICBjb25zdCBidXRuU3RhcnQ9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydEF1ZGlvQ2hhbGVuZ2VHYW1lJyk7XHJcbiAgICBjb25zdCBzdGFydFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnRQYWdlQXVkaW9DaGFsZW5nZScpO1xyXG4gICAgY29uc3QgZ2FtZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZUF1ZGlvQ2hhbGVuZ2UnKTtcclxuICAgIGJ1dG5TdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBpZih0aGlzLndvcmRzLmxlbmd0aD09PTEwKXtcclxuICAgICAgICAgICAgc3RhcnRQYWdlLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXlOb25lRm9yR2FtZScpXHJcbiAgICAgICAgICAgIGdhbWVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXlOb25lRm9yR2FtZScpXHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlcj0wO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxHYW1lUGFnZSh0aGlzLmNvdW50ZXIpO1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSk9PntcclxuICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkRXZlbnQoZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbnByaXZhdGUgZ2V0Q2h1bmtPZldvcmRzVGV4dGJvb2soKXtcclxuICBjb25zdCBsa2xTdHJnPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLndvcmRzRm9yR2FtZXMpXHJcbiAgICB0aGlzLndvcmRzPWxrbFN0cmcuc2xpY2UobGtsU3RyZy5sZW5ndGgtMTAsbGtsU3RyZy5sZW5ndGgpXHJcbn1cclxuYWRkU3RhcnRUZXh0Ym9vaygpe1xyXG4gIHRoaXMuZ2V0Q2h1bmtPZldvcmRzVGV4dGJvb2soKVxyXG4gIGNvbnN0IGJ1dG5TdGFydD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0R2FtZVRleHRib29rJyk7XHJcbiAgY29uc3Qgc3RhcnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0UGFnZUZvclRleHRib29rJyk7XHJcbiAgY29uc3QgZ2FtZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZUF1ZGlvQ2hhbGVuZ2UnKTtcclxuICBidXRuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgIGlmKHRoaXMud29yZHMubGVuZ3RoPT09MTApe1xyXG4gICAgICAgICAgc3RhcnRQYWdlLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXlOb25lRm9yR2FtZScpXHJcbiAgICAgICAgICBnYW1lUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5Tm9uZUZvckdhbWUnKVxyXG4gICAgICAgICAgdGhpcy5jb3VudGVyPTA7XHJcbiAgICAgICAgICB0aGlzLmZpbGxHYW1lUGFnZSh0aGlzLmNvdW50ZXIpO1xyXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpPT57XHJcbiAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRFdmVudChlKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gIH0pXHJcbn1cclxuIGtleWJvYXJkRXZlbnQoZSl7XHJcbiAgY29uc3QgV29yZD10aGlzLndvcmRzW3RoaXMuY291bnRlcl07XHJcbiAgY29uc3Qga2V5PU51bWJlcihlLmtleSlcclxuICBjb25zdCB3b3JkSW1hZ2U9V29yZC5pbWFnZTtcclxuICBjb25zdCB3b3JkSW5FbmdsaWNoPVdvcmQud29yZDtcclxuICBjb25zdCBnYW1lQnV0dG9ucz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZUJ1dHRvbnMnKS5jaGlsZHJlbjtcclxuICBsZXQgcmlnaHRXb3JkPVdvcmQud29yZFRyYW5zbGF0ZTtcclxuICBmb3IobGV0IGk9MDtpPGdhbWVCdXR0b25zLmxlbmd0aDtpKyspe1xyXG4gICAgaWYgKGdhbWVCdXR0b25zW2ldLmlubmVySFRNTD09PXJpZ2h0V29yZCl7XHJcbiAgICAgIHJpZ2h0V29yZD1nYW1lQnV0dG9uc1tpXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYoa2V5PT09MSl7XHJcbiAgICBpZiggZ2FtZUJ1dHRvbnNbMF0uaW5uZXJIVE1MPT09V29yZC53b3JkVHJhbnNsYXRlKXtcclxuICAgICAgdGhpcy5yaWdodFdvcmQoIGdhbWVCdXR0b25zWzBdLCB3b3JkSW1hZ2Usd29yZEluRW5nbGljaClcclxuICB9ZWxzZXtcclxuICAgIHRoaXMud3JvbmdXb3JkKCBnYW1lQnV0dG9uc1swXSxyaWdodFdvcmQsIHdvcmRJbWFnZSx3b3JkSW5FbmdsaWNoKVxyXG4gIH1cclxuICB9XHJcbiAgaWYoa2V5PT09Mil7XHJcbiAgICBpZiggZ2FtZUJ1dHRvbnNbMV0uaW5uZXJIVE1MPT09V29yZC53b3JkVHJhbnNsYXRlKXtcclxuICAgICAgdGhpcy5yaWdodFdvcmQoIGdhbWVCdXR0b25zWzFdLCB3b3JkSW1hZ2Usd29yZEluRW5nbGljaClcclxuICB9ZWxzZXtcclxuICAgIHRoaXMud3JvbmdXb3JkKCBnYW1lQnV0dG9uc1sxXSxyaWdodFdvcmQsIHdvcmRJbWFnZSx3b3JkSW5FbmdsaWNoKVxyXG4gIH1cclxuICB9XHJcbiAgaWYoa2V5PT09Myl7XHJcbiAgICBpZiggZ2FtZUJ1dHRvbnNbMl0uaW5uZXJIVE1MPT09V29yZC53b3JkVHJhbnNsYXRlKXtcclxuICAgICAgdGhpcy5yaWdodFdvcmQoIGdhbWVCdXR0b25zWzJdLCB3b3JkSW1hZ2Usd29yZEluRW5nbGljaClcclxuICB9ZWxzZXtcclxuICAgIHRoaXMud3JvbmdXb3JkKCBnYW1lQnV0dG9uc1syXSxyaWdodFdvcmQsIHdvcmRJbWFnZSx3b3JkSW5FbmdsaWNoKVxyXG4gIH1cclxuICB9XHJcbiAgaWYoa2V5PT09NCl7XHJcbiAgICBpZiggZ2FtZUJ1dHRvbnNbM10uaW5uZXJIVE1MPT09V29yZC53b3JkVHJhbnNsYXRlKXtcclxuICAgICAgdGhpcy5yaWdodFdvcmQoIGdhbWVCdXR0b25zWzNdLCB3b3JkSW1hZ2Usd29yZEluRW5nbGljaClcclxuICB9ZWxzZXtcclxuICAgIHRoaXMud3JvbmdXb3JkKCBnYW1lQnV0dG9uc1szXSxyaWdodFdvcmQsIHdvcmRJbWFnZSx3b3JkSW5FbmdsaWNoKVxyXG4gICAgfVxyXG4gIH1cclxuICBpZihrZXk9PT01KXtcclxuICAgIGlmKCBnYW1lQnV0dG9uc1s0XS5pbm5lckhUTUw9PT1Xb3JkLndvcmRUcmFuc2xhdGUpe1xyXG4gICAgICB0aGlzLnJpZ2h0V29yZCggZ2FtZUJ1dHRvbnNbNF0sIHdvcmRJbWFnZSx3b3JkSW5FbmdsaWNoKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMud3JvbmdXb3JkKCBnYW1lQnV0dG9uc1s0XSxyaWdodFdvcmQsIHdvcmRJbWFnZSx3b3JkSW5FbmdsaWNoKVxyXG4gICAgfVxyXG4gIH1cclxuIH1cclxuICBmaWxsR2FtZVBhZ2UobnVtYmVyV29yZDogbnVtYmVyKXtcclxuICAgIGNvbnN0IG5leHRCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVOZXh0QnV0dG9uJyk7XHJcbiAgICBjb25zdCB3b3JkSW5FbmdsaXNoPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JkSW5FbmdsaXNoJyk7XHJcbiAgICBjb25zdCBJbWc9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVJbWcnKTtcclxuICAgIHdvcmRJbkVuZ2xpc2guaW5uZXJIVE1MPScnXHJcbiAgICBuZXh0QnV0dG9uLmlubmVySFRNTD0n0J3QtSDQt9C90LDRjidcclxuICAgIEltZy5yZW1vdmVBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgICBjb25zdCBnYW1lQnV0dG9uc0NvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZUJ1dHRvbnMnKTtcclxuICAgIGNvbnN0IFdvcmQ9dGhpcy53b3Jkc1tudW1iZXJXb3JkXTtcclxuICAgIHRoaXMucmlnaHRXb3JkQnV0dG9uPVdvcmQ7XHJcbiAgICBjb25zdCBzb3VuZFVybD10aGlzLnVybCtXb3JkLmF1ZGlvO1xyXG4gICAgdGhpcy5wbGF5QXVkaW8oc291bmRVcmwpXHJcbiAgICB0aGlzLmdldFJ1bmRvbUZvdXJXb3JkcyhudW1iZXJXb3JkKVxyXG4gICAgLnRoZW4oKHZhbCk9PntcclxuICAgICAgICBjb25zdCBnYW1lQnV0dG9ucz1nYW1lQnV0dG9uc0NvbnRhaW5lci5jaGlsZHJlbjtcclxuICAgICAgICBjb25zdCB3b3JkSW1hZ2U9V29yZC5pbWFnZTtcclxuICAgICAgICBjb25zdCB3b3JkSW5FbmdsaWNoPVdvcmQud29yZDtcclxuICAgICAgICBsZXQgcmlnaHRXb3JkPVdvcmQud29yZFRyYW5zbGF0ZTtcclxuICAgICAgICB2YWwucHVzaChXb3JkKTtcclxuICAgICAgICB0aGlzLnNodWZmbGUodmFsKTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPGdhbWVCdXR0b25zLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b249Z2FtZUJ1dHRvbnNbaV07XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUw9dmFsW2ldLndvcmRUcmFuc2xhdGU7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gYnV0dG9uLmNsb25lTm9kZSh0cnVlKSBhcyBFbGVtZW50O1xyXG4gICAgICAgICAgICBnYW1lQnV0dG9uc0NvbnRhaW5lci5yZXBsYWNlQ2hpbGQoY2xvbmUsIGJ1dHRvbik7XHJcbiAgICAgICAgICAgIGlmIChjbG9uZS5pbm5lckhUTUw9PT1yaWdodFdvcmQpe1xyXG4gICAgICAgICAgICAgIHJpZ2h0V29yZD1jbG9uZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgICBpZiggY2xvbmUuaW5uZXJIVE1MPT09V29yZC53b3JkVHJhbnNsYXRlKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRXb3JkKGNsb25lLCB3b3JkSW1hZ2Usd29yZEluRW5nbGljaClcclxuICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLndyb25nV29yZChjbG9uZSxyaWdodFdvcmQsIHdvcmRJbWFnZSx3b3JkSW5FbmdsaWNoKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgfSBcclxuICAgIH0pXHJcbiAgfVxyXG4gIHBsYXlBdWRpbyhzb3VuZFVybCl7XHJcbiAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygpO1xyXG4gICAgYXVkaW8uc3JjID0gc291bmRVcmw7XHJcbiAgICBhdWRpby5hdXRvcGxheSA9IHRydWU7XHJcbiAgICBjb25zdCBhdWRpb0J1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ZnU291bmRJY29uJyk7XHJcbiAgICBjb25zdCBnYW1lV3JhcHBlcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZUF1ZGlvQ2hhbGVuZ2UnKTtcclxuICAgIGNvbnN0IGNsb25lID0gYXVkaW9CdXR0b24uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgZ2FtZVdyYXBwZXIucmVwbGFjZUNoaWxkKGNsb25lLCBhdWRpb0J1dHRvbik7XHJcbiAgICBjbG9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRoaXMucGxheUF1ZGlvKHNvdW5kVXJsKSlcclxuICB9XHJcbiAgZ2V0UnVuZG9tRm91cldvcmRzKG51bWJlcldvcmQ6IG51bWJlcil7XHJcbiAgICBsZXQgYXJyPVtdO1xyXG4gICAgY29uc3QgcmFuZG9tUGFnZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgzMCkpO1xyXG4gICAgY29uc3QgV29yZFBhZ2U9dGhpcy53b3Jkc1tudW1iZXJXb3JkXS5wYWdlXHJcbiAgICBjb25zdCBXb3JkR3JvdXA9dGhpcy53b3Jkc1tudW1iZXJXb3JkXS5ncm91cFxyXG4gICAgaWYoV29yZFBhZ2U9PT1yYW5kb21QYWdlKXtcclxuICAgICAgIHRoaXMuZ2V0UnVuZG9tRm91cldvcmRzKG51bWJlcldvcmQpXHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGk9MDthcnIubGVuZ3RoPDU7aSsrKXtcclxuICAgICAgICBjb25zdCByYW5kb21Xb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDIwKSk7XHJcbiAgICAgICAgaWYoYXJyLmluZGV4T2YocmFuZG9tV29yZCk9PT0gLTEpe1xyXG4gICAgICAgICAgICBhcnIucHVzaChyYW5kb21Xb3JkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHJ1bmRvbUZvdXJXb3JkcyA9dGhpcy5hcGlXb3Jkcy5nZXRDaHVua09mV29yZHMocmFuZG9tUGFnZSxXb3JkR3JvdXApXHJcbiAgICAudGhlbigodmFsKT0+e1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbVdvcmRzPVtdO1xyXG4gICAgICAgIHJhbmRvbVdvcmRzLnB1c2godmFsW2FyclswXV0pXHJcbiAgICAgICAgcmFuZG9tV29yZHMucHVzaCh2YWxbYXJyWzFdXSlcclxuICAgICAgICByYW5kb21Xb3Jkcy5wdXNoKHZhbFthcnJbMl1dKVxyXG4gICAgICAgIHJhbmRvbVdvcmRzLnB1c2godmFsW2FyclszXV0pXHJcbiAgICAgICAgcmV0dXJuIHJhbmRvbVdvcmRzO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBydW5kb21Gb3VyV29yZHNcclxuICB9XHJcbiAgc2h1ZmZsZShhcnJheSkge1xyXG4gICAgYXJyYXkuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxuICAgIHJldHVybiBhcnJheVxyXG4gIH1cclxuICByaWdodFdvcmQoYnV0dG9uOiBFbGVtZW50LHdvcmRJbWFnZSx3b3JkSW5FbmdsaWNoKXtcclxuICAgIHRoaXMuY2xpY2tXb3JkKHdvcmRJbWFnZSx3b3JkSW5FbmdsaWNoKVxyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0V29yZCcpXHJcbiAgICB0aGlzLnJlc3VsdEFycmF5LnB1c2godHJ1ZSlcclxuICB9XHJcbiAgd3JvbmdXb3JkKGJ1dHRvbjogRWxlbWVudCwgcmlnaHRCdXR0b246IEVsZW1lbnQsd29yZEltYWdlLHdvcmRJbkVuZ2xpY2gpe1xyXG4gICAgdGhpcy5jbGlja1dvcmQod29yZEltYWdlLHdvcmRJbkVuZ2xpY2gpXHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnd3JvbmdXb3JkJylcclxuICAgIHJpZ2h0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0V29yZCcpXHJcbiAgICB0aGlzLnJlc3VsdEFycmF5LnB1c2goZmFsc2UpXHJcbiAgfVxyXG4gIGNsaWNrV29yZCh3b3JkSW1hZ2Usd29yZEluRW5nbGljaCl7XHJcbiAgICBjb25zdCBuZXh0QnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lTmV4dEJ1dHRvbicpO1xyXG4gICAgY29uc3Qgd29yZEluRW5nbGlzaD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yZEluRW5nbGlzaCcpO1xyXG4gICAgY29uc3QgaW1nPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lSW1nJyk7XHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCB0aGlzLnVybCt3b3JkSW1hZ2UpXHJcbiAgICBuZXh0QnV0dG9uLmlubmVySFRNTD0nTmV4dCdcclxuICAgIHdvcmRJbkVuZ2xpc2guaW5uZXJIVE1MPXdvcmRJbkVuZ2xpY2hcclxuICB9XHJcbiAgbmV4dFdvcmQoKXtcclxuICAgIGNvbnN0IGJ1dHRvbj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVOZXh0QnV0dG9uJyk7XHJcbiAgICBcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgIGNvbnN0IFRleHQ9YnV0dG9uLmlubmVySFRNTDtcclxuICAgICAgVGV4dD09PSdOZXh0Jz90aGlzLm5leHRCdXR0b24oKTp0aGlzLmRvTm90S25vd0J1dHRvbigpXHJcbiAgICB9KVxyXG4gIH1cclxuICBkb05vdEtub3dCdXR0b24oKXtcclxuICAgIGNvbnN0IHdvcmRJbWFnZT10aGlzLnJpZ2h0V29yZEJ1dHRvbi5pbWFnZTtcclxuICAgIGNvbnN0IHdvcmRJbkVuZ2xpc2g9dGhpcy5yaWdodFdvcmRCdXR0b24ud29yZDtcclxuICAgIGNvbnN0IHdvcmRUcmFuc2xhdGU9IHRoaXMucmlnaHRXb3JkQnV0dG9uLndvcmRUcmFuc2xhdGVcclxuICAgIGNvbnN0IGdhbWVCdXR0b25zQ29udGFpbmVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lQnV0dG9ucycpO1xyXG4gICAgY29uc3QgZ2FtZUJ1dHRvbnM9Z2FtZUJ1dHRvbnNDb250YWluZXIuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxnYW1lQnV0dG9ucy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgIGNvbnN0IGJ1dHRvbj1nYW1lQnV0dG9uc1tpXTtcclxuICAgICAgICAgIGlmKGJ1dHRvbi5pbm5lckhUTUw9PT13b3JkVHJhbnNsYXRlKXtcclxuICAgICAgICAgICAgdGhpcy5jbGlja1dvcmQod29yZEltYWdlLHdvcmRJbkVuZ2xpc2gpXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyaWdodFdvcmQnKVxyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdEFycmF5LnB1c2goZmFsc2UpXHJcbiAgICAgICAgICB9ICAgICBcclxuICAgICAgICB9XHJcbiAgfVxyXG4gIG5leHRCdXR0b24oKXtcclxuICAgIGNvbnN0IGdhbWVCdXR0b25zQ29udGFpbmVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lQnV0dG9ucycpO1xyXG4gICAgY29uc3QgZ2FtZUJ1dHRvbnM9Z2FtZUJ1dHRvbnNDb250YWluZXIuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxnYW1lQnV0dG9ucy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgIGdhbWVCdXR0b25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0V29yZCcpXHJcbiAgICAgICAgICBnYW1lQnV0dG9uc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCd3cm9uZ1dvcmQnKVxyXG4gICAgICAgIH1cclxuICAgIHRoaXMuY291bnRlcis9MTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXI8MTApe1xyXG4gICAgICB0aGlzLmZpbGxHYW1lUGFnZSh0aGlzLmNvdW50ZXIpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zaG93RmluYWxQYWdlKClcclxuICAgIH1cclxuICB9XHJcbiAgc2hvd0ZpbmFsUGFnZSgpe1xyXG4gICAgY29uc3QgZmluYWxQYWdlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maW5hbFBhZ2UnKVxyXG4gICAgY29uc3QgZ2FtZVBhZ2U9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVBdWRpb0NoYWxlbmdlJylcclxuICAgIGdhbWVQYWdlLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXlOb25lRm9yR2FtZScpXHJcbiAgICBmaW5hbFBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheU5vbmVGb3JHYW1lJylcclxuICAgIGNvbnN0IHJpZ2h0V29yZHM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbmFsUGFnZVJpZ2h0JylcclxuICAgIGNvbnN0IHdyb25nV29yZHM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbmFsUGFnZVdyb25nJylcclxuICAgIHdoaWxlIChyaWdodFdvcmRzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgcmlnaHRXb3Jkcy5yZW1vdmVDaGlsZChyaWdodFdvcmRzLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKHdyb25nV29yZHMuZmlyc3RDaGlsZCkge1xyXG4gICAgd3JvbmdXb3Jkcy5yZW1vdmVDaGlsZCh3cm9uZ1dvcmRzLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBpPTA7aTx0aGlzLndvcmRzLmxlbmd0aDtpKyspe1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnJlc3VsdEFycmF5W2ldXHJcbiAgICAgIGNvbnN0IHdvcmQgPSB0aGlzLndvcmRzW2ldXHJcbiAgICAgIGlmIChyZXN1bHQpe1xyXG4gICAgICAgIHRoaXMubGVhcm5lZFdvcmQuYWRkV29yZCh3b3JkKVxyXG4gICAgICAgIHJpZ2h0V29yZHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLmZpbGxGaW5hbFBhZ2Uod29yZC53b3JkLCB3b3JkLndvcmRUcmFuc2xhdGUpKTtcclxuICAgICAgICBjb25zdCBzb3VuZEJ1dHRvbiA9IHJpZ2h0V29yZHMuY2hpbGRyZW5bcmlnaHRXb3Jkcy5jaGlsZHJlbi5sZW5ndGggLTEgXS5jaGlsZHJlblswXTtcclxuICAgICAgICBzb3VuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRoaXMucGxheUF1ZGlvRmluYWwodGhpcy51cmwgKyB3b3JkLmF1ZGlvKSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5sZWFybmVkV29yZC5kZWxldGVXb3JkKHdvcmQpXHJcbiAgICAgICAgd3JvbmdXb3Jkcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMuZmlsbEZpbmFsUGFnZSh3b3JkLndvcmQsIHdvcmQud29yZFRyYW5zbGF0ZSkpO1xyXG4gICAgICAgIGNvbnN0IHNvdW5kQnV0dG9uID0gd3JvbmdXb3Jkcy5jaGlsZHJlblt3cm9uZ1dvcmRzLmNoaWxkcmVuLmxlbmd0aCAtMSBdLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIHNvdW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhpcy5wbGF5QXVkaW9GaW5hbCh0aGlzLnVybCArIHdvcmQuYXVkaW8pKVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmlnaHRXb3JkTm9kZUxpc3QgPSByaWdodFdvcmRzLmNoaWxkcmVuLmxlbmd0aDtcclxuICAgIGNvbnN0IFdyb25nV29yZE5vZGVMaXN0ID0gd3JvbmdXb3Jkcy5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICBjb25zdCByaWdodFdvcmRDb3VudD1gPHA+0J/RgNCw0LLQuNC70YzQvdC+OiAke3JpZ2h0V29yZE5vZGVMaXN0fTwvcD5gXHJcbiAgICBjb25zdCB3cm9uZ1dvcmRDb3VudD1gPHA+0J3QtdC/0YDQsNCy0LjQu9GM0L3QvjogJHtXcm9uZ1dvcmROb2RlTGlzdH08L3A+YFxyXG4gICAgcmlnaHRXb3Jkcy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCByaWdodFdvcmRDb3VudCk7XHJcbiAgICB3cm9uZ1dvcmRzLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHdyb25nV29yZENvdW50KTtcclxuICB9XHJcbiAgZmlsbEZpbmFsUGFnZSh3b3JkOiBzdHJpbmcsd29yZFRyYW5zbGF0ZTogc3RyaW5nKXtcclxuICAgIGNvbnN0IGVsZW1lbnQ9YFxyXG4gICAgPGRpdj5cclxuICAgIDxzdmcgY2xhc3M9J3N2Z0ZpbmFsUGFnZScgd2lkdGg9XCIxN3B4XCIgaGVpZ2h0PVwiMTdweFwiIHZpZXdCb3g9XCIwIDAgMTcgMTdcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIGNsYXNzPVwic2ktZ2x5cGggc2ktZ2x5cGgtc291bmRcIj5cclxuICAgIFxyXG4gICAgPHRpdGxlPjExOTM8L3RpdGxlPlxyXG4gICAgXHJcbiAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMTMuOTg3LDE0Ljg2OCBDMTMuOTg3LDE1LjQ5NCAxMy4zMDgsMTYgMTIuNDcxLDE2IEw1Ljk1NywxMS40NzMgQzUuMTE4LDExLjQ3MyA0LjA0NCwxMC45NjUgNC4wNDQsMTAuMzQgTDQuMDQ0LDUuNjgyIEM0LjA0NCw1LjA1OCA1LjExOCw0LjU1IDUuOTU3LDQuNTUgTDEyLjQ3MSwwLjAyMiBDMTMuMzA4LDAuMDIyIDEzLjk4NywwLjUzIDEzLjk4NywxLjE1NSBMMTMuOTg3LDE0Ljg2OCBMMTMuOTg3LDE0Ljg2OCBaXCIgZmlsbD1cIiM0MzQzNDNcIiBjbGFzcz1cInNpLWdseXBoLWZpbGxcIj48L3BhdGg+XHJcbiAgICA8L2c+XHJcbjwvc3ZnPlxyXG4gICAgPHNwYW4+JHt3b3JkfSAtICR7d29yZFRyYW5zbGF0ZX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuICBwbGF5QXVkaW9GaW5hbChzb3VuZFVybCl7XHJcbiAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygpO1xyXG4gICAgYXVkaW8uc3JjID0gc291bmRVcmw7XHJcbiAgICBhdWRpby5hdXRvcGxheSA9IHRydWU7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEF1ZGlvQ2hhbGVuZ2U7IiwiXHJcbmltcG9ydCBMZWFybmVkV29yZHNHYW1lIGZyb20gXCIuL2xlYXJuZWRXb3Jkc01ldGhvZHNcIjtcclxuY2xhc3MgTGVhcm5lZFdvcmRze1xyXG4gICAgbGVhcm5lZFdvcmRzOiBMZWFybmVkV29yZHNHYW1lO1xyXG4gY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMubGVhcm5lZFdvcmRzPW5ldyBMZWFybmVkV29yZHNHYW1lKCk7XHJcbiB9XHJcbiBhc3luYyBhZGRXb3JkKHdvcmQpeyAgXHJcbiAgICBpZihsb2NhbFN0b3JhZ2UudXNlcil7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXHJcbiAgICAgIGlmKGxvY2FsU3RvcmFnZS5yaWdodFdvcmRzRm9yVXNlciE9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgbGV0IGFycj1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5yaWdodFdvcmRzRm9yVXNlcilcclxuICAgICAgICBjb25zdCB3b3JkSWQ9d29yZC5pZDtcclxuICAgICAgICBsZXQgY291bnQ9MDtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPGFyci5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGlkPSBhcnJbaV0uaWQ7XHJcbiAgICAgICAgICAgIGlmKHdvcmRJZD09PWlkKXtcclxuICAgICAgICAgICAgICAgIGNvdW50Kz0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvdW50KVxyXG4gICAgICAgIGlmKGNvdW50PT09Mil7XHJcbiAgICAgICAgICAgIGFycj1hcnIuZmlsdGVyKChlbCk9PntcclxuICAgICAgICAgICAgICAgIGxldCBpZD0gZWwuaWQ7XHJcbiAgICAgICAgICAgICAgICBpZih3b3JkSWQ9PT1pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmlnaHRXb3Jkc0ZvclVzZXInLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5sZWFybmVkV29yZHMuVXNlcldvcmRDcmVhdGUodXNlci50b2tlbiwgdXNlci51c2VySWQsIHdvcmRJZCwgJ2xlYXJuZWQnLCB3b3JkKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhcnIucHVzaCh3b3JkKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmlnaHRXb3Jkc0ZvclVzZXInLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IGFycj0gW3dvcmRdO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyaWdodFdvcmRzRm9yVXNlcicsIEpTT04uc3RyaW5naWZ5KGFycikpO1xyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmlnaHRXb3Jkc0ZvclVzZXInLCBKU09OLnN0cmluZ2lmeShbXSkpO1xyXG4gICAgfVxyXG4gfVxyXG4gZGVsZXRlV29yZCh3b3JkKXtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS51c2VyKXtcclxuICAgICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG4gICAgICAgIHRoaXMubGVhcm5lZFdvcmRzLlVzZXJXb3JkRGVsZXRlKHVzZXIudG9rZW4sIHVzZXIudXNlcklkLCB3b3JkLmlkKVxyXG4gICAgfVxyXG4gfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVhcm5lZFdvcmRzOyIsImltcG9ydCBBcGlVc2Vyc1dvcmRzIGZyb20gXCIuLi8uLi8uLi9hcGkvYXBpVXNlcnNXb3Jkc1wiO1xyXG5cclxuY2xhc3MgTGVhcm5lZFdvcmRzR2FtZXtcclxuICAgIGFwaVVzZXJzV29yZHM6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5hcGlVc2Vyc1dvcmRzPW5ldyBBcGlVc2Vyc1dvcmRzKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBVc2VyV29yZERlbGV0ZSh0b2tlbiwgdXNlcklkLCB3b3JkSWQpe1xyXG4gICAgICAgIGNvbnN0IFdvcmQgPSBhd2FpdCB0aGlzLmFwaVVzZXJzV29yZHMuZ2V0VXNlcldvcmRCeUlkKHRva2VuLCB1c2VySWQsIHdvcmRJZClcclxuICAgICAgICBpZihXb3JkKXtcclxuICAgICAgICAgICAgaWYoV29yZC5kaWZmaWN1bHR5PT09J2xlYXJuZWQnKXtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBpVXNlcnNXb3Jkcy5kZWxldGVVc2VyV29yZCh0b2tlbiwgdXNlcklkLCB3b3JkSWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBVc2VyV29yZENyZWF0ZSh0b2tlbiwgdXNlcklkLCB3b3JkSWQsIGRpZmZpY3VsdHksIG9wdGlvbmFsKXtcclxuICAgICAgICBjb25zdCBXb3JkID0gYXdhaXQgdGhpcy5hcGlVc2Vyc1dvcmRzLmdldFVzZXJXb3JkQnlJZCh0b2tlbiwgdXNlcklkLCB3b3JkSWQpXHJcbiAgICAgICAgaWYoV29yZCl7XHJcbiAgICAgICAgICAgIGlmKFdvcmQuZGlmZmljdWx0eT09PSdIYXJkJyl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFwaVVzZXJzV29yZHMudXBkYXRlVXNlcldvcmQodG9rZW4sIHVzZXJJZCwgd29yZElkLCBkaWZmaWN1bHR5LCBvcHRpb25hbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFwaVVzZXJzV29yZHMuY3JlYXRlVXNlcldvcmQodG9rZW4sIHVzZXJJZCwgd29yZElkLCBkaWZmaWN1bHR5LCBvcHRpb25hbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGVhcm5lZFdvcmRzR2FtZTsiLCJjbGFzcyBTdGFydEF1ZGlvQ2FsbFRleHRib29re1xyXG4gICAgc3RhcnQoKXsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHN0YXJ0UGFnZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnRQYWdlRm9yVGV4dGJvb2snKVxyXG4gICAgICAgIGNvbnN0IHdyb25nUGFnZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnRQYWdlQXVkaW9DaGFsZW5nZScpXHJcbiAgICAgICAgc3RhcnRQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXlOb25lRm9yR2FtZScpXHJcbiAgICAgICAgd3JvbmdQYWdlLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXlOb25lRm9yR2FtZScpXHJcblxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJ0QXVkaW9DYWxsVGV4dGJvb2s7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL21haW4uc2Nzcyc7XHJcbmltcG9ydCBBdWRpb0NoYWxlbmdlIGZyb20gJy4vYXVkaW9DaGFsZW5nZS9hdWRpb0NoYWxlbmdlJ1xyXG5pbXBvcnQgU3RhcnRBdWRpb0NhbGxUZXh0Ym9vayBmcm9tICcuL3N0YXJ0R2FtZVRleHRCb29rL3N0YXJ0QXVkaW9DYWxsVGV4dGJvb2snXHJcbmNvbnN0IGF1ZGlvQ2hhbGVuZ2UgPSBuZXcgQXVkaW9DaGFsZW5nZSgpO1xyXG5jb25zdCBzdGFydEF1ZGlvQ2FsbFRleHRib29rID0gbmV3IFN0YXJ0QXVkaW9DYWxsVGV4dGJvb2soKTtcclxuYXVkaW9DaGFsZW5nZS5hZGRNZW51KCk7XHJcbiAgICBpZighIXdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpe1xyXG4gICAgICBzdGFydEF1ZGlvQ2FsbFRleHRib29rLnN0YXJ0KClcclxuICAgICAgYXVkaW9DaGFsZW5nZS5hZGRTdGFydFRleHRib29rKClcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGF1ZGlvQ2hhbGVuZ2UuYWRkTGV2ZWwoKTtcclxuICAgICAgICBhdWRpb0NoYWxlbmdlLmFkZFN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG5hdWRpb0NoYWxlbmdlLm5leHRXb3JkKCk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9