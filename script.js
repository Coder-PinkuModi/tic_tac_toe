// making tic tac toe 

let winnerArray=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]; // winners array-- if while playing game in either of the array has same symbol then winner is been declared

let boxes=document.querySelectorAll(".box");
let message =document.querySelector(".msg");
let resetbtn=document.querySelector("#reset");
count=0;
console.log(boxes);

let initialTap="true";



const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
};

const declareWinner=(winValue)=>{
    message.innerText= `Congratulation, Winner is ${winValue}`;
    message.classList.remove("hide");
    disableBoxes();
}

function draw(){
    message.innerText= `Draw Game, Play Again !`;
    message.classList.remove("hide");
    disableBoxes();
}



function checkWinner(){
    for(let array of winnerArray){
        let val1=boxes[array[0]].innerText;
        let val2=boxes[array[1]].innerText;
        let val3=boxes[array[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != ""){
        if(val1===val2 && val2===val3){ 
            console.log("Congratulation !");
            declareWinner(val1);
            return val1;
        }
        return null;
    }
  }
}



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (initialTap == "true") {
            box.innerText = "O";
            initialTap = false;
        } else {
            box.innerText = "X";
            initialTap = "true";
        }
        box.disabled=true;
        
        count++; 
        console.log(count);
        let check= checkWinner(); 
         
        if(count==9 && !check){
            draw();
        }
    });

});



const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };


const resetGame= () => {
    initialTap="true";
    count = 0;
    enableBoxes();
    message.classList.add("hide");
};

resetbtn.addEventListener("click",resetGame);