import {Words as IWord} from './../../api/interface'

export function audioPlayback(word: IWord, url: string): HTMLAudioElement{
    
  const sources = [word.audio, word.audioExample, word.audioMeaning]
  let current = 0;

  const audio: HTMLAudioElement = document.createElement('audio')
  audio.setAttribute('controls', '')
  audio.src = `${url}${sources[current]}`
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

  return audio
}
