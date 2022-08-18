import ApiWords from "../../api/apiWords"
import { Words } from "./words"

export class DifficultyLevels {

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
    this.levels.forEach(level => {
      level.addEventListener('click', async (e) => {
        console.log(await this.getWordsChunk())
      })
    })
  }

  async getWordsChunk(){
    return this.apiWords.getChunkOfWords(0, 0)
  }

}

const levels = new DifficultyLevels()
levels.onClick()