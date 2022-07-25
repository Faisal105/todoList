const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
console.log('jj');
addBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const inputValue = todoInput.value.trim();
	if (inputValue === '') {
		alert('Please enter a value');
	} else {
		const li = document.createElement('li');
		li.className = 'list-group-item d-flex justify-content-between p-3';
		li.innerHTML = `
        <span>
                    <input type="checkbox">
                    <div class="edit-input d-inline d-none">
                    <input type="text" placeholder="Updated Value" ></input>
                    <button class="btn btn-primary btn-sm">Update</button>
                    <button class="btn btn-danger btn-sm">Cancel</button>
                    </div>
                    <p class="todo-input d-inline">${inputValue}</p>
                    </span>
                <div>
                    <i class="bi bi-pencil-square"></i>
                    <i class="bi bi-trash"></i>
                </div>
        `;
		todoList.append(li);
		const checkbox = li.querySelector('input[type="checkbox"]');
		const p = li.querySelector('p.todo-input');
		const edit = li.querySelector('div>i:first-child');
		const trash = li.querySelector('div>i:last-child');
		const editContainer = li.querySelector('.edit-input');
		const editInput = li.querySelector('.edit-input>input');
		const updateBtn = li.querySelector('.edit-input>button.btn-primary');
		const cancelBtn = li.querySelector('.edit-input>button.btn-danger');
		const toggleUpdate = () => {
			p.classList.toggle('d-none');
			editContainer.classList.toggle('d-none');
		};
		checkbox.addEventListener('change', (e) => {
			p.classList.toggle('done');
		});
		checkbox.addEventListener('change', (e) => {
			p.classList.toggle('done');
		});

		edit.addEventListener('click', (e) => {
			editInput = inputValue;
			toggleUpdate();
		});
		updateBtn.addEventListener('click', () => {
			const editedValue = editInput.value.trim();
			if (editedValue === '') {
				alert('Enter some todo item before adding');
			} else {
				inputValue = editedValue;
				p.textContent = editedValue;
				toggleUpdate();
			}
		});
		cancelBtn.addEventListener('click', () => {
			toggleUpdate();
		});
		trash.addEventListener('click', (e) => {
			li.remove();
		});
		todoInput.value = '';
	}
});
let a = { name: 'john' };
let b = a;

a.name = 'deo';
console.log('a', a);
console.log('b', b);
