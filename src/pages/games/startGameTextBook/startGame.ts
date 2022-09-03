class StartGame{
    start(target){
        if(target.innerHTML==='Audio Call'){
            document.location.href = './games.html?Textbook'
        } else if(target.innerHTML==='Sprint'){
            document.location.href = './sprint.html?Textbook'
        }
    }
}
export default StartGame;