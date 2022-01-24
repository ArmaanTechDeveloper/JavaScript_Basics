const correctanswers = ['B', 'B' , 'B' ,'B'];
const form = document.querySelector('.quiz-form');
const displayScore = document.querySelector('body > div.result.py-4.bg-light.text-center > div > p > span');
const result = document.querySelector('.result');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let score = 0;
    const useranswers =[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    useranswers.forEach((answer , index) => {
        if(answer === correctanswers[index]){
            score += 25;
        }
    });
    scrollTo(0,0);
    result.classList.remove('d-none');
    

    let animateresult = 0;
    const timer = setInterval(()=>{
        animateresult++;
        if(animateresult === score){
            clearInterval(timer);
        }
        displayScore.innerHTML = `${animateresult}%`;
    },10)
});

