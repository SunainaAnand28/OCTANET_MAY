document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        addTask();
    });

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            taskItem.addEventListener("click", toggleTask);

            const closeBtn = document.createElement("span");
            closeBtn.classList.add("close");
            closeBtn.innerHTML = "&times;";
            closeBtn.addEventListener("click", removeTask);

            taskItem.appendChild(closeBtn);
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    }

    function toggleTask() {
        this.classList.toggle("done");
    }

    function removeTask(event) {
        event.stopPropagation();
        this.parentElement.remove();
    }
});
