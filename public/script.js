const myButton = document.querySelector('.mybutton');
const toggleBtn = document.querySelector('.mobile-menu');

myButton.addEventListener('click', ()=>{
    toggleBtn.classList.toggle("hidden");
    console.log(toggleBtn)
})