



class Game {
  constructor() {
    const playerNameEl = document.querySelector('.player-name');
    playerNameEl.textContent = this.getPlayerName();
  }
  getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }
  fn1() {
    var str = document.getElementById("text1").value;
    alert("Value inside the text box is: " + str);

  }
}
const game = new Game();


function fun3(ticker) {

  fetch(`https://query1.finance.yahoo.com/v11/finance/quoteSummary/${ticker}?modules=financialData`)
    .then((httpResult) => httpResult.json())
    .then((stockData) => {
      const stockPrice = stockData.quoteSummary.result[0].financialData.currentPrice.raw;

      return stockPrice;
    });
    

}

function fun1() {
  var ticker = document.getElementById("symbo").value;
 

  fetch(`https://query1.finance.yahoo.com/v11/finance/quoteSummary/${ticker}?modules=financialData`)
    .then((httpResult) => httpResult.json())
    .then((stockData) => {
      const stockPrice = stockData.quoteSummary.result[0].financialData.currentPrice.raw;

      var now = new Date();
      var quantEl = document.getElementById("quant");
      quantEl.style.color = "green"
      document.getElementById("changer").innerHTML += ("Bought " + quantEl.value + " dollars of " + stockPrice + " on " + now + "<br>");
    })
}
function fun2() {
  var ticker = document.getElementById("symbo").value;
  var now = new Date();
  var sell = "Sold";
  var sold = sell.fontcolor("red");
  
  fetch(`/api/stock/TSLA`)
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#changer');

      containerEl.textContent += `Sold ${number*data.price} dollars of ${data.ticker} on ${now}`
    });

  var number = document.getElementById("quant").value;
//   document.getElementById("changer").innerHTML += (sold + " " + number*price + " dollars of " + ticker + " on " + now + "<br>");
 }



function displayQuote(data) {

  fetch(`/api/stock/TSLA`)
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#changer');

      containerEl.textContent = `Stock: ${data.ticker}, Price: ${data.price}`
    });
}



