import {UserWords} from './interface'
class ApiUsersWords{
    url: string;
    constructor() {
        this.url = 'https://learnwords124.herokuapp.com/users/';
    }
    getAllUserWords(token, userID){
      const Url= `${this.url}${userID}/words`;
      const AllUserWords: Promise< UserWords[] > = fetch(Url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        }
      }).then((data) => data.status===200 ? data.json(): data.status===402 ? 
      console.log(`Access token is missing or invalid`): console.log(`ошибка ${data.status}`));
      return AllUserWords;
    }
    createUserWord(token, userId, wordId, difficulty, optional?){
        const Url= `${this.url}${userId}/words/${wordId}`;
        const Json = {
          "difficulty": `${difficulty}`,
          "optional": optional
        }
        const UserWord: Promise<UserWords> = fetch(Url, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(Json)
        })
        .then((data) => data.status===200 ? data.json(): data.status===400 ? 
        console.log(`Bad request`) :data.status===401 ? 
        console.log(`Access token is missing or invalid`): console.log(`ошибка ${data.status}`));
        return UserWord;
    }
    getUserWordById(token, userId, wordId){
        const Url= `${this.url}${userId}/words/${wordId}`;
        const UserWord: Promise< UserWords > = fetch(Url, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
            }
          })
        .then((data) => data.status===200 ? data.json(): data.status===404 ? 
          console.log(`User's word not found`) :data.status===401 ? 
          console.log(`Access token is missing or invalid`): console.log(`ошибка ${data.status}`));
        return UserWord;
    }
    updateUserWord(token, userId, wordId, difficulty, optional?){
        const Url= `${this.url}${userId}/words/${wordId}`;
        const Json = {
          "difficulty": `${difficulty}`,
          "optional": optional
        }
        const UserWord: Promise<UserWords> = fetch(Url, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(Json)
        })
        .then((data) => data.status===200 ? data.json(): data.status===400 ? 
        console.log(`Bad request`) :data.status===401 ? 
        console.log(`Access token is missing or invalid`): console.log(`ошибка ${data.status}`));
        return UserWord;
    }
    deleteUser(token, userId, wordId){
        const Url= `${this.url}${userId}/words/${wordId}`;
        const DeletedUser = fetch(Url, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          })
          .then((data) => data.status===204 ? true: data.status===401 ?
          console.log(`Access token is missing or invalid`) : console.log(`ошибка ${data.status}`));
          return DeletedUser;
    }
}
export default ApiUsersWords;