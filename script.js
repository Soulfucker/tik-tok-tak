console.log("welcome to tik tok game")
let music = new Audio("music.mp3")
let ting = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let ingameover = false;
//function to change turn
const changeTurn = () =>{
    return turn === "X" ? "0" : "X"
}
//Function to check the winner
const checkWin=() =>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML !== "")){
            document.querySelector('.info').innerHTML = boxtext[e[0]].innerHTML + " Won"
            ingameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
        }
    })
}
//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext') 
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if(!ingameover){
                document.getElementsByClassName("info")[0].innerHTML= "Turn for : " + turn;
            }
        }
    })
})
//Add onclick on reset button
reset.addEventListener('click',() =>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    });
    if('click' === 6){
        console.log("six time clicked")
    }
    turn = "X";
    document.getElementsByClassName("info")[0].innerHTML= "Turn for : " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
})
