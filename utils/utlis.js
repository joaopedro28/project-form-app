export const validate = (value, validationError, type, isInvalid) => {
    validationError = null;
    isInvalid = false;

    if (type === 'email') {
        if (!value) {
            validationError = 'Essa resposta é obrigatória';
            scheduleErrorClear(validationError, isInvalid);
            isInvalid = true;
            return { validationError, isInvalid };
        }
        if (!isValidEmail(value)) {
            validationError = 'Informe um E-mail válido';
            scheduleErrorClear(validationError, isInvalid);
            isInvalid = true;
            return { validationError, isInvalid };
        }
    }
    else if (type === 'checkbox') {
        if (value.length === 0) {
            validationError = 'Essa resposta é obrigatória';
            scheduleErrorClear(validationError, isInvalid);
            isInvalid = true;
            return { validationError, isInvalid };
        } 
    }
    else if (type === 'text') {
        if (!value) {
            validationError = 'Essa resposta é obrigatória';
            scheduleErrorClear(validationError, isInvalid);
            isInvalid = true;
            return { validationError, isInvalid };
        }
    }

    return { validationError, isInvalid };
}
export const   isValidEmail = (email) => {
    // Utilizando uma expressão regular (regex) para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
export const scheduleErrorClear = (validationError, isInvalid) => {
    setTimeout(() => {
        validationError = null;
        isInvalid = false;
    }, 6000);
}
