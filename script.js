function navigateTo(page) {
    if (page === 'resume-link') {
        window.location.href = 'https://drive.google.com/file/d/1ilJF1MGTWqwiwIhHVm0ZhKF2kUKFxlQo/view?usp=sharing'; 
    } else {
        window.location.href = page;
    }
}

function toggleMenu() {
    var menu = document.querySelector('.mobile-menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}