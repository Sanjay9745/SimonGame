var colorNumber = [];
var clickNum =[]
var level = 1;
var audio = new Audio('sounds/background.mp3');
audio.play();
function muteAudio(){
 
    $('.mute-audio').css("display","inline-block");
    $('.play-audio').css("display","none");
    audio.pause();
}
function playAudio(){
    $('.play-audio').css("display","block");
    $('.mute-audio').css("display","none");
    audio.play();
}    
function randomNumGen(){

    var randomNum = Math.floor(Math.random()*4)+1;
  
    colorNumber.push(randomNum);
    console.log(colorNumber)
}


$("#green").click(()=>{
    console.log("Green");
    pressed("green",1);
    var audio = new Audio('sounds/green.mp3');
    audio.play();
    
});
$("#red").click(()=>{
    console.log("red");
    pressed("red",2);
    var audio = new Audio('sounds/red.mp3');
    audio.play();

})

$("#yellow").click(()=>{
    console.log("yellow");
    pressed("yellow",3);
    var audio = new Audio('sounds/yellow.mp3');
    audio.play();
   
})
$("#blue").click(()=>{
    console.log("blue");
    pressed("blue",4);
    var audio = new Audio('sounds/blue.mp3');
    audio.play();
})

function pressed(color,num){
    $("#"+color).addClass("pressed");
    setTimeout(()=>{
        $("#"+color).removeClass("pressed");
    },200);
   
  clickNum.push(num);
  
   
        console.log("count is"+clickNum.length)
        if(clickNum[clickNum.length-1]===colorNumber[clickNum.length-1]){
           console.log("correct")
          
           console.log(colorNumber);
           console.log(clickNum);
         
        }else{
         restart();
         
        }
    
    
    var countColor = colorNumber.length;
    var countClick = clickNum.length;
    if(countColor===countClick){
         countColor = colorNumber.length-1;
        countClick = clickNum.length-1;
        if(colorNumber[countColor]===clickNum[countClick]){
            console.log("colorNumber[countColor]===clickNum[countClick]")
            randomNumGen();
            countColor = colorNumber.length-1;
           var blinkColor = checkColor(colorNumber[countColor])
           setTimeout(()=>{
            blink(blinkColor);
            console.log("Blinked");
            console.log(colorNumber);
            console.log(clickNum);
           },1000)
           clickNum =[];
           level++;
           $("#level-title").text("Level  "+level);
        }
    }
    
}
function blink(color){
    $("#"+color).addClass("blink");
    setTimeout(()=>{
        $("#"+color).removeClass("blink");
    },200);
}


// function blinkColors(){
//     let count = 0;
    
// let intervalId = setInterval(() => {
//     var color = checkColor(colorNumber[count])
  
//   blink(color);
//   count++;
//   if (count > colorNumber.length) {
//     clearInterval(intervalId);
//   }
// }, 500);
       
// }
function checkColor(num){
    if(num===1){
        
        return "green"
    }else if(num===2){
        return "red";
    }else if(num===3){
        return "yellow";
    }else if(num===4){
        return "blue";
    }else{
        return "wrong color"
    }
}

function restart(){
    var audio = new Audio('sounds/wrong.mp3');
    audio.play();
    $(".btn").css("display","none");
    $("body").addClass("game-over")
    $("#restart-button").css("display","block");
    $("#level-title").text("Press Restart");
    $("#score-board").text("Your Score is "+level);
}
function start(){
    $("#start-button").css("display","none");
    $("body").removeClass("game-over")
    $("#score-board").text("");
    $("#restart-button").css("display","none");
    $(".btn").css("display","inline-block");
    level=1;
    $("#level-title").text("Level  "+level);
    colorNumber=[];
    clickNum = [];
    randomNumGen()
    countColor = colorNumber.length-1;
    var blinkColor = checkColor(colorNumber[countColor])
    setTimeout(()=>{
     blink(blinkColor);
     console.log("Blinked");
    },1000)
    
}