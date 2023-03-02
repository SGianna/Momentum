const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODO_KEY = "todos";
let ToDos = [];
 
function saveToDo(){
    localStorage.setItem(TODO_KEY,JSON.stringify(ToDos));
}

function deleteToDoFromToDos(list, target){

    return list.id !== parseInt(target.id);
}
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();

    ToDos = ToDos.filter(obj => deleteToDoFromToDos(obj, li));
    saveToDo();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span); 
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    ToDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDo = localStorage.getItem(TODO_KEY);

if(savedToDo !== null){
    const parsedToDoList = JSON.parse(savedToDo);
    ToDos = parsedToDoList;

    //parsedToDoList.forEach((item) => paintToDo(item));
    parsedToDoList.forEach(paintToDo);
}
