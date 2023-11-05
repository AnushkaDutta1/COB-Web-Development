document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');


    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value;
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });

    taskList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete')) {
            event.target.parentElement.remove();
        }
    });

    function addTask(text) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${text}
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(listItem);
    }
});
