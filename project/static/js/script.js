document.addEventListener("DOMContentLoaded", function() {
    var addTaskBtn = document.getElementById("add-task-btn");
    var taskInput = document.getElementById("task");
    var taskList = document.getElementById("task-list");
  
    addTaskBtn.addEventListener("click", function() {
      var taskName = taskInput.value;
  
      if (taskName.trim() !== "") {
        var taskItem = document.createElement("li");
        taskItem.className = "task-item";
  
        var taskNameSpan = document.createElement("span");
        taskNameSpan.className = "task-name";
        taskNameSpan.textContent = taskName;
  
        var deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
  
        deleteBtn.addEventListener("click", function() {
          taskList.removeChild(taskItem);
        });
  
        taskItem.appendChild(taskNameSpan);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
  
        taskInput.value = "";
      }
    });
  });