import ApiWords from "../../api/apiWords"
import { Words } from "./words"

export class DifficultyLevels {

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
        this.words.push(level, await this.getWordsChunk(2))
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