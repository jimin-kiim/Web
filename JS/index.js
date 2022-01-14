const h1 = document.querySelector("div.hello:first-child h1"); //1. find the element

function handleTitleClick() {//3. react to the event
    const clickedClass="active";//use less raw values
  if(h1.classList.contains(clickedClass)){
      h1.classList.remove(clickedClass);
  }else{
    h1.classList.add(clickedClass);  
}
}

h1.addEventListener("click", handleTitleClick);// 2. make the element listen to the event
