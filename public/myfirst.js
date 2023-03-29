// var http = require('http');
// var sharePrice = require("share-price");
// //Using a Promise.
// const app = http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   sharePrice.getSharePrice({ stockSymbol: "AAPL" }).then(r => {
//     console.log(r)
//     res.write(`<h1>my price</h1><p><b>AAPL</b>:${r}</p>`);
//     res.end();
//   })
// })



// const http = require('http');
// // var sharePrice = require("share-price");
// //Using a Promise.


// function callbackForRequests(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });

  
//   const ticker = 'TSLA';
//   fetch(`https://query1.finance.yahoo.com/v11/finance/quoteSummary/${ticker}?modules=financialData`)
//     .then((httpResult) => httpResult.json())
//     .then((stockData) => {
//       const stockPrice = stockData.quoteSummary.result[0].financialData.currentPrice.raw;
      
//       console.log(stockPrice)
      
//       res.write(`<h1>my price</h1><p><b>${ticker}</b>:${stockPrice}</p>`);
      
//       res.end();
//     });
// }

// const app = http.createServer(callbackForRequests)

// app.listen(3000);


// var sharePrice = require("share-price");
//Using a Promise.


function callbackForRequests(ticker)  {
  
 
  fetch(`https://query1.finance.yahoo.com/v11/finance/quoteSummary/${ticker}?modules=financialData`)
    .then((httpResult) => httpResult.json())
    .then((stockData) => {
      return stockData.quoteSummary.result[0].financialData.currentPrice.raw;
      
      
    });
   
}
var stonk = "TSLA"
price = callbackForRequests(stonk);
console.log(price)
