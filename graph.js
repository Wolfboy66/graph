const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");

function updateGraph() {
    getDisplaySettings()
    setSize()
    updateScale()
    drawBackground()
}

function getDisplaySettings() {
    userSize = document.getElementById("canvasSize").value;
    document.getElementById("displaySize").innerHTML = userSize
}
function setSize() {
    if (window.innerHeight < window.innerWidth) {
        canvas.width = (window.innerHeight / userSize);
        canvas.height = (window.innerHeight / userSize);
        
    }
    else {
        canvas.width = (window.innerWidth / userSize);
        canvas.height = (window.innerWidth / userSize);
    }
}

function updateScale() {
    scaleX = 100 / canvas.width * userScalewidth;
    scaleY = 100 / canvas.height * userScaleHeight;
}

function drawBackground() {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(canvas.width / 2, 0)
    ctx.lineTo(canvas.width / 2, canvas.height)
    ctx.moveTo(0,canvas.height / 2)
    ctx.lineTo(canvas.width, canvas.height / 2)
    ctx.fillStyle = "#000000";
    ctx.stroke()
}

//scale vareables
userScalewidth = 1;
userScaleHeight = 1;
userSize = 2;
scaleX = null;
scaleY = null;


updateGraph()
