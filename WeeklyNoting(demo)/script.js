const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Bro there is nothing here.")
    }
    else{
        let li = document.createElement("li");
        //inner help input user's text to li element
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //create "x" element
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
}

listContainer.addEventListener("click", function(e){
    //tagName returns an UPPERCASE element
    if(e.target.tagName === "LI"){
        //toggles the class 'checked'
        e.target.classList.toggle("checked");
        saveData();
    }
    //remove the parent 'li'
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    //store data in local storage setItem(key, value), we store the 'key'
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();