const input = document.querySelector('#input');
const todoListContainer = document.querySelector('.todo-list-main-container');
const todoList = document.querySelector('.todo-list__container');

const addBtn = document.querySelector('#addTodo');
const editTodoBtn = document.querySelector('.edit-todo');

const todoArr = ['Buy burgers!', 'Leave a note', '12 eggs'];

const firstStart = function (el) {
    todoListContainer.innerHTML = '';
};

firstStart();

const renderHtmlTodoTask = function (value) {
    const todoHtml = `
    <div class="todo-list__container">
      <li class="todo-item">${value}</li>
      <div>
          <button class="remove-todo">X</button>
          <button class="edit-todo">Edit</button>
      </div>
    </div>`;

    todoListContainer.insertAdjacentHTML('afterbegin', todoHtml);
};

todoArr.forEach((cur, i) => {
    renderHtmlTodoTask(cur);
});

const removeTodos = function () {
    const removeTodoBtns = document.querySelectorAll('.remove-todo');
    for (const btnEl of removeTodoBtns) {
        console.log(btnEl);
        btnEl.addEventListener('click', function (e) {
            e.currentTarget.parentNode.parentNode.remove();
        });
    }
};

removeTodos();

addBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (input.value) {
        todoArr.push(input.value);
        input.value = '';
    }
});
