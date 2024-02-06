document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');

    taskList.innerHTML = '';

    tasks.forEach(function(task) {
        const li = document.createElement('li');
        li.classList.add('task');
        li.innerHTML = `
            <span>${task}</span>
            <span class="delete" onclick="deleteTask('${task}')">&#10006;</span>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task !== '') {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
        taskInput.value = '';
    }
}

function deleteTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const index = tasks.indexOf(task);

    if (index !== -1) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
    }
}
