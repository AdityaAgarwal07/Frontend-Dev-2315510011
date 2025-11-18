// Q7: Login Form Validation using RegExp
// Save as: q7_login_validation.js
// Browser-side form validation helpers

const loginValidators = {
    username: u => typeof u === 'string' && u.length >= 5,
    password: p => /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}/.test(p)
};

function validateLogin(username, password) {
    const errors = [];
    if (!loginValidators.username(username)) errors.push('Username must be at least 5 characters.');
    if (!loginValidators.password(password)) errors.push('Password must be at least 8 chars and include number, upper, lower and special.');
    return { success: errors.length === 0, errors };
}

/* Browser usage:
<form id="login">
  <input name="username"><div class="error-msg"></div>
  <input name="password" type="password"><div class="error-msg"></div>
  <button type="submit">Login</button>
</form>
<script>
 const form = document.getElementById('login');
 form.addEventListener('submit', e => {
   e.preventDefault();
   const u = form.username.value, p = form.password.value;
   const res = validateLogin(u, p);
   if (res.success) alert('Login success'); else alert(res.errors.join('\n'));
 });
</script>
*/

if (typeof module !== 'undefined') module.exports = { loginValidators, validateLogin };
