const p = document.querySelector("p")

const submitedTimes = Number(localStorage.getItem("submited") || 0)

if (submitedTimes === 0) {
    p.textContent = "You haven't submited this form yet"
} else if (submitedTimes === 1 ) {
    p.textContent = `You have submited this form 1 time`
} else {
    p.textContent = `You have submited this form ${submitedTimes} times`
}