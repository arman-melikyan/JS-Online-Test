
export const innerText = (id, value) => {
    document.getElementById(id).innerHTML = value
}

export const answerResult = (question, num) => {
    const section = document.createElement('section')

    section.innerHTML = `
                <h3>${question[0]}</h3>
                <p>Ճիշտ պատասխանն է ՝ <b>${question[question[5]]}</b></p>
                <p>Դուք ընտրել եք ՝ <b>${question[num]}</b></p>
                <hr>
            `
    document.querySelector('#test').appendChild(section)
} 