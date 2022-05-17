import 
{ fetchData, getCurrentUser, setCurrentUser, removeCurrentUser } 
from './main.js'

function login(e) {
  console.log('success');
  e.preventDefault();
  const name = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  fetchData('/user/login', {username: name, password: password}, "POST")
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "homepage.html";
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#login-form p.error").innerHTML = errText;
    document.getElementById("password").value = "";
    console.log(`Error! ${errText}`)
  });
}

const loginForm = document.getElementById("login-form");
console.log(loginForm);
if(loginForm) loginForm.addEventListener('submit', login);

function register(e) {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const pswd = document.getElementById("password").value;

  fetchData('/user/register', {username: name, password: pswd}, "POST")
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "homepage.html";
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#reg-form p.error").innerHTML = errText;
    document.getElementById("pswd").value = "";
    console.log(`Error! ${errText}`)
  });
}

const regForm = document.getElementById("reg-form");
if(regForm) regForm.addEventListener('submit', register);