const range = document.querySelector("#range");
const button = document.querySelector('button');
const guess = document.querySelector("#guess");
const play = document.querySelector("#play");
const you = document.querySelector("#you");
const machine = document.querySelector("#machine");
const result = document.querySelector("#result");

function playBtnClicked(event){
  if (guess.value === ""){
    alert("Please guess a number!");
  }else{
    event.preventDefault();
    you.innerText=guess.value;
    machine.innerText=Math.floor(Math.random()*range.value+1);
    play.classList.remove("hidden");

    if (you.innerText===machine.innerText){
      result.innerText='You won!';
    }else{
      result.innerText='You lost!';
    }
  }
}

  button.addEventListener("click",playBtnClicked);
