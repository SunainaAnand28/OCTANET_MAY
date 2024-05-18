let inputbox = document.querySelector('#inputbox');
let list = document.querySelector('#list');

inputbox.addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

let addItem = (input) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${input}<i></i>`;

    listItem.addEventListener("click", function(){
        this.classList.toggle('done');
    })
    
    list.appendChild(listItem);
};