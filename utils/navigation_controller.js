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

