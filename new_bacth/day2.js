// function eat() {
//     console.log("what to eat");
// }

// function go(callback) {
//     console.log("where to go?");
//     callback(); // at first this gets executed
// }

// go(eat);

// const btn = document.getElementById('btn');

// btn.addEventListener('click', (e) => {
//     e.target.textContent = "button was clicked";
// });

// let input = document.getElementById('inp');
// input.value = "hello k xa";

// //event bubbling
// let div=document.querySelector('.button');


//Event delegations example
let li_item =document.getElementById("lists");//direct apply on the parent
li_item.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log(e.target.textContent);
})