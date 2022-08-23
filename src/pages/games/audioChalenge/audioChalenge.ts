import './main.scss';
import ApiWords from '../../../api/apiWords';
class AudioChalenge{
    apiWords: ApiWords;
    pagesLength: number;
    words: any[];
    url: string;
    randomFourWords: any[];
    counter: number;
    rightWordButton: any;
    resultArray: boolean[];
    constructor(){
      this.pagesLength=29;
      this.apiWords = new ApiWords;
      this.words=[];
      this.randomFourWords=[];
      this.counter=0;
      this.rightWordButton=0;
      this.url='https://learnwords124.herokuapp.com/';
      this.resultArray=[];
    }
  addMenu(){
    const btn= document.querySelector('.closeMenu');
    btn.addEventListener('click',()=>{
      const menu = document.querySelector('.menu');
      menu.classList.add('closed')
    })  
    const butnOpen= document.querySelector('.openMenu');
    butnOpen.addEventListener('click',()=>{
      const menu = document.querySelector('.menu');
      menu.classList.remove('closed')
    })
  }
  addLevel(){
    const btns= document.querySelector('.levelSelectionAudioChalenge') as Element;
    btns.addEventListener('click',(e)=>{
        const btnList = btns.childNodes as NodeListOf<Element>;
        for(let i=1;i<btnList.length;i+=2){
            btnList[i].classList.remove('activeLevel');
        }
        const ElementTarget=e.target as Element;
        if(btns!==ElementTarget){
            ElementTarget.classList.add('activeLevel');
            const Level=ElementTarget.innerHTML;
            this.getChunkOfWords(Level)
        }
      })
  }
  private getRandomGroup() {
    return Math.floor(Math.random() * (this.pagesLength+1));
  }
  private getChunkOfWords(group: string){
    let numGroup=0;
    if(group==='A1')numGroup=0;
    if(group==='A2')numGroup=1;
    if(group==='B1')numGroup=2;
    if(group==='B2')numGroup=3;
    if(group==='C1')numGroup=4;
    if(group==='C2')numGroup=5 ;
    this.apiWords.getChunkOfWords(this.getRandomGroup(),numGroup)
    .then((val)=>this.getRandomWordsFromGroup(val))
  }
  private getRandomWordsFromGroup(ChunkOfWords){
    const random = Math.floor(Math.random() * (2));
    let arrayOfWords=[];
    if(random===0){
        arrayOfWords=ChunkOfWords.slice(0,10)
    }
    if(random===1){
        arrayOfWords=ChunkOfWords.slice(10,20)
    }
    this.words=arrayOfWords;
  }
  addStart(){
    const butnStart= document.querySelector('.startAudioChalengeGame');
    const startPage = document.querySelector('.startPageAudioChalenge');
    const gamePage = document.querySelector('.gameAudioChalenge');
    butnStart.addEventListener('click',()=>{
        if(this.words.length===10){
            startPage.classList.add('displayNoneForGame')
            gamePage.classList.remove('displayNoneForGame')
            this.counter=0;
            this.fillGamePage(this.counter);
        }
    })
  }
  fillGamePage(numberWord: number){
    const nextButton=document.querySelector('.gameNextButton');
    const wordInEnglish=document.querySelector('.wordInEnglish');
    const Img=document.querySelector('.gameImg');
    wordInEnglish.innerHTML=''
    nextButton.innerHTML='Не знаю'
    Img.removeAttribute('src')
    const gameButtonsContainer=document.querySelector('.gameButtons');
    const Word=this.words[numberWord];
    this.rightWordButton=Word;
    const soundUrl=this.url+Word.audio;
    this.playAudio(soundUrl)
    this.getRundomFourWords(numberWord)
    .then((val)=>{
        const gameButtons=gameButtonsContainer.children;
        const wordImage=Word.image;
        const wordInEnglich=Word.word;
        let rightWord=Word.wordTranslate;
        val.push(Word);
        this.shuffle(val);
        for(let i=0;i<gameButtons.length;i++){
            const button=gameButtons[i];
            button.innerHTML=val[i].wordTranslate;
            const clone = button.cloneNode(true) as Element;
            gameButtonsContainer.replaceChild(clone, button);
            if (clone.innerHTML===rightWord){
              rightWord=clone
            }
            clone.addEventListener('click',()=>{
                  if( clone.innerHTML===Word.wordTranslate){
                      this.rightWord(clone, wordImage,wordInEnglich)
                  }else{
                      this.wrongWord(clone,rightWord, wordImage,wordInEnglich)
                  }
              })
        }
    })
  }
  playAudio(soundUrl){
    const audio = new Audio();
    audio.src = soundUrl;
    audio.autoplay = true;
    const audioButton=document.querySelector('.svgSoundIcon');
    const gameWrapper=document.querySelector('.gameAudioChalenge');
    const clone = audioButton.cloneNode(true);
    gameWrapper.replaceChild(clone, audioButton);
    clone.addEventListener('click',()=>this.playAudio(soundUrl))
  }
  getRundomFourWords(numberWord: number){
    let arr=[];
    const randomPage = Math.floor(Math.random() * (30));
    const WordPage=this.words[numberWord].page
    const WordGroup=this.words[numberWord].group
    if(WordPage===randomPage){
       this.getRundomFourWords(numberWord)
    }
    for(let i=0;arr.length<5;i++){
        const randomWord = Math.floor(Math.random() * (20));
        if(arr.indexOf(randomWord)=== -1){
            arr.push(randomWord)
        }
    }
    const rundomFourWords =this.apiWords.getChunkOfWords(randomPage,WordGroup)
    .then((val)=>{
        const randomWords=[];
        randomWords.push(val[arr[0]])
        randomWords.push(val[arr[1]])
        randomWords.push(val[arr[2]])
        randomWords.push(val[arr[3]])
        return randomWords;
    })
    return rundomFourWords
  }
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array
  }
  rightWord(button: Element,wordImage,wordInEnglich){
    this.clickWord(wordImage,wordInEnglich)
    button.classList.add('rightWord')
    this.resultArray.push(true)
  }
  wrongWord(button: Element, rightButton: Element,wordImage,wordInEnglich){
    this.clickWord(wordImage,wordInEnglich)
    button.classList.add('wrongWord')
    rightButton.classList.add('rightWord')
    this.resultArray.push(false)
  }
  clickWord(wordImage,wordInEnglich){
    const nextButton=document.querySelector('.gameNextButton');
    const wordInEnglish=document.querySelector('.wordInEnglish');
    const img=document.querySelector('.gameImg');
    img.setAttribute('src', this.url+wordImage)
    nextButton.innerHTML='Next'
    wordInEnglish.innerHTML=wordInEnglich
  }
  nextWord(){
    const button= document.querySelector('.gameNextButton');
    
    button.addEventListener('click', ()=>{
      const Text=button.innerHTML;
      Text==='Next'?this.nextButton():this.doNotKnowButton()
    })
  }
  doNotKnowButton(){
    const wordImage=this.rightWordButton.image;
    const wordInEnglish=this.rightWordButton.word;
    const wordTranslate= this.rightWordButton.wordTranslate
    const gameButtonsContainer=document.querySelector('.gameButtons');
    const gameButtons=gameButtonsContainer.children;
        for(let i=0;i<gameButtons.length;i++){
          const button=gameButtons[i];
          if(button.innerHTML===wordTranslate){
            this.clickWord(wordImage,wordInEnglish)
            button.classList.add('rightWord')
            this.resultArray.push(false)
          }     
        }
  }
  nextButton(){
    const gameButtonsContainer=document.querySelector('.gameButtons');
    const gameButtons=gameButtonsContainer.children;
        for(let i=0;i<gameButtons.length;i++){
          gameButtons[i].classList.remove('rightWord')
          gameButtons[i].classList.remove('wrongWord')
        }
    this.counter+=1;
    if (this.counter<10){
      this.fillGamePage(this.counter)
    }else{
      this.showFinalPage()
    }
  }
  showFinalPage(){
    const finalPage=document.querySelector('.finalPage')
    const gamePage=document.querySelector('.gameAudioChalenge')
    gamePage.classList.add('displayNoneForGame')
    finalPage.classList.remove('displayNoneForGame')
    const rightWords=document.querySelector('.finalPageRight')
    const wrongWords=document.querySelector('.finalPageWrong')
    while (rightWords.firstChild) {
      rightWords.removeChild(rightWords.firstChild);
    }
    while (wrongWords.firstChild) {
    wrongWords.removeChild(wrongWords.firstChild);
    }
    for(let i=0;i<this.words.length;i++){
      const result = this.resultArray[i]
      const word = this.words[i]
      if (result){
        rightWords.insertAdjacentHTML('beforeend', this.fillFinalPage(word.word, word.wordTranslate));
        const soundButton = rightWords.children[rightWords.children.length -1 ].children[0];
        soundButton.addEventListener('click',()=>this.playAudioFinal(this.url + word.audio))
      }else{
        wrongWords.insertAdjacentHTML('beforeend', this.fillFinalPage(word.word, word.wordTranslate));
        const soundButton = wrongWords.children[wrongWords.children.length -1 ].children[0];
        soundButton.addEventListener('click',()=>this.playAudioFinal(this.url + word.audio))

      }
    }
    const rightWordNodeList = rightWords.children.length;
    const WrongWordNodeList = wrongWords.children.length;
    const rightWordCount=`<p>Правильно: ${rightWordNodeList}</p>`
    const wrongWordCount=`<p>Неправильно: ${WrongWordNodeList}</p>`
    rightWords.insertAdjacentHTML('afterbegin', rightWordCount);
    wrongWords.insertAdjacentHTML('afterbegin', wrongWordCount);
  }
  fillFinalPage(word: string,wordTranslate: string){
    const element=`
    <div>
    <svg class='svgFinalPage' width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-sound">
    
    <title>1193</title>
    
    <defs></defs>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M13.987,14.868 C13.987,15.494 13.308,16 12.471,16 L5.957,11.473 C5.118,11.473 4.044,10.965 4.044,10.34 L4.044,5.682 C4.044,5.058 5.118,4.55 5.957,4.55 L12.471,0.022 C13.308,0.022 13.987,0.53 13.987,1.155 L13.987,14.868 L13.987,14.868 Z" fill="#434343" class="si-glyph-fill"></path>
    </g>
</svg>
    <span>${word} - ${wordTranslate}</span>
    </div>
    `
    return element;
  }
  playAudioFinal(soundUrl){
    const audio = new Audio();
    audio.src = soundUrl;
    audio.autoplay = true;
  }
}
export default AudioChalenge;