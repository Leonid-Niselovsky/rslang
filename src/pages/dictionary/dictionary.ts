import './main.scss'
import ApiWords from "../../api/apiWords"
import { Words } from './words'
import { Pagination } from './pagination'

export enum accordance {
  A1 = '0',
  A2 = '1',
  B1 = '2',
  B2 = '3',
  C1 = '4',
  C2 = '5',
}

export class DifficultyLevels {


  private numberOfPages: number = 30
  private levels: NodeListOf<Element>
  private apiWords: ApiWords
  private words: Words
  private pagination: Pagination

  constructor(){
    this.words = new Words()
    this.apiWords = new ApiWords()
    this.pagination = new Pagination()
    const levelsList = document.querySelectorAll('.level')
    this.levels = levelsList 
  }

  onClick(){
    this.levels.forEach(el => {
      el.addEventListener('click', async () => {
        const level = el.classList[1].split('level-')[1]
        // if(!this.words.checkLevel(level)){
        //   this.words.push(level, await this.getWordsPage(accordance[level], 1))
        // }
        // this.words.log()
        this.words.currentLevel = level
        this.pagination.currentPage = '1'
        this.pagination.reset()
        this.words.render(accordance[level], '1')
      })
    })
  }

  
}

const levels = new DifficultyLevels()
levels.onClick()
