class GameProcess{
    interval: any;
    counter: number;
    resultArray: any[];
    constructor(){
        this.counter = -1;
        this.interval;
        this.resultArray=[]
    }
    showFirstPage(arr){
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
        this.counter+=1;
        this.resultArray.push(result)
        const word=arr[this.counter].word
        const wordGuess=arr[this.counter].guessWord
        const wordElement=document.querySelector('.wordForSprint')
        const wordElementGuess=document.querySelector('.wordTranslateForSprint')
        wordElement.innerHTML=word;
        wordElementGuess.innerHTML=wordGuess;
        console.log(this.resultArray)
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
    }
}
export default GameProcess;