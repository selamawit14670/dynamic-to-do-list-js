document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // ✅ Create a new <li> element
    const li = document.createElement('li');

    // ✅ Set li.textContent to taskText (important: must be before appending button)
    li.textContent = taskText;

    // ✅ Create the "Remove" button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove'; // Must match exactly
    removeBtn.className = 'remove-btn'; // Must match exactly

    // ✅ When clicked, remove the li from taskList
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // ✅ Append the button to the li
    li.appendChild(removeBtn);

    // ✅ Append the li to the task list
    taskList.appendChild(li);

    // ✅ Clear the input field
    taskInput.value = '';
  }

  // ✅ Add click event to button
  addButton.addEventListener('click', addTask);

  // ✅ Allow "Enter" key to add task
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});


