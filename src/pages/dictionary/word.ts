import {Words as IWord} from './../../api/interface'

export class Word {

  private _htmlCode: string

  get htmlCode(): string{
    return this._htmlCode
  }


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