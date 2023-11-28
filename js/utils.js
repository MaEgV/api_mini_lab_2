import {sign_up_btn_id, sing_in_btn_id, password_id, sign_up_form_id, fields_number} from "./main.js"

const formValues     = {}
const formValidation = {}

export const clearFormValidation = () => {
    for(var key in formValidation) { delete formValidation[key]; }
    document.getElementById(sign_up_btn_id).setAttribute('disabled', '');
    document.getElementById(sing_in_btn_id).setAttribute('disabled', '');
}

function switchValidity(id, isValid){
    const element = document.getElementById(id);

    if(isValid){
        element.classList.add("valid");
       element.classList.remove("invalid");
    } else {
        element.classList.add("invalid");
        element.classList.remove("valid");
    }
}

function isMatchPassword(password){
    const letters = /\w+/;
    const numbers = /\d+/;

    return String(password).length >= 8
        && String(password).length <= 16
        && String(password).match(letters)
        && String(password).match(numbers)
}

export const validateName = (id, name) => {
    return true;
}

export const validatePassword = (id, password) => {

    const isValid = isMatchPassword(String(password));
    switchValidity(id, isValid);

    return isValid;
}

export const validateRepeatPassword = (id, password) => {

    const isValid = isMatchPassword(String(password))
        && (document.getElementById(password_id).value == document.getElementById(id).value
        || Object.entries(document.getElementById(sign_up_form_id)).display);

    switchValidity(id, isValid);

    return isValid;
}

export const validateEmail = (id, email) => {
    const regExp =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return String(email).toLowerCase().match(regExp);
}

export const getValidationStatus = () => {
    let isValid = Object.values(formValidation).every((validationStatus) => !!validationStatus);
    isValid = isValid && Object.keys(formValidation).length == fields_number;

    if(isValid){
        document.getElementById(sign_up_btn_id).removeAttribute('disabled');
        document.getElementById(sing_in_btn_id).removeAttribute('disabled');
    } else {
        document.getElementById(sign_up_btn_id).setAttribute('disabled', '');
        document.getElementById(sing_in_btn_id).setAttribute('disabled', '');
    }

    return isValid;
}

export const setFormValue = (valueKey, newValue, validator) => {
    formValues[valueKey] = newValue
    if (validator !== undefined) {
        formValidation[valueKey] = validator(valueKey, newValue)
    }
    getValidationStatus();
}


export const submitSignUpForm = () => {
    console.log(getValidationStatus());
    if (!getValidationStatus()) {
        return false;
    }
    return true;
}
