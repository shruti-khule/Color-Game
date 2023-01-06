var numSquare=6;
var colors=generateColor(numSquare);
var selectRgb=document.querySelector("#select");
var message=document.querySelector("#message");
var square=document.querySelectorAll(".square");
var header=document.querySelector(".header");
var resetButton=document.querySelector("#resetButton");
var easyBtn=document.querySelector("#easyBtn");

var pickedColor=colorPick(colors);
selectRgb.textContent=pickedColor;



for(var i=0;i<=square.length-1;i++)
{   
   square[i].style.backgroundColor=colors[i];
   
   square[i].addEventListener("click",function(){
    var clickedColor=this.style.backgroundColor;
    if(clickedColor===pickedColor){
   	   message.textContent="Correct !";
   	   header.style.backgroundColor=pickedColor;
   	   resetButton.textContent="Play Again?";
   	   changeColor(pickedColor);

          }
    else{
        message.textContent="Try Again !";
        this.style.backgroundColor="#232323";

       }
     });
}

resetButton.addEventListener("click",function(){
	colors=generateColor(numSquare);
	pickedColor=colorPick(colors);
    selectRgb.textContent=pickedColor;
   	 this.textContent="New Colors";

    for(i=0;i<=square.length-1;i++){
       square[i].style.backgroundColor=colors[i];

    }
    message.textContent="  ";
    header.style.backgroundColor="steelblue";
});


easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquare=3;
	colors=generateColor(numSquare);
	pickedColor=colorPick(colors);
   selectRgb.textContent=pickedColor;
    message.textContent="  ";
   	 resetButton.textContent="New Colors";

    header.style.backgroundColor="steelblue";
   for(i=0;i<square.length;i++)
   { if(colors[i])
   	   square[i].style.backgroundColor=colors[i];
     else
     	square[i].style.display="none";
   }
   
});


hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquare=6;
	colors=generateColor(numSquare);
	pickedColor=colorPick(colors);
   selectRgb.textContent=pickedColor;
    message.textContent="  ";
   	 resetButton.textContent="New Colors";
    
    header.style.backgroundColor="steelblue";
    for(i=0;i<square.length;i++){
   	   square[i].style.backgroundColor=colors[i];
     	square[i].style.display="block";
     }
});



function colorPick(){
	var random=Math.floor(Math.random() * colors.length);
	 return colors[random];
}

function changeColor(colors){
	for(var i=0;i<=square.length-1;i++)
        square[i].style.backgroundColor=pickedColor;

 }

function generateColor(num){
	var arr=[];
	for(var i=1;i<=num;i++){
		arr.push(randomColor());
	}
   return arr;

}

function randomColor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
    return("rgb("+r+", "+g+", "+b+")");
} 