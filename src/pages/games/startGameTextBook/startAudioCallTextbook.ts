class StartAudioCallTextbook{
    start(){        
        const startPage=document.querySelector('.startPageForTextbook')
        const wrongPage=document.querySelector('.startPageAudioChalenge')
        startPage.classList.remove('displayNoneForGame')
        wrongPage.classList.add('displayNoneForGame')

    }
}
export default StartAudioCallTextbook;
