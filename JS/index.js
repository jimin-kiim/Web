const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
  console.dir(loginInput.value);
  // console.log("click");
  const username = loginInput.value;
  if(username === ""){
    // console.log("Please wirte your name");
    alert("Please write your name");
  }else if(username.length>15){
    alert("Your name is too long.");
  }
}
loginButton.addEventListener("click", onLoginBtnClick)