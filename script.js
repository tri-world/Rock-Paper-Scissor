const noOfTurns =document.getElementById("input");
const playBtn= document.getElementById("play");
const selectRock = document.getElementById("rock");
const selectPaper = document.getElementById("paper");
const selectScissors=  document.getElementById("scissors");

playBtn.addEventListener("click",function (){
    let turn = Number(noOfTurns.value);
    if(turn<=0){
        alert("enter turn more than 0")
        noOfTurns.value="";
        return
    }
    noOfTurns.value="";
    document.getElementById("gameStarter").innerText="game Started!! select your choics below!!";
    
   
    console.log("game started!");
    
    // console.log(typeof(turn));
    let computerPoint=0;
    let userPoint = 0;
    // selecting Rock as user choice/////
    selectRock.addEventListener("click",function(){
        document.getElementById("gameStarter").textContent="";
        if(turn>0){
            selectRock.textContent= "rock selected";
            let compchoice = getRandomOptionComp(3);
            while(turn>0){
                if(compchoice===0){
                  
                    document.getElementById("cs").textContent="Computer Select:" + "rock";
                    document.getElementById("cp").textContent= computerPoint;
                    document.getElementById("userp").textContent=userPoint;
                    console.log(computerPoint,userPoint);
                    if(turn===1){
                        if(computerPoint>userPoint){
                            document.getElementById("gr").textContent="computer Won the Match!";
                        }
                        else if(computerPoint==userPoint){
                            document.getElementById("gr").textContent="TIE match!";
                        }
                        else{
                            document.getElementById("gr").textContent="You Won!";
                        }
                    }
                    turn--;
                    document.getElementById("tl").textContent="Turns Left:"+turn;
                    selectRock.textContent= "rock";
                    document.getElementById("rr").textContent="IT'S A TIE!";
                    break;
                }
                if(compchoice===1){
                    
                    document.getElementById("cs").textContent="Computer Select:" + "paper";
                    document.getElementById("cp").textContent=++computerPoint;
                    document.getElementById("userp").textContent= userPoint;
                    console.log(computerPoint,userPoint);
                    
                    if(turn===1){
                        if(computerPoint>userPoint){
                            document.getElementById("gr").textContent="computer Won the Match!";
                        }
                        else if(computerPoint==userPoint){
                            document.getElementById("gr").textContent="TIE match!";
                        }
                        else{
                            document.getElementById("gr").textContent="You Won!";
                        }
                    }
                    turn--;
                    document.getElementById("tl").textContent="Turns Left:"+turn;
                    selectRock.textContent= "rock";
                    document.getElementById("rr").textContent="Computer Won!";
                    break;
                }
                if(compchoice===2){
                   
                    document.getElementById("cs").textContent="Computer Select:" + "Scissor";
                    document.getElementById("cp").textContent= computerPoint;
                    document.getElementById("userp").textContent= ++userPoint;
                    console.log(computerPoint,userPoint);
                    if(turn===1){
                        if(computerPoint>userPoint){
                            document.getElementById("gr").textContent="computer Won the Match!";
                        }
                        else if(computerPoint==userPoint){
                            document.getElementById("gr").textContent="TIE match!";
                        }
                        else{
                            document.getElementById("gr").textContent="You Won!";
                        }
                    }
                    turn--;
                    document.getElementById("tl").textContent="Turns Left:"+turn;
                    selectRock.textContent= "rock";
                    document.getElementById("rr").textContent="You Won!";
                    break;
                }
            }
   
        }
    }) // select paper as user Choice///
    selectPaper.addEventListener("click",function(){
        document.getElementById("gameStarter").textContent="";
        if(turn>0){
            selectPaper.textContent= "paper selected";
            let compchoice = getRandomOptionComp(3);
            while(turn>0){
                if(compchoice===0){
                  
                    document.getElementById("cs").textContent="Computer Select:" + "rock";
                    document.getElementById("cp").textContent=computerPoint;
                    document.getElementById("userp").textContent=  ++userPoint;
                    console.log(computerPoint,userPoint);
                    if(turn===1){
                        if(computerPoint>userPoint){
                            document.getElementById("gr").textContent="computer Won the Match!";
                        }
                        else if(computerPoint==userPoint){
                            document.getElementById("gr").textContent="TIE match!";
                        }
                        else{
                            document.getElementById("gr").textContent="You Won!";
                        }
                    }
                    turn--;
                    document.getElementById("tl").textContent="Turns Left:"+turn;
                    selectPaper.textContent= "paper";
                    document.getElementById("rr").textContent="You Won";
                    break;
                }
                if(compchoice===1){
                    
                    document.getElementById("cs").textContent="Computer Select:" + "paper";
                    document.getElementById("cp").textContent=computerPoint;
                    document.getElementById("userp").textContent= userPoint;
                    console.log(computerPoint,userPoint);
                    
                    if(turn===1){
                        if(computerPoint>userPoint){
                            document.getElementById("gr").textContent="computer Won the Match!";
                        }
                        else if(computerPoint==userPoint){
                            document.getElementById("gr").textContent="TIE match!";
                        }
                        else{
                            document.getElementById("gr").textContent="You Won!";
                        }
                    }
                    turn--;
                    document.getElementById("tl").textContent="Turns Left:"+turn;
                    selectPaper.textContent= "paper";
                    document.getElementById("rr").textContent="TIE MATCH";
                    break;
                }
                if(compchoice===2){
                   
                    document.getElementById("cs").textContent="Computer Select:" + "Scissor";
                    document.getElementById("cp").textContent= ++computerPoint;
                    document.getElementById("userp").textContent= userPoint;
                    console.log(computerPoint,userPoint);
                    if(turn===1){
                        if(computerPoint>userPoint){
                            document.getElementById("gr").textContent="computer Won the Match!";
                        }
                        else if(computerPoint==userPoint){
                            document.getElementById("gr").textContent="TIE match!";
                        }
                        else{
                            document.getElementById("gr").textContent="You Won!";
                        }
                    }
                    turn--;
                    document.getElementById("tl").textContent="Turns Left:"+turn;
                    selectPaper.textContent= "paper";
                    document.getElementById("rr").textContent="Computer won";
                    break;
                }
            }
            
        }
    })
// selected scissor as a user choice
    selectScissors.addEventListener("click",function(){
        document.getElementById("gameStarter").textContent="";
        if(turn>0){
            selectScissors.textContent= "scissor selected";
            let compchoice = getRandomOptionComp(3);
            while(turn>0){
                if(compchoice===0){  // computer selected rock
                  
                    document.getElementById("cs").textContent="Computer Select:" + "rock";
                    document.getElementById("cp").textContent= ++computerPoint;
                    document.getElementById("userp").textContent=userPoint;
                    console.log(computerPoint,userPoint);
                    if(turn===1){
                        if(computerPoint>userPoint){
                            document.getElementById("gr").textContent="computer Won the Match!";
                        }
                        else if(computerPoint==userPoint){
                            document.getElementById("gr").textContent="TIE match!";
                        }
                        else{
                            document.getElementById("gr").textContent="You Won!";
                        }
                    }
                    turn--;
                    document.getElementById("tl").textContent="Turns Left:"+turn;
                    selectScissors.textContent= "Scissor";
                    document.getElementById("rr").textContent="Computer Won!";
                    break;
                }
                if(compchoice===1){
                    
                    document.getElementById("cs").textContent="Computer Select:" + "paper";
                    document.getElementById("cp").textContent=computerPoint;
                    document.getElementById("userp").textContent= ++userPoint;
                    console.log(computerPoint,userPoint);
                    
                    if(turn===1){
                        if(computerPoint>userPoint){
                            document.getElementById("gr").textContent="computer Won the Match!";
                        }
                        else if(computerPoint==userPoint){
                            document.getElementById("gr").textContent="TIE match!";
                        }
                        else{
                            document.getElementById("gr").textContent="You Won!";
                        }
                    }
                    turn--;
                    document.getElementById("tl").textContent="Turns Left:"+turn;
                    selectScissors.textContent= "scissor";
                    document.getElementById("rr").textContent="You won!";
                    break;
                }
                if(compchoice===2){
                   
                    document.getElementById("cs").textContent="Computer Select:" + "Scissor";
                    document.getElementById("cp").textContent=computerPoint;
                    document.getElementById("userp").textContent= userPoint;
                    console.log(computerPoint,userPoint);
                    if(turn===1){
                        if(computerPoint>userPoint){
                            document.getElementById("gr").textContent="computer Won the Match!";
                        }
                        else if(computerPoint==userPoint){
                            document.getElementById("gr").textContent="TIE match!";
                        }
                        else{
                            document.getElementById("gr").textContent="You Won!";
                        }
                    }
                    turn--;
                    document.getElementById("tl").textContent="Turns Left:"+turn;
                    selectScissors.textContent= "Scissor";
                    document.getElementById("rr").textContent="TIE match!";
                    break;
                }
            }
            // 

        }
    })
  
})

      function getRandomOptionComp(max) {
              return Math.floor(Math.random() * max);
}
// 