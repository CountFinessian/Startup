



class Game {
  constructor() {
    const playerNameEl = document.querySelector('.player-name');
    playerNameEl.textContent = this.getPlayerName();
  }
  getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }
    async saveScore(score, ticker) {
      const userName = this.getPlayerName();
      const date = new Date().toLocaleDateString();
      const newScore = { name: userName, score: ticker, date: score};
    
      // try {
      //   const response = await fetch('/api/score/${name}', {
      //     method: 'POST',
      //     headers: { 'content-type': 'application/json' },
      //     body: JSON.stringify(newScore),
      //   });
      try {
        const response = await fetch('/api/score', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newScore),
        });
        // Store what the service gave us as the high scores
        const scores = await response.json();
        localStorage.setItem('scores', JSON.stringify(scores));
      } catch {
        // If there was an error then just track scores locally
        this.updateScoresLocal(newScore);
      }
    }
    
    updateScoresLocal(newScore) {
      let scores = [];
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        scores = JSON.parse(scoresText);
      }
    
      let found = false;
      for (const [i, prevScore] of scores.entries()) {
        if (newScore > prevScore.score) {
          scores.splice(i, 0, newScore);
          found = true;
          break;
        }
      }
    
      if (!found) {
        scores.push(newScore);
      }
    
      if (scores.length > 10) {
        scores.length = 10;
      }
    
      localStorage.setItem('scores', JSON.stringify(scores));
    }
  }
const game = new Game();

function fun3(ticker) {

  // fetch(`https://query1.finance.yahoo.com/v11/finance/quoteSummary/${ticker}?modules=financialData`)
  //   .then((httpResult) => httpResult.json())
  //   .then((stockData) => {
  //     const stockPrice = stockData.quoteSummary.result[0].financialData.currentPrice.raw;

  //     return stockPrice;
  //   });
  
    window.location.href = 'about.html';
  }


function fun1() {
  var ticker = document.getElementById("symbo").value;
  var now = new Date();
  var sell = "Bought";
  var sold = sell.fontcolor("green");
  var number = document.getElementById("quant").value;
  
  fetch(`/api/stock/${ticker}`)
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#buy');

      containerEl.textContent = `Bought ${number*data.price} dollars of ${data.ticker} on ${now}`
      game.saveScore(data.price, data.ticker);
    });

}
function fun2(game) {
  var ticker = document.getElementById("symbo").value;
  var now = new Date();
  var sell = "Sold";
  var sold = sell.fontcolor("red");
  var number = document.getElementById("quant").value;

  fetch(`/api/stock/${ticker}`)
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#sell');
      
      containerEl.textContent = `Sold ${number*data.price} NOT IMPLIMENTED ${data.ticker} on ${now}`
      // game.saveScore(data.price, data.ticker);
    });
}

//  const containerEl = document.querySelector('#changer');
//  containerEl.insertAdjacentElement('afterend', '<p>This is a <span id="bigboy">green</span> word in a paragraph.</p>');
//  const spanElement = document.querySelector('#bigboy');
//  spanElement.style.color = 'green';
// function displayQuote(data) {

//   fetch(`/api/stock/TSLA`)
//     .then((response) => response.json())
//     .then((data) => {
//       const containerEl = document.querySelector('#changer');

//       containerEl.textContent = `Stock: ${data.ticker}, Price: ${data.price}`
//     });
// }


// var ticker = document.getElementById("symbo").value;
 

  // fetch(`https://query1.finance.yahoo.com/v11/finance/quoteSummary/${ticker}?modules=financialData`)
  //   .then((httpResult) => httpResult.json())
  //   .then((stockData) => {
  //     const stockPrice = stockData.quoteSummary.result[0].financialData.currentPrice.raw;

  //     var now = new Date();
  //     var quantEl = document.getElementById("quant");
  //     quantEl.style.color = "green"
  //     document.getElementById("changer").innerHTML += ("Bought " + quantEl.value + " dollars of " + stockPrice + " on " + now + "<br>");
  //   })

  
  