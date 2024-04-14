let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#id1");
let newGameBtn=document.querySelector("#id2");
let msgcon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0 =true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
  turn0=true;
  enableBoxes();
  msgcon.classList.add("hide");
  };

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
  if(turn0===true){
    box.innerText="O";
    turn0=false;
  }else{
    box.innerText="x";
    turn0=true;
  }
  box.disabled=true;
  checkWinner();
});
});

const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
};
const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
};

const showWinner=(winner)=>{
  msgcon.innerText=`congratulations, winner is ${winner}`;
  msgcon.classList.remove("hide");
  disableBoxes();
};

const checkWinner=()=>{
  for ( let patterns of winpatterns){
     let pos1 = boxes[patterns[0]].innerText;
      let pos2 = boxes[patterns[1]].innerText;
     let pos3 = boxes[patterns[2]].innerText;
     if(pos1 !=""&& pos2 !=""&& pos3 !=""){
      if(pos1 ===pos2 && pos2===pos3){
        showWinner(pos1);
      }
     }
  }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);