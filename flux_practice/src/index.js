import { dispatch } from './stores/store';

const textInput = document.getElementById('text');
const phraseLabel = document.getElementById('phrase');

export const PHRASE = '동해물과 백두산이 마르고 닳도록';
phraseLabel.innerText = PHRASE;

export const INPUT_ACTION = (input) => ({ type: 'INPUT', input });

textInput.addEventListener('input', ({ target: { value: inputValue } }) => {
  dispatch(INPUT_ACTION(inputValue));
});
