const list=document.createElement('div');
list.classList.add('list_item');
list.textContent='walk 10k per day';
document.querySelector('[data-test-contain]').append(list);


// const addbtn=document.querySelector('button[type="submit"]');
// addbtn.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('button was clicked');
// });

const todoForm = document.querySelector('form');
const todoInput = document.querySelector('input');
todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload

    // const taskValue = todoInput.value.trim();

    // if (taskValue !== "") {
    //     addNewTodo(taskValue); // Adds to UI
    //     saveToStorage(taskValue); // Adds to LocalStorage
    //     todoInput.value = ''; // Clears the input field
    // }
    console.log('heyy i was ');
});