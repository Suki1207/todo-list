const todoTask = [];

// Add todo task and display value in console with function addToddoTask()

function addTodoTask() {
  const inputs = document.querySelector(".input-task");

  const inputsValue = inputs.value;
  console.log(inputsValue);

  const dueDate = document.querySelector(".input-date");

  const dueDateValue = dueDate.value;
  console.log(dueDateValue);

  const newTask = {
    name: inputsValue,
    dueDate: dueDateValue,
  };

  todoTask.push(newTask);
  console.log(todoTask);

  inputs.value = "";
  dueDate.value = "";

  // Call the renderTodoTask function for displaying the value in the DOM
  renderTodoTask();
}

// Add function renderTodoTask() for displaying the value in the DOM.

function renderTodoTask() {
  // Create a for loop to loop through the todoTask array and display the value in the DOM.

  // Use the Accumulator pattern to create the HTML for the todoList.

  let todoListHTML = "";

  for (let i = 0; i < todoTask.length; i++) {
    // todoTask[i];

    // Create a variable object at the index i to access name and dueDate propreties.
    // Destructure the value from the array.
    const { name, dueDate } = todoTask[i];

    const html = `
    <p>
    <strong>Task:</strong> ${name}

    <strong>Due Date:</strong> ${dueDate}
    </p> <button class="btn-delete">Delete</button>`;
    todoListHTML += html;
  }

  console.log(todoListHTML);

  document.querySelector(".container").innerHTML = todoListHTML;

  // Add even listener for the delete button.
  const deleteButtons = document.querySelectorAll(".btn-delete");

  // Get the index of the for loop in the renderTodoTask function.
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () =>
      deleteTodoTask(button.dataset.index)
    );
  });
}

// Add function deleteTodoTask() for deleting the value in the DOM.

function deleteTodoTask(index) {
  // Add .splice method to delete the value from the array.
  todoTask.splice(index, 1);
  renderTodoTask();
}

// Add event listener for the add button.

const addButton = document.querySelector(".btn-add");

addButton.addEventListener("click", addTodoTask);

console.log(todoTask);
