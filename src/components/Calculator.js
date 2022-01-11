import "./Calculator.css";

function Calculator() {
    return `
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3"></div>

                <div class="col container-fluid border border-5 border-primary">
                    <div id="formulaScreen" class="row">
                        <div class="col">
                            formula screen
                        </div>
                    </div>

                    <div id="resultScreen" class="row">
                        <div class="col">
                            <input 
                                type="text" 
                                name="result-screen" 
                                value="result screen" 
                                class="container-fluid"/>
                        </div>
                    </div>

                    <div class="row">
                        <div id="buttonPlus" class="col border">
                            +
                        </div>
                        <div id="buttonSubtract" class="col border">
                            -
                        </div>
                        <div id="buttonEqual" class="col border">
                            =
                        </div>
                    </div>
                    <div class="row">
                        <div id="buttonMultiply" class="col border">
                            *
                        </div>
                        <div id="buttonDivide" class="col border">
                            /
                        </div>
                        <div id="buttonBackspace" class="col border">
                            bs
                        </div>
                    </div>
                    <div class="row">
                        <div id="buttonSeven" class="col border">
                            7
                        </div>
                        <div id="buttonEight" class="col border">
                            8
                        </div>
                        <div id="buttonNine" class="col border">
                            9
                        </div>
                    </div>
                    <div class="row">
                        <div id="buttonFour" class="col border">
                            4
                        </div>
                        <div id="buttonFive" class="col border">
                            5
                        </div>
                        <div id="buttonSix" class="col border">
                            6
                        </div>
                    </div>
                    <div class="row">
                        <div id="buttonOne" class="col border">
                            1
                        </div>
                        <div id="buttonTwo" class="col border">
                            2
                        </div>
                        <div id="buttonThree" class="col border">
                            3
                        </div>
                    </div>
                    <div class="row">
                        <div id="buttonC" class="col border">
                            C
                        </div>
                        <div id="buttonZero" class="col border">
                            0
                        </div>
                        <div id="buttonDot" class="col border">
                            .
                        </div>
                    </div>
                </div>
        

                <div class="col-sm-3"></div>
            </div>
        </div>
    `;
}

export default Calculator;
