    function setup() 
     createCanvas(400, 400);
background ("pink") 
}

function draw() {


stroke("white")
fill("purple");  

//console.log(mouseIsPressed);

if (mouseIsPressed) {
rect(mouseX , mouseY, 30, 30);
}
}