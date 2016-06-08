import results from './results';

export default class Application {
	
  init() {
    results.hide();
    this.boundHandleButtonClick = this.boundHandleButtonClick.bind(this);

    // destructuring
    const { button, input } = this.getElements();
    this.button = button;
    this.input = input;

    // Arrow scoping
    this.button.addEventListener('click', () => {
      console.log(this.input, 'arrow function');
    });

    this.button.addEventListener('click', function(event) {
      console.log(this.input, 'regular function');
    });

    this.button.addEventListener('click', this.handleButtonClick);

    this.button.addEventListener('click', this.handleButtonClick.bind(this));

    this.button.addEventListener('click', (event) => { this.handleButtonClick });


  }

  getElements() {
    return {
      button: document.getElementById("button"),
      input: document.getElementById("input")
    }
  }

  boundHandleButtonClick(event) {
    console.log(this.input, 'class method');
  }

  handleButtonClick(event) {
    console.log(this.input, 'class method');
  }

  sayHello() {
    results.show();

    // template strings
    results.update(`Oh hello there, ${this.name()}`);
  }

}