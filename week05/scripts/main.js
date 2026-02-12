const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('#list ')

const chaptersArray = getChapterList() || []

chaptersArray.forEach((chapter) => displayList(chapter));

button.addEventListener('click', () => {
    if (input.value.trim() === '') {
        alert('The input cannot be empty')
    } else {
        displayList(input.value)
        chaptersArray.push(input.value)

        setChapterList()
    }

    input.value = ''
    input.focus()
})

function displayList(item) {
    const li = document.createElement('li')
    const deleteButton = document.createElement('button')

    li.textContent = item
    deleteButton.textContent = '❌'
    deleteButton.ariaLabel = 'Close'

    li.appendChild(deleteButton)
    list.appendChild(li)

    deleteButton.addEventListener('click', () => {
        list.removeChild(li)
        deleteChapter(item)
        input.focus()
    })
}

function setChapterList() {
    localStorage.setItem('list', JSON.stringify(chaptersArray))
}

function getChapterList() {
    const list = localStorage.getItem('list')
    
    return JSON.parse(list)
}

function deleteChapter(chapter) {
    const index = chaptersArray.indexOf(chapter)
    chaptersArray.splice(index, 1)

    setChapterList()
}