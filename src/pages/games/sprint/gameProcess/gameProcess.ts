import FinalPage from '../finalPage/finalPage';
import StartSprintTextbook from '../../startGameTextBook/startSprintTextbook'
import ApiWords from '../../../../api/apiWords';
class GameProcess{ 
    apiWords: ApiWords;
    interval: any;
    counter: number;
    resultArray: any[];
    animationResult: HTMLBodyElement;
    arrForFinalPage: any[];
    words: any[];
    finalPage: FinalPage;
    startSprintTextbook: StartSprintTextbook;
    wordsA1: any[];
    wordsA2: any[];
    wordsB1: any[];
    wordsB2: any[];
    wordsC1: any[];
    wordsC2: any[];
    pagesLength: number;
    constructor(){
        this.pagesLength=30
        this.apiWords = new ApiWords;
        this.wordsA1=[];
        this.wordsA2=[];
        this.wordsB1=[];
        this.wordsB2=[];
        this.wordsC1=[];
        this.wordsC2=[];
        this.finalPage= new FinalPage();
        this.words=[]
        this.counter = -1;
        this.interval;
        this.resultArray=[];
        this.animationResult=document.querySelector('.resultAnimation')as HTMLBodyElement
        this.arrForFinalPage=[];
        this.startSprintTextbook=new StartSprintTextbook;
    }
    showFirstPage(arr){
        this.words=arr;
        if (arr.length!==0){
        const buttonStart=document.querySelector('.startAudioChalengeGame')as Element;
        const clone = buttonStart.cloneNode(true) as Element;
        const wrongButton=document.querySelector('.wrongButtonForGame')as Element;
        const rightButton=document.querySelector('.rightButtonForGame')as Element;
        buttonStart.parentNode?.replaceChild(clone, buttonStart);
        clone.addEventListener('click',()=>{
            const startPage=document.querySelector('.startPageAudioChalenge')as Element;
            const gamePage=document.querySelector('.gameSprint')as Element;
            startPage.classList.add('displayNoneForGame')
            gamePage.classList.remove('displayNoneForGame')
            this.interval = window.setInterval(this.timer.bind(this), 1000);
            this.fillGamePage(arr,'start')
            this.resultArray.pop()
        }) 
        wrongButton.addEventListener('click',()=>{
            this.fillGamePage(arr,false)
        })
        rightButton.addEventListener('click',()=>{
            this.fillGamePage(arr,true)
        })
        window.addEventListener('keyup',(e)=>{
            const button=e.key
            if(button === 'ArrowLeft'){
                this.fillGamePage(arr,false)
            }
            if(button === 'ArrowRight'){ 
                this.fillGamePage(arr,true)
            }
        })
    }
    }
    showFirstPageForTextbook(Level){
        this.getChunkOfWords()
        let arr=[];
        const buttonStart=document.querySelector('.startGameTextbook')as Element;
        const clone = buttonStart.cloneNode(true) as Element;
        const wrongButton=document.querySelector('.wrongButtonForGame')as Element;
        const rightButton=document.querySelector('.rightButtonForGame')as Element;
        buttonStart.parentNode?.replaceChild(clone, buttonStart);
        clone.addEventListener('click',()=>{
            const randomArr =this.getRandomWordsForGameTextbook(Level)
            arr=this.renderArrayForGame(randomArr)
            this.words=arr;
            const startPage=document.querySelector('.startPageForTextbook')as Element;
            const gamePage=document.querySelector('.gameSprint')as Element;
            startPage.classList.add('displayNoneForGame')
            gamePage.classList.remove('displayNoneForGame')
            this.interval = window.setInterval(this.timer.bind(this), 1000);
            this.fillGamePage(arr,'start')
            this.resultArray.pop()
        }) 
        wrongButton.addEventListener('click',()=>{
            this.fillGamePage(arr,false)
        })
        rightButton.addEventListener('click',()=>{
            this.fillGamePage(arr,true)
        })
        window.addEventListener('keyup',(e)=>{
            const button=e.key
            if(button === 'ArrowLeft'){
                this.fillGamePage(arr,false)
            }
            if(button === 'ArrowRight'){ 
                this.fillGamePage(arr,true)
            }
        })
    }
    fillGamePage(arr,result){
        this.animationResult.classList.remove('resultAnimationdd')
        window.setTimeout(()=>this.animationResult.classList.add('resultAnimationdd'),500)
        this.resultArray.push(result)
        if((result ===true||result ===false)&&(arr[this.counter].result===this.resultArray[this.counter])){
            this.rightWord()
        }else if((result ===true||result ===false)&&(arr[this.counter].result!==this.resultArray[this.counter])){
            this.wrongWord()
        }
        this.counter+=1;
        if(this.counter===this.words.length){
            this.stopGame()
        }
        const word=arr[this.counter].word
        const wordGuess=arr[this.counter].guessWord
        const wordElement=document.querySelector('.wordForSprint')as Element;
        const wordElementGuess=document.querySelector('.wordTranslateForSprint')as Element;
        wordElement.innerHTML=word;
        wordElementGuess.innerHTML=wordGuess;
        const elem=document.querySelector('.resultAnimation') as HTMLBodyElement
    }
    timer(){
        const timer =document.querySelector('.timerForGame')as Element;
        const time=Number(timer.innerHTML)
        if(timer.innerHTML==='0'){
            timer.innerHTML='0'
            this.stopGame();
        }else{
            timer.innerHTML=`${time-1}`
        }
    }
    stopGame(){
        clearInterval(this.interval)
        const pointsForGame=document.querySelector('.pointsSprint')?.innerHTML.slice(26, document.querySelector('.pointsSprint')?.innerHTML.length);
        this.finalPage.showFinalPage(this.words,this.arrForFinalPage,pointsForGame)
    }
    rightWord(){
        this.arrForFinalPage.push(true)
        this.animationResult.innerHTML='Right'
        this.animationResult.style.color='green'
        this.pointsCounter()
        const pointsForGame=document.querySelector('.pointsSprint')as Element;
       const pointsForWord=document.querySelector('.pointsForWordSprint')as Element;
       const points=Number(pointsForWord.innerHTML.slice(29, 31))
       const pointsAtAll=Number(pointsForGame.innerHTML.slice(26, pointsForGame.innerHTML.length))
       pointsForGame.innerHTML=`<span>Очков всего: </span>${pointsAtAll+points}`
    }
    wrongWord(){
        this.arrForFinalPage.push(false)
        const pointsForGame=document.querySelectorAll('.pointRightWordSprint');
        const pointsForWord=document.querySelector('.pointsForWordSprint')as Element;
        pointsForGame[0].classList.remove('pointRightWordSprintRight')
        pointsForGame[1].classList.remove('pointRightWordSprintRight')
        pointsForGame[2].classList.remove('pointRightWordSprintRight')
        pointsForWord.innerHTML='<span>Очков за слово: </span>10'
        this.animationResult.innerHTML='Wrong'
        this.animationResult.style.color='red'
    }
    pointsCounter(){
        const pointsForGame=document.querySelectorAll('.pointRightWordSprint');
        const pointsForWord=document.querySelector('.pointsForWordSprint')as Element;
    let firstBlock=false;
    let secondBlock=false;
        if(this.arrForFinalPage[this.arrForFinalPage.length-1]===true){
            pointsForGame[0].classList.add('pointRightWordSprintRight')
            if(this.arrForFinalPage[this.arrForFinalPage.length-2]===true){
              pointsForGame[1].classList.add('pointRightWordSprintRight')
              if(this.arrForFinalPage[this.arrForFinalPage.length-3]===true){
                  pointsForGame[2].classList.add('pointRightWordSprintRight')
                  if(this.arrForFinalPage[this.arrForFinalPage.length-4]===true){
                      pointsForWord.innerHTML=`<span>Очков за слово: </span>20`
                      pointsForGame[0].classList.remove('pointRightWordSprintRight')
                      pointsForGame[1].classList.remove('pointRightWordSprintRight')
                      pointsForGame[2].classList.remove('pointRightWordSprintRight')  
                      firstBlock=true;
          }}}}
          if(this.arrForFinalPage[this.arrForFinalPage.length-5]===true&&firstBlock){
              pointsForGame[0].classList.add('pointRightWordSprintRight')
              if(this.arrForFinalPage[this.arrForFinalPage.length-6]===true){
                pointsForGame[1].classList.add('pointRightWordSprintRight')
                if(this.arrForFinalPage[this.arrForFinalPage.length-7]===true){
                    pointsForGame[2].classList.add('pointRightWordSprintRight')
                    if(this.arrForFinalPage[this.arrForFinalPage.length-8]===true){
                      pointsForWord.innerHTML=`<span>Очков за слово: </span>40`
                      pointsForGame[0].classList.remove('pointRightWordSprintRight')
                      pointsForGame[1].classList.remove('pointRightWordSprintRight')
                      pointsForGame[2].classList.remove('pointRightWordSprintRight')
                      secondBlock=true  
          }}}}
          if(this.arrForFinalPage[this.arrForFinalPage.length-9]===true&&secondBlock){
              pointsForGame[0].classList.add('pointRightWordSprintRight')
              if(this.arrForFinalPage[this.arrForFinalPage.length-10]===true){
                  pointsForGame[1].classList.add('pointRightWordSprintRight')
                  if(this.arrForFinalPage[this.arrForFinalPage.length-11]===true){
                      pointsForGame[2].classList.add('pointRightWordSprintRight')
                      if(this.arrForFinalPage[this.arrForFinalPage.length-12]===true){
                          pointsForWord.innerHTML=`<span>Очков за слово: </span>80`
          }}}}
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
      renderArrayForGame(randomArr){
          const arr=[];
          const arrPages=JSON.parse(localStorage.wordsForGames)
          for(let i=0;i<arrPages.length;i++){
              const word=arrPages[i].word;
              const wordID=arrPages[i].id
              const wordTanslate=arrPages[i].wordTranslate;
              const wordAudio=arrPages[i].audio;
              let wordGuess= this.random(0,1)
              if(wordGuess===0){
                wordGuess=randomArr[i].wordTranslate
              }else{
                wordGuess=arrPages[i].wordTranslate
              }

              const result={
                  'id':wordID,
                  'word':word,
                  'wordTranslate':wordTanslate,
                  'guessWord':wordGuess,
                  'audio':wordAudio,
                  'result':wordTanslate===wordGuess
              }
              arr.push(result)
          }    
          return arr    
      }
      random(min, max) {
          let rand = min + Math.random() * (max + 1 - min);
          return Math.floor(rand);
      }
      getRandomWordsForGameTextbook(Level){
        let arr:any[]=[];
        
        if(Level===0){
            arr.push(...this.wordsA1)
        }
        if(Level===1){
            arr.push(...this.wordsA2)
        }
        if(Level===2){
            arr.push(...this.wordsB1)
        }
        if(Level===3){
            arr.push(...this.wordsB2)
        }
        if(Level===4){
            arr.push(...this.wordsC1)
        }
        if(Level===5){
            arr.push(...this.wordsC2)
        }
          return arr 
      }
}
export default GameProcess;