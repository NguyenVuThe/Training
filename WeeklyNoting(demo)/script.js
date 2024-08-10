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

function eventListContainer(listContainerId, inputBoxId){
    const listContainer = document.getElementById(listContainerId);
    
    showTask(listContainerId);

    const inputBox = document.getElementById(inputBoxId);
    inputBox.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            addTask(listContainerId, inputBoxId);
        }
    }); 
    
    listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(listContainerId);
    }
    else if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    },false);
}

eventListContainer('list-container1','input-box1');
eventListContainer('list-container2','input-box2');
eventListContainer('list-container3','input-box3');
eventListContainer('list-container4','input-box4');
eventListContainer('list-container5','input-box5');
eventListContainer('list-container6','input-box6');
eventListContainer('list-container7','input-box7');