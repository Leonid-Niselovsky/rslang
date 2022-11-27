import './main.scss';
import AudioChalenge from './audioChalenge/audioChalenge'
import StartAudioCallTextbook from './startGameTextBook/startAudioCallTextbook'
const audioChalenge = new AudioChalenge();
const startAudioCallTextbook = new StartAudioCallTextbook();
audioChalenge.addMenu();
    if(!!window.location.search){
      startAudioCallTextbook.start()
      audioChalenge.addStartTextbook()
    }else{
        audioChalenge.addLevel();
        audioChalenge.addStart();
    }

audioChalenge.nextWord();


