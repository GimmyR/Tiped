let list = [ 
    [], 
    [], 
    [] 
];

const listID = [ "to-do-list", "in-progress-list", "done-list" ];

const emptyTasksList = function(i) {
    document.getElementById(listID[i]).innerHTML = "";
}

const refreshTasksList = function() {
    for(let i = 0; i < list.length; i++) {
        emptyTasksList(i);

        for(let j = 0; j < list[i].length; j++)
            addTaskOnView(i, j);
    }
}

let selectedList = -1, selectedTask = -1;

// preventDefault
// for "openProjectDrop" and "handleDrag"
// is VERY VERY NECESSARY
// for handling DROP EVENT
const openProjectDrop = function(event) {
    event.preventDefault();
    event.dataTransfer.items[0].getAsFileSystemHandle().then((handle) => {
        handle.getFile().then((fileData) => {
            fileData.text().then((content) => {
                list = JSON.parse(content);
                refreshTasksList();
            });
        });
    });
}

const handleDrag = function(event) {
    event.preventDefault();
}