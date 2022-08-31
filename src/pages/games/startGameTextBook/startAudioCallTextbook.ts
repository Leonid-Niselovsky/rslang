class StartAudioCallTextbook{
    async start(obj){
        await (document.location.href = "./games.html");
        
        const startPage=document.querySelector('.startPageForTextbook')
        const wrongPage=document.querySelector('.startPageAudioChalenge')
        startPage.classList.remove('displayNoneForGame')
        wrongPage.classList.add('displayNoneForGame')
        console.log(wrongPage)
        console.log(obj)
        console.log('call')
    }
    thennn(){
        const startPage=document.querySelector('.startPageForTextbook')
        const wrongPage=document.querySelector('.startPageAudioChalenge')
        startPage.classList.remove('displayNoneForGame')
        wrongPage.classList.add('displayNoneForGame')
        console.log(wrongPage)
    }
}
export default StartAudioCallTextbook;