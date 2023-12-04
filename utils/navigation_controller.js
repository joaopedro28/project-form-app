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
// export const nextProgressBar = () => {
//     const progressBars = document.querySelectorAll('.progress');
//     for (let i = 0; i < progressBars.length; i++) {
//         if (!progressBars[i].classList.contains('-active')) {
//             progressBars[i].classList.add('-active');
//             break;
//         }
//     }
// }
// export const prev = () => {
//     const progressBars = document.querySelectorAll('.progress');
//     for (let i = progressBars.length - 1; i >= 0; i--) {
//         if (progressBars[i].classList.contains('-active')) {
//             progressBars[i].classList.remove('-active');
//             break;
//         }
//     }
// }

// export const next = (idParent, field_id) => {
//     let fieldBlock = document.getElementById('field-' + idParent);
//     if (!fieldBlock) {
//         return;
//     }
//     let nextFieldBlock = fieldBlock.nextElementSibling;

//     if (nextFieldBlock) {
//         fieldBlock.classList.remove('-active')
//         fieldBlock.classList.add('-prev')
//         nextFieldBlock.classList.add('-active')

//         nextProgressBar();
//     }
// }


// export const prevQuestion = () => {
//     let questionActive = document.querySelector('.field.-active');
//     if (!questionActive) {
//         return;
//     }
//     let prevQuestion = questionActive.previousElementSibling;
//     if (prevQuestion) {
//         questionActive.classList.remove('-active');
//         prevQuestion.classList.remove('-prev');
//         prevQuestion.classList.add('-active');

//     }
// }
// export const nextQuestion = () => {
//     let questionActive = document.querySelector('.field.-active');
//     if (!questionActive) {
//         return;
//     }
//     let nextQuestion = questionActive.nextElementSibling;

//     let inputField = questionActive.querySelector('input');
//     if (inputField && (inputField.value === '')) {
//         return;
//     }

//     let dataSelected = questionActive.querySelector('.field-group');

//     if (dataSelected && dataSelected.dataset.selected != 'true') {
//         return;
//     }

//     if (nextQuestion) {
//         questionActive.classList.remove('-active');
//         questionActive.classList.add('-prev');
//         nextQuestion.classList.add('-active');
//     }
// }



// export const next = (idParent, field_id) => {
//     const fieldBlock = document.getElementById('field-' + idParent);
//     if (fieldBlock) {
//         const nextFieldBlock = fieldBlock.nextElementSibling;
//         if (nextFieldBlock) {
//             fieldBlock.classList.remove('-active');
//             fieldBlock.classList.add('-prev');
//             nextFieldBlock.classList.add('-active');
//             nextProgressBar();
//         }
//     }
// };
// export const next = (idParent, field_id) => {
//     const fieldBlock = document.getElementById('field-' + idParent);
//     if (fieldBlock) {
//         const nextFieldBlock = fieldBlock.nextElementSibling;
//         if (nextFieldBlock) {
//             fieldBlock.classList.remove('-active');
//             fieldBlock.classList.add('-prev');
//             nextFieldBlock.classList.add('-active');
//         }
//     } else {
//         const progressBars = document.querySelectorAll('.progress');
//         for (let i = progressBars.length - 1; i >= 0; i++) {
//             if (progressBars[i].classList.contains('-active')) {
//                 progressBars[i].classList.remove('-active');
//                 break;
//             }
//         }

//         const questionActive = document.querySelector('.field.-active');
//         if (questionActive) {
//             const nextQuestion = questionActive.nextElementSibling;
//             const inputField = questionActive.querySelector('input');
//             const dataSelected = questionActive.querySelector('.field-group');

//             if (nextQuestion && (!inputField || inputField.value !== '') && (!dataSelected)) {
//                 questionActive.classList.remove('-active');
//                 questionActive.classList.add('-prev');
//                 nextQuestion.classList.add('-active');
//             }
//         }
//     }
// };

// export const prev = () => {
//     const progressBars = document.querySelectorAll('.progress');
//     for (let i = progressBars.length - 1; i >= 0; i--) {
//         if (progressBars[i].classList.contains('-active')) {
//             progressBars[i].classList.remove('-active');
//             break;
//         }
//     }

//     const questionActive = document.querySelector('.field.-active');
//     if (questionActive) {
//         const prevQuestion = questionActive.previousElementSibling;
//         if (prevQuestion) {
//             questionActive.classList.remove('-active');
//             prevQuestion.classList.remove('-prev');
//             prevQuestion.classList.add('-active');
//         }
//     }
// };
