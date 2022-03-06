export var renderTask = function (tasks, tasksContainer) {
    tasksContainer.innerHTML = '';
    tasks.forEach(function (task, index) {
        var taskElement = document.createElement('li');
        taskElement.classList.add(task.category);
        var taskLabel = document.createElement('label');
        taskLabel.innerHTML = task.name;
        taskLabel.setAttribute('for', "id-".concat(index));
        var taskInput = document.createElement('input');
        taskInput.setAttribute('type', 'checkbox');
        taskInput.setAttribute('name', task.name);
        taskInput.setAttribute('id', "id-".concat(index));
        taskInput.checked = task.done;
        taskInput.addEventListener('change', function () {
            task.done = !task.done;
            checkTask();
        });
        var clearButton = document.createElement('button');
        clearButton.innerHTML = '❌';
        clearButton.addEventListener('click', function () {
            tasks.splice(index, 1);
            renderTask(tasks, tasksContainer);
        });
        taskElement.appendChild(taskLabel);
        taskElement.appendChild(taskInput);
        taskElement.appendChild(clearButton);
        tasksContainer.appendChild(taskElement);
    });
    checkTask();
};
var checkTask = function () {
    var taskElements = document.querySelectorAll('li');
    taskElements.forEach(function (taskElement) {
        var taskInput = taskElement.querySelector('input');
        if (taskInput.checked) {
            taskElement.querySelector('label').classList.add('through');
        }
        else {
            taskElement.querySelector('label').classList.remove('through');
        }
    });
};
