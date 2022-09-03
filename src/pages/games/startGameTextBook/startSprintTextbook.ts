import ApiWords from '../../../api/apiWords';
class StartSprintTextbook{
    arr: any[];
    guessWordArrayTextbook: any[];
    apiWords: ApiWords;
    resultGuessWordArrayTextbook: any[];
    constructor(){
        this.arr=[];
        this.apiWords = new ApiWords;
        this.guessWordArrayTextbook = [];
        this.resultGuessWordArrayTextbook = [];
    }
    start(){
        const startPage=document.querySelector('.startPageForTextbook')
        const wrongPage=document.querySelector('.startPageAudioChalenge')
        startPage.classList.remove('displayNoneForGame')
        wrongPage.classList.add('displayNoneForGame')
    }
    renderingGroup(){
      const arrPages=JSON.parse(localStorage.wordsForGames)
        let group = arrPages[0].group
        if (group ===6){
            group=5
        }else{
            group+=1
        }
        return group
    }
    renderArrayForGame(){ 
        const arr=[];
        const arrPages=JSON.parse(localStorage.wordsForGames)
        for(let i=0;i<this.guessWordArrayTextbook.length;i++){
            const word=arrPages[i].word;
            const wordID=arrPages[i].id
            const wordTanslate=arrPages[i].wordTranslate;
            const wordAudio=arrPages[i].audio;
            const wordGuess=this.guessWordArrayTextbook[i].wordTranslate;
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
}
export default StartSprintTextbook;