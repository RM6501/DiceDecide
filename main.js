var randomNumber1=Math.ceil(Math.random()*6);
console.log(randomNumber1);

var randomDice1=document.querySelector(".img1").getAttribute("src");
console.log(randomDice1);
var changeImg1="images/dice"+randomNumber1+".png";
var image=document.querySelector(".img1").setAttribute("src",changeImg1);

var randomNumber2=Math.ceil(Math.random()*6);
console.log(randomNumber2);

var randomDice2=document.querySelector(".img2").getAttribute("src");
console.log(randomDice2);
var changeImg2="images/dice"+randomNumber2+".png";
var image=document.querySelector(".img2").setAttribute("src",changeImg2);



   if(randomNumber1 > randomNumber2){
     document.querySelector("h1").textContent="🎊Player1 Wins🎉";
   }
   else if (randomNumber1 == randomNumber2) {
     document.querySelector("h1").textContent="DRAW!!😂";
   }
   else {
      document.querySelector("h1").textContent="🎊Player2 Wins🎉";
   }
