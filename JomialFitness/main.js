const hamburguesa = document.querySelector('.hamburgesa');
const sidebar = document.querySelector('.sidebar');

hamburguesa.addEventListener('click',()=>{
    hamburguesa.classList.toggle('clicked');
    sidebar.classList.toggle('show');
})