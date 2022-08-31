class FinalPage{
    url: string
    constructor(){
        this.url='https://learnwords124.herokuapp.com/'
    }
    showFinalPage(words, result,points){
        const finalPage=document.querySelector('.finalPage') as Element;
        const gamePage=document.querySelector('.gameSprint')as Element;
        gamePage.classList.add('displayNoneForGame')
        finalPage.classList.remove('displayNoneForGame')
        const rightWords=document.querySelector('.finalPageRight')as Element;
        const wrongWords=document.querySelector('.finalPageWrong')as Element;
        while (rightWords.firstChild) {
          rightWords.removeChild(rightWords.firstChild);
        }
        while (wrongWords.firstChild) {
        wrongWords.removeChild(wrongWords.firstChild);
        }
        for(let i=0;i<result.length;i++){
          const resultGame = result[i]
          const word = words[i]
          if (resultGame){
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
        const pointsForGame=document.querySelector('.finalPageHeader')as Element;
        pointsForGame.innerHTML=`Результат: ${points} очков</p>`
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
export default FinalPage;