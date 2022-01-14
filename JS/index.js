const h1 = document.querySelector("div.hello:first-child h1"); //1. find the element

function handleTitleClick() {//3. react to the event
    const clickedClass="active";//use less raw values
  if(h1.className===clickedClass){
      h1.className = "";
  }else{
      h1.className=clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);// 2. make the element listen to the event
