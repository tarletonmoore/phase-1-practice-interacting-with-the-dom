const timer = document.getElementById(`counter`)
const pausebtn = document.getElementById(`pause`)
const heartbtn = document.getElementById(`heart`)
const likes = document.getElementsByClassName(`likes`)
const submit = document.getElementById(`submit`)
let seconds = 0
let obj = {}
document.addEventListener(`DOMContentLoaded`, (event) => {


    function counter() {
        // seconds += 1
        // timer.innerText = + seconds
        timer.innerText = parseInt(timer.innerText) + 1
    }

    let implement = setInterval(counter, 1000)

    const sub = document.getElementById(`minus`)
    sub.addEventListener(`click`, () => {
        timer.innerText = parseInt(timer.innerText) - 1
    })

    const add = document.getElementById(`plus`)
    add.addEventListener(`click`, () => {
        timer.innerText = parseInt(timer.innerText) + 1
    })

    function pause() {

        if (pausebtn.innerText === `Resume`) {
            implement = setInterval(counter, 1000)
            pausebtn.innerText = `Pause`
        }
        else {

            clearInterval(implement)
            pausebtn.innerText = `Resume`
        }
    }

    pausebtn.addEventListener(`click`, pause)

    heartbtn.addEventListener(`click`, (event) => {
        if (obj[timer.innerText]) {
            obj[timer.innerText] += 1
            console.log(obj)
            let element = document.getElementById(timer.innerText)
            element.innerText = `${timer.innerText} liked ${obj[timer.innerText]} times`
        }
        else {
            obj[timer.innerText] = 1

            let li = document.createElement("li")
            li.id = timer.innerText
            li.innerText = `${timer.innerText} liked ${obj[timer.innerText]} times`
            likes[0].append(li)
        }
        console.log(event)


    })


    submit.addEventListener(`click`, (e) => {
        e.preventDefault()
        let p = document.createElement("p")
        let box = document.getElementById(`comment-input`)
        p.innerText = box.value
        let h3 = document.querySelector(`h3`)
        h3.appendChild(p)
    })

})