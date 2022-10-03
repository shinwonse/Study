const scoreLabel = document.getElementById('score');
const accuracyLabel = document.getElementById('accuracy');
const phraseLabel = document.getElementById('phrase');
const textInput = document.getElementById('text');

let firstTypeTime = null;
const PHRASE = '동해물과 백두산이 마르고 닳도록';

phraseLabel.innerText = PHRASE;

const startTimerWhenFirst = () => (firstTypeTime ??= new Date());

const calcScore = (inputValue) => {
  const currentTime = new Date();
  const elapseTime = (currentTime - firstTypeTime) / 1000;
  if (inputValue.length > 1) {
    return `${(inputValue.length / elapseTime) * 60}타`;
  }
  return '0타';
};

const calcAccuracy = (inputValue) => {
  if (inputValue.length === 0) {
    return '0%';
  }
  return `${
    ([...inputValue].reduce((acc, char, index) => {
      return acc + (char === PHRASE[index] ? 1 : 0);
    }, 0) /
      inputValue.length) *
    100
  }%`;
};

const modifyColor = (inputValue) => {
  phraseLabel.innerHTML = [...PHRASE]
    .map(
      (char, index) =>
        `<span ${
          inputValue[index] === char && 'style="color: green"'
        }>${char}</span>`
    )
    .join('');
};

const write = (element, value) => (element.innerText = value);

textInput.addEventListener('input', ({ target: { value: inputValue } }) => {
  startTimerWhenFirst();

  const score = calcScore(inputValue);
  write(scoreLabel, score);

  const accuracy = calcAccuracy(inputValue);
  write(accuracyLabel, accuracy);

  modifyColor(inputValue);
});
