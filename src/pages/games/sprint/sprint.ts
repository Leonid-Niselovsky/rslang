import './main.scss';
import ApiWords from '../../../api/apiWords';
import GameProcess from './gameProcess/gameProcess';
import StartSprintTextbook from '../startGameTextBook/startSprintTextbook'
class Sprint{
    apiWords: ApiWords;
    pagesLength: number;
    wordsA1: any[];
    wordsA2: any[];
    wordsB1: any[];
    wordsB2: any[];
    wordsC1: any[];
    wordsC2: any[];
    gameProcess: GameProcess;
    startSprintTextbook: StartSprintTextbook;
    constructor(){
        this.apiWords = new ApiWords;
        this.wordsA1=[];
        this.wordsA2=[];
        this.wordsB1=[];
        this.wordsB2=[];
        this.wordsC1=[];
        this.wordsC2=[];
        this.pagesLength=30
        this.gameProcess=new GameProcess;
        this.startSprintTextbook=new StartSprintTextbook;
    }
    addMenu(){
        const btn= document.querySelector('.closeMenu')as Element;
        btn.addEventListener('click',()=>{
          const menu = document.querySelector('.menu')as Element;
          menu.classList.add('closed')
        })  
        const butnOpen= document.querySelector('.openMenu')as Element;
        butnOpen.addEventListener('click',()=>{
          const menu = document.querySelector('.menu')as Element;
          menu.classList.remove('closed')
      })
    }
    validator(){
      if(!!window.location.search){
        this.startSprintTextbook.start()
        const Level = this.startSprintTextbook.renderingGroup()
        this.gameProcess.showFirstPageForTextbook(Level);
      }else{
        sprint.getChunkOfWords();
        sprint.addLevel();
      }
    }
      addLevel(){
        const btns= document.querySelector('.levelSelectionAudioChalenge') as Element;
        btns.addEventListener('click',(e)=>{
            const btnList = btns.childNodes as NodeListOf<Element>;
            for(let i=1;i<btnList.length;i+=2){
                btnList[i].classList.remove('activeLevel');
            }
            const ElementTarget=e.target as Element;
            if(btns!==ElementTarget){
                ElementTarget.classList.add('activeLevel');
                const Level=ElementTarget.innerHTML;
                const resultArr=this.getRandomWordsForGame(Level)
                this.gameProcess.showFirstPage(resultArr);
            }
          })
      }
    getChunkOfWords(){
        this.wordsA1=[]; 
        this.wordsA2=[];
        this.wordsB1=[];
        this.wordsB2=[];
        this.wordsC1=[];
        this.wordsC2=[];
    for(let i=0;i<this.pagesLength;i++){
      this.apiWords.getChunkOfWords(i,0)
      .then((val)=>this.wordsA1.push(...val))
    }
    for(let i=0;i<this.pagesLength;i++){
        this.apiWords.getChunkOfWords(i,1)
        .then((val)=>this.wordsA2.push(...val))
      }
      for(let i=0;i<this.pagesLength;i++){
        this.apiWords.getChunkOfWords(i,2)
        .then((val)=>this.wordsB1.push(...val))
      }
      for(let i=0;i<this.pagesLength;i++){
        this.apiWords.getChunkOfWords(i,3)
        .then((val)=>this.wordsB2.push(...val))
      }
      for(let i=0;i<this.pagesLength;i++){
        this.apiWords.getChunkOfWords(i,4)
        .then((val)=>this.wordsC1.push(...val))
      }
      for(let i=0;i<this.pagesLength;i++){
        this.apiWords.getChunkOfWords(i,5)
        .then((val)=>this.wordsC2.push(...val))
      }
  }
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  getRandomWordsForGame(Level){
    let arr:any[]=[];
    let resultArray:any[]=[];
    if(Level==='A1'){
        this.shuffle(this.wordsA1);
        arr.push(...this.wordsA1)
    }
    if(Level==='A2'){
        this.shuffle(this.wordsA2);
        arr.push(...this.wordsA2)
    }
    if(Level==='B1'){
        this.shuffle(this.wordsB1);
        arr.push(...this.wordsB1)
    }
    if(Level==='B2'){
        this.shuffle(this.wordsB2);
        arr.push(...this.wordsB2)
    }
    if(Level==='C1'){
        this.shuffle(this.wordsC1);
        arr.push(...this.wordsC1)
    }
    if(Level==='C2'){
        this.shuffle(this.wordsC2);
        arr.push(...this.wordsC2)
    }
    for(let i=0;i<300;i++){
      if(arr.length < 600){
        const elem = document.querySelector(".contentText")as Element;
        elem.innerHTML='Слова еще не загрузились, попробуй нажать еще раз'
      }else{
        const elem = document.querySelector(".contentText")as Element;
        elem.innerHTML='Попробуй угадать как можно больше слов за минуту.'
        
      }
        const word=arr[i].word;
        const wordID=arr[i].id
        const wordTanslate=arr[i].wordTranslate;
        const wordAudio=arr[i].audio;
        let wordGuess= this.random(0,1)
        if(wordGuess===0){
            wordGuess=arr[this.random(301,599)].wordTranslate
        }else{
            wordGuess=arr[i].wordTranslate
        }
        const result={
            'id':wordID,
            'word':word,
            'wordTranslate':wordTanslate,
            'guessWord':wordGuess,
            'audio':wordAudio,
            'result':wordTanslate===wordGuess,
            'wordForServer':arr[i]
        }
        resultArray.push(result)
    }
    return resultArray;
  }
     
}
const sprint= new Sprint();
sprint.validator();
sprint.addMenu();
