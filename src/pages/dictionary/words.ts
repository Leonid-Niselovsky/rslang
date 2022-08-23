import {Words as IWord} from './../../api/interface'
import { Word } from './word'

interface IWords {
  'A1': Map<number, IWord>,
  'A2': Map<number, IWord>,
  'B1': Map<number, IWord>,
  'B2': Map<number, IWord>,
  'C1': Map<number, IWord>,
  'C2': Map<number, IWord>,
}

let instance

export class Words {

  private _currentLevel: string

  get currentLevel(): string{
    return this._currentLevel
  }

  set currentLevel(level: string){
    this._currentLevel = level
  }


  private _allWords: IWords

  set allWords(words: IWords){
    this._allWords = words
  }

  get allWords(): IWords{
    return this._allWords
  }


  constructor() {
    if(!instance) instance = this
    this._allWords = {
      'A1': new Map<number, IWord>(),
      'A2': new Map<number, IWord>(),
      'B1': new Map<number, IWord>(),
      'B2': new Map<number, IWord>(),
      'C1': new Map<number, IWord>(),
      'C2': new Map<number, IWord>(),
    }
    return instance
  }

  push(level: string, chunk: Map<number, IWord[]>){
    if(this.checkLevel(level)) return null
    this.allWords[level] = chunk
  }

  checkLevel(level: string): boolean{
    if(!this.allWords[level].size) return false
    return true
  }

  getLevelWords(level: string): Map<number, IWord[]>{
    return this.allWords[level]
  }

  getLevelPage(page: number){
    return this.getLevelWords(this.currentLevel)[page]
  }

  log(){
    console.log(this.allWords)
  }

  render(level: string, page: number){

    this.renderCardButton(level, page)

  }

  renderCardButton(level: string, page: number){
    const cardWrapper: HTMLElement = document.querySelector('.card-wrapper')

    const levelWords = this.getLevelWords(level)
    cardWrapper.innerHTML = ""
    const size = levelWords.get(page).length

    for(let i = 0; i < size; i++) {
      const word = new Word()
      cardWrapper.append(word.cardCreate(levelWords.get(page)[i], this.renderSideBar))
    }

  }

  renderSideBar(word: IWord){
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
    const controlsHtml = `
      <button class="word-control hard-word">Добавить в сложные</button>
      <button class="word-control remove-word">Удалить</button>
      <button class="word-control learned-word">Отметить как изученное</button>
    `
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

