const taskInput=document.getElementById("t1");
const addBtn= document.getElementById("b1");
const taskList=document.getElementById("task-list");

addBtn.addEventListener("click",()=>{
    const taskText=taskInput.value;
    //console.log(taskText);
    if(taskText!==""){
        const task=createTask(taskText);
        taskList.appendChild(task);
        taskInput.value=""
    }
});

// Delete task from list

taskList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const taskItem = event.target.parentElement;
      taskList.removeChild(taskItem);
    }
  });

//create new task element
function createTask(text){
    const taskItem=document.createElement("li");
    const taskText=document.createElement("span");
    taskText.innerText=text;
    const deleteBtn=document.createElement("button");
    deleteBtn.innerText="X";
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteBtn);
    return taskItem;
}

