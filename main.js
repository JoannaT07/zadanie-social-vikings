const toggleBtn = document.querySelector('.toggle-btn')
const dropdownMenu = document.querySelector('.dropdown-menu')
toggleBtn.addEventListener('click', () => {
    console.log("open")
    dropdownMenu.classList.toggle('show')
})