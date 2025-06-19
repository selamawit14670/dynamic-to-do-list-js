document.addEventListener('DOMContentLoaded', () => {
  loadTasks();

  document.getElementById('addTaskBtn').addEventListener('click', () => {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText !== '') {
      addTask(taskText);  // save = true by default
      input.value = '';
    }
  });
});

function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  storedTasks.forEach(taskText => addTask(taskText, false));  // Don't save again
}

function addTask(taskText, save = true) {
  const taskList = document.getElementById('taskList');

  const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove';

  removeBtn.addEventListener('click', () => {
    taskList.removeChild(li);
    removeFromStorage(taskText);
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  if (save) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
}

function removeFromStorage(taskText) {
  let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  storedTasks = storedTasks.filter(task => task !== taskText);
  localStorage.setItem('tasks', JSON.stringify(storedTasks));
}
