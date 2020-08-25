let board = 256;
let newBoard = 0;

let container = document.createElement('div')
container.setAttribute('id', "container");
document.body.appendChild(container);

let boxListen = document.querySelectorAll('#box');

createBoxes(board);

const btn = document.getElementById("reset")
btn.addEventListener("click", () => {
    let boxes = document.querySelectorAll('#box');
            boxes.forEach(box => {
                box.parentElement.removeChild(box);
            });
            newBoard = +prompt("How many squares per side should I make the new grid?");
            board = newBoard * newBoard;
            createBoxes(board);
            container.setAttribute("style", `grid-template-columns:repeat(${newBoard}, 1fr)`);
            
            
            
});

// Creates prompted amount of div boxes in container 
  
function createBoxes(board) {
    for(i=0; i < board; i++) {
        let box = document.createElement('div');
        box.setAttribute('id', "box");
        box.style.backgroundColor = "blue";
        addListener();
        container.appendChild(box);
     };
};




//Function that selects all box divs and adds event listener.
function addListener(){
    let boxListen = document.querySelectorAll('#box');
//adds mouseover event listener to every box
boxListen.forEach(function(box){
    box.addEventListener("mouseover", () => {
        box.setAttribute("style", "background-color:black;")
    });
});
}


