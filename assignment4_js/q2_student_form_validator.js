// Q2: Student Form Validator (Forms + RegExp)
// Save as: q2_student_form_validator.js
// This file provides functions to validate fields. Intended to be used in browser.
// Example usage is shown in comments below.

const validators = {
    name: name => /^[A-Za-z ]+$/.test(name),
    email: email => /^[\w.-]+@[A-Za-z\d.-]+\.[A-Za-z]{2,}$/.test(email),
    phone: phone => /^\d{10}$/.test(phone),
    password: password => /(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}/.test(password)
};

// Helper to set field styles and message in DOM
function showValidation(el, valid, message) {
    if (!el) return;
    el.style.border = valid ? '2px solid green' : '2px solid red';
    let msg = el.nextElementSibling;
    if (msg && msg.classList.contains('error-msg')) {
        msg.textContent = valid ? '' : message;
    }
}

// Validate form - pass HTML form element
function validateStudentForm(form) {
    const nameEl = form.querySelector('[name="name"]');
    const emailEl = form.querySelector('[name="email"]');
    const phoneEl = form.querySelector('[name="phone"]');
    const passEl = form.querySelector('[name="password"]');

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const phone = phoneEl.value.trim();
    const password = passEl.value;

    const isName = validators.name(name);
    const isEmail = validators.email(email);
    const isPhone = validators.phone(phone);
    const isPass = validators.password(password);

    showValidation(nameEl, isName, 'Name must contain only alphabets and spaces.');
    showValidation(emailEl, isEmail, 'Invalid email format.');
    showValidation(phoneEl, isPhone, 'Phone must be exactly 10 digits.');
    showValidation(passEl, isPass, 'Password must contain uppercase, number, special char.');

    return isName && isEmail && isPhone && isPass;
}

/* 
Browser integration snippet (to be used in HTML):
<form id="studentForm">
  <input name="name"><div class="error-msg"></div>
  <input name="email"><div class="error-msg"></div>
  <input name="phone"><div class="error-msg"></div>
  <input name="password" type="password"><div class="error-msg"></div>
  <button type="submit">Submit</button>
</form>
<script>
  const form = document.getElementById('studentForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateStudentForm(form)) {
      alert('Form valid! Submit to server...');
    }
  });
</script>
*/

if (typeof module !== 'undefined') module.exports = { validators, validateStudentForm };
