const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList =document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos")



eventListeners();

function eventListeners(){ // Tüm event listenerlar
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo)
    filter.addEventListener("keyup",filterTodos);
}  

function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItem = document.querySelectorAll(".list-group-item")

    listItem.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            //Bulamadı

            listItem.setAttribute("style","display : none !important");

        }
        else {
            listItem.setAttribute("style","display : block")
        }
    })

} 


function deleteTodo(e){
    if ( e.target.className === "btn btn-dark"){
       confirm("Bütün Hepsini silmek istediğinizden emin misiniz ?", todoList.remove());
       localStorage.removeItem("todos");
        showAlert("success"," Todoların Hepsi Başarıyla silindi")
    }
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success"," Todo Başarıyla silindi");
    }

function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if (todo === deletetodo){
            todos.splice(index,1);
        }
    })

    localStorage.setItem("todos",JSON.stringify(todos));


}

}

function loadAllTodosToUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);
    })

}

function addTodo(e) {
    const newTodo = todoInput.value.trim();
    if(newTodo === ""){
        showAlert('danger','Bir şey yazmanız lazım');
    }
    else{
        addTodoToUI (newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","Todo başarıyla eklendi")
    }


    e.preventDefault();
}

function getTodosFromStorage(){
    let todos;

    if ( localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStorage(newTodo){

    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type,message){

    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;

    alert.textContent  = message;

    firstCardBody.appendChild(alert);

    // setTimeOut
    setTimeout(function(){
        alert.remove();

    },1000);
}

function addTodoToUI(newTodo){ //string değerini list item olarak UI'ya ekleme
    // List Item Oluşturma
    const listItem = document.createElement("li");
    // Link Oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>"

    listItem.className = "list-group-item d-flex justify-content-between";

    // Text Node Ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link)

    // Todo List'e List Item'ı ekleme

    todoList.appendChild(listItem);
}