function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');

        checkbox.type = 'checkbox';

        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(taskInput.value));
        listItem.appendChild(document.createElement('br'));
        taskList.appendChild(listItem);
        

        taskInput.value = '';
    }

    if (checkbox.checked) {
        listItem.style.textDecoration = 'line-through';
    } else {
        listItem.style.textDecoration = 'none';
    }
}

const taskInput = document.getElementById('newTask');
taskInput.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
            addTask();
        }
});

const tags = document.querySelectorAll('[data-tab-target')
const tabContents = document.querySelectorAll('[data-tab-content')

tabs.forEach(tab => { 
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        target.classList.add('active')
        tab.classList.add('active')

    })
})


//function SetHours