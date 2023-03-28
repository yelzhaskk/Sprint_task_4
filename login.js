document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        const storedPassword = localStorage.getItem('password');
        if (storedPassword === password) {
            alert('Авторизация прошла успешно');
            window.location.href = 'profile/profile.html';
        } else {
            alert('Неправильное имя пользователя или пароль');
        }
    } else {
        alert('Пожалуйста, заполните все поля');
    }

});