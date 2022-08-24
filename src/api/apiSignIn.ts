import {SignIn} from './interface'
class ApiSignIn{
    url: string;
    constructor() {
        this.url = 'https://learnwords124.herokuapp.com/signin';
    }
    signIn(email, password){
      const Json = {
          "email": `${email}`,
          "password": `${password}`
        }
      const Token: Promise<SignIn> = fetch(this.url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Json)
      })
      .then((data) => data.status===200 ? data.json(): data.status===403 ? 
        console.log(`Incorrect e-mail or password`): console.log(`ошибка ${data.status}`));
      return Token;
    }
}
export default ApiSignIn;