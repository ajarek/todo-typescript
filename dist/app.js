import { renderTask } from "./helpers/render-tasks.helper.js"; //!-.js a no .ts
var addButton = document.querySelector('button');
var tasksContainer = document.querySelector('ul');
var newTaskEl = document.querySelector('input');
var tasks = [
    { name: 'task01', done: true, category: 'general' },
    { name: 'task02', done: true, category: 'work' },
    { name: 'task03', done: false, category: 'gym' },
    { name: 'task04', done: false, category: 'hobby' },
];
var addTask = function (task) {
    if (newTaskEl.value !== '') {
        tasks.push(task);
    }
};
addButton.addEventListener('click', function (e) {
    var radioElement = document.querySelector('input[type="radio"]:checked');
    e.preventDefault();
    radioElement ?
        addTask({ name: newTaskEl.value, done: false, category: radioElement.id }) :
        addTask({ name: newTaskEl.value, done: false, category: 'general' });
    renderTask(tasks, tasksContainer);
    newTaskEl.value = '';
});
renderTask(tasks, tasksContainer);
