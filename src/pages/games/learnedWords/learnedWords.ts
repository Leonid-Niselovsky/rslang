
import LearnedWordsGame from "./learnedWordsMethods";
class LearnedWords{
    learnedWords: LearnedWordsGame;
 constructor(){
    this.learnedWords=new LearnedWordsGame();
 }
 async addWord(word){  
    if(localStorage.user){
      const user = JSON.parse(localStorage.getItem('user'))
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
            await this.learnedWords.UserWordCreate(user.token, user.userId, wordId, 'learned', word)
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
    if(localStorage.user){
        const user = JSON.parse(localStorage.getItem('user'))
        this.learnedWords.UserWordDelete(user.token, user.userId, word.id)
    }
 }
}


export default LearnedWords;