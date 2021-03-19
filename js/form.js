class Validator {

    constructor(container) {

        this.emailPattern = new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+', 'g');
        this.container = container;
        this.inputs = document.querySelectorAll('.contact-form__input, .contact-form__textarea');
        this.inputs.forEach(input => input.addEventListener('change', (e) => this.handleChange(e)));
    }

    handleChange(e) {
        const { target: { name, value } } = e;
        let check = document.querySelector(`.check-icon-${name}`);
        check.classList.add('hidden');
        let flag = true;
        if (name === 'email') {
            if (this.emailPattern.exec(value)) {
                flag = true
                document.querySelector('.form_error').classList.add('hidden');
            } else {
                flag = false;
                document.querySelector('.form_error').classList.remove('hidden');

            }
        } else if (value === undefined) {
            flag = false;
        }
        if (flag) {
            check.classList.remove('hidden');
        }   
    }

    handleSubmit() {
        let data = new FormData(form);
    }
}
let validator = new Validator;