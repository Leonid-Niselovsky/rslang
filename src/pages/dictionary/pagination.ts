import { Words } from "./words"

export class Pagination {

  private prevPage: HTMLButtonElement
  private nextPage: HTMLButtonElement
  private currentPageIndicator: HTMLSpanElement
  private words: Words
  private _currentPage: string

  set currentPage(page: string){
    this._currentPage = page
    this.currentPageIndicator.innerText = page.toString()
  }

  get currentPage(): string{
    return this._currentPage
  }


  constructor(){
    this.prevPage = document.querySelector('.prev')
    this.nextPage = document.querySelector('.next')
    this.currentPageIndicator = document.querySelector('.current-page')
    this.currentPage = this.currentPageIndicator.innerText
    console.log(this.currentPage)
    this.words = new Words()
    this.addClickListener()
  }

  toNextPage(){
    const currentLevel = this.words.currentLevel
    // if(!currentLevel) return null

  
    if(+this.currentPage >= 1 && +this.currentPage < 30) {
      this.nextPage.disabled = false
      this.prevPage.disabled = false
      this.currentPage = (+this.currentPage + 1).toString()

      if(+this.currentPage === 30) this.nextPage.disabled = true

      this.currentPageIndicator.innerText = (this.currentPage).toString()
      this.words.render(currentLevel, this.currentPage.toString())
    }

  }

  toPrevPage(){
    const currentLevel = this.words.currentLevel
    // if(!currentLevel) return null

    if(+this.currentPage > 1 && +this.currentPage <= 30) {
      this.prevPage.disabled = false
      this.nextPage.disabled = false
      this.currentPage = (+this.currentPage - 1).toString()

      if(+this.currentPage === 1) this.prevPage.disabled = true

      this.currentPageIndicator.innerText = this.currentPage
      this.words.render(currentLevel, this.currentPage)
    }
  }

  reset(){
    this.prevPage.disabled = true
    this.nextPage.disabled = false
  }

  addClickListener(){
    this.prevPage.addEventListener('click', () => this.toPrevPage())
    this.nextPage.addEventListener('click', () => this.toNextPage())
  }


}