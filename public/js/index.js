



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
  var now = new Date();
  var sell = "Bought";
  var sold = sell.fontcolor("green");
  var number = document.getElementById("quant").value;
  
  fetch(`/api/stock/${ticker}`)
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#buy');

      containerEl.textContent = `Bought ${number*data.price} dollars of ${data.ticker} on ${now}`
    });

}
function fun2() {
  var ticker = document.getElementById("symbo").value;
  var now = new Date();
  var sell = "Sold";
  var sold = sell.fontcolor("red");
  var number = document.getElementById("quant").value;

  fetch(`/api/stock/${ticker}`)
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#sell');
      
      containerEl.textContent = `Sold ${number*data.price} dollars of ${data.ticker} on ${now}`
    });
  // document.getElementById("changer").innerHTML += (sold + " " + number*price + " dollars of " + ticker + " on " + now + "<br>");
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
