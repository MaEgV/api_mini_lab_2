import {setFormValue, submitSignUpForm, validateEmail, validatePassword, validateRepeatedPassword} from "./utils.js"

const sign_up_form = document.getElementById('sign_up_form')
const sign_in_form = document.getElementById('sign_in_form')

const switch_to_sign_in_btn = document.getElementById('sign_in_link');
const switch_to_sign_up_btn = document.getElementById('sign_up_link');

const validationFiels = [
  {name: 'first_name'},
  {name: 'last_name'},
  {name: 'email', validator: validateEmail},
  {name: 'password', validator: validatePassword},
  {name: 'password-repeat', validator: validateRepeatedPassword},
]

validationFiels.forEach(({name, validator}) => {
  const inputs = document.querySelectorAll(`input[name="${name}"]`)
  inputs.forEach((input) => {
    input.oninput = (e) => setFormValue(name, e.target, validator)
  })
})

sign_in_form.style.display = "none"
switch_to_sign_in_btn.onclick = (e) => {
  sign_up_form.style.display = "none"
  sign_in_form.style.display = ""
}
switch_to_sign_up_btn.onclick = (e) => {
  sign_up_form.style.display = ""
  sign_in_form.style.display = "none"
}

const sign_up_btn = document.getElementById('sign_up_btn');
sign_up_btn.onclick = (e) => {
  e.preventDefault()
  submitSignUpForm()
}
