// Q4: Custom Form Builder (Forms + Classes)
// Save as: q4_form_builder.js
// This code generates a form dynamically using innerHTML and returns data on submit.
// Intended for browser usage.

class FormBuilder {
    constructor(fields = [], containerId = 'form-container') {
        this.fields = fields;
        this.container = document.getElementById(containerId);
        if (!this.container) throw new Error('Container not found: ' + containerId);
    }

    render() {
        let html = '<form id="dynamicForm">';
        this.fields.forEach(f => {
            html += '<div class="field">';
            html += `<label>${f.label}</label>`;
            if (f.type === 'textarea') {
                html += `<textarea name="${f.name || f.label}"></textarea>`;
            } else {
                html += `<input name="${f.name || f.label}" type="${f.type || 'text'}" />`;
            }
            html += '<div class="error-msg"></div>';
            html += '</div>';
        });
        html += '<button type="submit">Submit</button></form>';
        this.container.innerHTML = html;
        this.form = this.container.querySelector('#dynamicForm');
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            const data = this.getFormData();
            console.log('Form Data:', data);
            alert('Form submitted. Check console.');
        });
    }

    getFormData() {
        const data = {};
        const elements = this.form.elements;
        for (let el of elements) {
            if (!el.name) continue;
            if (el.type === 'checkbox') data[el.name] = el.checked;
            else data[el.name] = el.value;
        }
        return data;
    }
}

/* Browser usage:
<div id="form-container"></div>
<script>
  const fb = new FormBuilder([
    {type: 'text', label: 'Username', name: 'username'},
    {type: 'email', label: 'Email', name: 'email'},
    {type: 'textarea', label: 'Bio', name: 'bio'}
  ], 'form-container');
  fb.render();
</script>
*/

if (typeof module !== 'undefined') module.exports = { FormBuilder };
