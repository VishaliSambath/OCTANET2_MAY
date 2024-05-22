const inputBox = document.getElementById("input");
const listElement = document.getElementById("list-element");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listElement.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listElement.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listElement.innerHTML);
} 

function display(){
    listElement.innerHTML = localStorage.getItem("data");
}
display();