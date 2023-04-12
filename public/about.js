function displayPicture() {
  const random = Math.floor(Math.random() * 1000);
  fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#picture');

      const width = containerEl.offsetWidth;
      const height = containerEl.offsetHeight;

      const imgUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
      const imgEl = document.createElement('img');
      imgEl.setAttribute('src', imgUrl);
      containerEl.appendChild(imgEl);
    });
}

function displayQuote(data) {

  fetch(`/api/stock/TSLA`)
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#quote');

      containerEl.textContent = `Stock: ${data.ticker}, Price: ${data.price}`
    });
}

async function loadScores() {
  let scores = [];
  try {
    // Get all scores from the service
    const response = await fetch('/api/scores/all');
    scores = await response.json();

    // Save the scores in case we go offline in the future
    localStorage.setItem('scores', JSON.stringify(scores));
  } catch {
    // If there was an error then just use the last saved scores
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
  }
  const name = this.getPlayerName();
  displayScores(scores, name);
}
function getPlayerName() {
  return localStorage.getItem('userName') ?? 'Mystery player';
}

function displayScores(scores, nameFilter) {
  const tableBodyEl = document.querySelector('#scores');

  if (scores.length) {
    // Filter the scores for the specified name
    if (nameFilter) {
      scores = scores.filter((score) => score.name === nameFilter);
    }

    // Update the DOM with the scores
    for (const [i, score] of scores.entries()) {
      const positionTdEl = document.createElement('td');
      // const nameTdEl = document.createElement('td');
      const scoreTdEl = document.createElement('td');
      const dateTdEl = document.createElement('td');

      positionTdEl.textContent = i + 1;
      // nameTdEl.textContent = score.name;
      scoreTdEl.textContent = score.score;
      dateTdEl.textContent = score.date;

      const rowEl = document.createElement('tr');
      rowEl.appendChild(positionTdEl);
      // rowEl.appendChild(nameTdEl);
      rowEl.appendChild(scoreTdEl);
      rowEl.appendChild(dateTdEl);

      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colSpan=4>Buy your first stock</td></tr>';
  }
}



displayPicture();
displayQuote();
loadScores();
