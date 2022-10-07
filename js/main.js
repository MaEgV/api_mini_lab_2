import {
  setFormValue, submitSignUpForm, validateEmail, validatePassword, formValidation, getValidationStatus,
  formValues, submitSignInForm
} from "./utils.js"


const first_name_id = 'first_name'
const last_name_id = 'last_name'
const password_id = 'password'
const email_id = 'email'
const password_id_repeat = 'password-repeat'
const passwordd_id = 'password_sing_in'
const emaill_id = 'email_sing_in'

const sign_up_link_id = 'sign_up_link'
const sign_in_link_id = 'sign_in_link'
const sign_up_form_id = 'sign_up_form'
const sign_in_form_id = 'sign_in_form'
const sign_up_btn_id = 'sign_up_btn'
const sign_in_btn_id = 'sign_in_btn'

const first_name = document.getElementById(first_name_id);
const last_name = document.getElementById(last_name_id);
const password = document.getElementById(password_id);
const email = document.getElementById(email_id);
const password_sing_in = document.getElementById(passwordd_id);
const email_sing_in = document.getElementById(emaill_id);
const password_repeat = document.getElementById(password_id_repeat);
let passwords_status = false;

function checkInputs(button){
  document.getElementById(button).disabled = !(getValidationStatus() && last_name.value !== "" && first_name.value !== ""
      && email.value !== "" && password.value !== "" && passwords_status);
}

first_name.oninput = (e) => {
  setFormValue(first_name_id, e.target.value)  // Установить значение без валидации
  checkInputs(sign_up_btn_id)
}

last_name.oninput = (e) => {
  setFormValue(last_name_id, e.target.value)  // Установить значение без валидации
  checkInputs(sign_up_btn_id)
}

email.oninput = (e) => {
  setFormValue(email_id, e.target.value, validateEmail) // Установить значение с валидацией
  checkInputs(sign_up_btn_id)
}

password.oninput = (e) => {
  setFormValue(password_id, e.target.value, validatePassword)

  if(formValidation.password){
    password.style.borderBottom = "1px solid green";
  }
  else{
    password.style.borderBottom = "1px solid red";
  }
  checkInputs(sign_up_btn_id);
}

password_repeat.oninput = (e) => {
  passwords_status = (e.target.value == formValues.password)
  checkInputs(sign_up_btn_id);
  if (passwords_status){
    password_repeat.style.borderBottom = "1px solid green";
  }
  else {
    password_repeat.style.borderBottom = "1px solid red";
  }
}


password_sing_in.oninput = (e) =>{
  document.getElementById(sign_in_btn_id).disabled = !(formValidation.email_sing_in && email_sing_in.value !== "" && password_sing_in.value !== "");
}

email_sing_in.oninput = (e) =>{
  setFormValue(emaill_id, e.target.value, validateEmail)
  document.getElementById(sign_in_btn_id).disabled = !(formValidation.email_sing_in && email_sing_in.value !== "" && password_sing_in.value !== "");
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

const sign_up_btn = document.getElementById(sign_up_btn_id);
sign_up_btn.onclick = (e) => {
  // При нажатии кнопки в форме по умолчанию происходит перезагрузка страницы.
  // Чтобы отключить его, нужно отменить стандартное поведение события
  e.preventDefault()
  submitSignUpForm()
}

const sign_in_btn = document.getElementById(sign_in_btn_id);
sign_in_btn.onclick = (e) => {
  // При нажатии кнопки в форме по умолчанию происходит перезагрузка страницы.
  // Чтобы отключить его, нужно отменить стандартное поведение события
  e.preventDefault()
  submitSignInForm()
}