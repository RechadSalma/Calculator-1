export default class calculatorClass {
    constructor(resultScreenDom, formulaScreenDom) {
        this.resultScreenDom = resultScreenDom;
        this.resultValue = 0;
        this.formulaScreenDom = formulaScreenDom;
        this.formulaEquationString = "";
    }

    equal() {
        // splitArray = use .split() on this.formulaEquationString to create new array & include all items
        const splitArray = this.formulaEquationString.split(" ");

        // parseArray = map splitArray to convert number string into floating numbers
        const parseArray = splitArray.map((item) => {
            // parseFloatItem = parseFloat each item
            const parseFloatItem = parseFloat(item);

            // IF parseFlaot !== NaN THEN   #true if it is a number
            if (!Number.isNaN(parseFloatItem)) {
                //  RETURN parseFloatItem   #return number
                return parseFloatItem;
            }
            // ELSE #assuming it will be a math symbol
            else {
                //  RETURN math symbol as normal
                return item;
            }
            // END IF
        }); //END parseArray

        // reduceResultValueObject = OBJ for keeping track of the numbers & math symbol to do math sums
        const reduceResultValueObject = {
            initialNumber: parseArray[0],
            mathSymbol: "",
            resultValueObj: this.resultValue,
        };

        // dotErrors = BOOLEAN flag, display error message to result screen if false as there is multiple dots within numbers

        console.log(reduceResultValueObject);

        // forEach parseArray to do mathematical sum
        parseArray.forEach((item) => {
            // check for dot error
            this.handleMulipleDotsAsError(item);

            //  IF +plus math symbol exist THEN
            if (item === "+") {
                // assign the +plus sign string within the reduceResultValueObject.mathSymbol
                reduceResultValueObject.mathSymbol = item;
                return;
            }
            // IKMIGHT WANT TO DO THE SAME WITH THE OTHER MATH SYMBOL
            //  ELSE IF this.resultValue NOT 0 THEN  #do math sum with this.resultValue, since we continue from previous calculation
            else if (this.resultValue !== 0) {
                //      IF the reduceResultValueObject.mathSymbol is a +plus sign THEN
                if (reduceResultValueObject.mathSymbol === "+") {
                    //          add sum of .resultValueObj & item to the this.resultValue
                    this.resultValue =
                        reduceResultValueObject.resultValueObj + item;
                    return;
                }
                //      DO SAME IF STATEMENT WITH OTHER MATH SYMBOL
                //      END IF
            }
            //  ELSE #do math sum with reduceRsultValueObject.initialNumber, since this is the first calculation or the previous value was 0
            else {
                //      IF the reduceResultValueObject.mathSymbol is a +plus sign THEN
                if (reduceResultValueObject.mathSymbol === "+") {
                    //          add sum of .resultValueObj & item to the this.resultValue
                    this.resultValue =
                        reduceResultValueObject.initialNumber + item;
                    return;
                }

                //      DO SAME IF STATEMENT WITH OTEHR MATH SYMBOL
            }
            //  END IF
        });

        console.log(reduceResultValueObject);
        console.log(this.resultValue);

        // display result value on the result screen
        this.resultScreenDom.textContent = this.resultValue;
    } //END equal - class method

    // if there is two or more dots in a number, return error message to user on the result screen
    // When equal button is press, test the split array for multiple dots in number items
    handleMulipleDotsAsError(splitItem) {
        // IF test for multiple dots as error THEN

        zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz;
    }

    addToFormulaString(inputButton) {
        // add input button content to this.forulaEquationString
        this.formulaEquationString += inputButton;
        // add formula equation on the formula screen
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
