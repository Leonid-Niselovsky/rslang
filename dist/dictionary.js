/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/dictionary/main.scss":
/*!****************************************!*\
  !*** ./src/pages/dictionary/main.scss ***!
  \****************************************/
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

/***/ "./src/pages/dictionary/audioPlayback.ts":
/*!***********************************************!*\
  !*** ./src/pages/dictionary/audioPlayback.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audioPlayback": () => (/* binding */ audioPlayback)
/* harmony export */ });
function audioPlayback(word, url) {
    const playButton = document.createElement('button');
    playButton.classList.add('play-button');
    playButton.innerHTML = `
    <img src="assets/img/play.png">
  `;
    const sources = [word.audio, word.audioExample, word.audioMeaning];
    let current = 0;
    const audioDiv = document.createElement('div');
    audioDiv.classList.add('audio-div');
    const audio = document.createElement('audio');
    // audio.setAttribute('controls', '')
    audio.src = `${url}${sources[current]}`;
    playButton.addEventListener('click', () => {
        console.log('click');
        audio.play();
        audio.onended = function () {
            current++;
            if (current >= sources.length) {
                current = 0;
                audio.src = `${url}${sources[current]}`;
                return null;
            }
            audio.src = `${url}${sources[current]}`;
            audio.play();
        };
    });
    audioDiv.append(playButton, audio);
    return audioDiv;
}


/***/ }),

/***/ "./src/pages/dictionary/gameLink.ts":
/*!******************************************!*\
  !*** ./src/pages/dictionary/gameLink.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLink": () => (/* binding */ gameLink)
/* harmony export */ });
function gameLink(title) {
    return `
      <a class="game-link" href="${title.toLowerCase() !== 'sprint' ? './games.html' : './sprint.html'}">
        <h3 class="game-link-title">${title}</h3>
        <img src="assets/img/${title.split(' ').join('').toLowerCase()}.png">
      </a>
  `;
}


/***/ }),

/***/ "./src/pages/dictionary/pagination.ts":
/*!********************************************!*\
  !*** ./src/pages/dictionary/pagination.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pagination": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./words */ "./src/pages/dictionary/words.ts");

class Pagination {
    // private _currentPage: string
    // set currentPage(page: string){
    //   this._currentPage = page
    //   this.currentPageIndicator.innerText = page.toString()
    // }
    // get currentPage(): string{
    //   return this._currentPage
    // }
    constructor() {
        this.prevPage = document.querySelector('.prev');
        this.nextPage = document.querySelector('.next');
        this.currentPageIndicator = document.querySelector('.current-page');
        this.words = new _words__WEBPACK_IMPORTED_MODULE_0__.Words();
        this.currentPageIndicator.innerText = (+localStorage.page + 1).toString();
        if (localStorage.page === '0')
            this.prevPage.disabled = true;
        if (localStorage.page === '29')
            this.nextPage.disabled = true;
        this.addClickListener();
    }
    toNextPage() {
        const currentLevel = this.words.currentLevel;
        // if(!currentLevel) return null
        if (+this.words.currentPage >= 0 && +this.words.currentPage < 29) {
            this.nextPage.disabled = false;
            this.prevPage.disabled = false;
            this.words.currentPage = (+this.words.currentPage + 1).toString();
            localStorage.page = this.words.currentPage;
            if (+this.words.currentPage === 29)
                this.nextPage.disabled = true;
            this.currentPageIndicator.innerText = (+this.words.currentPage + 1).toString();
            this.words.render(currentLevel, this.words.currentPage);
        }
    }
    toPrevPage() {
        const currentLevel = this.words.currentLevel;
        // if(!currentLevel) return null
        if (+this.words.currentPage > 0 && +this.words.currentPage <= 29) {
            this.prevPage.disabled = false;
            this.nextPage.disabled = false;
            this.words.currentPage = (+this.words.currentPage - 1).toString();
            localStorage.page = this.words.currentPage;
            if (+this.words.currentPage === 0)
                this.prevPage.disabled = true;
            this.currentPageIndicator.innerText = (+this.words.currentPage + 1).toString();
            this.words.render(currentLevel, this.words.currentPage);
        }
    }
    reset() {
        this.prevPage.disabled = true;
        this.nextPage.disabled = false;
        this.currentPageIndicator.innerText = '1';
    }
    addClickListener() {
        this.prevPage.addEventListener('click', () => this.toPrevPage());
        this.nextPage.addEventListener('click', () => this.toNextPage());
    }
}


/***/ }),

/***/ "./src/pages/dictionary/words.ts":
/*!***************************************!*\
  !*** ./src/pages/dictionary/words.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Words": () => (/* binding */ Words)
/* harmony export */ });
/* harmony import */ var _api_apiWords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/apiWords */ "./src/api/apiWords.ts");
/* harmony import */ var _api_apiUsersWords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/apiUsersWords */ "./src/api/apiUsersWords.ts");
/* harmony import */ var _dictionary_gameLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dictionary/gameLink */ "./src/pages/dictionary/gameLink.ts");
/* harmony import */ var _dictionary_audioPlayback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dictionary/audioPlayback */ "./src/pages/dictionary/audioPlayback.ts");
/* harmony import */ var _games_startGameTextBook_startGame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../games/startGameTextBook/startGame */ "./src/pages/games/startGameTextBook/startGame.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





let instance;
class Words {
    constructor() {
        if (!instance)
            instance = this;
        this.apiWords = new _api_apiWords__WEBPACK_IMPORTED_MODULE_0__["default"]();
        // this.apiSignIn = new ApiSignIn()
        this.apiUsersWords = new _api_apiUsersWords__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.startGame = new _games_startGameTextBook_startGame__WEBPACK_IMPORTED_MODULE_4__["default"]();
        return instance;
    }
    get currentLevel() {
        return this._currentLevel;
    }
    set currentLevel(level) {
        this._currentLevel = level;
    }
    get currentPage() {
        return this._currentPage;
    }
    set currentPage(page) {
        this._currentPage = page;
    }
    // async getSignInUser(){
    //   const user = await this.apiSignIn.signIn("pasha3@gmail.com", 'pasha11234')
    //   return user
    // }
    getWordsPage(level, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const wordArr = yield this.apiWords.getChunkOfWords(page, level);
            return wordArr;
        });
    }
    render(level, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const difficultyLevel = document.querySelector(`.level-${localStorage.level}`);
            if (difficultyLevel)
                difficultyLevel.classList.add('active');
            const pagination = document.querySelector('.pagination');
            const hardWords = document.querySelector('.level-hard-words');
            pagination.style.display = 'flex';
            let user;
            if (localStorage.user) {
                user = JSON.parse(localStorage.user);
                console.log('user:', user);
            }
            else {
                user = null;
            }
            if (user) {
                hardWords.style.display = 'inline-block';
            }
            else {
                hardWords.style.display = 'none';
            }
            console.log(localStorage);
            console.log(level, page, user);
            const wordsArray = yield this.getWordsPage(level, page);
            this.currentLevel = level;
            this.currentPage = page;
            console.log(this.currentPage);
            this.renderLinks(user);
            if (user) {
                this.addStyles(user, wordsArray);
            }
            this.renderCardButton(wordsArray, user, false);
        });
    }
    hardWordsRender() {
        return __awaiter(this, void 0, void 0, function* () {
            const difficultyLevel = document.querySelector(`.level-${localStorage.level}`);
            if (difficultyLevel)
                difficultyLevel.classList.add('active');
            const pagination = document.querySelector('.pagination');
            pagination.style.display = 'none';
            let user;
            if (localStorage.user) {
                user = JSON.parse(localStorage.user);
            }
            else {
                user = null;
            }
            const allUserWords = yield this.apiUsersWords.getAllUserWords(user.token, user.userId);
            const hardWordsArray = allUserWords.filter(a => {
                if (a.difficulty === 'hard')
                    return true;
                return false;
            });
            const wordsArray = hardWordsArray.map(a => {
                return a.optional;
            });
            console.log(wordsArray);
            this.renderCardButton(wordsArray, user, true);
        });
    }
    addStyles(user, wordsArray) {
        return __awaiter(this, void 0, void 0, function* () {
            const hardWords = (yield this.apiUsersWords.getAllUserWords(user.token, user.userId)).filter(a => a.difficulty === 'hard');
            const learnedWords = (yield this.apiUsersWords.getAllUserWords(user.token, user.userId)).filter(a => a.difficulty === 'learned');
            const hardWordsArray = hardWords.map(a => a.optional);
            const learnedWordsArray = learnedWords.map(a => a.optional);
            const resultingByHard = this.resultingByIdArray(hardWordsArray, wordsArray, true);
            const resultingBylearned = this.resultingByIdArray(learnedWordsArray, wordsArray, true);
            console.log(resultingByHard, resultingBylearned);
            resultingByHard.forEach(a => {
                const el = document.querySelector(`#${a.word}`);
                el.classList.add('hard');
            });
            resultingBylearned.forEach(a => {
                const el = document.querySelector(`#${a.word}`);
                el.classList.add('learned');
            });
            this.isPageComplete();
            this.isPageLearned();
        });
    }
    highlightButton(button) {
        const allButtons = document.querySelectorAll('.card-word');
        allButtons.forEach((a) => {
            a.classList.remove(`active-${localStorage.level}`, 'active');
        });
        button.classList.add(`active-${localStorage.level}`, 'active');
        console.log(button);
    }
    resultingByIdArray(userWords, wordsArray, include) {
        const included = [];
        if (include) {
            for (let i = 0; i < userWords.length; i++) {
                for (let j = 0; j < wordsArray.length; j++) {
                    if (userWords[i].id === wordsArray[j].id) {
                        included.push(userWords[i]);
                        break;
                    }
                }
            }
        }
        else {
            for (let i = 0; i < wordsArray.length; i++) {
                let flag = false;
                for (let j = 0; j < userWords.length; j++) {
                    if (wordsArray[i].id !== userWords[j].id) {
                        flag = true;
                    }
                    else {
                        flag = false;
                        break;
                    }
                }
                if (flag)
                    included.push(wordsArray[i]);
            }
        }
        return included;
    }
    renderCardButton(words, user, isHardWords) {
        const cardWrapper = document.querySelector('.card-wrapper');
        cardWrapper.innerHTML = "";
        for (let i = 0; i < words.length; i++) {
            cardWrapper.append(this.cardCreate(words[i], user, isHardWords));
        }
    }
    cardCreate(word, user, isHardWords) {
        const button = document.createElement('button');
        button.classList.add('card-word');
        button.id = word.word;
        const h4 = document.createElement('h4');
        h4.classList.add('card-word-title');
        h4.textContent = word.word;
        const span = document.createElement('span');
        span.classList.add('card-word-translate');
        span.textContent = word.wordTranslate;
        button.addEventListener('click', () => {
            this.renderSideBar(word, user, isHardWords);
            this.highlightButton(button);
        });
        button.append(h4, span);
        if (localStorage.level !== 'hard-words') {
            this.isPageComplete();
            this.isPageLearned();
        }
        return button;
    }
    renderSideBar(word, user, isHardWords) {
        const url = 'https://learnwords124.herokuapp.com/';
        const sideBar = document.querySelector('.side-bar');
        const audio = (0,_dictionary_audioPlayback__WEBPACK_IMPORTED_MODULE_3__.audioPlayback)(word, url);
        sideBar.innerHTML = '';
        sideBar.append(audio);
        const html = `
      <img class="word-img" src="${url}${word.image}">
      <div class="word-overview">    
        <div class="full-word">   
          <span class="word-transcription">${word.transcription}</span>
          <h3 class="word-title">${word.word}</h3>
        </div>  
        <h4 class="word-subtitle">${word.wordTranslate}</h4>
      </div>
    `;
        sideBar.innerHTML = html;
        const fullWord = document.querySelector('.full-word');
        fullWord.append(audio);
        // const overview = document.querySelector('.word-overview')
        // overview.append(audio)
        const wordControls = document.createElement('div');
        wordControls.classList.add('word-controls');
        const deleteButton = `<button class="word-control delete-word">Удалить из сложных</button>`;
        const buttons = `
      <button class="word-control hard-word">+ В сложные слова</button>
      <button class="word-control learned-word">+ В изученные слова</button>
    `;
        const controlsHtml = `${!user ? '' : isHardWords ? deleteButton : buttons}`;
        wordControls.innerHTML = controlsHtml;
        sideBar.append(wordControls);
        const wordDescription = document.createElement('div');
        wordDescription.classList.add('word-description');
        const wordDescriptionHtml = ` 
        <h2>Значение</h2>
        <div class="word-meaning">${word.textMeaning}</div>
        <div class="word-meaning-translate">${word.textMeaningTranslate}</div>
        <h2>Пример</h2>
        <div class="word-example">${word.textExample}</div>
        <div class="word-example-translate">${word.textExampleTranslate}</div>
    `;
        wordDescription.innerHTML = wordDescriptionHtml;
        sideBar.append(wordDescription);
        const ingameStatistic = document.createElement('div');
        ingameStatistic.classList.add('ingame-statistics');
        const ingameStatisticHtml = `
      <h2>Ответы в играх</h2>
      <div class="ingame">
        <div class="ingame-statistic">
          <span class="game-name">Аудиовызов</span>
          <span class="game-statistic">0</span>
        </div>
        <div class="ingame-statistic">
          <span class="game-name">Спринт</span>
          <span class="game-statistic">0</span>
        </div>
      </div>
    `;
        ingameStatistic.innerHTML = ingameStatisticHtml;
        sideBar.append(ingameStatistic);
        if (!isHardWords && user) {
            const hardWord = document.querySelector('.hard-word');
            this.hardWordHandler(hardWord, user, word);
            const learnedWord = document.querySelector('.learned-word');
            this.learnedWordHandler(learnedWord, user, word);
        }
        else if (user) {
            const deleteWord = document.querySelector('.delete-word');
            this.deleteWordHandler(deleteWord, user, word);
        }
    }
    renderLinks(user) {
        const gameLinks = document.querySelector('.game-links');
        gameLinks.innerHTML = '';
        const game1 = 'Audio Call';
        const game2 = 'Sprint';
        const audioCall = document.createElement('div');
        audioCall.innerHTML = (0,_dictionary_gameLink__WEBPACK_IMPORTED_MODULE_2__.gameLink)(game1);
        audioCall.classList.add('audio-call');
        const sprint = document.createElement('div');
        sprint.innerHTML = (0,_dictionary_gameLink__WEBPACK_IMPORTED_MODULE_2__.gameLink)(game2);
        sprint.classList.add('sprint');
        const audioCallButton = audioCall.querySelector('.game-link');
        const sprintButton = sprint.querySelector('.game-link');
        this.gameLinkHandler(audioCallButton, user);
        this.gameLinkHandler(sprintButton, user);
        gameLinks.append(audioCall, sprint);
    }
    hardWordHandler(toHardWordsButton, user, word) {
        toHardWordsButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiUsersWords.getUserWordById(user.token, user.userId, word.id); // Создаю новое пользовательское слово 
            if (!response) {
                yield this.apiUsersWords.createUserWord(user.token, user.userId, word.id, 'hard', word);
                this.render(this.currentLevel, this.currentPage);
            }
        }));
    }
    learnedWordHandler(toLearnedWordsButton, user, word) {
        toLearnedWordsButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiUsersWords.getUserWordById(user.token, user.userId, word.id);
            if (!response) {
                yield this.apiUsersWords.createUserWord(user.token, user.userId, word.id, 'learned', word); // Создаю новое пользовательское слово
                this.render(this.currentLevel, this.currentPage);
            }
            else {
                yield this.apiUsersWords.updateUserWord(user.token, user.userId, word.id, 'learned', word); // Обновляю пользовательское слово если пришёл ответ
                this.render(this.currentLevel, this.currentPage);
            }
        }));
    }
    deleteWordHandler(deleteWordsButton, user, word) {
        deleteWordsButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            yield this.apiUsersWords.deleteUserWord(user.token, user.userId, word.id); // Удаляю слово без проверки потому что кнопка на 
            this.hardWordsRender(); // которой слушатель есть только у слов которые есть у пользователя
        }));
    }
    gameLinkHandler(gameLink, user) {
        gameLink.addEventListener('click', (e) => __awaiter(this, void 0, void 0, function* () {
            const userWords = (yield this.apiUsersWords.getAllUserWords(user.token, user.userId)).filter(a => a.difficulty === 'learned');
            const learnedWordsArray = userWords.map(a => a.optional);
            const wordsArray = [];
            for (let i = 0; i <= Number(this.currentPage); i++) {
                const pageWords = yield this.getWordsPage(this.currentLevel, i.toString());
                const passedWords = this.resultingByIdArray(learnedWordsArray, pageWords, false);
                wordsArray.push(...passedWords);
            }
            localStorage.wordsForGames = JSON.stringify(wordsArray);
            this.startGame.start(e.target);
        }));
    }
    isPageComplete() {
        const cardWrapper = document.querySelector('.card-wrapper');
        const pageIndicator = document.querySelector('.current-page');
        const hardCards = document.querySelectorAll('.hard');
        const learnedCards = document.querySelectorAll('.learned');
        if (hardCards.length + learnedCards.length === 20) {
            cardWrapper.classList.add('completed');
            pageIndicator.classList.add('completed');
        }
        else {
            cardWrapper.classList.remove('completed');
            pageIndicator.classList.remove('completed');
        }
    }
    isPageLearned() {
        const cardWrapper = document.querySelector('.card-wrapper');
        const learnedCards = document.querySelectorAll('.learned');
        const audioCall = document.querySelector('.audio-call');
        const sprint = document.querySelector('.sprint');
        const audioCallButton = audioCall.querySelector('.game-link');
        const sprintButton = sprint.querySelector('.game-link');
        if (learnedCards.length === 20) {
            audioCallButton.disabled = true;
            sprintButton.disabled = true;
            cardWrapper.classList.add('page-learned');
        }
        else {
            audioCallButton.disabled = false;
            sprintButton.disabled = false;
            cardWrapper.classList.remove('page-learned');
        }
    }
}


/***/ }),

/***/ "./src/pages/games/startGameTextBook/startGame.ts":
/*!********************************************************!*\
  !*** ./src/pages/games/startGameTextBook/startGame.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class StartGame {
    start(target) {
        if (target.innerHTML === 'Audio Call') {
            document.location.href = './games.html?Textbook';
        }
        else if (target.innerHTML === 'Sprint') {
            document.location.href = './sprint.html?Textbook';
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartGame);


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
/*!********************************************!*\
  !*** ./src/pages/dictionary/dictionary.ts ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DifficultyLevels": () => (/* binding */ DifficultyLevels),
/* harmony export */   "accordance": () => (/* binding */ accordance)
/* harmony export */ });
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/pages/dictionary/main.scss");
/* harmony import */ var _api_apiWords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/apiWords */ "./src/api/apiWords.ts");
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./words */ "./src/pages/dictionary/words.ts");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination */ "./src/pages/dictionary/pagination.ts");




// import ApiUsers from '../../api/apiUsers'
// import ApiUsersWords from '../../api/apiUsersWords'
// import ApiUsersSettings from '../../api/apiUsersSettings'
// import ApiSignIn from '../../api/apiSignIn'
var accordance;
(function (accordance) {
    accordance["A1"] = "0";
    accordance["A2"] = "1";
    accordance["B1"] = "2";
    accordance["B2"] = "3";
    accordance["C1"] = "4";
    accordance["C2"] = "5";
})(accordance || (accordance = {}));
class DifficultyLevels {
    constructor() {
        this.words = new _words__WEBPACK_IMPORTED_MODULE_2__.Words();
        this.apiWords = new _api_apiWords__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.pagination = new _pagination__WEBPACK_IMPORTED_MODULE_3__.Pagination();
        const levelsList = document.querySelectorAll('.level');
        this.levels = levelsList;
        this.hardWords = document.querySelector('.level-hard-words');
        if (localStorage.level === 'hard-words') {
            this.words.hardWordsRender();
        }
        else
            this.words.render(localStorage.level, localStorage.page);
    }
    onClick() {
        this.levels.forEach(el => {
            el.addEventListener('click', () => {
                this.highlightLevel(el);
                const level = el.classList[1].split('level-')[1];
                this.words.currentLevel = level;
                localStorage.level = level;
                localStorage.page = '0';
                this.words.currentPage = '1';
                this.pagination.reset();
                this.words.render(level, '0');
            });
        });
        this.hardWords.addEventListener('click', () => {
            this.highlightHardWords();
            localStorage.level = 'hard-words';
            this.words.hardWordsRender();
        });
    }
    highlightLevel(level) {
        const allButtons = document.querySelectorAll('.level');
        this.hardWords.classList.remove('active');
        allButtons.forEach((a) => {
            a.classList.remove('active');
        });
        level.classList.add('active');
    }
    highlightHardWords() {
        const allButtons = document.querySelectorAll('.level');
        allButtons.forEach((a) => {
            a.classList.remove('active');
        });
        this.hardWords.classList.add('active');
    }
}
// localStorage.setItem('page', '0')
// localStorage.setItem('level', '0')
// console.log(localStorage)
const levels = new DifficultyLevels();
levels.onClick();
// const apiSignIn = new ApiSignIn()
// const apiUsersWords = new ApiUsersWords()
// const apiUsers = new ApiUsers()
// async function createUser(name, email, password) {
//   const response = await apiUsers.createUser(name, email, password)
//   const signIn = await apiSignIn.signIn("pasha2@gmail.com", 'pasha11234')
//   // const newWord = await apiUsersWords.createUserWord(signIn.token, signIn.userId, "5e9f5ee35eb9e72bc21af4a0", 'easy')
//   const allWords = await apiUsersWords.getAllUserWords(signIn.token, signIn.userId)
//   console.log(response)
//   // console.log(newWord)
//   console.log(allWords)
// }
// createUser("pasha3", "pasha3@gmail.com", 'pasha11234')

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUM5QixDQUFDLENBQUM7UUFDRixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDL0IsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1FBQ3RELFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN2QixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDOUIsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUN4QyxDQUFDO0NBQ0Y7QUFHRCxvQ0FBb0M7QUFDcEMscUNBQXFDO0FBQ3JDLDRCQUE0QjtBQUM1QixNQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFnQixFQUFFO0FBQ3JDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7QUFDaEIsb0NBQW9DO0FBQ3BDLDRDQUE0QztBQUM1QyxrQ0FBa0M7QUFDbEMscURBQXFEO0FBQ3JELHNFQUFzRTtBQUN0RSw0RUFBNEU7QUFDNUUsMkhBQTJIO0FBQzNILHNGQUFzRjtBQUN0RiwwQkFBMEI7QUFDMUIsNEJBQTRCO0FBQzVCLDBCQUEwQjtBQUMxQixJQUFJO0FBRUoseURBQXlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3BhZ2VzL2RpY3Rpb25hcnkvbWFpbi5zY3NzP2Q5ZDciLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwaS9hcGlVc2Vyc1dvcmRzLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcGkvYXBpV29yZHMudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3BhZ2VzL2RpY3Rpb25hcnkvYXVkaW9QbGF5YmFjay50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvcGFnZXMvZGljdGlvbmFyeS9nYW1lTGluay50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvcGFnZXMvZGljdGlvbmFyeS9wYWdpbmF0aW9uLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9wYWdlcy9kaWN0aW9uYXJ5L3dvcmRzLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9wYWdlcy9nYW1lcy9zdGFydEdhbWVUZXh0Qm9vay9zdGFydEdhbWUudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzbGFuZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnNsYW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNsYW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3BhZ2VzL2RpY3Rpb25hcnkvZGljdGlvbmFyeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQge1VzZXJXb3Jkc30gZnJvbSAnLi9pbnRlcmZhY2UnXHJcbmNsYXNzIEFwaVVzZXJzV29yZHN7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vbGVhcm53b3JkczEyNC5oZXJva3VhcHAuY29tL3VzZXJzLyc7XHJcbiAgICB9XHJcbiAgICBnZXRBbGxVc2VyV29yZHModG9rZW4sIHVzZXJJRCl7XHJcbiAgICAgIGNvbnN0IFVybD0gYCR7dGhpcy51cmx9JHt1c2VySUR9L3dvcmRzYDtcclxuICAgICAgY29uc3QgQWxsVXNlcldvcmRzOiBQcm9taXNlPCBVc2VyV29yZHNbXSA+ID0gZmV0Y2goVXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9XHJcbiAgICAgIH0pLnRoZW4oKGRhdGEpID0+IGRhdGEuc3RhdHVzPT09MjAwID8gZGF0YS5qc29uKCk6IGRhdGEuc3RhdHVzPT09NDAyID8gXHJcbiAgICAgIGNvbnNvbGUubG9nKGBBY2Nlc3MgdG9rZW4gaXMgbWlzc2luZyBvciBpbnZhbGlkYCk6IGNvbnNvbGUubG9nKGDQvtGI0LjQsdC60LAgJHtkYXRhLnN0YXR1c31gKSk7XHJcbiAgICAgIHJldHVybiBBbGxVc2VyV29yZHM7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVVc2VyV29yZCh0b2tlbiwgdXNlcklkLCB3b3JkSWQsIGRpZmZpY3VsdHksIG9wdGlvbmFsPyl7XHJcbiAgICAgICAgY29uc3QgVXJsPSBgJHt0aGlzLnVybH0ke3VzZXJJZH0vd29yZHMvJHt3b3JkSWR9YDtcclxuICAgICAgICBjb25zdCBKc29uID0ge1xyXG4gICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IGAke2RpZmZpY3VsdHl9YCxcclxuICAgICAgICAgIFwib3B0aW9uYWxcIjogb3B0aW9uYWxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgVXNlcldvcmQ6IFByb21pc2U8VXNlcldvcmRzPiA9IGZldGNoKFVybCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShKc29uKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuc3RhdHVzPT09MjAwID8gZGF0YS5qc29uKCk6IGRhdGEuc3RhdHVzPT09NDAwID8gXHJcbiAgICAgICAgY29uc29sZS5sb2coYEJhZCByZXF1ZXN0YCkgOmRhdGEuc3RhdHVzPT09NDAxID8gXHJcbiAgICAgICAgY29uc29sZS5sb2coYEFjY2VzcyB0b2tlbiBpcyBtaXNzaW5nIG9yIGludmFsaWRgKTogY29uc29sZS5sb2coYNC+0YjQuNCx0LrQsCAke2RhdGEuc3RhdHVzfWApKTtcclxuICAgICAgICByZXR1cm4gVXNlcldvcmQ7XHJcbiAgICB9XHJcbiAgICBnZXRVc2VyV29yZEJ5SWQodG9rZW4sIHVzZXJJZCwgd29yZElkKXtcclxuICAgICAgICBjb25zdCBVcmw9IGAke3RoaXMudXJsfSR7dXNlcklkfS93b3Jkcy8ke3dvcmRJZH1gO1xyXG4gICAgICAgIGNvbnN0IFVzZXJXb3JkOiBQcm9taXNlPCBVc2VyV29yZHMgPiA9IGZldGNoKFVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLnN0YXR1cz09PTIwMCA/IGRhdGEuanNvbigpOiBkYXRhLnN0YXR1cz09PTQwNCA/IFxyXG4gICAgICAgICAgY29uc29sZS5sb2coYFVzZXIncyB3b3JkIG5vdCBmb3VuZGApIDpkYXRhLnN0YXR1cz09PTQwMSA/IFxyXG4gICAgICAgICAgY29uc29sZS5sb2coYEFjY2VzcyB0b2tlbiBpcyBtaXNzaW5nIG9yIGludmFsaWRgKTogY29uc29sZS5sb2coYNC+0YjQuNCx0LrQsCAke2RhdGEuc3RhdHVzfWApKTtcclxuICAgICAgICByZXR1cm4gVXNlcldvcmQ7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVVc2VyV29yZCh0b2tlbiwgdXNlcklkLCB3b3JkSWQsIGRpZmZpY3VsdHksIG9wdGlvbmFsPyl7XHJcbiAgICAgICAgY29uc3QgVXJsPSBgJHt0aGlzLnVybH0ke3VzZXJJZH0vd29yZHMvJHt3b3JkSWR9YDtcclxuICAgICAgICBjb25zdCBKc29uID0ge1xyXG4gICAgICAgICAgXCJkaWZmaWN1bHR5XCI6IGAke2RpZmZpY3VsdHl9YCxcclxuICAgICAgICAgIFwib3B0aW9uYWxcIjogb3B0aW9uYWxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgVXNlcldvcmQ6IFByb21pc2U8VXNlcldvcmRzPiA9IGZldGNoKFVybCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KEpzb24pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5zdGF0dXM9PT0yMDAgPyBkYXRhLmpzb24oKTogZGF0YS5zdGF0dXM9PT00MDAgPyBcclxuICAgICAgICBjb25zb2xlLmxvZyhgQmFkIHJlcXVlc3RgKSA6ZGF0YS5zdGF0dXM9PT00MDEgPyBcclxuICAgICAgICBjb25zb2xlLmxvZyhgQWNjZXNzIHRva2VuIGlzIG1pc3Npbmcgb3IgaW52YWxpZGApOiBjb25zb2xlLmxvZyhg0L7RiNC40LHQutCwICR7ZGF0YS5zdGF0dXN9YCkpO1xyXG4gICAgICAgIHJldHVybiBVc2VyV29yZDtcclxuICAgIH1cclxuICAgIGRlbGV0ZVVzZXJXb3JkKHRva2VuLCB1c2VySWQsIHdvcmRJZCl7XHJcbiAgICAgICAgY29uc3QgVXJsPSBgJHt0aGlzLnVybH0ke3VzZXJJZH0vd29yZHMvJHt3b3JkSWR9YDtcclxuICAgICAgICBjb25zdCBEZWxldGVkVXNlciA9IGZldGNoKFVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5zdGF0dXM9PT0yMDQgPyB0cnVlOiBkYXRhLnN0YXR1cz09PTQwMSA/XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgQWNjZXNzIHRva2VuIGlzIG1pc3Npbmcgb3IgaW52YWxpZGApIDogY29uc29sZS5sb2coYNC+0YjQuNCx0LrQsCAke2RhdGEuc3RhdHVzfWApKTtcclxuICAgICAgICAgIHJldHVybiBEZWxldGVkVXNlcjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcGlVc2Vyc1dvcmRzOyIsImltcG9ydCB7V29yZHN9IGZyb20gJy4vaW50ZXJmYWNlJ1xyXG5jbGFzcyBBcGlXb3Jkc3tcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51cmwgPSAnaHR0cHM6Ly9sZWFybndvcmRzMTI0Lmhlcm9rdWFwcC5jb20vd29yZHMnO1xyXG4gICAgfVxyXG4gICAgZ2V0Q2h1bmtPZldvcmRzKHBhZ2UsIGdyb3VwKXtcclxuICAgICAgY29uc3QgVXJsPSBgJHt0aGlzLnVybH0/cGFnZT0ke3BhZ2V9Jmdyb3VwPSR7Z3JvdXB9YDtcclxuICAgICAgY29uc3QgQ2h1bmtPZldvcmRzOiBQcm9taXNlPFdvcmRzW10+ID0gZmV0Y2goVXJsKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSk7XHJcbiAgICAgIHJldHVybiBDaHVua09mV29yZHM7XHJcbiAgICB9XHJcbiAgICBnZXRXb3JkQnlJZChpZCl7XHJcbiAgICAgIGNvbnN0IFVybD0gYCR7dGhpcy51cmx9LyR7aWR9YDtcclxuICAgICAgY29uc3QgV29yZEJ5SWQ6IFByb21pc2U8V29yZHM+ID0gZmV0Y2goVXJsKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSk7XHJcbiAgICAgIHJldHVybiBXb3JkQnlJZDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcGlXb3JkczsiLCJpbXBvcnQge1dvcmRzIGFzIElXb3JkfSBmcm9tICcuLy4uLy4uL2FwaS9pbnRlcmZhY2UnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXVkaW9QbGF5YmFjayh3b3JkOiBJV29yZCwgdXJsOiBzdHJpbmcpe1xyXG4gICAgXHJcbiAgXHJcbiAgY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgcGxheUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGF5LWJ1dHRvbicpXHJcbiAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBgXHJcbiAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvcGxheS5wbmdcIj5cclxuICBgXHJcbiAgY29uc3Qgc291cmNlcyA9IFt3b3JkLmF1ZGlvLCB3b3JkLmF1ZGlvRXhhbXBsZSwgd29yZC5hdWRpb01lYW5pbmddXHJcbiAgbGV0IGN1cnJlbnQgPSAwO1xyXG5cclxuICBjb25zdCBhdWRpb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgYXVkaW9EaXYuY2xhc3NMaXN0LmFkZCgnYXVkaW8tZGl2JylcclxuICBjb25zdCBhdWRpbzogSFRNTEF1ZGlvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJylcclxuICAvLyBhdWRpby5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJycpXHJcbiAgYXVkaW8uc3JjID0gYCR7dXJsfSR7c291cmNlc1tjdXJyZW50XX1gXHJcbiAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGljaycpXHJcbiAgICBhdWRpby5wbGF5KClcclxuICAgIGF1ZGlvLm9uZW5kZWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICBjdXJyZW50Kys7XHJcbiAgICAgIGlmIChjdXJyZW50ID49IHNvdXJjZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgY3VycmVudCA9IDBcclxuICAgICAgICBhdWRpby5zcmMgPSBgJHt1cmx9JHtzb3VyY2VzW2N1cnJlbnRdfWBcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICB9XHJcbiAgICAgIGF1ZGlvLnNyYyA9IGAke3VybH0ke3NvdXJjZXNbY3VycmVudF19YDtcclxuICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0pXHJcbiBcclxuICBhdWRpb0Rpdi5hcHBlbmQocGxheUJ1dHRvbiwgYXVkaW8pXHJcbiAgcmV0dXJuIGF1ZGlvRGl2XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdhbWVMaW5rKHRpdGxlOiBzdHJpbmcpe1xyXG4gIHJldHVybiBgXHJcbiAgICAgIDxhIGNsYXNzPVwiZ2FtZS1saW5rXCIgaHJlZj1cIiR7dGl0bGUudG9Mb3dlckNhc2UoKSAhPT0gJ3NwcmludCcgPyAnLi9nYW1lcy5odG1sJyA6ICcuL3NwcmludC5odG1sJ31cIj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJnYW1lLWxpbmstdGl0bGVcIj4ke3RpdGxlfTwvaDM+XHJcbiAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nLyR7dGl0bGUuc3BsaXQoJyAnKS5qb2luKCcnKS50b0xvd2VyQ2FzZSgpfS5wbmdcIj5cclxuICAgICAgPC9hPlxyXG4gIGBcclxufSIsImltcG9ydCB7IFdvcmRzIH0gZnJvbSBcIi4vd29yZHNcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb24ge1xyXG5cclxuICBwcml2YXRlIHByZXZQYWdlOiBIVE1MQnV0dG9uRWxlbWVudFxyXG4gIHByaXZhdGUgbmV4dFBhZ2U6IEhUTUxCdXR0b25FbGVtZW50XHJcbiAgcHJpdmF0ZSBjdXJyZW50UGFnZUluZGljYXRvcjogSFRNTFNwYW5FbGVtZW50XHJcbiAgcHJpdmF0ZSB3b3JkczogV29yZHNcclxuICAvLyBwcml2YXRlIF9jdXJyZW50UGFnZTogc3RyaW5nXHJcblxyXG4gIC8vIHNldCBjdXJyZW50UGFnZShwYWdlOiBzdHJpbmcpe1xyXG4gIC8vICAgdGhpcy5fY3VycmVudFBhZ2UgPSBwYWdlXHJcbiAgLy8gICB0aGlzLmN1cnJlbnRQYWdlSW5kaWNhdG9yLmlubmVyVGV4dCA9IHBhZ2UudG9TdHJpbmcoKVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gZ2V0IGN1cnJlbnRQYWdlKCk6IHN0cmluZ3tcclxuICAvLyAgIHJldHVybiB0aGlzLl9jdXJyZW50UGFnZVxyXG4gIC8vIH1cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLnByZXZQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXYnKVxyXG4gICAgdGhpcy5uZXh0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0JylcclxuICAgIHRoaXMuY3VycmVudFBhZ2VJbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wYWdlJylcclxuICAgIHRoaXMud29yZHMgPSBuZXcgV29yZHMoKVxyXG4gICAgdGhpcy5jdXJyZW50UGFnZUluZGljYXRvci5pbm5lclRleHQgPSAoK2xvY2FsU3RvcmFnZS5wYWdlICsgMSkudG9TdHJpbmcoKVxyXG4gICAgaWYobG9jYWxTdG9yYWdlLnBhZ2UgPT09ICcwJykgdGhpcy5wcmV2UGFnZS5kaXNhYmxlZCA9IHRydWVcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5wYWdlID09PSAnMjknKSB0aGlzLm5leHRQYWdlLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgdGhpcy5hZGRDbGlja0xpc3RlbmVyKClcclxuICB9XHJcblxyXG4gIHRvTmV4dFBhZ2UoKXtcclxuICAgIGNvbnN0IGN1cnJlbnRMZXZlbCA9IHRoaXMud29yZHMuY3VycmVudExldmVsXHJcbiAgICAvLyBpZighY3VycmVudExldmVsKSByZXR1cm4gbnVsbFxyXG5cclxuICBcclxuICAgIGlmKCt0aGlzLndvcmRzLmN1cnJlbnRQYWdlID49IDAgJiYgK3RoaXMud29yZHMuY3VycmVudFBhZ2UgPCAyOSkge1xyXG4gICAgICB0aGlzLm5leHRQYWdlLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgdGhpcy5wcmV2UGFnZS5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgIHRoaXMud29yZHMuY3VycmVudFBhZ2UgPSAoK3RoaXMud29yZHMuY3VycmVudFBhZ2UgKyAxKS50b1N0cmluZygpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5wYWdlID0gdGhpcy53b3Jkcy5jdXJyZW50UGFnZVxyXG5cclxuICAgICAgaWYoK3RoaXMud29yZHMuY3VycmVudFBhZ2UgPT09IDI5KSB0aGlzLm5leHRQYWdlLmRpc2FibGVkID0gdHJ1ZVxyXG5cclxuICAgICAgdGhpcy5jdXJyZW50UGFnZUluZGljYXRvci5pbm5lclRleHQgPSAoK3RoaXMud29yZHMuY3VycmVudFBhZ2UgKyAxKS50b1N0cmluZygpXHJcbiAgICAgIHRoaXMud29yZHMucmVuZGVyKGN1cnJlbnRMZXZlbCwgdGhpcy53b3Jkcy5jdXJyZW50UGFnZSlcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICB0b1ByZXZQYWdlKCl7XHJcbiAgICBjb25zdCBjdXJyZW50TGV2ZWwgPSB0aGlzLndvcmRzLmN1cnJlbnRMZXZlbFxyXG4gICAgLy8gaWYoIWN1cnJlbnRMZXZlbCkgcmV0dXJuIG51bGxcclxuXHJcbiAgICBpZigrdGhpcy53b3Jkcy5jdXJyZW50UGFnZSA+IDAgJiYgK3RoaXMud29yZHMuY3VycmVudFBhZ2UgPD0gMjkpIHtcclxuICAgICAgdGhpcy5wcmV2UGFnZS5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgIHRoaXMubmV4dFBhZ2UuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICB0aGlzLndvcmRzLmN1cnJlbnRQYWdlID0gKCt0aGlzLndvcmRzLmN1cnJlbnRQYWdlIC0gMSkudG9TdHJpbmcoKVxyXG4gICAgICBsb2NhbFN0b3JhZ2UucGFnZSA9IHRoaXMud29yZHMuY3VycmVudFBhZ2VcclxuXHJcbiAgICAgIGlmKCt0aGlzLndvcmRzLmN1cnJlbnRQYWdlID09PSAwKSB0aGlzLnByZXZQYWdlLmRpc2FibGVkID0gdHJ1ZVxyXG5cclxuICAgICAgdGhpcy5jdXJyZW50UGFnZUluZGljYXRvci5pbm5lclRleHQgPSAgKCt0aGlzLndvcmRzLmN1cnJlbnRQYWdlICsgMSkudG9TdHJpbmcoKVxyXG4gICAgICB0aGlzLndvcmRzLnJlbmRlcihjdXJyZW50TGV2ZWwsIHRoaXMud29yZHMuY3VycmVudFBhZ2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldCgpe1xyXG4gICAgdGhpcy5wcmV2UGFnZS5kaXNhYmxlZCA9IHRydWVcclxuICAgIHRoaXMubmV4dFBhZ2UuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgdGhpcy5jdXJyZW50UGFnZUluZGljYXRvci5pbm5lclRleHQgPSAnMSdcclxuICB9XHJcblxyXG4gIGFkZENsaWNrTGlzdGVuZXIoKXtcclxuICAgIHRoaXMucHJldlBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRvUHJldlBhZ2UoKSlcclxuICAgIHRoaXMubmV4dFBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRvTmV4dFBhZ2UoKSlcclxuICB9XHJcblxyXG5cclxufSIsImltcG9ydCBBcGlXb3JkcyBmcm9tICcuLi8uLi9hcGkvYXBpV29yZHMnXHJcbmltcG9ydCB7VXNlcldvcmRzLCBXb3JkcyBhcyBJV29yZH0gZnJvbSAnLi8uLi8uLi9hcGkvaW50ZXJmYWNlJ1xyXG5pbXBvcnQgQXBpVXNlcnNXb3JkcyBmcm9tICcuLi8uLi9hcGkvYXBpVXNlcnNXb3JkcydcclxuaW1wb3J0IHtTaWduSW59IGZyb20gJy4uLy4uL2FwaS9pbnRlcmZhY2UnXHJcbmltcG9ydCB7Z2FtZUxpbmt9IGZyb20gJy4uL2RpY3Rpb25hcnkvZ2FtZUxpbmsnXHJcbmltcG9ydCB7YXVkaW9QbGF5YmFja30gZnJvbSAnLi4vZGljdGlvbmFyeS9hdWRpb1BsYXliYWNrJ1xyXG5pbXBvcnQgU3RhcnRHYW1lIGZyb20gJy4uL2dhbWVzL3N0YXJ0R2FtZVRleHRCb29rL3N0YXJ0R2FtZSdcclxuXHJcbmxldCBpbnN0YW5jZVxyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmRzIHtcclxuXHJcbiAgcHJpdmF0ZSBhcGlXb3JkczogQXBpV29yZHNcclxuICBwcml2YXRlIF9jdXJyZW50TGV2ZWw6IHN0cmluZ1xyXG4gIHByaXZhdGUgX2N1cnJlbnRQYWdlOiBzdHJpbmdcclxuICAvLyBwcml2YXRlIGFwaVNpZ25JbjogQXBpU2lnbkluXHJcbiAgcHJpdmF0ZSBhcGlVc2Vyc1dvcmRzOiBBcGlVc2Vyc1dvcmRzXHJcbiAgc3RhcnRHYW1lOiBTdGFydEdhbWVcclxuXHJcbiAgZ2V0IGN1cnJlbnRMZXZlbCgpOiBzdHJpbmd7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudExldmVsXHJcbiAgfVxyXG5cclxuICBzZXQgY3VycmVudExldmVsKGxldmVsOiBzdHJpbmcpe1xyXG4gICAgdGhpcy5fY3VycmVudExldmVsID0gbGV2ZWxcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50UGFnZSgpOiBzdHJpbmd7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFBhZ2VcclxuICB9XHJcblxyXG4gIHNldCBjdXJyZW50UGFnZShwYWdlOiBzdHJpbmcpe1xyXG4gICAgdGhpcy5fY3VycmVudFBhZ2UgPSBwYWdlXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmKCFpbnN0YW5jZSkgaW5zdGFuY2UgPSB0aGlzXHJcbiAgICB0aGlzLmFwaVdvcmRzID0gbmV3IEFwaVdvcmRzKClcclxuICAgIC8vIHRoaXMuYXBpU2lnbkluID0gbmV3IEFwaVNpZ25JbigpXHJcbiAgICB0aGlzLmFwaVVzZXJzV29yZHMgPSBuZXcgQXBpVXNlcnNXb3JkcygpXHJcbiAgICB0aGlzLnN0YXJ0R2FtZSA9IG5ldyBTdGFydEdhbWUoKVxyXG4gICAgcmV0dXJuIGluc3RhbmNlXHJcbiAgfVxyXG5cclxuICAvLyBhc3luYyBnZXRTaWduSW5Vc2VyKCl7XHJcbiAgLy8gICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5hcGlTaWduSW4uc2lnbkluKFwicGFzaGEzQGdtYWlsLmNvbVwiLCAncGFzaGExMTIzNCcpXHJcbiAgLy8gICByZXR1cm4gdXNlclxyXG4gIC8vIH1cclxuXHJcbiAgXHJcbiAgYXN5bmMgZ2V0V29yZHNQYWdlKGxldmVsOiBzdHJpbmcsIHBhZ2U6IHN0cmluZyl7XHJcbiAgICAgIGNvbnN0IHdvcmRBcnIgPSBhd2FpdCB0aGlzLmFwaVdvcmRzLmdldENodW5rT2ZXb3JkcyhwYWdlLCBsZXZlbClcclxuICAgIHJldHVybiB3b3JkQXJyXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGFzeW5jIHJlbmRlcihsZXZlbDogc3RyaW5nLCBwYWdlOiBzdHJpbmcpe1xyXG4gICAgY29uc3QgZGlmZmljdWx0eUxldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxldmVsLSR7bG9jYWxTdG9yYWdlLmxldmVsfWApXHJcblxyXG4gICAgaWYoZGlmZmljdWx0eUxldmVsKSBkaWZmaWN1bHR5TGV2ZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuXHJcbiAgICBjb25zdCBwYWdpbmF0aW9uOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uJylcclxuICAgIGNvbnN0IGhhcmRXb3JkczogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGV2ZWwtaGFyZC13b3JkcycpXHJcbiAgICBwYWdpbmF0aW9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuXHJcbiAgICBsZXQgdXNlcjogU2lnbkluXHJcbiAgICBpZihsb2NhbFN0b3JhZ2UudXNlcikgeyAgXHJcbiAgICAgIHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS51c2VyKVxyXG4gICAgICBjb25zb2xlLmxvZygndXNlcjonLCB1c2VyKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgdXNlciA9IG51bGxcclxuICAgIH1cclxuICAgIGlmKHVzZXIpe1xyXG4gICAgICBoYXJkV29yZHMuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBoYXJkV29yZHMuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKVxyXG4gICAgY29uc29sZS5sb2cobGV2ZWwsIHBhZ2UsIHVzZXIpXHJcbiAgICBjb25zdCB3b3Jkc0FycmF5ID0gYXdhaXQgdGhpcy5nZXRXb3Jkc1BhZ2UobGV2ZWwsIHBhZ2UpXHJcbiAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IGxldmVsXHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZVxyXG4gICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50UGFnZSlcclxuICAgIHRoaXMucmVuZGVyTGlua3ModXNlcilcclxuICAgIGlmKHVzZXIpe1xyXG4gICAgICB0aGlzLmFkZFN0eWxlcyh1c2VyLCB3b3Jkc0FycmF5KVxyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXJDYXJkQnV0dG9uKHdvcmRzQXJyYXksIHVzZXIsIGZhbHNlKVxyXG4gIH1cclxuXHJcblxyXG4gIGFzeW5jIGhhcmRXb3Jkc1JlbmRlcigpe1xyXG4gICAgY29uc3QgZGlmZmljdWx0eUxldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxldmVsLSR7bG9jYWxTdG9yYWdlLmxldmVsfWApXHJcblxyXG4gICAgaWYoZGlmZmljdWx0eUxldmVsKSBkaWZmaWN1bHR5TGV2ZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuXHJcbiAgICBjb25zdCBwYWdpbmF0aW9uOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uJylcclxuICAgIHBhZ2luYXRpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgbGV0IHVzZXI6IFNpZ25JblxyXG4gICAgaWYobG9jYWxTdG9yYWdlLnVzZXIpIHsgIFxyXG4gICAgICB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudXNlcilcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHVzZXIgPSBudWxsXHJcbiAgICB9XHJcbiAgICBjb25zdCBhbGxVc2VyV29yZHMgPSBhd2FpdCB0aGlzLmFwaVVzZXJzV29yZHMuZ2V0QWxsVXNlcldvcmRzKHVzZXIudG9rZW4sIHVzZXIudXNlcklkKVxyXG4gICAgY29uc3QgaGFyZFdvcmRzQXJyYXkgPSBhbGxVc2VyV29yZHMuZmlsdGVyKGEgPT4ge1xyXG4gICAgICBpZihhLmRpZmZpY3VsdHkgPT09ICdoYXJkJykgcmV0dXJuIHRydWVcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9KVxyXG4gICAgY29uc3Qgd29yZHNBcnJheSA9IGhhcmRXb3Jkc0FycmF5Lm1hcChhID0+IHtcclxuICAgICAgcmV0dXJuIGEub3B0aW9uYWxcclxuICAgIH0pIGFzIElXb3JkW11cclxuICAgIGNvbnNvbGUubG9nKHdvcmRzQXJyYXkpXHJcbiAgICB0aGlzLnJlbmRlckNhcmRCdXR0b24od29yZHNBcnJheSwgdXNlciwgdHJ1ZSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGFkZFN0eWxlcyh1c2VyOiBTaWduSW4sIHdvcmRzQXJyYXk6IElXb3JkW10pe1xyXG4gICAgY29uc3QgaGFyZFdvcmRzID0gKGF3YWl0IHRoaXMuYXBpVXNlcnNXb3Jkcy5nZXRBbGxVc2VyV29yZHModXNlci50b2tlbiwgdXNlci51c2VySWQpKS5maWx0ZXIoYSA9PiBhLmRpZmZpY3VsdHkgPT09ICdoYXJkJylcclxuICAgIGNvbnN0IGxlYXJuZWRXb3JkcyA9IChhd2FpdCB0aGlzLmFwaVVzZXJzV29yZHMuZ2V0QWxsVXNlcldvcmRzKHVzZXIudG9rZW4sIHVzZXIudXNlcklkKSkuZmlsdGVyKGEgPT4gYS5kaWZmaWN1bHR5ID09PSAnbGVhcm5lZCcpXHJcblxyXG4gICAgY29uc3QgaGFyZFdvcmRzQXJyYXkgPSBoYXJkV29yZHMubWFwKGEgPT4gYS5vcHRpb25hbCkgYXMgSVdvcmRbXVxyXG4gICAgY29uc3QgbGVhcm5lZFdvcmRzQXJyYXkgPSBsZWFybmVkV29yZHMubWFwKGEgPT4gYS5vcHRpb25hbCkgYXMgSVdvcmRbXVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdGluZ0J5SGFyZCA9IHRoaXMucmVzdWx0aW5nQnlJZEFycmF5KGhhcmRXb3Jkc0FycmF5LCB3b3Jkc0FycmF5LCB0cnVlKVxyXG4gICAgY29uc3QgcmVzdWx0aW5nQnlsZWFybmVkID0gdGhpcy5yZXN1bHRpbmdCeUlkQXJyYXkobGVhcm5lZFdvcmRzQXJyYXksIHdvcmRzQXJyYXksIHRydWUpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHRpbmdCeUhhcmQsIHJlc3VsdGluZ0J5bGVhcm5lZClcclxuXHJcbiAgICByZXN1bHRpbmdCeUhhcmQuZm9yRWFjaChhID0+IHtcclxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHthLndvcmR9YClcclxuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnaGFyZCcpXHJcbiAgICB9KVxyXG5cclxuICAgIHJlc3VsdGluZ0J5bGVhcm5lZC5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Eud29yZH1gKVxyXG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdsZWFybmVkJylcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5pc1BhZ2VDb21wbGV0ZSgpXHJcbiAgICB0aGlzLmlzUGFnZUxlYXJuZWQoKVxyXG4gIH1cclxuXHJcbiAgaGlnaGxpZ2h0QnV0dG9uKGJ1dHRvbjogSFRNTEVsZW1lbnQpe1xyXG4gICAgY29uc3QgYWxsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLXdvcmQnKVxyXG4gICAgYWxsQnV0dG9ucy5mb3JFYWNoKChhKSA9PiB7XHJcbiAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShgYWN0aXZlLSR7bG9jYWxTdG9yYWdlLmxldmVsfWAsICdhY3RpdmUnKVxyXG4gICAgfSlcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGBhY3RpdmUtJHtsb2NhbFN0b3JhZ2UubGV2ZWx9YCwgJ2FjdGl2ZScpXHJcbiAgICBjb25zb2xlLmxvZyhidXR0b24pXHJcbiAgfVxyXG5cclxuICByZXN1bHRpbmdCeUlkQXJyYXkodXNlcldvcmRzOiBJV29yZFtdLCB3b3Jkc0FycmF5OiBJV29yZFtdLCBpbmNsdWRlOiBib29sZWFuKXtcclxuICAgIGNvbnN0IGluY2x1ZGVkOiBJV29yZFtdID0gW11cclxuXHJcbiAgICBpZihpbmNsdWRlKXtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHVzZXJXb3Jkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHdvcmRzQXJyYXkubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICBpZih1c2VyV29yZHNbaV0uaWQgPT09IHdvcmRzQXJyYXlbal0uaWQpIHtcclxuICAgICAgICAgICAgICBpbmNsdWRlZC5wdXNoKHVzZXJXb3Jkc1tpXSlcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3b3Jkc0FycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsZXQgZmxhZyA9IGZhbHNlXHJcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHVzZXJXb3Jkcy5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgIGlmKHdvcmRzQXJyYXlbaV0uaWQgIT09IHVzZXJXb3Jkc1tqXS5pZCkge1xyXG4gICAgICAgICAgICAgIGZsYWcgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICBmbGFnID0gZmFsc2VcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGZsYWcpIGluY2x1ZGVkLnB1c2god29yZHNBcnJheVtpXSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluY2x1ZGVkXHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcbiAgcmVuZGVyQ2FyZEJ1dHRvbih3b3JkczogSVdvcmRbXSwgdXNlcjogU2lnbkluLCBpc0hhcmRXb3JkczogYm9vbGVhbil7XHJcbiAgICBjb25zdCBjYXJkV3JhcHBlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC13cmFwcGVyJylcclxuXHJcbiAgICBjYXJkV3JhcHBlci5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNhcmRXcmFwcGVyLmFwcGVuZCh0aGlzLmNhcmRDcmVhdGUod29yZHNbaV0sICB1c2VyLCBpc0hhcmRXb3JkcykpXHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuICBjYXJkQ3JlYXRlKHdvcmQ6IElXb3JkLCB1c2VyOiBTaWduSW4sICBpc0hhcmRXb3JkczogYm9vbGVhbik6IEhUTUxCdXR0b25FbGVtZW50e1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhcmQtd29yZCcpXHJcbiAgICBidXR0b24uaWQgPSB3b3JkLndvcmRcclxuXHJcbiAgICBjb25zdCBoNDogSFRNTEhlYWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxyXG4gICAgaDQuY2xhc3NMaXN0LmFkZCgnY2FyZC13b3JkLXRpdGxlJylcclxuICAgIGg0LnRleHRDb250ZW50ID0gd29yZC53b3JkXHJcblxyXG4gICAgY29uc3Qgc3BhbjogSFRNTEhlYWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2NhcmQtd29yZC10cmFuc2xhdGUnKVxyXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IHdvcmQud29yZFRyYW5zbGF0ZVxyXG5cclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJTaWRlQmFyKHdvcmQsIHVzZXIsIGlzSGFyZFdvcmRzKVxyXG4gICAgICB0aGlzLmhpZ2hsaWdodEJ1dHRvbihidXR0b24pXHJcbiAgICB9KVxyXG4gICAgYnV0dG9uLmFwcGVuZChoNCwgc3BhbilcclxuXHJcbiAgICBpZihsb2NhbFN0b3JhZ2UubGV2ZWwgIT09ICdoYXJkLXdvcmRzJyl7XHJcbiAgICAgIHRoaXMuaXNQYWdlQ29tcGxldGUoKVxyXG4gICAgICB0aGlzLmlzUGFnZUxlYXJuZWQoKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBidXR0b25cclxuICB9XHJcblxyXG5cclxuICByZW5kZXJTaWRlQmFyKHdvcmQ6IElXb3JkLCB1c2VyOiBTaWduSW4sIGlzSGFyZFdvcmRzOiBib29sZWFuLCl7XHJcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9sZWFybndvcmRzMTI0Lmhlcm9rdWFwcC5jb20vJ1xyXG4gICAgY29uc3Qgc2lkZUJhcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1iYXInKVxyXG4gICAgY29uc3QgYXVkaW8gPSBhdWRpb1BsYXliYWNrKHdvcmQsIHVybClcclxuICAgIHNpZGVCYXIuaW5uZXJIVE1MID0gJydcclxuICAgIHNpZGVCYXIuYXBwZW5kKGF1ZGlvKVxyXG4gICAgY29uc3QgaHRtbCA9IGBcclxuICAgICAgPGltZyBjbGFzcz1cIndvcmQtaW1nXCIgc3JjPVwiJHt1cmx9JHt3b3JkLmltYWdlfVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwid29yZC1vdmVydmlld1wiPiAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZnVsbC13b3JkXCI+ICAgXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIndvcmQtdHJhbnNjcmlwdGlvblwiPiR7d29yZC50cmFuc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cIndvcmQtdGl0bGVcIj4ke3dvcmQud29yZH08L2gzPlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgPGg0IGNsYXNzPVwid29yZC1zdWJ0aXRsZVwiPiR7d29yZC53b3JkVHJhbnNsYXRlfTwvaDQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICAgc2lkZUJhci5pbm5lckhUTUwgPSBodG1sXHJcbiAgICBjb25zdCBmdWxsV29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdWxsLXdvcmQnKVxyXG4gICAgZnVsbFdvcmQuYXBwZW5kKGF1ZGlvKVxyXG5cclxuICAgIC8vIGNvbnN0IG92ZXJ2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmQtb3ZlcnZpZXcnKVxyXG5cclxuICAgIC8vIG92ZXJ2aWV3LmFwcGVuZChhdWRpbylcclxuXHJcbiAgICBjb25zdCB3b3JkQ29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgd29yZENvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ3dvcmQtY29udHJvbHMnKVxyXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gYDxidXR0b24gY2xhc3M9XCJ3b3JkLWNvbnRyb2wgZGVsZXRlLXdvcmRcIj7Qo9C00LDQu9C40YLRjCDQuNC3INGB0LvQvtC20L3Ri9GFPC9idXR0b24+YFxyXG4gICAgY29uc3QgYnV0dG9ucyA9IGBcclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIndvcmQtY29udHJvbCBoYXJkLXdvcmRcIj4rINCSINGB0LvQvtC20L3Ri9C1INGB0LvQvtCy0LA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIndvcmQtY29udHJvbCBsZWFybmVkLXdvcmRcIj4rINCSINC40LfRg9GH0LXQvdC90YvQtSDRgdC70L7QstCwPC9idXR0b24+XHJcbiAgICBgXHJcbiAgICBjb25zdCBjb250cm9sc0h0bWwgPSBgJHshdXNlciA/ICcnOiBpc0hhcmRXb3JkcyA/IGRlbGV0ZUJ1dHRvbiA6IGJ1dHRvbnN9YFxyXG4gICAgd29yZENvbnRyb2xzLmlubmVySFRNTCA9IGNvbnRyb2xzSHRtbFxyXG4gICAgc2lkZUJhci5hcHBlbmQod29yZENvbnRyb2xzKVxyXG5cclxuICAgIGNvbnN0IHdvcmREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB3b3JkRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnd29yZC1kZXNjcmlwdGlvbicpXHJcbiAgICBjb25zdCB3b3JkRGVzY3JpcHRpb25IdG1sID0gYCBcclxuICAgICAgICA8aDI+0JfQvdCw0YfQtdC90LjQtTwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndvcmQtbWVhbmluZ1wiPiR7d29yZC50ZXh0TWVhbmluZ308L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid29yZC1tZWFuaW5nLXRyYW5zbGF0ZVwiPiR7d29yZC50ZXh0TWVhbmluZ1RyYW5zbGF0ZX08L2Rpdj5cclxuICAgICAgICA8aDI+0J/RgNC40LzQtdGAPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid29yZC1leGFtcGxlXCI+JHt3b3JkLnRleHRFeGFtcGxlfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3b3JkLWV4YW1wbGUtdHJhbnNsYXRlXCI+JHt3b3JkLnRleHRFeGFtcGxlVHJhbnNsYXRlfTwvZGl2PlxyXG4gICAgYFxyXG4gICAgd29yZERlc2NyaXB0aW9uLmlubmVySFRNTCA9IHdvcmREZXNjcmlwdGlvbkh0bWxcclxuICAgIHNpZGVCYXIuYXBwZW5kKHdvcmREZXNjcmlwdGlvbilcclxuXHJcbiAgICBjb25zdCBpbmdhbWVTdGF0aXN0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgaW5nYW1lU3RhdGlzdGljLmNsYXNzTGlzdC5hZGQoJ2luZ2FtZS1zdGF0aXN0aWNzJylcclxuICAgIGNvbnN0IGluZ2FtZVN0YXRpc3RpY0h0bWwgPSBgXHJcbiAgICAgIDxoMj7QntGC0LLQtdGC0Ysg0LIg0LjQs9GA0LDRhTwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbmdhbWVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5nYW1lLXN0YXRpc3RpY1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJnYW1lLW5hbWVcIj7QkNGD0LTQuNC+0LLRi9C30L7Qsjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2FtZS1zdGF0aXN0aWNcIj4wPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmdhbWUtc3RhdGlzdGljXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImdhbWUtbmFtZVwiPtCh0L/RgNC40L3Rgjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2FtZS1zdGF0aXN0aWNcIj4wPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGBcclxuICAgIGluZ2FtZVN0YXRpc3RpYy5pbm5lckhUTUwgPSBpbmdhbWVTdGF0aXN0aWNIdG1sXHJcbiAgICBzaWRlQmFyLmFwcGVuZChpbmdhbWVTdGF0aXN0aWMpXHJcblxyXG4gICAgaWYoIWlzSGFyZFdvcmRzICYmIHVzZXIpe1xyXG4gICAgICBjb25zdCBoYXJkV29yZDogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFyZC13b3JkJylcclxuICAgICAgdGhpcy5oYXJkV29yZEhhbmRsZXIoaGFyZFdvcmQsIHVzZXIsICB3b3JkKVxyXG5cclxuICAgICAgY29uc3QgbGVhcm5lZFdvcmQ6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlYXJuZWQtd29yZCcpXHJcbiAgICAgIHRoaXMubGVhcm5lZFdvcmRIYW5kbGVyKGxlYXJuZWRXb3JkLCB1c2VyLCAgd29yZClcclxuICAgIH1cclxuICAgIGVsc2UgaWYodXNlcil7XHJcbiAgICAgIGNvbnN0IGRlbGV0ZVdvcmQ6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS13b3JkJylcclxuICAgICAgdGhpcy5kZWxldGVXb3JkSGFuZGxlcihkZWxldGVXb3JkLCB1c2VyLCB3b3JkKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGlua3ModXNlcjogU2lnbkluKXtcclxuICAgIGNvbnN0IGdhbWVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWxpbmtzJylcclxuICAgIGdhbWVMaW5rcy5pbm5lckhUTUwgPSAnJ1xyXG5cclxuICAgIGNvbnN0IGdhbWUxID0gJ0F1ZGlvIENhbGwnXHJcbiAgICBjb25zdCBnYW1lMiA9ICdTcHJpbnQnXHJcblxyXG4gICAgY29uc3QgYXVkaW9DYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGF1ZGlvQ2FsbC5pbm5lckhUTUwgPSBnYW1lTGluayhnYW1lMSlcclxuICAgIGF1ZGlvQ2FsbC5jbGFzc0xpc3QuYWRkKCdhdWRpby1jYWxsJylcclxuXHJcbiAgICBjb25zdCBzcHJpbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgc3ByaW50LmlubmVySFRNTCA9IGdhbWVMaW5rKGdhbWUyKVxyXG4gICAgc3ByaW50LmNsYXNzTGlzdC5hZGQoJ3NwcmludCcpXHJcblxyXG4gICAgY29uc3QgYXVkaW9DYWxsQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IGF1ZGlvQ2FsbC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1saW5rJylcclxuICAgIGNvbnN0IHNwcmludEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBzcHJpbnQucXVlcnlTZWxlY3RvcignLmdhbWUtbGluaycpXHJcblxyXG4gICAgdGhpcy5nYW1lTGlua0hhbmRsZXIoYXVkaW9DYWxsQnV0dG9uLCB1c2VyKVxyXG4gICAgdGhpcy5nYW1lTGlua0hhbmRsZXIoc3ByaW50QnV0dG9uLCB1c2VyKVxyXG5cclxuICAgIGdhbWVMaW5rcy5hcHBlbmQoYXVkaW9DYWxsLCBzcHJpbnQpXHJcbiAgfVxyXG5cclxuICBoYXJkV29yZEhhbmRsZXIodG9IYXJkV29yZHNCdXR0b246IEhUTUxCdXR0b25FbGVtZW50LCB1c2VyOiBTaWduSW4sICB3b3JkOiBJV29yZCl7XHJcbiAgICB0b0hhcmRXb3Jkc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmFwaVVzZXJzV29yZHMuZ2V0VXNlcldvcmRCeUlkKHVzZXIudG9rZW4sIHVzZXIudXNlcklkLCB3b3JkLmlkKSAvLyDQodC+0LfQtNCw0Y4g0L3QvtCy0L7QtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60L7QtSDRgdC70L7QstC+IFxyXG4gICAgICBpZighcmVzcG9uc2UpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmFwaVVzZXJzV29yZHMuY3JlYXRlVXNlcldvcmQodXNlci50b2tlbiwgdXNlci51c2VySWQsIHdvcmQuaWQsICdoYXJkJywgd29yZClcclxuICAgICAgICB0aGlzLnJlbmRlcih0aGlzLmN1cnJlbnRMZXZlbCwgdGhpcy5jdXJyZW50UGFnZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGxlYXJuZWRXb3JkSGFuZGxlcih0b0xlYXJuZWRXb3Jkc0J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQsIHVzZXI6IFNpZ25JbiwgIHdvcmQ6IElXb3JkKXtcclxuICAgIHRvTGVhcm5lZFdvcmRzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYXBpVXNlcnNXb3Jkcy5nZXRVc2VyV29yZEJ5SWQodXNlci50b2tlbiwgdXNlci51c2VySWQsIHdvcmQuaWQpXHJcbiAgICAgIGlmKCFyZXNwb25zZSkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYXBpVXNlcnNXb3Jkcy5jcmVhdGVVc2VyV29yZCh1c2VyLnRva2VuLCB1c2VyLnVzZXJJZCwgd29yZC5pZCwgJ2xlYXJuZWQnLCB3b3JkKSAvLyDQodC+0LfQtNCw0Y4g0L3QvtCy0L7QtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60L7QtSDRgdC70L7QstC+XHJcbiAgICAgICAgdGhpcy5yZW5kZXIodGhpcy5jdXJyZW50TGV2ZWwsIHRoaXMuY3VycmVudFBhZ2UpXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBhd2FpdCB0aGlzLmFwaVVzZXJzV29yZHMudXBkYXRlVXNlcldvcmQodXNlci50b2tlbiwgdXNlci51c2VySWQsIHdvcmQuaWQsICdsZWFybmVkJywgd29yZCkgLy8g0J7QsdC90L7QstC70Y/RjiDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60L7QtSDRgdC70L7QstC+INC10YHQu9C4INC/0YDQuNGI0ZHQuyDQvtGC0LLQtdGCXHJcbiAgICAgICAgdGhpcy5yZW5kZXIodGhpcy5jdXJyZW50TGV2ZWwsIHRoaXMuY3VycmVudFBhZ2UpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIFxyXG4gIGRlbGV0ZVdvcmRIYW5kbGVyKGRlbGV0ZVdvcmRzQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCwgdXNlcjogU2lnbkluLCB3b3JkOiBJV29yZCl7XHJcbiAgICBkZWxldGVXb3Jkc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgdGhpcy5hcGlVc2Vyc1dvcmRzLmRlbGV0ZVVzZXJXb3JkKHVzZXIudG9rZW4sIHVzZXIudXNlcklkLCB3b3JkLmlkKSAvLyDQo9C00LDQu9GP0Y4g0YHQu9C+0LLQviDQsdC10Lcg0L/RgNC+0LLQtdGA0LrQuCDQv9C+0YLQvtC80YMg0YfRgtC+INC60L3QvtC/0LrQsCDQvdCwIFxyXG4gICAgICB0aGlzLmhhcmRXb3Jkc1JlbmRlcigpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINC60L7RgtC+0YDQvtC5INGB0LvRg9GI0LDRgtC10LvRjCDQtdGB0YLRjCDRgtC+0LvRjNC60L4g0YMg0YHQu9C+0LIg0LrQvtGC0L7RgNGL0LUg0LXRgdGC0Ywg0YMg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2FtZUxpbmtIYW5kbGVyKGdhbWVMaW5rOiBIVE1MQnV0dG9uRWxlbWVudCwgdXNlcjogU2lnbkluKXtcclxuICAgIGdhbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgY29uc3QgdXNlcldvcmRzID0gKGF3YWl0IHRoaXMuYXBpVXNlcnNXb3Jkcy5nZXRBbGxVc2VyV29yZHModXNlci50b2tlbiwgdXNlci51c2VySWQpKS5maWx0ZXIoYSA9PiBhLmRpZmZpY3VsdHkgPT09ICdsZWFybmVkJylcclxuICAgICAgY29uc3QgbGVhcm5lZFdvcmRzQXJyYXkgPSB1c2VyV29yZHMubWFwKGEgPT4gYS5vcHRpb25hbCkgYXMgSVdvcmRbXVxyXG4gICAgICBjb25zdCB3b3Jkc0FycmF5OiBJV29yZFtdID0gW11cclxuXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gTnVtYmVyKHRoaXMuY3VycmVudFBhZ2UpOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IHBhZ2VXb3JkcyA9IGF3YWl0IHRoaXMuZ2V0V29yZHNQYWdlKHRoaXMuY3VycmVudExldmVsLCBpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgY29uc3QgcGFzc2VkV29yZHMgPSB0aGlzLnJlc3VsdGluZ0J5SWRBcnJheShsZWFybmVkV29yZHNBcnJheSwgcGFnZVdvcmRzLCBmYWxzZSlcclxuICAgICAgICB3b3Jkc0FycmF5LnB1c2goLi4ucGFzc2VkV29yZHMpXHJcbiAgICAgIH1cclxuICAgICAgbG9jYWxTdG9yYWdlLndvcmRzRm9yR2FtZXMgPSBKU09OLnN0cmluZ2lmeSh3b3Jkc0FycmF5KVxyXG4gICAgICB0aGlzLnN0YXJ0R2FtZS5zdGFydChlLnRhcmdldClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpc1BhZ2VDb21wbGV0ZSgpe1xyXG4gICAgY29uc3QgY2FyZFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC13cmFwcGVyJylcclxuICAgIGNvbnN0IHBhZ2VJbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wYWdlJylcclxuICAgIGNvbnN0IGhhcmRDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oYXJkJylcclxuICAgIGNvbnN0IGxlYXJuZWRDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZWFybmVkJylcclxuICAgIGlmKGhhcmRDYXJkcy5sZW5ndGggKyBsZWFybmVkQ2FyZHMubGVuZ3RoID09PSAyMCkge1xyXG4gICAgICBjYXJkV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKVxyXG4gICAgICBwYWdlSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY2FyZFdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJylcclxuICAgICAgcGFnZUluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNQYWdlTGVhcm5lZCgpe1xyXG4gICAgY29uc3QgY2FyZFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC13cmFwcGVyJylcclxuXHJcbiAgICBjb25zdCBsZWFybmVkQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGVhcm5lZCcpXHJcblxyXG4gICAgY29uc3QgYXVkaW9DYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLWNhbGwnKVxyXG4gICAgY29uc3Qgc3ByaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwcmludCcpXHJcblxyXG4gICAgY29uc3QgYXVkaW9DYWxsQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IGF1ZGlvQ2FsbC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1saW5rJylcclxuICAgIGNvbnN0IHNwcmludEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBzcHJpbnQucXVlcnlTZWxlY3RvcignLmdhbWUtbGluaycpXHJcbiAgICBpZihsZWFybmVkQ2FyZHMubGVuZ3RoID09PSAyMCkge1xyXG4gICAgICBhdWRpb0NhbGxCdXR0b24uZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgIHNwcmludEJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgY2FyZFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1sZWFybmVkJylcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBhdWRpb0NhbGxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICBzcHJpbnRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICBjYXJkV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLWxlYXJuZWQnKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImNsYXNzIFN0YXJ0R2FtZXtcclxuICAgIHN0YXJ0KHRhcmdldCl7XHJcbiAgICAgICAgaWYodGFyZ2V0LmlubmVySFRNTD09PSdBdWRpbyBDYWxsJyl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnLi9nYW1lcy5odG1sP1RleHRib29rJ1xyXG4gICAgICAgIH0gZWxzZSBpZih0YXJnZXQuaW5uZXJIVE1MPT09J1NwcmludCcpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJy4vc3ByaW50Lmh0bWw/VGV4dGJvb2snXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJ0R2FtZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9tYWluLnNjc3MnXHJcbmltcG9ydCBBcGlXb3JkcyBmcm9tIFwiLi4vLi4vYXBpL2FwaVdvcmRzXCJcclxuaW1wb3J0IHsgV29yZHMgfSBmcm9tICcuL3dvcmRzJ1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnLi9wYWdpbmF0aW9uJ1xyXG4vLyBpbXBvcnQgQXBpVXNlcnMgZnJvbSAnLi4vLi4vYXBpL2FwaVVzZXJzJ1xyXG4vLyBpbXBvcnQgQXBpVXNlcnNXb3JkcyBmcm9tICcuLi8uLi9hcGkvYXBpVXNlcnNXb3JkcydcclxuLy8gaW1wb3J0IEFwaVVzZXJzU2V0dGluZ3MgZnJvbSAnLi4vLi4vYXBpL2FwaVVzZXJzU2V0dGluZ3MnXHJcbi8vIGltcG9ydCBBcGlTaWduSW4gZnJvbSAnLi4vLi4vYXBpL2FwaVNpZ25JbidcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIGFjY29yZGFuY2Uge1xyXG4gIEExID0gJzAnLFxyXG4gIEEyID0gJzEnLFxyXG4gIEIxID0gJzInLFxyXG4gIEIyID0gJzMnLFxyXG4gIEMxID0gJzQnLFxyXG4gIEMyID0gJzUnLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERpZmZpY3VsdHlMZXZlbHMge1xyXG5cclxuXHJcbiAgLy8gcHJpdmF0ZSBudW1iZXJPZlBhZ2VzOiBudW1iZXIgPSAzMFxyXG4gIHByaXZhdGUgaGFyZFdvcmRzOiBIVE1MRWxlbWVudFxyXG4gIHByaXZhdGUgbGV2ZWxzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+XHJcbiAgcHJpdmF0ZSBhcGlXb3JkczogQXBpV29yZHNcclxuICBwcml2YXRlIHdvcmRzOiBXb3Jkc1xyXG4gIHByaXZhdGUgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxyXG5cclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy53b3JkcyA9IG5ldyBXb3JkcygpXHJcbiAgICB0aGlzLmFwaVdvcmRzID0gbmV3IEFwaVdvcmRzKClcclxuICAgIHRoaXMucGFnaW5hdGlvbiA9IG5ldyBQYWdpbmF0aW9uKClcclxuICAgIGNvbnN0IGxldmVsc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGV2ZWwnKVxyXG4gICAgdGhpcy5sZXZlbHMgPSBsZXZlbHNMaXN0IFxyXG4gICAgdGhpcy5oYXJkV29yZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGV2ZWwtaGFyZC13b3JkcycpXHJcbiAgICBpZihsb2NhbFN0b3JhZ2UubGV2ZWwgPT09ICdoYXJkLXdvcmRzJykge1xyXG4gICAgICB0aGlzLndvcmRzLmhhcmRXb3Jkc1JlbmRlcigpXHJcbiAgICB9XHJcbiAgICBlbHNlIHRoaXMud29yZHMucmVuZGVyKGxvY2FsU3RvcmFnZS5sZXZlbCwgbG9jYWxTdG9yYWdlLnBhZ2UpXHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKCl7XHJcbiAgICB0aGlzLmxldmVscy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHRMZXZlbChlbClcclxuICAgICAgICBjb25zdCBsZXZlbCA9IGVsLmNsYXNzTGlzdFsxXS5zcGxpdCgnbGV2ZWwtJylbMV1cclxuICAgICAgICB0aGlzLndvcmRzLmN1cnJlbnRMZXZlbCA9IGxldmVsXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmxldmVsID0gbGV2ZWxcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucGFnZSA9ICcwJ1xyXG4gICAgICAgIHRoaXMud29yZHMuY3VycmVudFBhZ2UgPSAnMSdcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb24ucmVzZXQoKVxyXG4gICAgICAgIHRoaXMud29yZHMucmVuZGVyKGxldmVsLCAnMCcpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuaGFyZFdvcmRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodEhhcmRXb3JkcygpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5sZXZlbCA9ICdoYXJkLXdvcmRzJ1xyXG4gICAgICB0aGlzLndvcmRzLmhhcmRXb3Jkc1JlbmRlcigpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGlnaGxpZ2h0TGV2ZWwobGV2ZWw6IEVsZW1lbnQpe1xyXG4gICAgY29uc3QgYWxsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZXZlbCcpXHJcbiAgICB0aGlzLmhhcmRXb3Jkcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgYWxsQnV0dG9ucy5mb3JFYWNoKChhKSA9PiB7XHJcbiAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH0pXHJcbiAgICBsZXZlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gIH1cclxuICBcclxuICBoaWdobGlnaHRIYXJkV29yZHMoKXtcclxuICAgIGNvbnN0IGFsbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGV2ZWwnKVxyXG4gICAgYWxsQnV0dG9ucy5mb3JFYWNoKChhKSA9PiB7XHJcbiAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH0pXHJcbiAgICB0aGlzLmhhcmRXb3Jkcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYWdlJywgJzAnKVxyXG4vLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGV2ZWwnLCAnMCcpXHJcbi8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSlcclxuY29uc3QgbGV2ZWxzID0gbmV3IERpZmZpY3VsdHlMZXZlbHMoKVxyXG5sZXZlbHMub25DbGljaygpXHJcbi8vIGNvbnN0IGFwaVNpZ25JbiA9IG5ldyBBcGlTaWduSW4oKVxyXG4vLyBjb25zdCBhcGlVc2Vyc1dvcmRzID0gbmV3IEFwaVVzZXJzV29yZHMoKVxyXG4vLyBjb25zdCBhcGlVc2VycyA9IG5ldyBBcGlVc2VycygpXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIobmFtZSwgZW1haWwsIHBhc3N3b3JkKSB7XHJcbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlVc2Vycy5jcmVhdGVVc2VyKG5hbWUsIGVtYWlsLCBwYXNzd29yZClcclxuLy8gICBjb25zdCBzaWduSW4gPSBhd2FpdCBhcGlTaWduSW4uc2lnbkluKFwicGFzaGEyQGdtYWlsLmNvbVwiLCAncGFzaGExMTIzNCcpXHJcbi8vICAgLy8gY29uc3QgbmV3V29yZCA9IGF3YWl0IGFwaVVzZXJzV29yZHMuY3JlYXRlVXNlcldvcmQoc2lnbkluLnRva2VuLCBzaWduSW4udXNlcklkLCBcIjVlOWY1ZWUzNWViOWU3MmJjMjFhZjRhMFwiLCAnZWFzeScpXHJcbi8vICAgY29uc3QgYWxsV29yZHMgPSBhd2FpdCBhcGlVc2Vyc1dvcmRzLmdldEFsbFVzZXJXb3JkcyhzaWduSW4udG9rZW4sIHNpZ25Jbi51c2VySWQpXHJcbi8vICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbi8vICAgLy8gY29uc29sZS5sb2cobmV3V29yZClcclxuLy8gICBjb25zb2xlLmxvZyhhbGxXb3JkcylcclxuLy8gfVxyXG5cclxuLy8gY3JlYXRlVXNlcihcInBhc2hhM1wiLCBcInBhc2hhM0BnbWFpbC5jb21cIiwgJ3Bhc2hhMTEyMzQnKVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==