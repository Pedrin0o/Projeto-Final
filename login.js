document.getElementById('showRegister').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

// Aqui você pode adicionar a lógica para enviar os dados de login e cadastro para o servidor
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica de login
    alert('Login realizado com sucesso!');
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica de cadastro
    alert('Cadastro realizado com sucesso!');
});

// auth.js

// Selecionar os elementos necessários
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Mostrar o formulário de registro
showRegister.addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    loginForm.style.display = 'none'; // Esconde o formulário de login
    registerForm.style.display = 'block'; // Mostra o formulário de registro
});

// Mostrar o formulário de login
showLogin.addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    registerForm.style.display = 'none'; // Esconde o formulário de registro
    loginForm.style.display = 'block'; // Mostra o formulário de login
});


