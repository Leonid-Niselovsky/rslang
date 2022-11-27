export interface Words {
    "id": string,
    "group": number,
    "page": number,
    "word": string,
    "image": string,
    "audio": string,
    "audioMeaning": string,
    "audioExample": string,
    "textMeaning": string,
    "textExample": string,
    "transcription": string,
    "wordTranslate": string,
    "textMeaningTranslate": string,
    "textExampleTranslate": string
}
export interface User{
    "name": string,
    "email": string,
    "password": string
}
export interface UserWords {
    "difficulty": string,
    "optional": {}
}
export interface Statistic{
    "learnedWords": number,
    "optional": {}
}
export interface Settings{
    "wordsPerDay": number,
    "optional": {}
}
export interface SignIn{
    "message": string,
    "token": string,
    "refreshToken"?: string,
    "userId": string,
    "name"?: string,
    "status"?: number
}
