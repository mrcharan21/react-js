// Get DOM elements
let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Enter a name");
    } else {
        let Li = document.createElement("li");
        Li.innerText = taskText;
        

        let spanClass = document.createElement("span");

        spanClass.innerHTML = '<button class="btn btn-danger">Delete</button>';

        Li.appendChild(spanClass);
        taskList.appendChild(Li);

        spanClass.querySelector("button").onclick = function () {
            Li.remove();
        };
    }
    taskInput.value = "";
}

// Add event listener for Enter key
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});







































// // Load tasks from localStorage
// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// // Function to save tasks to localStorage
// function saveTasks() {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// // Function to render tasks
// function renderTasks() {
//     taskList.innerHTML = '';
//     tasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.className = `task-item ${task.completed ? 'completed' : ''}`;
        
//         const checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.checked = task.completed;
//         checkbox.onchange = () => toggleTask(index);
        
//         const span = document.createElement('span');
//         span.textContent = task.text;
        
//         const deleteBtn = document.createElement('button');
//         deleteBtn.className = 'delete-btn';
//         deleteBtn.textContent = 'Delete';
//         deleteBtn.onclick = () => deleteTask(index);
        
//         li.appendChild(checkbox);
//         li.appendChild(span);
//         li.appendChild(deleteBtn);
//         taskList.appendChild(li);
//     });
// }

// // Function to add a new task
// function addTask() {
//     const text = taskInput.value.trim();
//     if (text) {
//         tasks.push({
//             text: text,
//             completed: false
//         });
//         taskInput.value = '';
//         saveTasks();
//         renderTasks();
//     }
// }

// // Function to toggle task completion
// function toggleTask(index) {
//     tasks[index].completed = !tasks[index].completed;
//     saveTasks();
//     renderTasks();
// }

// // Function to delete a task
// function deleteTask(index) {
//     tasks.splice(index, 1);
//     saveTasks();
//     renderTasks();
// }

// // Add event listener for Enter key
// taskInput.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         addTask();
//     }
// });

// // Initial render
// renderTasks(); 