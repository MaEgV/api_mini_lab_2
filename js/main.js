import {setFormValue, submitSignUpForm, submitForm, validateForm, submitSignInForm, validateEmail, validatePassword} from "./utils.js"

const sign_up_form = document.getElementById('sign_up_form')
const sign_in_form = document.getElementById('sign_in_form')
let active_form = sign_up_form

const switchToSignInButton = document.getElementById('switch_to_sign_in');
const switch_to_sign_up_btn = document.getElementById('sign_up_link');

const sign_up_btn = document.getElementById('sign_up_btn');
const sign_in_btn = document.getElementById('sign_in_btn');
let active_submit_btn = sign_up_btn

const validationFields = [
  {name: 'first_name'},
  {name: 'last_name'},
  {name: 'email', validator: validateEmail},
  {name: 'password', validator: validatePassword},
  {name: 'password-repeat', validator: validateRepeatedPassword},
]

validationFields.forEach(({name, validator}) => {
  const inputs = document.querySelectorAll(`input[name="${name}"]`)
  inputs.forEach((input) => {
    input.oninput = (e) => {
      setFormValue(name, e.target, validator)
      validateForm(active_form, active_submit_btn)
    }
  })
})

switchToSignInButton.addEventListener('click', (e) => {
  e.preventDefault();
  sign_up_form.style.display = "none";
  sign_in_form.style.display = "block"; 
  active_form = sign_in_form;
  active_submit_btn = sign_in_btn;
});


switch_to_sign_up_btn.onclick = (e) => {
  sign_up_form.style.display = "";
  sign_in_form.style.display = "none";
  active_form = sign_up_form;
  active_submit_btn = sign_up_btn;
};

sign_in_btn.onclick = (e) => {
  e.preventDefault();
  submitForm(sign_in_form);
};

sign_up_btn.onclick = (e) => {
  submitForm(sign_up_form);
  
};
