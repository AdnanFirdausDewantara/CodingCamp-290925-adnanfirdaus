


let todos = [];


const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const dateInput = document.getElementById('date-input');
const todoList = document.getElementById('todo-list');


function renderTodos() {
   
    todoList.innerHTML = ''; 

    todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        
       
        listItem.innerHTML = `
            <span class="todo-text">${todo.text} (Target: ${todo.date})</span>
            <div class="actions">
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Hapus</button>
            </div>
        `;
        
        todoList.appendChild(listItem);
    });
}


todoForm.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const taskText = todoInput.value.trim();
    const taskDate = dateInput.value;

    
    if (taskText === "" || taskDate === "") {
        alert("Input tugas dan tanggal tidak boleh kosong!");
        return;
    }

  
    todos.push({ 
        text: taskText, 
        date: taskDate 
    });


    todoInput.value = '';
    dateInput.value = '';

    renderTodos();
});


todoList.addEventListener('click', function(e) {
    const target = e.target;
    const index = target.dataset.index;

    if (target.classList.contains('delete-btn')) {

        if (confirm("Yakin ingin menghapus tugas?" )) {
            todos.splice(index, 1);
            renderTodos();
        }

    } else if (target.classList.contains('edit-btn')) {
        
        
        const newText = prompt("Edit tugas" );
        if (newText !== null && newText.trim() !== "") {
            todos[index].text = newText.trim();
            renderTodos();
        }
    }
});

