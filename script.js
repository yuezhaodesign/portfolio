document.getElementById('resume-link').addEventListener('click', function() {
    window.location.href = 'https://drive.google.com/file/d/1ilJF1MGTWqwiwIhHVm0ZhKF2kUKFxlQo/view?usp=sharing';
});

function toggleMenu() {
    var menu = document.querySelector('.mobile-menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}