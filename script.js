function inputUpdateGraphType(shouldUpdate) {
    input = document.getElementsByName("graphType");
    selectedInput = null;
    input.forEach(element => {
        if (element.checked == true) selectedInput = element;
    });
    inputGraphType = selectedInput.id;
    if (shouldUpdate) update()
}

function inputUpdateLinearParameters(shouldUpdate) {
    m = document.getElementById("linearM").value;
    b = document.getElementById("linearB").value;
    linearM = m;
    linearB = b;
    if (shouldUpdate) update()
}

function inputUpdateExponentialParameters(shouldUpdate) {
    a = document.getElementById("exponentialA").value;
    d = document.getElementById("exponentialD").value;
    p = document.getElementById("exponentialP").value;
    e = document.getElementById("exponentialE").value;
    exponentialA = a;
    exponentialD = d;
    exponentialP = p;
    exponentialE = e;
    if (shouldUpdate) update()
}

function update() {
    inputUpdateGraphType(false)
    inputUpdateLinearParameters(false)
    inputUpdateExponentialParameters(false)
    changeInput()
    outputFormula()
}

function changeInput() {
    document.getElementById("linearInput").hidden = true;
    document.getElementById("exponentialInput").hidden = true;
    document.getElementById(inputGraphType + "Input").hidden = false;
}

function outputFormula() {
    if (inputGraphType == "linear") {
        if (linearM == 1 || linearM == undefined) outM = "";
        else if (linearM == -1) outM = "-";
        else outM = linearM.toString();

        if (linearB == 0 || linearB == undefined) outB = "";
        else if (linearB > 0) outB = " + " + linearB.toString();
        else outB = " - " + Math.abs(linearB);

        document.getElementById("linearInputFormulaOutput").innerHTML =
        "<p>f(x) = " + outM + "x" + outB + "</p>";
    }

    if(inputGraphType == "exponential") {
        if (exponentialD == 0 || exponentialD == undefined) {
            if (exponentialA == 1 || exponentialA == undefined) outA = "";
            else outA = exponentialA.toString();
            outFirstPart = outA + "x"
        } else{
            if (exponentialA == 1 || exponentialA == undefined) outA = "";
            else outA = exponentialA.toString();
            if (exponentialD > 0) outFirstPart = outA + "( x - " + exponentialD.toString() + ")";
            else outFirstPart = outA + "( x + " + Math.abs(exponentialD).toString() + ")";
        }
        if (exponentialP == 1) outMiddle = "";
        else if (exponentialP == undefined) outMiddle = "<sup>2</sup>";
        else outMiddle = "<sup>" + exponentialP.toString() + "</sup>"


        if (exponentialE == 0 || exponentialE == undefined) outEnd = "";
        else if (exponentialE > 0) outEnd = " + " + exponentialE.toString();
        else outEnd = " - " + Math.abs(exponentialE);

        document.getElementById("exponentialInputFormulaOutput").innerHTML =
        "<p> f(x) = " + outFirstPart + outMiddle + outEnd + "</p>"
    }
}

//linear or exponential
var inputGraphType = null;

//Linear vareables
var linearM = null;
var linearB = null;

//exponential vareables
var exponentialA = null;
var exponentialD = null;
var exponentialP = null;
var exponentialE = null;

inputUpdateGraphType()
inputUpdateLinearParameters()
