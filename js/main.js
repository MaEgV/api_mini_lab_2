import {setFormValue, submitSignUpForm, validateEmail, validatePassword, validateRepeatedPassword} from "./utils.js"

const sign_in_link_id = 'sign_in_link'
const sign_up_form_id = 'sign_up_form'
const sign_up_btn_id = 'sign_up_btn'
const sign_in_form_id = 'sign_in_form'

const first_name = document.getElementById('first_name');
first_name.oninput = (e) => setFormValue('first_name', e.target)

const last_name = document.getElementById('last_name');
last_name.oninput = (e) => setFormValue('last_name', e.target)

const email = document.getElementById('email');
email.oninput = (e) => setFormValue('email', e.target, validateEmail)

const password = document.getElementById('password');
password.oninput = (e) => setFormValue('password', e.target, validatePassword)

const passwordRepeat = document.getElementById('password-repeat');
passwordRepeat.oninput = (e) => setFormValue('password-repeat', e.target, validateRepeatedPassword)

const switch_to_sign_in = document.getElementById(sign_in_link_id);
switch_to_sign_in.onclick = (e) => {
  document.getElementById(sign_up_form_id).style.display = "none"
  document.getElementById(sign_in_form_id).style.display = ""
}

const sign_up_btn = document.getElementById(sign_up_btn_id);
sign_up_btn.onclick = (e) => {
  e.preventDefault()
  submitSignUpForm()
}
