document.querySelector("body").style.backgroundColor="darkred";
document.querySelector("h1").style.color="white";

var randumNumber1=Math.floor(Math.random()*6)+1;
var randumImage= "dice" +randumNumber1 + ".png";
var randumImageSurce="images/" +randumImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randumImageSurce)


var randumNumber2=Math.floor(Math.random()*6)+1;

var randumImage= "images/dice" +randumNumber2 + ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randumImage)

if(randumNumber1 >randumNumber2 ){
    document.querySelector("h1").innerHTML="player 1 is win!";
}else if(randumNumber2 > randumNumber1 ){
    document.querySelector("h1").innerHTML="player 2 is win!";
}else{
    document.querySelector("h1").innerHTML="Draw";
}
