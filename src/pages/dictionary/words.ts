import ApiWords from '../../api/apiWords'
import {UserWords, Words as IWord} from './../../api/interface'
// import { Word } from './word'
import {accordance} from './dictionary'
import ApiUsers from '../../api/apiUsers'
import ApiUsersWords from '../../api/apiUsersWords'
import ApiUsersSettings from '../../api/apiUsersSettings'
import ApiSignIn from '../../api/apiSignIn'
import {SignIn} from '../../api/interface'


let instance

export class Words {

  private apiWords: ApiWords
  private _currentLevel: string
  private apiSignIn: ApiSignIn
  private apiUsersWords: ApiUsersWords

  get currentLevel(): string{
    return this._currentLevel
  }

  set currentLevel(level: string){
    this._currentLevel = level
  }

  constructor() {
    if(!instance) instance = this
    this.apiWords = new ApiWords()
    this.apiSignIn = new ApiSignIn()
    this.apiUsersWords = new ApiUsersWords()
    return instance
  }

  async getSignInUser(){
    const user = await this.apiSignIn.signIn("pasha3@gmail.com", 'pasha11234')
    return user
  }

  
  async getWordsPage(level: string, page: string){
      const wordArr = await this.apiWords.getChunkOfWords(page, level)
    return wordArr
  }



  async render(level: string, page: string){

    const user = await this.getSignInUser()
    console.log(level, page)
    const wordsArray = await this.getWordsPage(level, page)
    console.log(wordsArray)
    this.currentLevel = level
    this.renderCardButton(wordsArray, user, false)

  }

  async hardWordsRender(){
    const user = await this.getSignInUser()
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

  
  cardCreate(word: IWord, user: SignIn,  isHardWords: boolean): HTMLButtonElement{

    const button: HTMLButtonElement = document.createElement('button')
    button.classList.add('card-word', word.word)

    const h4: HTMLHeadElement = document.createElement('h4')
    h4.classList.add('card-word-title')
    h4.textContent = word.word

    const span: HTMLHeadElement = document.createElement('span')
    span.classList.add('card-word-translate')
    span.textContent = word.wordTranslate

    button.addEventListener('click', () => this.renderSideBar(word, user, isHardWords))
    button.append(h4, span)

    return button
  }

  renderCardButton(words: IWord[], user: SignIn, isHardWords: boolean){
    const cardWrapper: HTMLElement = document.querySelector('.card-wrapper')

    cardWrapper.innerHTML = ""

    for(let i = 0; i < words.length; i++) {
      cardWrapper.append(this.cardCreate(words[i],  user, isHardWords))
    }


  }

  renderSideBar(word: IWord, user: SignIn, isHardWords: boolean,){
    const url = 'https://learnwords124.herokuapp.com/'
    const sideBar: HTMLElement = document.querySelector('.side-bar')
    sideBar.innerHTML = ''
    const html = `
      <img class="word-img" src="${url}${word.image}">
      <div class="word-overview">    
        <h3 class="word-title">${word.word}</h3>
        <h4 class="word-subtitle">${word.wordTranslate}</h4>
        <span class="word-transcription">${word.transcription}</span>
      </div>
    `
    sideBar.innerHTML = html

    const overview = document.querySelector('.word-overview')

    const audio = audioPlayback(word, url)
    overview.append(audio)

    const wordControls = document.createElement('div')
    wordControls.classList.add('word-controls')
    const deleteButton = `<button class="word-control delete-word">Удалить из сложных</button>`
    const buttons = `
      <button class="word-control hard-word">Добавить в сложные</button>
      <button class="word-control learned-word">Отметить как изученное</button>
    `
    const controlsHtml = `${!user ? '': isHardWords ? deleteButton : buttons}`
    wordControls.innerHTML = controlsHtml
    sideBar.append(wordControls)

    const wordDescription = document.createElement('div')
    wordDescription.classList.add('word-description')
    const wordDescriptionHtml = ` 
        <h2">Значение</h2>
        <div class="word-meaning">${word.textMeaning}</div>
        <div class="word-meaning-translate">${word.textMeaningTranslate}</div>
        <h2>Пример</h2>
        <div class="word-example">${word.textExample}</div>
        <div class="word-meaning-translate">${word.textExampleTranslate}</div>
    `
    wordDescription.innerHTML = wordDescriptionHtml
    sideBar.append(wordDescription)

    const ingameStatistic = document.createElement('div')
    ingameStatistic.classList.add('ingame-statistic')
    const ingameStatisticHtml = `
      <h2>Правильных ответов в играх</h2>
      <div class="ingame-statistic">
        <span class="game-name">Аудиовызов</span>
        <span class="game-statistic">0/0</span>
      </div>
      <div class="ingame-statistic">
        <span class="game-name">Спринт</span>
        <span class="game-statistic">0/0</span>
      </div>
    `
    ingameStatistic.innerHTML = ingameStatisticHtml
    sideBar.append(ingameStatistic)

    if(!isHardWords){
      const hardWord: HTMLButtonElement = document.querySelector('.hard-word')
      this.hardWordHandler(hardWord, user,  word)

      const learnedWord: HTMLButtonElement = document.querySelector('.learned-word')
      this.learnedWordHandler(learnedWord, user,  word)
    }
    else{
      const deleteWord: HTMLButtonElement = document.querySelector('.delete-word')
      this.deleteWordHandler(deleteWord, user, word)
    }
  }

  hardWordHandler(toHardWordsButton: HTMLButtonElement, user: SignIn,  word: IWord){
    toHardWordsButton.addEventListener('click', async () => {
      const response = await this.apiUsersWords.getUserWordById(user.token, user.userId, word.id)
      if(!response) {
        await this.apiUsersWords.createUserWord(user.token, user.userId, word.id, 'hard', word)
      }
    })
  }

  learnedWordHandler(toLearnedWordsButton: HTMLButtonElement, user: SignIn,  word: IWord){
    toLearnedWordsButton.addEventListener('click', async () => {
      const response = await this.apiUsersWords.getAllUserWords(user.token, user.userId)
      console.log(response)
    })
  }
  
  deleteWordHandler(deleteWordsButton: HTMLButtonElement, user: SignIn,  word: IWord){
    deleteWordsButton.addEventListener('click', async () => {
      await this.apiUsersWords.deleteUser(user.token, user.userId, word.id)
      this.hardWordsRender()
    })
  }

}

function audioPlayback(word: IWord, url: string): HTMLAudioElement{
    
  const sources = [word.audio, word.audioExample, word.audioMeaning]
  let current = 0;

  const audio: HTMLAudioElement = document.createElement('audio')
  audio.setAttribute('controls', '')
  audio.src = `${url}${sources[current]}`
  audio.onended = function(){
    current++;
    if (current >= sources.length) {
      current = 0
      audio.src = `${url}${sources[current]}`
      return null
    }
    audio.src = `${url}${sources[current]}`;
    audio.play();
  }

  return audio
}




