import ApiWords from "../../api/apiWords"
import { Words } from "./words"

enum accordance {
  A1 = 0,
  A2 = 1,
  B1 = 2,
  B2 = 3,
  C1 = 4,
  C2 = 5,
}

export class DifficultyLevels {

  private _currentLevel: string

  get currentLevel(): string{
    return this._currentLevel
  }

  set currentLevel(level: string){
    this._currentLevel = level
  }

  private numberOfPages: number = 30
  private levels: NodeListOf<Element>
  private apiWords: ApiWords
  private words: Words

  constructor(){
    this.words = new Words()
    this.apiWords = new ApiWords()
    const levelsList = document.querySelectorAll('.level')
    this.levels = levelsList 
  }

  onClick(){
    this.levels.forEach(el => {
      el.addEventListener('click', async () => {
        const level = el.classList[1].split('level-')[1]
        if(!this.words.checkLevel(level)){
          this.words.push(level, await this.getWordsChunk(accordance[level]))
        }
        this.words.log()
        this.currentLevel = level
        this.words.render(this.currentLevel)
      })
    })
  }

  async getWordsChunk(level: number){
    const chunk = []
    for(let i = 0; i < this.numberOfPages; i++){
      const wordArr = await this.apiWords.getChunkOfWords(i, level)
      chunk.push(...wordArr)
    }
    return chunk
  }
  
}

const levels = new DifficultyLevels()
levels.onClick()