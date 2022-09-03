import ApiUsersWords from "../../../api/apiUsersWords";

class LearnedWordsGame{
    apiUsersWords: any;
    constructor(){
        this.apiUsersWords=new ApiUsersWords();
    }
    async UserWordDelete(token, userId, wordId){
        const Word = await this.apiUsersWords.getUserWordById(token, userId, wordId)
        if(Word){
            if(Word.difficulty==='learned'){
                await this.apiUsersWords.deleteUserWord(token, userId, wordId)
            }
        }
    }
    async UserWordCreate(token, userId, wordId, difficulty, optional){
        const Word = await this.apiUsersWords.getUserWordById(token, userId, wordId)
        if(Word){
            if(Word.difficulty==='Hard'){
                await this.apiUsersWords.updateUserWord(token, userId, wordId, difficulty, optional)
            }
        }else{
            await this.apiUsersWords.createUserWord(token, userId, wordId, difficulty, optional)
        }
    }
}
export default LearnedWordsGame;