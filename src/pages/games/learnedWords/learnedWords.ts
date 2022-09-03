
import LearnedWordsGame from "./learnedWordsMethods";
class LearnedWords{
    learnedWords: LearnedWordsGame;
 constructor(){
    this.learnedWords=new LearnedWordsGame();
 }
 async addWord(word){  
    if(localStorage.token){
      if(localStorage.rightWordsForUser!==undefined){
        let arr=JSON.parse(localStorage.rightWordsForUser)
        const wordId=word.id;
        let count=0;
        for(let i=0;i<arr.length;i++){
            let id= arr[i].id;
            if(wordId===id){
                count+=1;
            }
        }
        console.log(count)
        if(count===2){
            arr=arr.filter((el)=>{
                let id= el.id;
                if(wordId===id){
                    return false
                }
                return true
            })
            localStorage.setItem('rightWordsForUser', JSON.stringify(arr));
            await this.learnedWords.UserWordCreate(localStorage.token, localStorage.userId, wordId, 'learned', word)
        }else{
            arr.push(word)
            localStorage.setItem('rightWordsForUser', JSON.stringify(arr));
        }
      }else{
        const arr= [word];
        localStorage.setItem('rightWordsForUser', JSON.stringify(arr));
      }
    }else{
        localStorage.setItem('rightWordsForUser', JSON.stringify([]));
    }
 }
 deleteWord(word){
    if(localStorage.token){
        this.learnedWords.UserWordDelete(localStorage.token, localStorage.userId, word.id)
    }
 }
}


export default LearnedWords;