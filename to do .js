// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add "Complete" feature
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Add delete button to each task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    // Append delete button to the list item
    li.appendChild(deleteBtn);

    // Append the new task to the task list
    const taskList = document.getElementById("taskList");
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}
