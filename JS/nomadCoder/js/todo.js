const toDoForm= document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY ="todos";
let toDos =[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.inneText=newTodo;
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo= toDoInput.value;
    toDoInput.value = "";
    toDos.push(toDoInput);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

// HOW TO WRITE A FUNCTION 1

// function sayHello(item){
//     console.log("this is the turn of ",item);
// }
const savedToDos = localStorage.getItem(TODOS_KEY);

// if(saveToDos){
//     const parsedToDos = JSON.parse(saveToDos);
//     parsedToDos.forEach(sayHello);
// }

// HOW TO WRITE A FUNCTION 2

// if(saveToDos){
//     const parsedToDos = JSON.parse(saveToDos);
//     parsedToDos.forEach((item)=> console.log("this is the turn of ",item));
// }

if(saveToDos){
    const parsedToDos = JSON.parse(saveToDos);
    toDos= parsedToDos;
    parsedToDos.forEach(paintToDo);
}