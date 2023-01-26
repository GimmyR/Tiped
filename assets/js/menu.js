const newProject = function() {
    list = [ [], [], [] ];
    refreshTasksList();
}

const saveAs = function() {
    const content = JSON.stringify(list);
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "list.json";
    link.href = url;
    link.click();
}

const openProject = function() {
    window.showOpenFilePicker().then((fileHandle) => {
        fileHandle[0].getFile().then((blob) => {
            blob.text().then((content) => {
                list = JSON.parse(content);
                refreshTasksList();
            });
        });
    });
}