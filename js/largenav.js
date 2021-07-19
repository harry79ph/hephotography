const dropdownBtn = document.querySelector('.dropdown_button');
const dropdownMenu = dropdownBtn.querySelector('.dropdown_menu');
const caret = dropdownBtn.querySelector('i');

window.onload = function () { document.getElementById("loader").style.display = "none" }
dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('hide');
    !dropdownMenu.classList.contains('hide') ? caret.classList.add('up') : caret.classList.remove('up');
});
window.addEventListener('click', (e) => {
    if (e.target.className !== 'dropdown_button') dropdownMenu.classList.add('hide');
    !dropdownMenu.classList.contains('hide') ? caret.classList.add('up') : caret.classList.remove('up');
});