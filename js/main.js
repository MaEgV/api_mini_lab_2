import {setFormValue, submitSignUpForm, validateEmail, validatePassword, formValues, formValidation, getValidationStatus} from "./utils.js"


// Выписываем все айдишники HTMl-элементов в константы для переиспользования

const sign_in_link_id = 'sign_in_link'
const sign_up_link_id = 'sign_up_link'
const sign_up_form_id = 'sign_up_form'
const sign_in_form_id = 'sign_in_form'

const email= document.getElementById('email');
const password_repeat = document.getElementById('password-repeat');
const password = document.getElementById('password');


const names = document.querySelectorAll("#f, #last_name");
for (const name of names)
  name.oninput = (e) => setFormValue(name.id, e.target.value)

email.oninput = (e) => setFormValue(email.id, e.target.value, validateEmail)

password.oninput = (e) => {
  setFormValue('password', e.target.value, validatePassword)
  if(formValidation.password)
    password.style.borderBottom = "1px solid green";
  else
    password.style.borderBottom = "1px solid red";
}

password_repeat.oninput = (e) => {
  if (e.target.value === formValues.password)
    password_repeat.style.borderBottom = "1px solid green";
  else
    password_repeat.style.borderBottom = "1px solid red";
}


// Меняем стили объекта DOM дерева. Это позволяет скрыть форму регистрации и показать форму авторизации
// Объект формы не исключается из DOM дерева, а просто становистя невидимым
const switch_to_sign_in = document.getElementById(sign_in_link_id);
switch_to_sign_in.onclick = (e) => {
  document.getElementById(sign_up_form_id).style.display = "none"
  document.getElementById(sign_in_form_id).style.display = ""
}

const switch_to_sign_up = document.getElementById(sign_up_link_id);
switch_to_sign_up.onclick = (e) => {
  document.getElementById(sign_up_form_id).style.display = ""
  document.getElementById(sign_in_form_id).style.display = "none"
}

const sign_btns = document.querySelectorAll("#sign_in_btn, #sign_up_btn");
for (const sign_btn of sign_btns) {
  sign_btn.onclick = (e) => {
    e.preventDefault()
    submitSignUpForm()
  }
}

