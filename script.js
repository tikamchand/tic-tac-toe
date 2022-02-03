console.log("it's tictactoe");
let music = new Audio("./sound/music.mp3");
let chance = new Audio("./sound/ting.mp3");
let gameover = new Audio("./sound/gameover.mp3");
let turn = "X";
let isGameOver = false;

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};
const checkForWin = () => {
  let boxText = document.getElementsByClassName("boxText");
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 3, 6],
    [2, 4, 6],
  ];
  win.forEach((e) => {
    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[2]].innerText === boxText[e[1]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxText[e[0]].innerText + " " + "Winner";
      isGameOver = true;
      gameover.play();
      document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '200px'
    }
    // else if((boxText[e[0]].innerText ===  boxText[e[1]].innerText) && (boxText[e[2]].innerText !==  boxText[e[1]].innerText))
    // {
    //     document.querySelector('.info').innerText = "Draw";
    //     isGameOver = true;
    // }
    // else{
    //     console.log("draw")
    // }
  });
};

let boxes = document.getElementsByClassName("boxes");
music.play();
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      chance.play();
      checkForWin();
      if (!isGameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for" + " " + turn;
      }
    }
  });
});
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  let boxText = document.querySelectorAll(".boxText");
  Array.from(boxText).forEach((element) => {
    element.innerText = "";
  });
  turn = 'X'
  document.getElementsByClassName("info")[0].innerText =
  "Turn for" + " " + turn;
  document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px'
});
