const h1 = document.querySelector("div.hello:first-child h1"); //1. find the element

function handleTitleClick() {//3. react to the event
  const currentColor = h1.style.color;
  let newColor;
  
  if (currentColor === "blue") {
    newColor= "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color=newColor;
}

h1.addEventListener("click", handleTitleClick);// 2. make the element listen to the event
