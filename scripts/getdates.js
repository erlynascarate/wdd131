const spanYear = document.querySelector('#currentyear')

const today = new Date()
const currentyear = today.getFullYear()

spanYear.innerHTML = currentyear

const lastModified = document.querySelector("#lastModified")

lastModified.innerHTML = `Last Modification: ${document.lastModified}`
