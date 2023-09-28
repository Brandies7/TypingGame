const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

let randomWord;
let score = 0;
let time = 10;

async function getWord() {
    const res = await fetch(
      'https://random-word-api.herokuapp.com/word?number=1'
    );
    
    const data = await res.json();
    return data[0];
  }

  async function addWordToDOM() {
    randomWord = await getWord();
    word.innerHTML = randomWord;
  }

  function updateScore() {
    score++;
    scoreEl.innerHTML = score;
  }

  addWordToDOM();

  text.addEventListener('input', e => {
    const insertedText = e.target.value;

    if(insertedText === randomWord) {
        addWordToDOM();
        updateScore();
        e.target.value = '';
    }
  })