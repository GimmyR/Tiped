const addTask = function() {
    if(selectedList >= 0 && selectedList < list.length) {
        let task = {
            desc: document.getElementById("add-task-modal-desc").value,
            bgColor: document.getElementById("add-task-modal-bg-color").value
        }; list[selectedList].push(task);

        refreshTasksList();
    }
}

const initializeModal = function() {
    selectedList = -1;
    selectedTask = -1;
    document.getElementById("add-task-modal-label").innerHTML = "";
    document.getElementById("add-task-modal-desc").value = "";
    document.getElementById("add-task-modal-bg-color").value = "#AAAAAA";
    document.getElementById("add-task-modal-remove").style.display = "none";
}

const editTask = function() {
    if(selectedList >= 0 && selectedList < list.length) {
        if(selectedTask >= 0 && selectedTask < list[selectedList].length) {
            list[selectedList][selectedTask].desc = document.getElementById("add-task-modal-desc").value;
            list[selectedList][selectedTask].bgColor = document.getElementById("add-task-modal-bg-color").value;
            refreshTasksList();
        }
    }
}

const saveChanges = function() {
    if(selectedTask == -1)
        addTask();
    else
        editTask();
    initializeModal();
}

const remove = function() {
    if(selectedList >= 0 && selectedList < list.length && selectedTask >= 0 && selectedTask < list[selectedList].length) {
        list[selectedList].splice(selectedTask, 1);
        refreshTasksList();
    }
}