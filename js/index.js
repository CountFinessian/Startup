
  
  
  class Game {
    constructor() {
      const playerNameEl = document.querySelector('.player-name');
      playerNameEl.textContent = this.getPlayerName();
    }
    getPlayerName() {
      return localStorage.getItem('userName') ?? 'Mystery player';
    }
  }
  
  const game = new Game();
  
  
  
  
  