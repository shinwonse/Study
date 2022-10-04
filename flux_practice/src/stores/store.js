import { PHRASE } from '../index';

const scoreLabel = document.getElementById('score');
const accuracyLabel = document.getElementById('accuracy');
const phraseLabel = document.getElementById('phrase');

let firstTypeTime = null;
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

const reducer = (state, action) => {
  switch (action) {
    case 'INPUT':
      startTimerWhenFirst();
      write(scoreLabel, calcScore(state));
      write(accuracyLabel, calcAccuracy(state));
      modifyColor(state);
  }
};

export const dispatch = (action) => {
  reducer(action.input, action.type);
};
