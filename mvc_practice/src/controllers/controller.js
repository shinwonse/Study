// Controller는 Model과 View에 의존해도 된다
// Controller 내부에는 Model과 View의 코드가 있을 수 있다

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.registerEventListener(model, view);
  }

  registerEventListener(model, view) {
    const scoreLabel = view.findElementById('score');
    const accuracyLabel = view.findElementById('accuracy');
    const textInput = view.findElementById('text');

    textInput.addEventListener('input', ({ target: { value: inputValue } }) => {
      model.startTimerWhenFirst();

      const score = model.calcScore(inputValue);
      view.write(scoreLabel, score);

      const accuracy = model.calcAccuracy(inputValue);
      view.write(accuracyLabel, accuracy);

      view.modifyColor(inputValue);
    });
  }
}

export default Controller;
