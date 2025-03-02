const buttons = document.getElementsByClassName("custom-button");
let task = document.getElementById("task-id").innerText;
let allTask = document.getElementById("all-task").innerText;
let convert = parseInt(task);
let allTaskVal = parseInt(allTask);

let count = 0;
for (let button of buttons) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        count++;
        alert("Board updated Successfully");
        convert--;
        allTask++;
        task = document.getElementById("task-id").innerText = convert;
        allTask = document.getElementById("all-task").innerText = allTask;
        this.classList.remove("custom-button");
        this.classList.add("done-btn");
        if (convert === 0) {
            alert("Congrates!!! you have completed sll the task");
        }

    });
}

document.querySelectorAll(".custom-button").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        let box = this.closest(".box");
        let textHead = box.querySelector(".box-head-text").innerText;
        let currentTime = new Date().toLocaleTimeString();
        let message = `You have completed the task ${textHead} at ${currentTime}`;
        let div = document.createElement("div");
        div.classList.add("text-size-class");
        let newP = document.createElement("p");
        newP.classList.add("text-class")
        newP.innerText = message;
        div.appendChild(newP);
        let parentDiv = document.querySelector(".middle-them");
        if (parentDiv) {
            parentDiv.appendChild(div);
        }
    });
});


document.getElementById("Clear-logs").addEventListener("click", function(event) {
    event.preventDefault();
    // Select all div elements within the .middle-them container and remove them
    document.querySelectorAll('.middle-them div').forEach(div => {
        div.remove();
    });
    console.log('All logs cleared');
});






