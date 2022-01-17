export default class calculatorClass {
    constructor(resultScreenDom, formulaScreenDom) {
        this.resultScreenDom = resultScreenDom;
        this.resultValue = 0;
        this.formulaScreenDom = formulaScreenDom;
        this.formulaEquation = "";
    }

    add() {}

    // substract() {}

    // multiply() {}

    // divide() {}

    equal() {
        this.resultScreenDom.textContent = this.resultValue;
    }

    formulaScreen(inputButton) {
        console.log(typeof inputButton);

        this.formulaEquation += inputButton;
        console.log(this.formulaEquation);
        this.formulaScreenDom.textContent = this.formulaEquation;
    }

    resetCalculator() {
        this.resultScreenDom.textContent = 99;
        this.resultValue = 77;
        this.formulaScreenDom.textContent = 66;
        this.formulaEquation = 44;
    }
}
