const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')

const nextBtn = document.getElementById('nextBtn')
const autoBtn = document.getElementById('autoBtn')
const stopBtn = document.getElementById('stopBtn')
const resetBtn = document.getElementById('resetBtn')

let state = 0
let auto = true
let timer = null

function updateLights() {
    s
    u
    red.classList.remove('on')
    yellow.classList.remove('on')
    green.classList.remove('on')

    switch (state) {
        case 0:
            red.classList.add('on')
            break
        case 1:
            red.classList.add('on')
            yellow.classList.add('on')
            break
        case 2:
            green.classList.add('on')
            break
        case 3:
            yellow.classList.add('on')
            break
    }
}

function nextState() {
    state = (state + 1) % 4
    updateLights()
}

function startAuto() {
    stopAuto()
    timer = setInterval(() => {

        nextState()
    }, 2500)
    auto = true
    autoBtn.textContent = 'Авто: Вкл'
}

function stopAuto() {
    if (timer) clearInterval(timer)
    timer = null
    auto = false
    autoBtn.textContent = 'Авто: Выкл'
}

nextBtn.addEventListener('click', () => {
    nextState()
})

autoBtn.addEventListener('click', () => {
    if (auto) stopAuto(); else startAuto();
})

stopBtn.addEventListener('click', () => {
    stopAuto();
})

resetBtn.addEventListener('click', () => {
    stopAuto();
    state = 0;
    updateLights();

    startAuto();
})


updateLights()
startAuto()

    [nextBtn, autoBretn, stopBtn, resetBtn].forEach(btn => btn.setAttribute('tabindex', 0))