document.querySelector('.burger-toggle').addEventListener('click', function () {
    document.querySelector('.burger-menu').classList.add('open');
});
document.querySelector('.burger-close').addEventListener('click', function () {
    document.querySelector('.burger-menu').classList.remove('open');
});
