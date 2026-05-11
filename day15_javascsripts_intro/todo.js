// const list=document.createElement('div');
// list.classList.add('list_item');
// list.textContent='walk 10k per day';
// document.querySelector('[data-test-contain]').append(list);

// const addbtn=document.querySelector('button[type="submit"]');
// addbtn.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('button was clicked');
// });   // const taskValue = todoInput.value.trim();

// if (taskValue !== "") {
//     addNewTodo(taskValue); // Adds to UI
//     saveToStorage(taskValue); // Adds to LocalStorage
//     todoInput.value = ''; // Clears the input field
// }

const todoForm = document.querySelector("form");
const todoInput = document.querySelector("input");

// form submition function
todoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents page reload

  const ul = document.querySelector("[data-test-contain]");

  const list = document.createElement("li");
  list.classList.add("list_item");

  const taskspan = document.createElement("span");
  const text = todoInput.value;
  taskspan.textContent = text;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    console.log("ticked was clicked");
    // list.classList.toggle('completed',checkbox.checked);
    if (checkbox.checked) {
      console.log("check box was checked");
      list.style.textDecoration = "line-through";
      list.classList.add("completed");
    } else {
      console.log("didnot checked");
      list.style.textDecoration = "none";
      list.classList.remove("completed"); 
    }
  });

  const deletebtn = document.createElement("button");
  deletebtn.innerHTML = "&times;";
  deletebtn.addEventListener("click", function () {
    list.remove();
  });

  list.append(checkbox);
  list.append(taskspan);
  list.append(deletebtn);
  ul.append(list);

  todoForm.reset();

  // document.querySelector('[data-test-contain]').append(list);
});

// form submition ends

// the all completed and active buttons functions
function filterList(filterType) {
  const lists = document.querySelectorAll(".list_item");

  lists.forEach((element) => {
    const isCompleted = element.classList.contains("completed");
    switch (filterType) {
      case "all":
        element.style.display = "flex";
        break;

      case "completed":
        element.style.display = isCompleted ? "flex" : "none";
        break;

      case "active":
        element.style.display = isCompleted ? "none" : "flex";
        break;
    }
  });
}

//buttons functions ends here

//adding the event listener in the buttons
document.querySelector('[data-test-all-btn]').addEventListener('click',()=>filterList('all'));
document.querySelector('[data-test-active-btn]').addEventListener('click',()=>filterList('active'));
document.querySelector('[data-test-completed-btn]').addEventListener('click',()=>filterList('completed'));

