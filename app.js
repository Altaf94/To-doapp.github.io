
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA2GzFa4dC7XM8o-ciBBaIXd42WsBccE6A",
    authDomain: "todo-app-66f3c.firebaseapp.com",
    databaseURL: "https://todo-app-66f3c-default-rtdb.firebaseio.com",
    projectId: "todo-app-66f3c",
    storageBucket: "todo-app-66f3c.appspot.com",
    messagingSenderId: "270459384336",
    appId: "1:270459384336:web:12051e9647e50ca4349095",
    measurementId: "G-586PV236H0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);




var list = document.getElementById("list")

//input function  


function addTodo(){
var input= document.getElementById("todo-item");

//create li tag

var li = document.createElement('li')
var liText = document.createTextNode(input.value)



//create delete button

var delBtn = document.createElement("button")

var deltText = document.createTextNode("delete")
delBtn.appendChild(deltText)
delBtn.setAttribute("class","btn")
delBtn.setAttribute("onClick","deleteItem(this)")

// create edit button

var editBtn = document.createElement("button")
var editText = document.createTextNode("edit")
editBtn.setAttribute("class","btn")
editBtn.setAttribute("onClick","editItem(this)")
editBtn.appendChild(editText)

li.appendChild(liText)
li.appendChild(editBtn)
list.appendChild(li)

li.appendChild(delBtn)

input.value= ""

console.log(li)
}
function  deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var val= e.parentNode.firstChild.nodeValue;
    var editvalue = prompt("enter edit value",val)
    e.parentNode.firstChild.nodeValue = editvalue
       
}

function deleteAll(){
    list.innerHTML="" 
}