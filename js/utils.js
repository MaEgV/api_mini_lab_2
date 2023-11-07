// Сюда пишутся значения формы (Object как в Java, или dict из Python)
const formValues = {}
// Сюда пишутся статусы валидации каждого поля. Если поле ни разу не валидировалось,
const formValidation = {}

export const validatePassword = (e) => {
  formValidation.password = e.target.value
  return formValidation.password !== undefined
}

export const validateEmail = (email) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
  return regExp.rest(email)
}

export const getValidationStatus = () => {
  return Object.values(formValidation).every((validationStatus) => !!validationStatus)
}

export const setFormValue = (valueKey, newValue, validator) => {
  formValues[valueKey] = newValue
  if (validator !== undefined) {
    formValidation[valueKey] = validator(newValue)
  }
}

export const submitSignUpForm = () => {
  if (!getValidationStatus()) {
    console.log("FORM IS INCORRECT")
    return false
  }
  console.log("FORM IS FINE")
  console.log(formValues)
  return true
}
