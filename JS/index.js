const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){
  event.preventDefault();//stopping the default behavior of any event
  // default behavior of form: submit
  console.log(event);
}
function handleLinkClick(event){
  event.preventDefault();
  // alert("clicked!");
  console.log(event);

}
// default behavior of link: click and go somewhere
loginForm.addEventListener("submit", onLoginSubmit)
link.addEventListener("click",handleLinkClick)