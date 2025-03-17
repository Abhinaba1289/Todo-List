var tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Load saved tasks
document.addEventListener("DOMContentLoaded", () => {
  LoadContent(); 
  document.querySelector(".add-btn").addEventListener('click', () => {
   var content = document.querySelector("#add").value;
   
   if(content.trim() !== ""){
    tasks.push(content);
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks
    LoadContent(tasks);
   }  
   else alert("Enter valid input");
   document.querySelector("#add").value = ""; 
  });
});

function LoadContent(){
  console.clear();
  let taskscontainer = document.querySelector(".task-container");
  taskscontainer.innerHTML = ""; // clear the tasks 
  tasks.forEach((element, index) => {
    let taskItem = document.createElement("div");
    taskItem.classList.add("task");
    taskItem.innerHTML = `<p>${element}</p><i class="fa-solid fa-trash-can" onclick="deleteTask(${index})"></i>`;
    
    taskscontainer.appendChild(taskItem);
    console.log(element);
  });
  document.querySelector("#add").value = "";
}

function deleteTask(index) {
  tasks.splice(index, 1); // Remove task from array
  localStorage.setItem("tasks", JSON.stringify(tasks)); 
  LoadContent(); // Refresh list
}