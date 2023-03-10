
  
  
  class Game {
    constructor() {
      const playerNameEl = document.querySelector('.player-name');
      playerNameEl.textContent = this.getPlayerName();
    }
    getPlayerName() {
      return localStorage.getItem('userName') ?? 'Mystery player';
    }
    fn1()
      {
        var str = document.getElementById("text1").value;
        alert("Value inside the text box is: "+str);

      }
  }
  
  const game = new Game();
  
  
  
  
  