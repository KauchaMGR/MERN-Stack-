const list=document.createElement('div');
list.classList.add('list_item');
list.textContent='walk 10k per day';
document.querySelector('[data-test-contain]').append(list);


const addbtn=document.querySelector('button[type="submit"]');
addbtn.addEventListener('click',function(event){
    event.preventDefault();
    console.log('button was clicked');
});