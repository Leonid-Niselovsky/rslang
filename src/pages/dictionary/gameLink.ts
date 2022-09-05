export function gameLink(title: string){
  return `
      <a class="game-link" href="${title.toLowerCase() !== 'sprint' ? './games.html' : './sprint.html'}">
        <h3 class="game-link-title">${title}</h3>
        <img src="assets/img/${title.split(' ').join('').toLowerCase()}.png">
      </a>
  `
}