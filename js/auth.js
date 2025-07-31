const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;
    auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    return userCredential.user.updateProfile({
      displayName: signupForm["signup-name"].value
    });
  })
  .then(() => {
    window.location.href = "profile.html";
  })
  .catch((err) => alert(err.message));
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "profile.html";
      })
      .catch((err) => alert(err.message));
  });
}