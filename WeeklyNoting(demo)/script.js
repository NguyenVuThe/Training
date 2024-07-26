function addTask(listContainerId, inputBoxId){
    
    const listContainer = document.getElementById(listContainerId);
    const inputBox = document.getElementById(inputBoxId);

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

        saveData(listContainerId);
        inputBox.value = ''; 
    }
}

function saveData(listContainerId){
    const listContainer = document.getElementById(listContainerId);
    //store data in local storage setItem(key, value), we store the 'key'
    localStorage.setItem(`data-${listContainerId}`, listContainer.innerHTML);
}

function showTask(listContainerId){
    const listContainer = document.getElementById(listContainerId);
    listContainer.innerHTML = localStorage.getItem(`data-${listContainerId}`);
}

function eventListContainer(listContainerId){
    const listContainer = document.getElementById(listContainerId);
    
    listContainer.addEventListener("click", function(e){
    //tagName returns an UPPERCASE element
    if(e.target.tagName === "LI"){
        //toggles the class 'checked'
        e.target.classList.toggle("checked");
        saveData(listContainerId);
    }
    //remove the parent 'li'
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(listContainerId);
    }
    },false);
    
    showTask(listContainerId);
}

eventListContainer('list-container1');
eventListContainer('list-container2');
eventListContainer('list-container3');
eventListContainer('list-container4');
eventListContainer('list-container5');
eventListContainer('list-container6');
eventListContainer('list-container7');


