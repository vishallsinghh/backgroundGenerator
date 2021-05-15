var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("linearGradient");
var tabPanels = document.querySelectorAll(".mainContainer .tabPanel");
var setDirection = "to right";
var currentBackground ;
var enterURL = document.getElementById("enterURL");
var imageURL = document.getElementById("imageURL");
var bgcss = document.getElementById("copyText") ;


//Function to Set direction of linear gradient
//Eg. top to bottom or left to right
function setDir(direction)		
{		
	setDirection = direction;
	setGradient();
	console.log(bgcss);
}


//Function to set set background as per inserted value
function setGradient(){				
	body.style.background = "linear-gradient("+setDirection+","+color1.value+","+color2.value+")";
	document.getElementById("currentCss").innerHTML = "background:"+body.style.background+";";
	currentBackground = "background:"+body.style.background;
	bgcss.value = "background:"+body.style.background+";";
}

color1.addEventListener("input", setGradient);						//it will run everytime user changes the value of input
color2.addEventListener("input", setGradient);

// setGradient(); //calling it to set value on page load

function clickToCopy() {
	var copyText = document.getElementById("copyText");
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	alert("Copied to clipboard!");
	console.log("Copied")
}

//Function to change tabs
function setTab(panelIndex)
{
	tabPanels.forEach(function(pass)
	{
		pass.style.display = "none";
	});
	tabPanels[panelIndex].style.display = "block";
	console.log(panelIndex,tabPanels[panelIndex]);
}

enterURL.addEventListener("click",copyURL);							//Clicking on Enter URL

//Function to copy ImageURL
function copyURL()
{
	if(imageURL.value.length > 0)
	{
		console.log(`linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url('${imageURL.value}');`)
		body.style.background = `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url('${imageURL.value}')`;
		body.style.backgroundSize = `cover`;
		body.style.backgroundRepeat = `no-repeat`;
		body.style.backgroundPosition = `center`;
		//https://www.knkx.org/sites/kplu/files/styles/x_large/public/201612/Gfp-southern-wisconsin-further-roadway-scenery-at-sunset.jpg
	}
}
setTab(0);