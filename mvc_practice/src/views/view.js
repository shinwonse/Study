// View는 Model에만 의존해야 하고, Controller에는 의존하면 안된다
// View 내부에 Model의 코드만 있을 수 있고, Controller의 코드가 있으면 안된다

// View가 Model로부터 데이터를 받을 때에는
// 사용자마다 다르게 보여주어야 하는 데이터만 받아야 한다
// 반드시 Controller에서 받아야 한다

class View {
  constructor(model) {
    this.model = model;
    this.writePhrase();
  }

  writePhrase() {
    const phraseLabel = this.findElementById('phrase');
    phraseLabel.innerText = this.model.phrase;
  }

  findElementById(id) {
    return document.getElementById(id);
  }

  write(element, value) {
    element.innerText = value;
  }

  modifyColor(inputValue) {
    const phraseLabel = this.findElementById('phrase');

    phraseLabel.innerHTML = [...this.model.phrase]
      .map(
        (char, index) =>
          `<span ${
            inputValue[index] === char && 'style="color: green"'
          }>${char}</span>`
      )
      .join('');
  }
}

export default View;
