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
// let li_item =document.getElementById("lists");//direct apply on the parent
// li_item.addEventListener('click',(e)=>{
//     e.stopPropagation();
//     console.log(e.target.textContent);
// })
// console.log("hello");
// setTimeout(()=>{
// console.log("hello2");
// }, 0)

// Promise.resolve().then(()=>{
// console.log("hello3");})

// console.log("hello4");
function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();              
setInterval(updateClock, 1000); // then refresh every second