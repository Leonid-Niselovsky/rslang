import {Words as IWord} from './../../api/interface'

export class Word {

  private _htmlCode: string

  get htmlCode(): string{
    return this._htmlCode
  }

  

  // constructor(word: string, wordTranslate: string){
  //   this._htmlCode = `
  //     <button class='card-word ${word}'>
  //       <h4 card-word-title>${word}</h4>
  //       <span class card-word-translate>${wordTranslate}</span>
  //     </button>
  //   `
  // }

  cardCreate(word: string, wordTranslate: string): HTMLButtonElement{

    const button: HTMLButtonElement = document.createElement('button')
    button.classList.add('card-word', word)

    const h4: HTMLHeadElement = document.createElement('h4')
    h4.classList.add('card-word-title')
    h4.textContent = word

    const span: HTMLHeadElement = document.createElement('span')
    span.classList.add('card-word-translate')
    span.textContent = wordTranslate

    button.append(h4, span)

    return button
  }

}