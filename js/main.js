import {
  setFormValue, submitSignUpForm, validateEmail, validatePassword, validatePasswordRepeat,
  formValidation, getValidationStatus
} from "./utils.js"

// Выписываем все айдишники HTMl-элементов в константы для переиспользования
const first_name_id = 'first_name'
const password_id = 'password'
const password_repeat_id = 'password-repeat'
const password_in_id = 'password-in'
const email_id = 'email'
const email_in_id = 'email-in'

const sign_in_link_id = 'sign_in_link'
const sign_up_form_id = 'sign_up_form'
const sign_up_btn_id = 'sign_up_btn'
const sign_in_form_id = 'sign_in_form'
const sign_in_btn_id = 'sign_in_btn'


// Получаем элемент DOM-дерева по id и присваиваем значение аттрибуту oninput
// oninput вызывается с параметром "event" каждый раз, когда ввод меняется
// Значение, которое мы присваиваем этому аттрибуту - это функция, определённая в стрелочном стиле
// Гуглить по тегам "события JS", "onchange/oninput HTML", "стрелочные функции JS", ...

const first_name = document.getElementById(first_name_id);
first_name.oninput = (e) => setFormValue(first_name_id, e.target.value)  // Установить значение без валидации

const email = document.getElementById(email_id);
email.oninput = (e) => {
  setFormValue(email_id, e.target, validateEmail)
  setValidity(email, formValidation[email_id])
  updateValidity()
} // Установить значение с валидацией

const email_in = document.getElementById(email_in_id);
email_in.oninput = (e) => {
  setFromValue(email_in_id, e.target, validateEmail)
  setValidity(email_in, formValidation[email_in_id])
  updateValidity()
}

const password = document.getElementById(password_id)
password.oninput = (e) => {
  setFormValue(password_id, e.target, validatePassword)
  setValidity(password, formValidation[password_id])
  updateValidity()
}

const password_repeat = document.getElementById(password_repeat_id)
password_repeat.oninput = (e) => {
  setFormValue(password_repeat_id, e.target, validatePasswordRepeat)
  setValidity(password_repeat, formValidation[password_repeat_id])
  updateValidity()
}

const password_in = document.getElementById(password_in_id)
password_in.oninput = (e) => {
  setFormValue(password_in_id, e.target, validatePassword)
  setValidity(password_in, formValidation[password_in_id])
  updateValidity()
}

function setValidity(element, condition) {
  if (condition) {
    element.classList.remove("invalid")
    element.classList.add("valid")
  }
  else {
    element.classList.remove("valid")
    element.classList.add("invalid")
  }
}

function updateValidity() {
  console.log("getValidationStatus() == " + getValidationStatus())
  const status = getValidationStatus()
  sign_up_btn.disabled = !status
  sign_in_btn.disabled = !status
}

// Меняем стили объекта DOM дерева. Это позволяет скрыть форму регистрации и показать форму авторизации
// Объект формы не исключается из DOM дерева, а просто становится невидимым
const switch_to_sign_in = document.getElementById(sign_in_link_id);
switch_to_sign_in.onclick = () => {
  document.getElementById(sign_up_form_id).style.display = "none"
  document.getElementById(sign_in_form_id).style.display = ""

  for (const member in formValidation)
    delete formValidation[member]
}


const sign_up_btn = document.getElementById(sign_up_btn_id);
sign_up_btn.onclick = (e) => {
  // При нажатии кнопки в форме по умолчанию происходит перезагрузка страницы.
  // Чтобы отключить его, нужно отменить стандартное поведение события
  e.preventDefault()
  submitSignUpForm()
}

const sign_in_btn = document.getElementById(sign_in_btn_id);
