
const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");

function updateGraph() {
    {
        userSize = document.getElementById("canvasSize").value;  // get data
        document.getElementById("displaySize").innerHTML = userSize

        scaleX = Math.round(document.getElementById("scaleX").value**2)
        document.getElementById("displayScaleX").innerHTML = scaleX

        scaleY = Math.round(document.getElementById("scaleY").value**2)
        document.getElementById("displayScaleY").innerHTML = scaleY
    }

    {
        if (window.innerHeight < window.innerWidth) {  //change size
            canvas.width = (window.innerHeight / userSize);
            canvas.height = (window.innerHeight / userSize);
        }
        else {
            canvas.width = (window.innerWidth / userSize);
            canvas.height = (window.innerWidth / userSize);
        }
    }

    {
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ffffff";
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(canvas.width / 2, 0)
        ctx.lineTo(canvas.width / 2, canvas.height)
        ctx.moveTo(0,canvas.height / 2)
        ctx.lineTo(canvas.width, canvas.height / 2)
        ctx.strokeStyle = "#000000";
        ctx.stroke()
    }

    {
        ctx.strokeStyle = "#80808080";
        ctx.fillStyle = "#000000";
        ctx.font = '16px serif';
        ctx.textAlign = "center"
        for (i in [...Array(scaleX * 2 +1).keys()]) {
            ctx.beginPath()
            // canvas.height/2 -10
            ctx.moveTo(calcPosX(i - scaleX), canvas.height * 0.05)
            ctx.lineTo(calcPosX(i - scaleX), canvas.height * 0.95)
            ctx.fillText((i - scaleX).toString(), calcPosX(i - scaleX), canvas.height / 2 + 15)
            ctx.stroke()
        }
        for (i in [...Array(scaleY * 2 +1).keys()]) {
            ctx.beginPath()

            ctx.moveTo(canvas.width * 0.05, calcPosY(i - scaleY))
            ctx.lineTo(canvas.width * 0.95, calcPosY(i - scaleY))
            ctx.fillText((i - scaleY).toString(), canvas.width / 2 + 10, calcPosY(i - scaleY))
            ctx.stroke()
        }
    }

    if (inputGraphType == "linear") drawLinearGraph(); else drawExponentialCurve();
}

function calcPosX(x) {
    return calculatePosition(x,0)[0];
}

function calcPosY(y) {
    return calculatePosition(0,y)[1];
}

function calculatePosition(x, y)  {

    middle = [canvas.width/2, canvas.height/2];

    scaleMultiplyX = middle[0] / scaleX * 0.9;
    scaleMultiplyY = middle[1] / scaleY * 0.9;

    returnX = x * scaleMultiplyX + middle[0];
    returnY = -1 * y * scaleMultiplyY + middle[1];

    return [returnX, returnY];
}

function drawExponentialCurve() {
    ctx.beginPath()
    ctx.strokeStyle = "#f00"
    x = (1 - middle[0]) / scaleMultiplyX
    y = exponentialA*Math.pow(x - exponentialD, exponentialP) + parseFloat(exponentialE)
    coordY = calcPosY(y)
    ctx.moveTo(1, coordY)
    for (i in [...Array(canvas.width).keys()]) {
        x = (i - middle[0]) / scaleMultiplyX
        y = (exponentialA*Math.pow(x - exponentialD, exponentialP)) + parseFloat(exponentialE)
        coordY = calcPosY(y)
        ctx.lineTo(i, coordY)
    }
    ctx.stroke()
}

function drawLinearGraph() {
    ctx.beginPath()
    ctx.strokeStyle = "#f00"
    x = (1 - middle[0]) / scaleMultiplyX
    y =  linearM*x + parseFloat(linearB)
    coordY = calcPosY(y)
    ctx.moveTo(1, coordY)
    for (i in [...Array(canvas.width).keys()]) {
        x = (i - middle[0]) / scaleMultiplyX
        y = linearM*x + parseFloat(linearB)
        coordY = calcPosY(y)
        ctx.lineTo(i, coordY)
    }
    ctx.stroke()
}


//scale vareables
userSize = 2;
scaleX = 9;
scaleY = 9;
scaleMultiplyX = null;
scaleMultiplyY = null;

updateGraph()