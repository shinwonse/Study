// Model은 Controller와 View에 의존하지 않아야 한다
// Model 내부에 Controller와 View에 관련된 코드가 있으면 안된다

class Model {
  constructor(phrase) {
    this.phrase = phrase;
  }

  firstTypeTime = null;

  startTimerWhenFirst() {
    return (this.firstTypeTime ??= new Date());
  }

  calcScore(inputValue) {
    const currentTime = new Date();
    const elapseTime = (currentTime - this.firstTypeTime) / 1000;
    if (inputValue.length > 1) {
      return `${(inputValue.length / elapseTime) * 60}타`;
    }
    return '0타';
  }

  calcAccuracy(inputValue) {
    if (inputValue.length === 0) {
      return '0%';
    }
    return `${
      ([...inputValue].reduce((acc, char, index) => {
        return acc + (char === this.phrase[index] ? 1 : 0);
      }, 0) /
        inputValue.length) *
      100
    }%`;
  }
}

export default Model;
