import {Words} from './interface'
class ApiWords{
    url: string;
    constructor() {
        this.url = 'https://learnwords124.herokuapp.com/words';
    }
    getChunkOfWords(page, group){
      const Url= `${this.url}?page=${page}&group=${group}`;
      const ChunkOfWords: Promise<Words[]> = fetch(Url)
        .then((data) => data.json());
      return ChunkOfWords;
    }
    getWordById(id){
      const Url= `${this.url}/${id}`;
      const WordById: Promise<Words> = fetch(Url)
        .then((data) => data.json());
      return WordById;
    }
}
export default ApiWords;