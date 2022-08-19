import './main.scss';
import ApiWords from '../../../api/apiWords';
class AudioChalenge{
    apiWords: ApiWords;
    pagesLength: number;
    words: any[];
    url: string;
    randomFourWords: any[];
    constructor(){
      this.pagesLength=29;
      this.apiWords = new ApiWords;
      this.words=[];
      this.randomFourWords=[];
      this.url='https://learnwords124.herokuapp.com/'
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
            this.fillGamePage(0)
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
            if (button.innerHTML===rightWord){
                rightWord=button
            }
            button.addEventListener('click',()=>{
                if( button.innerHTML===Word.wordTranslate){
                    this.rightWord(button, wordImage,wordInEnglich)
                }else{
                    this.wrongWord(button,rightWord, wordImage,wordInEnglich)
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
  }
  wrongWord(button: Element, rightButton: Element,wordImage,wordInEnglich){
    this.clickWord(wordImage,wordInEnglich)
    button.classList.add('wrongWord')
    rightButton.classList.add('rightWord')
  }
  clickWord(wordImage,wordInEnglich){
    const nextButton=document.querySelector('.gameNextButton');
    const wordInEnglish=document.querySelector('.wordInEnglish');
    const img=document.querySelector('.gameImg');
    img.setAttribute('src', this.url+wordImage)
    nextButton.innerHTML='Next'
    wordInEnglish.innerHTML=wordInEnglich
  }
}
export default AudioChalenge;