const form=document.querySelector('[data-type="form"]');

form.addEventListener('submit',(e)=>{
 e.preventDefault();

 const name = form.querySelector('[data-type="name"]').value.trim();
 const email=form.querySelector('[data-type="email"]').value.trim();
 const pass=form.querySelector('[data-type="password"]').value.trim();

 if(!name)
    return showError('name');
if(!email.includes('@')) 
    return showError('email');

if (pass.length<6)
    return alert("password must be atleast 7 characters");
const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
if (!emailPattern.test(email))
    return alert("the pattern didnot matched");

showSuccess();
form.reset();

function showError(type){
    alert(`${type} is not valid`);
}
function showSuccess(){
    alert("form submitted successfully");

}



})