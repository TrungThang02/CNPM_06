const inputBox = document.querySelector("#input-box");
const listcontainer = document.querySelector("#list-container");


function AddTask(){
   
    if(inputBox.value == ""){
        alert("Please write a content... !");
    }
    else{
        let li  = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML =  "\u00d7";
        li.appendChild(span);
    }
    inputBox.value  = "";
    savedata();
   
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);


function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showdata(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showdata();