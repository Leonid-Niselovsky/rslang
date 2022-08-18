export class Word {

  private _htmlCode: string

  get htmlCode(): string{
    return this._htmlCode
  }

  

  constructor(word: string, wordTranslate: string){
    this._htmlCode = `
      <button class='card-word'>
        <h4 card-word-title>${word}</h4>
        <span class card-word-translate>${wordTranslate}</span>
      </button>
    `
  }
}