const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    //show result on page
    scrollTo(0, 0);
    let i = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${i}%`;
        result.classList.remove('d-none');

        if (i === score) {
            clearInterval(timer);
        } else {
            i++;
        }
    }, 10)


});