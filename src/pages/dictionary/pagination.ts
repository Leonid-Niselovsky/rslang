import { Words } from "./words"

export class Pagination {

  private prevPage: HTMLButtonElement
  private nextPage: HTMLButtonElement
  private currentPageIndicator: HTMLSpanElement
  private words: Words
  // private _currentPage: string

  // set currentPage(page: string){
  //   this._currentPage = page
  //   this.currentPageIndicator.innerText = page.toString()
  // }

  // get currentPage(): string{
  //   return this._currentPage
  // }


  constructor(){
    this.prevPage = document.querySelector('.prev')
    this.nextPage = document.querySelector('.next')
    this.currentPageIndicator = document.querySelector('.current-page')
    this.words = new Words()
    this.currentPageIndicator.innerText = (+localStorage.page + 1).toString()
    // this.words.currentPage = this.currentPageIndicator.innerText
    this.addClickListener()
  }

  toNextPage(){
    const currentLevel = this.words.currentLevel
    // if(!currentLevel) return null

  
    if(+this.words.currentPage >= 0 && +this.words.currentPage < 29) {
      this.nextPage.disabled = false
      this.prevPage.disabled = false
      this.words.currentPage = (+this.words.currentPage + 1).toString()
      localStorage.page = this.words.currentPage

      if(+this.words.currentPage === 29) this.nextPage.disabled = true

      this.currentPageIndicator.innerText = (+this.words.currentPage + 1).toString()
      this.words.render(currentLevel, this.words.currentPage)
    }

  }

  toPrevPage(){
    const currentLevel = this.words.currentLevel
    // if(!currentLevel) return null

    if(+this.words.currentPage > 0 && +this.words.currentPage <= 29) {
      this.prevPage.disabled = false
      this.nextPage.disabled = false
      this.words.currentPage = (+this.words.currentPage - 1).toString()
      localStorage.page = this.words.currentPage

      if(+this.words.currentPage === 0) this.prevPage.disabled = true

      this.currentPageIndicator.innerText =  (+this.words.currentPage + 1).toString()
      this.words.render(currentLevel, this.words.currentPage)
    }
  }

  reset(){
    this.prevPage.disabled = true
    this.nextPage.disabled = false
    this.currentPageIndicator.innerText = '1'
  }

  addClickListener(){
    this.prevPage.addEventListener('click', () => this.toPrevPage())
    this.nextPage.addEventListener('click', () => this.toNextPage())
  }


}