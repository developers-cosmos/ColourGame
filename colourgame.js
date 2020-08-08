var sqrs = document.querySelectorAll(".square");
var mode=6;
var colour = generatecolors(mode);
var newcolorsbutton=document.querySelector("#newcols");
var easybutton=document.querySelector("#easybutton");
var hardbutton=document.querySelector("#hardbutton");
var pickedcolor=pickcolor();
var messagedisplay = document.querySelector("#message");
var colordisplay = document.querySelector("#displaycolor");
var h1=document.querySelector("h1");
colordisplay.textContent=pickedcolor;

for (var i=0; i<sqrs.length; i++){
	sqrs[i].style.background= colour[i];
	sqrs[i].addEventListener("click",function(){
		var colorclicked=this.style.background;
		newcolorsbutton.textContent="Play again";
		if(colorclicked === pickedcolor){
			messagedisplay.textContent="Correct";
			changecolors(colorclicked);
			h1.style.background=colorclicked;
		}else{
			this.style.background="black";
			messagedisplay.textContent="Try again";
		}
	});
} 

newcolorsbutton.addEventListener("click",function(){
	colour = generatecolors(mode);
	for (var i=0; i<sqrs.length; i++){
	sqrs[i].style.background= colour[i];
	};
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	messagedisplay.textContent="";
	h1.style.background="steelblue";
	newcolorsbutton.textContent="New Colours";
});
easybutton.addEventListener("click", function(){
	easybutton.classList.add("selected");
	hardbutton.classList.remove("selected");
	h1.style.background="steelblue";
	mode=3;
	colour=generatecolors(mode);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<sqrs.length;i++){
		if(colour[i]){
			sqrs[i].style.background=colour[i];
		}else{
			sqrs[i].style.display="none";
		}
	};

});
hardbutton.addEventListener("click", function(){
	hardbutton.classList.add("selected");
	easybutton.classList.remove("selected");
	h1.style.background="steelblue";
	mode=6;
	colour=generatecolors(mode);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<sqrs.length;i++){
		// if(colour[i]){
			sqrs[i].style.background=colour[i];
		// }else{
			 sqrs[i].style.display="block";
		}
	}
);




function changecolors(color){
	for(var i=0;i<sqrs.length;i++){
		sqrs[i].style.background=color;
	}
}
function pickcolor(){
	var random=Math.floor(Math.random()*colour.length);
	return colour[random];
}

function generatecolors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(rancol());
	}
	return arr;
};
function rancol(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
};