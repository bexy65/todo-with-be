const input = document.querySelector('#input');
const todoListContainer = document.querySelector('.todo-list-main-container');
const todoList = document.querySelector('.todo-list__container');

const addBtn = document.querySelector('#addTodo');

const todoArr = ['Buy burgers!', 'Leave a note', '12 eggs'];

const init = function (el) {
    todoListContainer.innerHTML = '';
};

init();

const removeTodos = function () {
    const removeTodoBtns = document.querySelectorAll('.remove-todo');
    for (const btnEl of removeTodoBtns) {
        btnEl.addEventListener('click', function (e) {
            e.currentTarget.closest('.todo-list__container').remove();
        });
    }
};

const editTodosHandler = function (el) {
    el.innerHTML = `<input class="li-item-input" type="text" value="${el.textContent}" />`;
    el.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const editField = el.querySelector('.li-item-input');
            const value = editField.value;
            editField.remove();
            el.textContent = value;
        }
    });
};

const editTodos = function () {
    const editTodoBtn = document.querySelectorAll('.edit-todo');

    for (const btnEl of editTodoBtn) {
        btnEl.addEventListener('click', function (e) {
            const liEl = e.target
                .closest('.todo-list__container')
                .querySelector('.todo-item');

            editTodosHandler(liEl);
        });
    }
};

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
    removeTodos();
};

todoArr.forEach((cur, i) => {
    renderHtmlTodoTask(cur);
});

editTodos();

addBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (input.value) {
        todoArr.push(input.value);
        renderHtmlTodoTask(input.value);
        input.value = '';
    }
});
