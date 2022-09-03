import ApiWords from '../../api/apiWords'
import {UserWords, Words as IWord} from './../../api/interface'
import ApiUsersWords from '../../api/apiUsersWords'
import {SignIn} from '../../api/interface'
import {gameLink} from '../dictionary/gameLink'
import {audioPlayback} from '../dictionary/audioPlayback'
import StartGame from '../games/startGameTextBook/startGame'

let instance

export class Words {

  private apiWords: ApiWords
  private _currentLevel: string
  private _currentPage: string
  // private apiSignIn: ApiSignIn
  private apiUsersWords: ApiUsersWords
  startGame: StartGame

  get currentLevel(): string{
    return this._currentLevel
  }

  set currentLevel(level: string){
    this._currentLevel = level
  }

  get currentPage(): string{
    return this._currentPage
  }

  set currentPage(page: string){
    this._currentPage = page
  }

  constructor() {
    if(!instance) instance = this
    this.apiWords = new ApiWords()
    // this.apiSignIn = new ApiSignIn()
    this.apiUsersWords = new ApiUsersWords()
    this.startGame = new StartGame()
    return instance
  }

  // async getSignInUser(){
  //   const user = await this.apiSignIn.signIn("pasha3@gmail.com", 'pasha11234')
  //   return user
  // }

  
  async getWordsPage(level: string, page: string){
      const wordArr = await this.apiWords.getChunkOfWords(page, level)
    return wordArr
  }



  async render(level: string, page: string){
    const difficultyLevel = document.querySelector(`.level-${localStorage.level}`)

    if(difficultyLevel) difficultyLevel.classList.add('active')

    const pagination: HTMLElement = document.querySelector('.pagination')
    const hardWords: HTMLElement = document.querySelector('.level-hard-words')
    pagination.style.display = 'flex'

    let user: SignIn
    if(localStorage.user) {  
      user = JSON.parse(localStorage.user)
      console.log('user:', user)
    }
    else{
      user = null
    }
    if(user){
      hardWords.style.display = 'inline-block'
    }
    else{
      hardWords.style.display = 'none'
    }
    console.log(localStorage)
    console.log(level, page, user)
    const wordsArray = await this.getWordsPage(level, page)
    this.currentLevel = level
    this.currentPage = page
    console.log(this.currentPage)
    this.renderLinks(user)
    if(user){
      this.addStyles(user, wordsArray)
    }
    this.renderCardButton(wordsArray, user, false)
  }


  async hardWordsRender(){
    const difficultyLevel = document.querySelector(`.level-${localStorage.level}`)

    if(difficultyLevel) difficultyLevel.classList.add('active')

    const pagination: HTMLElement = document.querySelector('.pagination')
    pagination.style.display = 'none'
    let user: SignIn
    if(localStorage.user) {  
      user = JSON.parse(localStorage.user)
    }
    else{
      user = null
    }
    const allUserWords = await this.apiUsersWords.getAllUserWords(user.token, user.userId)
    const hardWordsArray = allUserWords.filter(a => {
      if(a.difficulty === 'hard') return true
      return false
    })
    const wordsArray = hardWordsArray.map(a => {
      return a.optional
    }) as IWord[]
    console.log(wordsArray)
    this.renderCardButton(wordsArray, user, true)
  }

  async addStyles(user: SignIn, wordsArray: IWord[]){
    const hardWords = (await this.apiUsersWords.getAllUserWords(user.token, user.userId)).filter(a => a.difficulty === 'hard')
    const learnedWords = (await this.apiUsersWords.getAllUserWords(user.token, user.userId)).filter(a => a.difficulty === 'learned')

    const hardWordsArray = hardWords.map(a => a.optional) as IWord[]
    const learnedWordsArray = learnedWords.map(a => a.optional) as IWord[]

    const resultingByHard = this.resultingByIdArray(hardWordsArray, wordsArray, true)
    const resultingBylearned = this.resultingByIdArray(learnedWordsArray, wordsArray, true)
    console.log(resultingByHard, resultingBylearned)

    resultingByHard.forEach(a => {
      const el = document.querySelector(`#${a.word}`)
      el.classList.add('hard')
    })

    resultingBylearned.forEach(a => {
      const el = document.querySelector(`#${a.word}`)
      el.classList.add('learned')
    })

    this.isPageComplete()
    this.isPageLearned()
  }

  highlightButton(button: HTMLElement){
    const allButtons = document.querySelectorAll('.card-word')
    allButtons.forEach((a) => {
      a.classList.remove(`active-${localStorage.level}`, 'active')
    })
    button.classList.add(`active-${localStorage.level}`, 'active')
    console.log(button)
  }

  resultingByIdArray(userWords: IWord[], wordsArray: IWord[], include: boolean){
    const included: IWord[] = []

    if(include){
      for(let i = 0; i < userWords.length; i++){
        for(let j = 0; j < wordsArray.length; j++){
            if(userWords[i].id === wordsArray[j].id) {
              included.push(userWords[i])
              break
            }
        }
      }
    }

    else {
      for(let i = 0; i < wordsArray.length; i++){
        let flag = false
        for(let j = 0; j < userWords.length; j++){
            if(wordsArray[i].id !== userWords[j].id) {
              flag = true
            }
            else{
              flag = false
              break
            }
        }
        if(flag) included.push(wordsArray[i])
      }
    }
    return included
  }


  
  renderCardButton(words: IWord[], user: SignIn, isHardWords: boolean){
    const cardWrapper: HTMLElement = document.querySelector('.card-wrapper')

    cardWrapper.innerHTML = ""

    for(let i = 0; i < words.length; i++) {
      cardWrapper.append(this.cardCreate(words[i],  user, isHardWords))
    }


  }


  cardCreate(word: IWord, user: SignIn,  isHardWords: boolean): HTMLButtonElement{

    const button: HTMLButtonElement = document.createElement('button')
    button.classList.add('card-word')
    button.id = word.word

    const h4: HTMLHeadElement = document.createElement('h4')
    h4.classList.add('card-word-title')
    h4.textContent = word.word

    const span: HTMLHeadElement = document.createElement('span')
    span.classList.add('card-word-translate')
    span.textContent = word.wordTranslate

    button.addEventListener('click', () => {
      this.renderSideBar(word, user, isHardWords)
      this.highlightButton(button)
    })
    button.append(h4, span)

    if(localStorage.level !== 'hard-words'){
      this.isPageComplete()
      this.isPageLearned()
    }

    return button
  }


  renderSideBar(word: IWord, user: SignIn, isHardWords: boolean,){
    const url = 'https://learnwords124.herokuapp.com/'
    const sideBar: HTMLElement = document.querySelector('.side-bar')
    const audio = audioPlayback(word, url)
    sideBar.innerHTML = ''
    sideBar.append(audio)
    const html = `
      <img class="word-img" src="${url}${word.image}">
      <div class="word-overview">    
        <div class="full-word">   
          <span class="word-transcription">${word.transcription}</span>
          <h3 class="word-title">${word.word}</h3>
        </div>  
        <h4 class="word-subtitle">${word.wordTranslate}</h4>
      </div>
    `
    sideBar.innerHTML = html
    const fullWord = document.querySelector('.full-word')
    fullWord.append(audio)

    // const overview = document.querySelector('.word-overview')

    // overview.append(audio)

    const wordControls = document.createElement('div')
    wordControls.classList.add('word-controls')
    const deleteButton = `<button class="word-control delete-word">Удалить из сложных</button>`
    const buttons = `
      <button class="word-control hard-word">+ В сложные слова</button>
      <button class="word-control learned-word">+ В изученные слова</button>
    `
    const controlsHtml = `${!user ? '': isHardWords ? deleteButton : buttons}`
    wordControls.innerHTML = controlsHtml
    sideBar.append(wordControls)

    const wordDescription = document.createElement('div')
    wordDescription.classList.add('word-description')
    const wordDescriptionHtml = ` 
        <h2>Значение</h2>
        <div class="word-meaning">${word.textMeaning}</div>
        <div class="word-meaning-translate">${word.textMeaningTranslate}</div>
        <h2>Пример</h2>
        <div class="word-example">${word.textExample}</div>
        <div class="word-example-translate">${word.textExampleTranslate}</div>
    `
    wordDescription.innerHTML = wordDescriptionHtml
    sideBar.append(wordDescription)

    const ingameStatistic = document.createElement('div')
    ingameStatistic.classList.add('ingame-statistics')
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
    `
    ingameStatistic.innerHTML = ingameStatisticHtml
    sideBar.append(ingameStatistic)

    if(!isHardWords && user){
      const hardWord: HTMLButtonElement = document.querySelector('.hard-word')
      this.hardWordHandler(hardWord, user,  word)

      const learnedWord: HTMLButtonElement = document.querySelector('.learned-word')
      this.learnedWordHandler(learnedWord, user,  word)
    }
    else if(user){
      const deleteWord: HTMLButtonElement = document.querySelector('.delete-word')
      this.deleteWordHandler(deleteWord, user, word)
    }
  }

  renderLinks(user: SignIn){
    const gameLinks = document.querySelector('.game-links')
    gameLinks.innerHTML = ''

    const game1 = 'Audio Call'
    const game2 = 'Sprint'

    const audioCall = document.createElement('div')
    audioCall.innerHTML = gameLink(game1)
    audioCall.classList.add('audio-call')

    const sprint = document.createElement('div')
    sprint.innerHTML = gameLink(game2)
    sprint.classList.add('sprint')

    const audioCallButton: HTMLButtonElement = audioCall.querySelector('.game-link')
    const sprintButton: HTMLButtonElement = sprint.querySelector('.game-link')

    this.gameLinkHandler(audioCallButton, user)
    this.gameLinkHandler(sprintButton, user)

    gameLinks.append(audioCall, sprint)
  }

  hardWordHandler(toHardWordsButton: HTMLButtonElement, user: SignIn,  word: IWord){
    toHardWordsButton.addEventListener('click', async () => {
      const response = await this.apiUsersWords.getUserWordById(user.token, user.userId, word.id) // Создаю новое пользовательское слово 
      if(!response) {
        await this.apiUsersWords.createUserWord(user.token, user.userId, word.id, 'hard', word)
        this.render(this.currentLevel, this.currentPage)
      }
    })
  }

  learnedWordHandler(toLearnedWordsButton: HTMLButtonElement, user: SignIn,  word: IWord){
    toLearnedWordsButton.addEventListener('click', async () => {
      const response = await this.apiUsersWords.getUserWordById(user.token, user.userId, word.id)
      if(!response) {
        await this.apiUsersWords.createUserWord(user.token, user.userId, word.id, 'learned', word) // Создаю новое пользовательское слово
        this.render(this.currentLevel, this.currentPage)
      }
      else{
        await this.apiUsersWords.updateUserWord(user.token, user.userId, word.id, 'learned', word) // Обновляю пользовательское слово если пришёл ответ
        this.render(this.currentLevel, this.currentPage)
      }
    })
  }
  
  deleteWordHandler(deleteWordsButton: HTMLButtonElement, user: SignIn, word: IWord){
    deleteWordsButton.addEventListener('click', async () => {
      await this.apiUsersWords.deleteUserWord(user.token, user.userId, word.id) // Удаляю слово без проверки потому что кнопка на 
      this.hardWordsRender()                                                    // которой слушатель есть только у слов которые есть у пользователя
    })
  }

  gameLinkHandler(gameLink: HTMLButtonElement, user: SignIn){
    gameLink.addEventListener('click', async (e) => {
      const userWords = (await this.apiUsersWords.getAllUserWords(user.token, user.userId)).filter(a => a.difficulty === 'learned')
      const learnedWordsArray = userWords.map(a => a.optional) as IWord[]
      const wordsArray: IWord[] = []

      for(let i = 0; i <= Number(this.currentPage); i++){
        const pageWords = await this.getWordsPage(this.currentLevel, i.toString())
        const passedWords = this.resultingByIdArray(learnedWordsArray, pageWords, false)
        wordsArray.push(...passedWords)
      }
      localStorage.wordsForGames = JSON.stringify(wordsArray)
      this.startGame.start(e.target)
    })
  }

  isPageComplete(){
    const cardWrapper = document.querySelector('.card-wrapper')
    const pageIndicator = document.querySelector('.current-page')
    const hardCards = document.querySelectorAll('.hard')
    const learnedCards = document.querySelectorAll('.learned')
    if(hardCards.length + learnedCards.length === 20) {
      cardWrapper.classList.add('completed')
      pageIndicator.classList.add('completed')
    }
    else {
      cardWrapper.classList.remove('completed')
      pageIndicator.classList.remove('completed')
    }
  }

  isPageLearned(){
    const cardWrapper = document.querySelector('.card-wrapper')

    const learnedCards = document.querySelectorAll('.learned')

    const audioCall = document.querySelector('.audio-call')
    const sprint = document.querySelector('.sprint')

    const audioCallButton: HTMLButtonElement = audioCall.querySelector('.game-link')
    const sprintButton: HTMLButtonElement = sprint.querySelector('.game-link')
    if(learnedCards.length === 20) {
      audioCallButton.disabled = true
      sprintButton.disabled = true
      cardWrapper.classList.add('page-learned')
    }
    else {
      audioCallButton.disabled = false
      sprintButton.disabled = false
      cardWrapper.classList.remove('page-learned')
    }
  }
}





