  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
  
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
  const databs = getDatabase();





var list = document.getElementById("list")
 

// window.getvalue = function () {

//   var uservalue = document.getElementById("todo-item")
//   console.log(uservalue.value)
// }





window.addTodo = function (){
var input= document.getElementById("todo-item");


var li = document.createElement('li')
var liText = document.createTextNode(input.value)




var delBtn = document.createElement("button")

var deltText = document.createTextNode("delete")
delBtn.appendChild(deltText)
delBtn.setAttribute("class","btn")
delBtn.setAttribute("onClick","deleteItem(this)")



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
window.deleteItem =function(e){
    e.parentNode.remove()
}

window.editItem= function(e){
    var val= e.parentNode.firstChild.nodeValue;
    var editvalue = prompt("enter edit value",val)
    e.parentNode.firstChild.nodeValue = editvalue
       
}

window.deleteAll= function(){
    list.innerHTML="" 
}