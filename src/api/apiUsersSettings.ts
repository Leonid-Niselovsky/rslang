import {Settings} from './interface'
class ApiUsersSettings{
    url: string;
    constructor() {
        this.url = 'https://learnwords124.herokuapp.com/users/';
    }

    getUserSettings(token, userId){
        const Url= `${this.url}${userId}/statistics`;
        const UserSettings: Promise< Settings > = fetch(Url, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
            }
          })
        .then((data) => data.status===200 ? data.json(): data.status===404 ? 
          console.log(`Statistics not found`) :data.status===401 ? 
          console.log(`Access token is missing or invalid`): console.log(`ошибка ${data.status}`));
        return UserSettings;
    }

    updateUserSettings(token, userId, wordsPerDay, optional?){
        const Url= `${this.url}${userId}/statistics`;
        const Json = {
            "wordsPerDay": wordsPerDay,
            "optional": {optional}
        }
        const UserSettings: Promise<Settings> = fetch(Url, {
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
        return UserSettings;
    }

}
export default ApiUsersSettings;