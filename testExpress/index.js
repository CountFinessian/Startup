// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// const http = require('http');
// // var sharePrice = require("share-price");
// //Using a Promise.


// function callbackForRequests(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });


//   const ticker = 'O';
//   fetch(`https://query1.finance.yahoo.com/v11/finance/quoteSummary/${ticker}?modules=financialData`)
//     .then((httpResult) => httpResult.json())
//     .then((stockData) => {
//       const stockPrice = stockData.quoteSummary.result[0].financialData.currentPrice.raw;
//       console.log(stockPrice)
//       for (let i = 0; i < 100000000; i++) {
//         res.write(`<h1>my price</h1><p><b>${ticker}</b>:${stockPrice}</p>`);
//       }
//       res.end();
//     });
// }

// const app = http.createServer(callbackForRequests)

// app.listen(8080);

// const express = require('express');
// const cookieParser = require('cookie-parser');
// const app = express();

// // Third party middleware - Cookies
// app.use(cookieParser());

// app.post('/cookie/:name/:value', (req, res, next) => {
//   res.cookie(req.params.name, req.params.value);
//   res.send({ cookie: `${req.params.name}:${req.params.value}` });
// });

// app.get('/cookie', (req, res, next) => {
//   res.send({ cookie: req.cookies });
// });

// // Creating your own middleware - logging
// app.use((req, res, next) => {
//   console.log(req.originalUrl);
//   next();
// });

// // Built in middleware - Static file hosting
// app.use(express.static('public'));

// // Routing middleware
// app.get('/store/:storeName', (req, res) => {
//   res.send({ name: req.params.storeName });
// });

// app.put('/st*/:storeName', (req, res) => res.send({ update: req.params.storeName }));

// app.delete(/\/store\/(.+)/, (req, res) => res.send({ delete: req.params[0] }));

// // Error middleware
// app.get('/error', (req, res, next) => {
//   throw new Error('Trouble in river city');
// });

// app.use(function (err, req, res, next) {
//   res.status(500).send({ type: err.name, message: err.message });
// });

// // Listening to a network port
// const port = 8080;
// app.listen(port, function () {
//   console.log(`Listening on port ${port}`);
// });