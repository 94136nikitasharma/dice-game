
var nobuttons=document.querySelectorAll(".button").length;
//for(var i=0;i<nobuttons;i++){
  document.querySelectorAll(".button")[0].addEventListener("click",function(){
currentScore=1;
    document.getElementById("currentScore").textContent = 1;
  })
//}
document.querySelectorAll(".button")[1].addEventListener("click",function(){
currentScore=2;
  document.getElementById("currentScore").textContent = 2;
})
document.querySelectorAll(".button")[2].addEventListener("click",function(){
currentScore=3;
  document.getElementById("currentScore").textContent = 3;
})
document.querySelectorAll(".button")[3].addEventListener("click",function(){
currentScore=4;
  document.getElementById("currentScore").textContent = 4;
})
document.querySelectorAll(".button")[4].addEventListener("click",function(){
currentScore=5;
  document.getElementById("currentScore").textContent = 5;
})
document.querySelectorAll(".button")[5].addEventListener("click",function(){
currentScore=6;
  document.getElementById("currentScore").textContent = 6;
})


// countdown function
// var left=3;
// var downloadTimer = setInterval(function(){
// timeleft--;
// if(timeleft <= 0){
//   clearInterval(downloadTimer);
//   document.getElementById("t").innerHTML="";
// }
// }


var flag=false;
var timeleft = 6;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    document.getElementById("t").innerHTML="";


    if(timeleft <= 0){

      var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
      if(currentScore==randomNumber1){
         score+=10;
         document.getElementById("score").innerHTML=score;
         document.getElementById("t").innerHTML="Your guess was right!";
       }
       else if(flag==true){
          document.getElementById("t").innerHTML="Your guess was wrong!";
       }
       currentScore=0;

      var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

      var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

      var image1 = document.querySelectorAll("img")[0];

      image1.setAttribute("src", randomImageSource);
      timeleft=4;
      flag=true;
      document.getElementById("hello").textContent="the dice will change in ";
       //document.getElementById("t").innerHTML="";
      //currentScore=0;

        //clearInterval(downloadTimer);
         // var theElement = document.getElementById("countdowntimer");
         //setInterval(downloadTimer);

    }

    },1000);
    var currentScore=0;
    var score=0;
     document.getElementById("score").textContent = score;
     document.getElementById("currentScore").textContent = currentScore;
     var t="";
     document.getElementById("t").textContent=t;
     var hello="Loading! game will start in ";
     document.getElementById("hello").textContent=hello;

    // function points(var p){
    //   currentScore=p;
    //
    //
    // }
