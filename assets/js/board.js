const addTaskOnView = function(i, j) {
    // CREATING THE COMPONENT :

    const tasksList = document.getElementById(listID[i]);

    const container = document.createElement("div");
    container.className = "container-fluid shadow my-3";
    tasksList.appendChild(container);

    const cover = document.createElement("div");
    cover.className = "row";
    cover.style.backgroundColor = list[i][j].bgColor;
    container.appendChild(cover);

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "col-md-1 offset-md-11 p-0 btn btn-danger rounded-0";
    editButton.style.opacity = 0;
    editButton.setAttribute("data-bs-toggle", "modal");
    editButton.setAttribute("data-bs-target", "#add-task-modal");
    cover.appendChild(editButton);

    const pencilIcon = document.createElement("i");
    pencilIcon.className = "bi bi-pencil";
    editButton.appendChild(pencilIcon);

    const description = document.createElement("div");
    description.className = "row";
    container.appendChild(description);

    const descContent = document.createElement("div");
    descContent.className = "p-3";
    descContent.innerHTML = list[i][j].desc;
    description.appendChild(descContent);

    const buttonsGroup = document.createElement("div");
    buttonsGroup.className = "row";
    container.appendChild(buttonsGroup);

    const leftButton = document.createElement("button");
    leftButton.type = "button";
    leftButton.className = "col-md-3 btn btn-sm btn-outline-secondary btn-custom rounded-0";
    buttonsGroup.appendChild(leftButton);

    const downButton = document.createElement("button");
    downButton.type = "button";
    downButton.className = "col-md-3 btn btn-sm btn-outline-secondary btn-custom rounded-0";
    buttonsGroup.appendChild(downButton);

    const upButton = document.createElement("button");
    upButton.type = "button";
    upButton.className = "col-md-3 btn btn-sm btn-outline-secondary btn-custom rounded-0";
    buttonsGroup.appendChild(upButton);

    const rightButton = document.createElement("button");
    rightButton.type = "button";
    rightButton.className = "col-md-3 btn btn-sm btn-outline-secondary btn-custom rounded-0";
    buttonsGroup.appendChild(rightButton);

    const leftIcon = document.createElement("i");
    leftIcon.className = "bi bi-chevron-left";
    leftButton.appendChild(leftIcon);

    const downIcon = document.createElement("i");
    downIcon.className = "bi bi-chevron-down";
    downButton.appendChild(downIcon);

    const upIcon = document.createElement("i");
    upIcon.className = "bi bi-chevron-up";
    upButton.appendChild(upIcon);

    const rightIcon = document.createElement("i");
    rightIcon.className = "bi bi-chevron-right";
    rightButton.appendChild(rightIcon);

    // EVENT HANDLING :

    container.addEventListener("mouseenter", function(event) {
       editButton.style.opacity = 1;
    });

    container.addEventListener("mouseleave", function(event) {
        editButton.style.opacity = 0;
    });

    editButton.addEventListener("click", function(event) {
        selectedList = i;
        selectedTask = j;
        const label = [ "To Do", "In-Progress", "Done" ];
        document.getElementById("add-task-modal-label").innerHTML = "Edit " + label[i] + " Task";
        document.getElementById("add-task-modal-desc").value = list[i][j].desc;
        document.getElementById("add-task-modal-bg-color").value = list[i][j].bgColor;
        document.getElementById("add-task-modal-remove").style.display = "inline";
    });

    leftButton.addEventListener("click", function(event) {
        if((i - 1) >= 0 && i < list.length && j >= 0 && j < list[i].length) {
            const task = list[i][j];
            list[i].splice(j, 1);
            list[i - 1].unshift(task);
            refreshTasksList();
        }
    });

    downButton.addEventListener("click", function(event) {
        if(i >= 0 && i < list.length && j >= 0 && (j + 1) < list[i].length) {
            const task = list[i][j];
            list[i].splice(j, 1);
            list[i].splice(j + 1, 0, task);
            refreshTasksList();
        }
    });

    upButton.addEventListener("click", function(event) {
        if(i >= 0 && i < list.length && (j - 1) >= 0 && j < list[i].length) {
            const task = list[i][j];
            list[i].splice(j, 1);
            list[i].splice(j - 1, 0, task);
            refreshTasksList();
        }
    });

    rightButton.addEventListener("click", function(event) {
        if(i >= 0 && (i + 1) < list.length && j >= 0 && j < list[i].length) {
            const task = list[i][j];
            list[i].splice(j, 1);
            list[i + 1].unshift(task);
            refreshTasksList();
        }
    });
}

const addToDoTask = function() {
    selectedList = 0;
    document.getElementById("add-task-modal-label").innerHTML = "Add To Do Task";
}

const addInProgressTask = function() {
    selectedList = 1;
    document.getElementById("add-task-modal-label").innerHTML = "Add In-Progress Task";
}

const addDoneTask = function() {
    selectedList = 2;
    document.getElementById("add-task-modal-label").innerHTML = "Add Done Task";
}