const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
  event.preventDefault();//stopping the default behavior of any event
  console.log(event);
}
loginForm.addEventListener("submit", onLoginSubmit)
// function(): executing right away. 
// function: not yet.