import
    {setFormValue, submitSignUpForm, validateEmail, validatePassword, validateRepeatPassword, validateName, clearFormValidation}
    from "./utils.js"

const first_name_id             = 'first_name';
const last_name_id              = 'last_name';
const email_id                  = 'email';
const sign_in_password_id       = 'sing_in_password';
const sign_in_link_id           = 'sign_in_link';
const sign_in_form_id           = 'sign_in_form';

export const password_id        = 'password';
export const sign_up_form_id    = 'sign_up_form';
export const sign_up_btn_id     = 'sign_up_btn';
export const sing_in_btn_id     = 'sign_in';
export const repeat_password_id = 'password-repeat';

export let fields_number        = 5;

const first_name = document.getElementById(first_name_id);
first_name.oninput = (e) => setFormValue(first_name_id, e.target.value, validateName);

const last_name = document.getElementById(last_name_id);
last_name.oninput = (e) => setFormValue(last_name_id, e.target.value, validateName);


const emails = document.body.querySelectorAll(".email");
for (const email of emails) {
    email.oninput = (e) => setFormValue(email.id, e.target.value, validateEmail);
}

const sign_in_password = document.getElementById(sign_in_password_id);
sign_in_password.oninput = (e) => setFormValue(sign_in_password_id, e.target.value, validatePassword)

const password = document.getElementById(password_id);
password.oninput = (e) => setFormValue(password_id, e.target.value, validatePassword)

const repeat_password = document.getElementById(repeat_password_id);
repeat_password.oninput = (e) => setFormValue(repeat_password_id, e.target.value, validateRepeatPassword)

const switch_to_sign_in = document.getElementById(sign_in_link_id);
switch_to_sign_in.onclick = (e) => {
    document.getElementById(sign_up_form_id).style.display = "none";
    document.getElementById(sign_in_form_id).style.display = "";
    clearFormValidation();
    fields_number = 2;
}


const sign_up_btn = document.getElementById(sign_up_btn_id);
sign_up_btn.onclick = (e) => {
    e.preventDefault();
    submitSignUpForm();
}

