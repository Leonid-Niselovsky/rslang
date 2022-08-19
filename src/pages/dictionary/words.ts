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
    this._allWords = {
      'A1': new Map<number, IWord>(),
      'A2': new Map<number, IWord>(),
      'B1': new Map<number, IWord>(),
      'B2': new Map<number, IWord>(),
      'C1': new Map<number, IWord>(),
      'C2': new Map<number, IWord>(),
    }

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

    const prevContainer: HTMLElement = document.querySelector('.card-wrapper')
    if(prevContainer) prevContainer.remove()

    const levelWords = this.getLevelWords(level)
    let html = ""
    //const word = new Word(levelWords[page].word, levelWords[page].wordTranslate)
    //html += word.htmlCode

    const container = document.createElement('div')
    container.classList.add('card-wrapper')
    container.innerHTML = html
    document.body.append(container)
  }

}