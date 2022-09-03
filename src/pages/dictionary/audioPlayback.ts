import {Words as IWord} from './../../api/interface'

export function audioPlayback(word: IWord, url: string){
    
  
  const playButton = document.createElement('button')
  playButton.classList.add('play-button')
  playButton.innerHTML = `
    <img src="../../assets/img/play.png">
  `
  const sources = [word.audio, word.audioExample, word.audioMeaning]
  let current = 0;

  const audioDiv = document.createElement('div')
  audioDiv.classList.add('audio-div')
  const audio: HTMLAudioElement = document.createElement('audio')
  // audio.setAttribute('controls', '')
  audio.src = `${url}${sources[current]}`
  playButton.addEventListener('click', () => {
    console.log('click')
    audio.play()
    audio.onended = function(){
      current++;
      if (current >= sources.length) {
        current = 0
        audio.src = `${url}${sources[current]}`
        return null
      }
      audio.src = `${url}${sources[current]}`;
      audio.play();
    }
  
  })
 
  audioDiv.append(playButton, audio)
  return audioDiv
}
