
export const updateArrowVisibility = () => {
    const questionActive = document.querySelector('.field.-active');
    const isFirstQuestion = !questionActive || !questionActive.previousElementSibling;
    const isLastQuestion = !questionActive || !questionActive.nextElementSibling;
    // Oculta a seta "up" se estiver na primeira pergunta
    const buttonUp = document.querySelector('.nav-button.button-up');
    if (buttonUp) {
        buttonUp.style.display = isFirstQuestion ? 'none' : 'block';
    }

    // Oculta a seta "down" se estiver na última pergunta
    const buttonDown = document.querySelector('.nav-button.button-down');
    if (buttonDown) {
        buttonDown.style.display = isLastQuestion || !questionActive.nextElementSibling.nextElementSibling ? 'none' : 'block';
    }
}
export const nextProgressBar = () => {
    const progressBars = document.querySelectorAll('.progress');
    for (let i = 0; i < progressBars.length; i++) {
        if (!progressBars[i].classList.contains('-active')) {
            progressBars[i].classList.add('-active');
            break;
        }
    }
}
export const prevProgressBar = () => {
    const progressBars = document.querySelectorAll('.progress');
    for (let i = progressBars.length - 1; i >= 0; i--) {
        if (progressBars[i].classList.contains('-active')) {
            progressBars[i].classList.remove('-active');
            break;
        }
    }
}
