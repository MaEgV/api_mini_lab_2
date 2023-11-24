const formValues = {}  // Сюда пишутся значения формы (Object как в Java, или dict из Python)
const formValidation = {}  // Сюда пишутся статусы валидации каждого поля. Если поле ни разу не валидировалось,
// то при обращении к Object вернётся undefined, который при логическом сравнении обрабатывается как false

export const validateEmail = email => {
  // Создадим шаблон регулярного выражения. В нём применяются шаблонные строки
  // Гуглить по тегам: "шаблонные строки js", "регулярные выражения"
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return regExp.test(email);
}

export const validatePassword = password => {
return password.length >= 8;
}

const passwordInput = document.querySelector('input[name="password"]');
if (!validatePassword(passwordInput.value)) {
  passwordInput.classList.add('invalid');
} else {
  passwordInput.classList.remove('invalid');
}

passwordInput.addEventListener('input', function() {
  if (!validatePassword(this.value)) {
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
  }
});



export const getValidationStatus = (form) => {
  const inputs = [...form.querySelectorAll('input')]
  return inputs.every(input => {
    return input.value && formValidation[input.name]
  })
}


export const setFormValue = (valueKey, inputElement, validator) => {
  formValues[valueKey] = inputElement.value;
  if (validator !== undefined) {
    formValidation[valueKey] = validator(inputElement.value);
    inputElement.classList.remove('invalid', 'valid');
    inputElement.classList.add(formValidation[valueKey] ? 'valid' : 'invalid');
  } else {
    formValidation[valueKey] = true;
  }
};


// Функция для обработки отправки формы регистрации
// В этой функции должен быть http запрос на сервер для регистрации пользователя (сейчас просто демонстрация)
export const validateForm = (form, submitButton) => {
  submitButton.disabled = !getValidationStatus(form)
}
export const submitForm = (form) => {
  if (!getValidationStatus(form)) {
    console.log("FORM IS INCORRECT")
    return false
  }
  console.log("FORM IS FINE")
  console.log(formValues)
  return true
}
