const input = document.querySelector('#email');
const button = document.querySelector('#submit');

button.addEventListener('click',function(){
  let email = input.value;
  localStorage.setItem('email',email);
});