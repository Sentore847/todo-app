const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

window.onload = function() {
  itemCountSpan.textContent = document.querySelectorAll('#todo-list li').length;
  uncheckedCountSpan.textContent = document.querySelectorAll('#todo-list li input[type="checkbox"]:not(:checked)').length;
}

function newTodo() {
  const todoText = prompt('Введіть нове завдання:');
  if (todoText) {
    const todoList = document.getElementById('todo-list');

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input me-2';
    checkbox.onchange = function() {
      updateCounter();
      if (this.checked) {
        this.nextElementSibling.classList.add('text-decoration-line-through');
      } else {
        this.nextElementSibling.classList.remove('text-decoration-line-through');
      }
    };

    const label = document.createElement('label');
    label.htmlFor = todoList.children.length + 1;
    label.innerText = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm float-end';
    deleteButton.innerText = 'delete';
    deleteButton.onclick = function() {
      listItem.remove();
      updateCounter();
    };

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);

    updateCounter();
  }
}

function updateCounter() {
  itemCountSpan.textContent = document.querySelectorAll('#todo-list li').length;
  uncheckedCountSpan.textContent = document.querySelectorAll('#todo-list li input[type="checkbox"]:not(:checked)').length;
}
