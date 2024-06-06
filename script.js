const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

function togglePassword() {
    const passwordField = document.querySelector("#password-field");
    const toggleButton = document.querySelector(".toggle-button");
    
    if (!passwordField || !toggleButton) {
       return;
    }
    
    toggleButton.classList.toggle("open");
    
    const isEyeOpen = toggleButton.classList.contains("open");
  
    toggleButton.innerHTML = isEyeOpen ? eyeIcons.closed : eyeIcons.open;
    passwordField.type = isEyeOpen ? "text" : "password";
 }