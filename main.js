const questions = document.querySelectorAll('.container-single-faq');
const clickedColor = getComputedStyle(document.documentElement).getPropertyValue('--veryDarkGrayishBlue');
const answers = document.querySelectorAll('.answers');

questions.forEach((el, i) => {
    el.addEventListener('click', () => {
        checkInactive();
        const childAnswer = el.querySelector('.answers');
        const childQuestion = el.querySelector('.questions');
        const iconArrow = el.querySelector('.icon-arrow');
        childAnswer.classList.toggle('inactive');
        childQuestion.style.color = 'black';
        childQuestion.style.fontWeight = 'bold';
        iconArrow.classList.add('icon-arrow-top');
    })
})

function checkInactive(){
    answers.forEach( element => {
        const parent = element.parentElement;
        const childIconArrow = parent.querySelector('.icon-arrow');
        if(!element.classList.contains('inactive')){
            element.classList.add('inactive');
            childIconArrow.classList.remove('icon-arrow-top');
        }
    })
}