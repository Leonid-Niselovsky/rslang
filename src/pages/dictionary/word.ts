import {Words as IWord} from './../../api/interface'

export class Word {

  private _htmlCode: string

  get htmlCode(): string{
    return this._htmlCode
  }


  cardCreate(word: IWord, wordCardHandler, hardWordHandler, learnedWordHandler): HTMLButtonElement{

    const button: HTMLButtonElement = document.createElement('button')
    button.classList.add('card-word', word.word)

    const h4: HTMLHeadElement = document.createElement('h4')
    h4.classList.add('card-word-title')
    h4.textContent = word.word

    const span: HTMLHeadElement = document.createElement('span')
    span.classList.add('card-word-translate')
    span.textContent = word.wordTranslate

    button.addEventListener('click', () => wordCardHandler(word, hardWordHandler, learnedWordHandler))
    button.append(h4, span)

    return button
  }

}