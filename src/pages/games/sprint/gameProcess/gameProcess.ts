import FinalPage from '../finalPage/finalPage';
class GameProcess{
    interval: any;
    counter: number;
    resultArray: any[];
    animationResult: HTMLBodyElement;
    arrForFinalPage: any[];
    words: any[];
    finalPage: FinalPage;
    constructor(){
        this.finalPage= new FinalPage();
        this.words=[]
        this.counter = -1;
        this.interval;
        this.resultArray=[];
        this.animationResult=document.querySelector('.resultAnimation')as HTMLBodyElement
        this.arrForFinalPage=[];
    }
    showFirstPage(arr){
        this.words=arr;
        if (arr.length!==0){
        const buttonStart=document.querySelector('.startAudioChalengeGame')
        const clone = buttonStart.cloneNode(true) as Element;
        const wrongButton=document.querySelector('.wrongButtonForGame')
        const rightButton=document.querySelector('.rightButtonForGame')
        buttonStart.parentNode.replaceChild(clone, buttonStart);
        clone.addEventListener('click',()=>{
            const startPage=document.querySelector('.startPageAudioChalenge')
            const gamePage=document.querySelector('.gameSprint')
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
        const word=arr[this.counter].word
        const wordGuess=arr[this.counter].guessWord
        const wordElement=document.querySelector('.wordForSprint')
        const wordElementGuess=document.querySelector('.wordTranslateForSprint')
        wordElement.innerHTML=word;
        wordElementGuess.innerHTML=wordGuess;
        const elem=document.querySelector('.resultAnimation') as HTMLBodyElement
    }
    timer(){
        const timer =document.querySelector('.timerForGame')
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
        const pointsForGame=document.querySelector('.pointsSprint').innerHTML.slice(26, document.querySelector('.pointsSprint').innerHTML.length);
        this.finalPage.showFinalPage(this.words,this.arrForFinalPage,pointsForGame)
    }
    rightWord(){
        this.arrForFinalPage.push(true)
        this.animationResult.innerHTML='Right'
        this.animationResult.style.color='green'
        this.pointsCounter()
        const pointsForGame=document.querySelector('.pointsSprint');
       const pointsForWord=document.querySelector('.pointsForWordSprint');
       const points=Number(pointsForWord.innerHTML.slice(29, 31))
       const pointsAtAll=Number(pointsForGame.innerHTML.slice(26, pointsForGame.innerHTML.length))
       pointsForGame.innerHTML=`<span>Очков всего: </span>${pointsAtAll+points}`
    }
    wrongWord(){
        this.arrForFinalPage.push(false)
        const pointsForGame=document.querySelectorAll('.pointRightWordSprint');
        const pointsForWord=document.querySelector('.pointsForWordSprint');
        pointsForGame[0].classList.remove('pointRightWordSprintRight')
        pointsForGame[1].classList.remove('pointRightWordSprintRight')
        pointsForGame[2].classList.remove('pointRightWordSprintRight')
        pointsForWord.innerHTML='<span>Очков за слово: </span>10'
        this.animationResult.innerHTML='Wrong'
        this.animationResult.style.color='red'
    }
    pointsCounter(){
        const pointsForGame=document.querySelectorAll('.pointRightWordSprint');
        const pointsForWord=document.querySelector('.pointsForWordSprint');
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
}
export default GameProcess;