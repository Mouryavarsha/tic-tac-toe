let boxes = document.querySelectorAll(".BOX");
let resetBtn = document.querySelector("#btn");
let newGameBtn = document.querySelector("#new-btn");
let messageContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

//winning patterns

let winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

]
const resetGame =() =>{
    turnO = true;
    enableBoxes();
    messageContainer.classList.add("hide")

}

boxes.forEach((boxes) =>{
boxes.addEventListener("click", () =>{
console.log("box was clicked")
if(turnO){
    boxes.innerText = "O"
    turnO = false;
}
else{
    boxes.innerText = "X";
    turnO = true;
}
boxes.disabled = true;
checkWinner();

})
})
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
msg.innerText = `Congratulations ${winner} you are winner !!!`
messageContainer.classList.remove("hide");
disableBoxes()
}
// To check a winner //

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 == posVal2 && posVal2 == posVal3){
                console.log("winner",posVal1)
                showWinner(posVal1);
            }
        }
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText,
        // )


    }
}

    newGameBtn.addEventListener("click",resetGame);
    resetBtn.addEventListener("click",resetGame);


