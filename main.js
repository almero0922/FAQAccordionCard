const questions = document.querySelectorAll('.container-single-faq');
const clickedColor = getComputedStyle(document.documentElement).getPropertyValue('--veryDarkGrayishBlue');

questions.forEach((el, i) => {
    el.addEventListener('click', () => {
        const childAnswer = el.querySelector('.answers');
        const childQuestion = el.querySelector('.questions');
        childAnswer.classList.toggle('inactive');
        childQuestion.style.color = 'black';
        childQuestion.style.fontWeight = 'bold';
    })
})