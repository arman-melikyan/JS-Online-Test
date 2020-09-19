import { questions } from './questions.js'
import { innerText, answerResult } from './helpers.js'

const buttons = document.getElementsByTagName('button')
const answerButtons = document.getElementById('question-content')
const start = document.getElementById('start')
const div = document.querySelector('#test')
const click = document.getElementById('cl')

let plus = 0;
let curAnswer = 0;
let countAnswer = questions.length;
const counter = {}

    const timer = (min) => {
        
        if(min > 0) {
         
            counter.timer = setInterval(() => {
                
                min--;
                let sec = min;
                const mins = Math.floor(sec / 60);
                sec -= mins * 60;
                document.getElementById('timer').style.display = 'block';
                document.getElementById('minute').innerHTML = mins;
                document.getElementById('secund').innerHTML = sec;
                
                if(min === 0) {
                    clearInterval(counter.timer);
                    document.getElementById('timer').style.display = 'none';
                    document.getElementById('timer').id = 'stop';
                    answerButtons.style.display = 'none';
                    document.getElementById('question').style.display='none';
                    let percent =  Math.round(plus/countAnswer*100);
                    let resp = 'Bad'
                    if(percent>50) {
                        resp = 'GOOOD'
                    };
                    innerText('result', `
                    <span>Correct Answer ${plus} / ${countAnswer}</span>
                    <hr>
                    <b>${percent} %</b>
                    `);
                    document.querySelector('#test').style.display = 'block'
                }
            },1000); 
        }
    }

const check = num => {
    if (num == 0) {
        answerButtons.style.display = 'block';
        start.style.display = 'none';
        innerText('question', questions[curAnswer][0])
        innerText('option1', questions[curAnswer][1])
        innerText('option2', questions[curAnswer][2])
        innerText('option3', questions[curAnswer][3])
        innerText('option4', questions[curAnswer][4])
        timer(300)
    } else {
        answerResult(questions[curAnswer], num)

        if (num == questions[curAnswer][5]) {
            plus++
        }
        curAnswer++
        if (curAnswer < countAnswer) {
            innerText('question', questions[curAnswer][0])
            innerText('option1', questions[curAnswer][1])
            innerText('option2', questions[curAnswer][2])
            innerText('option3', questions[curAnswer][3])
            innerText('option4', questions[curAnswer][4])
        } else {
            answerButtons.style.display = 'none'
            innerText('question', '')
            div.style.display = 'block'
            const percent = Math.round(plus / countAnswer * 100)
            let resp = 'Bad'
            if (percent > 50) {
                resp = 'GOOOD'
            }

            innerText('result', `
                <span>Correct Answer ${plus} / ${countAnswer}</span>
                <hr>
                <b>${percent} %</b>
            `);
            document.getElementById('timer').style.display = 'none';
            clearInterval(counter.timer);
			document.getElementById('timer').id = 'stop';
        }
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
        const value = e.target.value
        check(value)
    })
}



