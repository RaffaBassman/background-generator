var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btnRandom = document.getElementById("btnRandom");

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


function randomColor() {
	var n = (Math.random() * 0xfffff * 1000000).toString(16);
  	return '#' + n.slice(0, 6);
}

btnRandom.addEventListener("click", function(){

	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();

});