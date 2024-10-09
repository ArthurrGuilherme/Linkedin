const passwordField = document.getElementById('password');
const toggleButton = document.getElementById('togglePassword');

toggleButton.addEventListener('click', function (event) {
  // Evitar que o botão atualize a página
  event.preventDefault();

  // Alterna entre tipo 'password' e 'text'
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    toggleButton.textContent = 'Ocultar';
  } else {
    passwordField.type = 'password';
    toggleButton.textContent = 'Exibir';
  }
});