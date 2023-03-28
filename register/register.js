document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('register-email').value;
    const userName = document.getElementById('register-userName').value;
    const password = document.getElementById('register-password').value;
    const firstName = document.getElementById('register-firstName').value;
    const lastName = document.getElementById('register-lastName').value;
    const country = document.getElementById('register-country').value;
    const date = document.getElementById('register-date').value;

    if (email && userName && password && firstName && lastName && country && date) {
        localStorage.setItem('userName', userName);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('password', password);
        localStorage.setItem('email', email);
        localStorage.setItem('country', country);
        localStorage.setItem('date', date);
        alert('Регистрация прошла успешно');
        window.location.href = '../login.html';
    } else {
        alert('Пожалуйста, заполните все поля');
    }
});





