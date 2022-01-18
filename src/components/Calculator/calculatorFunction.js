import calculatorClass from "./calculatorClass";

export default function CalculatorFunction() {
    const resultScreenDom = document.getElementById("resultScreen"),
        formulaScreenDom = document.getElementById("formulaScreen"),
        cButton = document.getElementById("buttonC"),
        equalButton = document.getElementById("buttonEqual"),
        backspaceButton = document.getElementById("buttonBackspace"),
        plusButton = document.getElementById("buttonPlus"),
        subtractButton = document.getElementById("buttonSubtract"),
        multiplyButton = document.getElementById("buttonMultiply"),
        divideButton = document.getElementById("buttonDivide"),
        dotButton = document.getElementById("buttonDot"),
        numberButtonArray = [
            document.getElementById("buttonZero"),
            document.getElementById("buttonOne"),
            document.getElementById("buttonTwo"),
            document.getElementById("buttonThree"),
            document.getElementById("buttonFour"),
            document.getElementById("buttonFive"),
            document.getElementById("buttonSix"),
            document.getElementById("buttonSeven"),
            document.getElementById("buttonEight"),
            document.getElementById("buttonNine"),
        ];

    const classCal = new calculatorClass(resultScreenDom, formulaScreenDom);

    numberButtonArray.forEach((element) => {
        element.addEventListener("click", (event) => {
            classCal.addToFormulaString(event.target.textContent);
        });
    });

    dotButton.addEventListener("click", (event) => {
        classCal.addToFormulaString(event.target.textContent);
        // console.log(event.target.textContent);
    });

    backspaceButton.addEventListener("click", (event) => {
        console.log(event.target.textContent);
    });

    plusButton.addEventListener("click", (event) => {
        classCal.addToFormulaString(` ${event.target.textContent} `);
        console.log(event.target.textContent);
    });

    subtractButton.addEventListener("click", (event) => {
        console.log(event.target.textContent);
    });

    multiplyButton.addEventListener("click", (event) => {
        console.log(event.target.textContent);
    });

    divideButton.addEventListener("click", (event) => {
        console.log(event.target.textContent);
    });

    cButton.addEventListener("click", (event) => {
        console.log(event.target.textContent);
        classCal.resetCalculator();
    });

    equalButton.addEventListener("click", (event) => {
        console.log(event.target.textContent);

        classCal.equal();
    });

    // console.log(
    //     resultScreenDom,
    //     formulaScreenDom,
    //     numberButtonArray,
    //     dotButton,
    //     cButton,
    //     backspaceButton,
    //     equalButton,
    //     plusButton,
    //     subtractButton,
    //     multiplyButton,
    //     divideButton
    // );
} //END CalculatorFunction()
