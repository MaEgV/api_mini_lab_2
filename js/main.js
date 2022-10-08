import {
  setFormValue, submitSignUpForm, validateEmail, validatePassword, validatePasswordRepeat,
  formValues, formValidation
} from "./utils.js"

// Выписываем все айдишники HTMl-элементов в константы для переиспользования
const first_name_id = 'first_name'
const last_name_id = 'last_name'
const password_id = 'password'
const password_repeat_id = 'password-repeat'
const email_id = 'email'

const sign_in_link_id = 'sign_in_link'
const sign_up_form_id = 'sign_up_form'
// const sign_in_form_id = 'sign_in_form'  // Пригодится
const sign_up_btn_id = 'sign_up_btn'
const sign_in_form_id = 'sign_in_form'


// Получаем элемент DOM-дерева по id и присваиваем значение аттрибуту oninput
// oninput вызывается с параметром "event" каждый раз, когда ввод меняется
// Значение, которое мы присваиваем этому аттрибуту - это функция, определённая в стрелочном стиле
// Гуглить по тегам "события JS", "onchange/oninput HTML", "стрелочные функции JS", ...

const first_name = document.getElementById(first_name_id);
first_name.oninput = (e) => setFormValue(first_name_id, e.target.value)  // Установить значение без валидации

const email = document.getElementById(email_id);
email.oninput = (e) => setFormValue(email_id, e.target.value, validateEmail) // Установить значение с валидацией

const password = document.getElementById(password_id)
password.oninput = (e) => setFormValue(password_id, e.target.value, validatePassword)

const password_repeat = document.getElementById(password_repeat_id)
password_repeat.oninput = (e) => {
  // setFormValue(password_repeat_id, e.target.value, validatePasswordRepeat)
  console.log("e.target.value: " + e.target.value)
  console.log("formValues.password: " + formValues.password)
  const regExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/
  const status = (e.target.value === formValues.password && regExp.test(password_repeat.value));
  console.log(status)

  password_repeat.setAttribute("isvalid", status)
  console.log("isvalid == " + password_repeat.getAttribute("isvalid"))

  // if (status) {
  //   password_repeat.classList.remove("invalid")
  //   password_repeat.classList.add("valid")
  // }
  // else {
  //   password_repeat.classList.remove("valid")
  //   password_repeat.classList.add("invalid")
  //   password_repeat.
  // }

}

// Меняем стили объекта DOM дерева. Это позволяет скрыть форму регистрации и показать форму авторизации
// Объект формы не исключается из DOM дерева, а просто становится невидимым
const switch_to_sign_in = document.getElementById(sign_in_link_id);
switch_to_sign_in.onclick = (e) => {
  document.getElementById(sign_up_form_id).style.display = "none"
  document.getElementById(sign_in_form_id).style.display = ""
}


const sign_up_btn = document.getElementById(sign_up_btn_id);
sign_up_btn.onclick = (e) => {
  // При нажатии кнопки в форме по умолчанию происходит перезагрузка страницы.
  // Чтобы отключить его, нужно отменить стандартное поведение события
  e.preventDefault()
  submitSignUpForm()
}

