
  
  

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
  
  
  function fun1(){
    var ticker = document.getElementById("symbo").value;
    var now = new Date();
    var Buy = "Bought";
    var Bought = Buy.fontcolor("green");
    
    var number = document.getElementById("quant").value;
    document.getElementById("changer").innerHTML += (Bought + " " + number + " shares of " + ticker + " on " + now + "<br>");
  }
  function fun2(){
    var ticker = document.getElementById("symbo").value;
    var now = new Date();
    var sell = "Sold";
    var sold = sell.fontcolor("red");
    var number = document.getElementById("quant").value;
    document.getElementById("changer").innerHTML += (sold + " " + number + " shares of " + ticker + " on " + now + "<br>");
  }

  
  
  