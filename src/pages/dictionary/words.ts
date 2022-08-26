import ApiWords from '../../api/apiWords'
import {UserWords, Words as IWord} from './../../api/interface'
import { Word } from './word'
import {accordance} from './dictionary'
import ApiUsers from '../../api/apiUsers'
import ApiUsersWords from '../../api/apiUsersWords'
import ApiUsersSettings from '../../api/apiUsersSettings'
import ApiSignIn from '../../api/apiSignIn'
import {SignIn} from '../../api/interface'

// interface IWords {
//   'A1': Map<number, IWord>,
//   'A2': Map<number, IWord>,
//   'B1': Map<number, IWord>,
//   'B2': Map<number, IWord>,
//   'C1': Map<number, IWord>,
//   'C2': Map<number, IWord>,
// }

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


  // private _allWords: IWords

  // set allWords(words: IWords){
  //   this._allWords = words
  // }

  // get allWords(): IWords{
  //   return this._allWords
  // }


  constructor() {
    if(!instance) instance = this
    // this._allWords = {
    //   'A1': new Map<number, IWord>(),
    //   'A2': new Map<number, IWord>(),
    //   'B1': new Map<number, IWord>(),
    //   'B2': new Map<number, IWord>(),
    //   'C1': new Map<number, IWord>(),
    //   'C2': new Map<number, IWord>(),
    // }
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
    this.renderCardButton(wordsArray, user)

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
    this.renderCardButton(wordsArray, user)
  }

  renderCardButton(words: IWord[], user: SignIn){
    const cardWrapper: HTMLElement = document.querySelector('.card-wrapper')

    cardWrapper.innerHTML = ""

    for(let i = 0; i < words.length; i++) {
      const word = new Word()
      cardWrapper.append(word.cardCreate(words[i], this.renderSideBar, this.hardWordHandler, this.leadrnedWordHandler, user, this.apiUsersWords))
    }


  }

  renderSideBar(word: IWord, hardWordHandler, learnedWordHandler, user: SignIn, apiUsersWords: ApiUsersWords){
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
    const buttons = `
      <button class="word-control hard-word">Добавить в сложные</button>
      <button class="word-control learned-word">Отметить как изученное</button>
    `
    const controlsHtml = `${user ? buttons: ''}`
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

    const hardWord: HTMLButtonElement = document.querySelector('.hard-word')
    hardWordHandler(hardWord, user, apiUsersWords, word)

    const learnedWord: HTMLButtonElement = document.querySelector('.learned-word')
    learnedWordHandler(learnedWord, user, apiUsersWords, word)
  }

  hardWordHandler(toHardWordsButton: HTMLButtonElement, user: SignIn, apiUsersWords: ApiUsersWords, word: IWord){
    toHardWordsButton.addEventListener('click', async () => {
      const response = await apiUsersWords.getUserWordById(user.token, user.userId, word.id)
      if(!response) {
        await apiUsersWords.createUserWord(user.token, user.userId, word.id, 'hard', word)
      }
    })
  }

  leadrnedWordHandler(toLearnedWordsButton: HTMLButtonElement, user: SignIn, apiUsersWords: ApiUsersWords, word: IWord){
    toLearnedWordsButton.addEventListener('click', async () => {
      const response = await apiUsersWords.getAllUserWords(user.token, user.userId)
      console.log(response)
    })
  }


    // push(level: string, chunk: Map<number, IWord[]>){
  //   if(this.checkLevel(level)) return null
  //   this.allWords[level] = chunk
  // }

  // checkLevel(level: string): boolean{
  //   if(!this.allWords[level].size) return false
  //   return true
  // }

  // getLevelWords(level: string): Map<number, IWord[]>{
  //   return this.allWords[level]
  // }

  // getLevelPage(page: number){
  //   return this.getLevelWords(this.currentLevel)[page]
  // }

  // log(){
  //   console.log(this.allWords)
  // }
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




