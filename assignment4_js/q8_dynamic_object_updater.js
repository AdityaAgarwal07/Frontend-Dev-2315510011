// Q8: Dynamic Object Updater
// Save as: q8_dynamic_object_updater.js
// Browser code: updates user object from form and shows updated object.

const user = { name: 'John', email: 'john@mail.com', age: 21 };

function renderUser(containerId = 'user-container') {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = `<pre id="user-json">${JSON.stringify(user, null, 2)}</pre>`;
}

function setupUpdater(formId = 'user-form') {
    const form = document.getElementById(formId);
    if (!form) return;
    form.name.value = user.name;
    form.email.value = user.email;
    form.age.value = user.age;
    form.addEventListener('submit', e => {
        e.preventDefault();
        user.name = form.name.value;
        user.email = form.email.value;
        user.age = Number(form.age.value);
        renderUser();
    });
}

/* Browser HTML snippet:
<div id="user-container"></div>
<form id="user-form">
  <input name="name"><br>
  <input name="email"><br>
  <input name="age" type="number"><br>
  <button type="submit">Update</button>
</form>
<script>
  renderUser();
  setupUpdater();
</script>
*/
if (typeof module !== 'undefined') module.exports = { user, renderUser, setupUpdater };
