export const validate = (value, validationError, type, isInvalid, id) => {
    validationError = null;
    isInvalid = false;

    if (type === 'email' || type === 'text') {
        if (!value) {
            validationError = 'Essa resposta é obrigatória';
            scheduleErrorClear(id);
            isInvalid = true;
            return { validationError, isInvalid };
        }
        if (type === 'email') {
            if (!isValidEmail(value)) {
                validationError = 'Informe um E-mail válido';
                scheduleErrorClear(id);
                isInvalid = true;
                return { validationError, isInvalid };
            }
        }
    }
    else if (type === 'checkbox') {
        if (value.length === 0) {
            validationError = 'Essa resposta é obrigatória';
            scheduleErrorClear(id);
            isInvalid = true;
            return { validationError, isInvalid };
        }
    }

    return { validationError, isInvalid };
}
export const isValidEmail = (email) => {
    // Utilizando uma expressão regular (regex) para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
export const scheduleErrorClear = (id) => {
    const input = document.getElementById(id);
    const errorMessage = input?.nextElementSibling;

    input?.classList.add('invalid');
    errorMessage?.classList.add('active');
    setTimeout(() => {
        errorMessage?.classList.remove('active');
        input?.classList.remove('invalid');
    }, 6000);
}

