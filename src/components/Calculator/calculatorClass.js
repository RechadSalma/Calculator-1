export default class calculatorClass {
    constructor(resultScreenDom, formulaScreenDom) {
        this.resultScreenDom = resultScreenDom;
        this.resultValue = 0;
        this.formulaScreenDom = formulaScreenDom;
        this.formulaEquationString = "";
    }

    equal() {
        // [3 + 4]  =eg.
        // display formula on the formula screen
        this.resultScreenDom.textContent = this.resultValue;

        // splitArray = use .split() on this.formulaEquationString to create new array & include all items

        // newArray = map through splitArray
        //  IF NOT a nan THEN
        //      parseFloat each item
        //  ELSE     #return math symbol as normal
        //  END IF

        // reduceResultValue = INT for keeping the mathematical equation

        // forEach through newArray to do mathematical equation
        //  IF +plus math symbol THEN
        //      reduceResultValue += current item
        //  END IF

        zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz;
    }

    addToFormulaString(inputButton) {
        // add input button content forulaEquationString
        this.formulaEquationString += inputButton;
        this.formulaScreenDom.textContent = this.formulaEquationString;
        console.log(this.formulaEquationString);
    }

    // ensure you define the difference between substract symbol & negative number
    // perhaps use reg exp if you have first item as subtract, or two or more subtract in a row
    negativeNumber() {}

    resetCalculator() {
        this.resultScreenDom.textContent = 0;
        this.resultValue = 0;
        this.formulaScreenDom.textContent = 0;
        this.formulaEquationString = "";
    }
}
