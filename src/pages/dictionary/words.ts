import {Words as IWord} from './../../api/interface'
import { Word } from './word'


interface IWords {
  'A1': IWord[],
  'A2': IWord[],
  'B1': IWord[],
  'B2': IWord[],
  'C1': IWord[],
  'C2': IWord[],
}

export class Words {



  private _allWords: IWords

  set allWords(words: IWords){
    this._allWords = words
  }

  get allWords(): IWords{
    return this._allWords
  }


  constructor() {
    this._allWords = {
      'A1': [],
      'A2': [],
      'B1': [],
      'B2': [],
      'C1': [],
      'C2': [],
    }

  }

  push(level: string, chunk: IWord[]){
    if(this.checkLevel(level)) return null
    this.allWords[level] = chunk
  }

  checkLevel(level: string): boolean{
    if(!this.allWords[level].length) return false
    return true
  }

  getLevelWords(level: string): IWord[]{
    return this.allWords[level]
  }

  log(){
    console.log(this.allWords)
  }

  render(level: string){
    
    const prevContainer: HTMLElement = document.querySelector('.card-wrapper')
    if(prevContainer) prevContainer.remove()

    const levelWords = this.getLevelWords(level)
    let html = ""
    for(let i = 0; i < levelWords.length; i++){
      const word = new Word(levelWords[i].word, levelWords[i].wordTranslate)
      html += word.htmlCode
    }
    const container = document.createElement('div')
    container.classList.add('card-wrapper')
    container.innerHTML = html
    document.body.append(container)
  }

}