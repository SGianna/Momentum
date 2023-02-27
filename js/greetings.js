const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form Input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function handleLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username",username);

    // 문자열을 합치는 방법 2 가지
    greeting.innerText = "Hello" + " " +loginInput.value;
    greeting.innerText = `Hello ${username}`; 

    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(savedUsername){
    greeting.innerText = `Hello ${localStorage.getItem("username")}`; //greeting.innerText = "Hello" + " " +loginInput.value;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("username");

if(savedUsername === null)
{ 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",handleLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
