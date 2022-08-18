interface IWords {
  'A1': IWord[],
  'A2': IWord[],
  'B1': IWord[],
  'B2': IWord[],
  'C1': IWord[],
  'C2': IWord[],
}

interface IWord {
  "id": string,
  "group": 0,
  "page": 0,
  "word": string,
  "image": string,
  "audio": string,
  "audioMeaning": string,
  "audioExample": string,
  "textMeaning": string,
  "textExample": string,
  "transcription": string,
  "wordTranslate": string,
  "textMeaningTranslate": string,
  "textExampleTranslate": string
}


export class Words {

  private allWords: IWords

  constructor() {
    this.allWords = {
      'A1': [],
      'A2': [],
      'B1': [],
      'B2': [],
      'C1': [],
      'C2': [],
    }
  }

  push(level: string, chunk: IWord[]){
    this.allWords[level] = chunk
    console.log(this.allWords)
  }
}