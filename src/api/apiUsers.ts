class ApiUsers{
    url: string;
    constructor() {
      this.url = 'https://learnwords124.herokuapp.com/users';
    }
    createUser(name, email, password){
      const Json = {
        "name": `${name}`,
        "email": `${email}`,
        "password": `${password}`
      }
      const createdUser = fetch(this.url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Json)
      })
      .then((data) => data.status===200 ? data.json(): data.status===422 ? 
      console.log(`Incorrect e-mail or password`): console.log(`ошибка ${data.status}`));
      return createdUser;
    }
    getUser(id){
      const Url= `${this.url}/${id}`;
      const UserById = fetch(Url)
      .then((data) => data.status===200 ? data.json(): data.status===401 ? 
      console.log(`Access token is missing or invalid`) : data.status===404 ?
      console.log(`User not found`) : console.log(`ошибка ${data.status}`));
      return UserById;
    }
    updateUser(id, email, password){
      const Json = {
        "email": `${email}`,
        "password": `${password}`
      }
      const Url = `${this.url}/${id}`;
      const UpdatedUser = fetch(Url, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Json)
      })
      .then((data) => data.status===200 ? data.json(): data.status===400 ? 
      console.log(`Bad request`) : data.status===401 ?
      console.log(`Access token is missing or invalid`) : console.log(`ошибка ${data.status}`));
      return UpdatedUser;
    }
    deleteUser(id){
      const Url = `${this.url}/${id}`;
      const DeletedUser = fetch(Url, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then((data) => data.status===204 ? true: data.status===401 ?
      console.log(`Access token is missing or invalid`) : console.log(`ошибка ${data.status}`));
      return DeletedUser;
    }
    getUsersTokens(id){
      const Url = `${this.url}/${id}/tokens`;
      const Tokens = fetch(Url)
      .then((data) => data.status===200 ? data.json(): data.status===403 ?
      console.log(`Access token is missing, expired or invalid`) : console.log(`ошибка ${data.status}`));
      return Tokens;
    }
}
export default ApiUsers;