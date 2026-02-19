const BASE_URL = 'https://unofficial-mobile-legends.p.rapidapi.com/'
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '118633b9b0msh3db7d7ae2ae0073p12c1aajsnb2beb89b4a6f',
		'x-rapidapi-host': 'unofficial-mobile-legends.p.rapidapi.com'
	}
}

function showHeroes(heroes) {
    const view = heroes.map((heroe) => `
        <figure>
            <img
                src="https:${heroe.key}" 
                alt="${heroe.name}"
                onerror="this.onerror=null; this.src='https://images.sftcdn.net/images/t_app-icon-m/p/0c8aa300-b9af-4208-9593-c47c88fd1406/707296977/500px-image-download-logo'"
                width="200" 
                height="200" 
                loading="lazy">
            <figcaption>${heroe.name}</figcaption>
        </figure>
    `).join("")

    const heroesContainer = document.querySelector("#heroes")
    heroesContainer.innerHTML = heroes.length ? view : "Heroe not found"
}

let heroes = [
    {
        key: "",
        name: "Loading..."
    },
    {
        key: "",
        name: "Loading..."
    },
    {
        key: "",
        name: "Loading..."
    },
    {
        key: "",
        name: "Loading..."
    },
    {
        key: "",
        name: "Loading..."
    },
]

async function main() {
    showHeroes(heroes)

    try {
        const response = await fetch(BASE_URL + "heroes", options)
        const result = await response.json()

        heroes = result.data
        showHeroes(heroes)
    } catch (error) {
        console.error(error)
    }

    try {
        const response = await fetch(BASE_URL + "roles", options);
        const result = await response.json();
        
        const view = result.map(({ label }) => `
            <option value="${label}">${label}</option>
        `).join("")

        const filterContainer = document.querySelector("#filter")
        filterContainer.innerHTML += view
    } catch (error) {
        console.error(error);
    }
}

const searchInput = document.querySelector("#search")
const form = document.querySelector("form")
form.addEventListener("input", async (event) => {
    const { id, value } = event.target
    
    switch (id) {
        case "search": {
            const filteredHeroes = heroes.filter(({name}) => name.toLowerCase().includes(value.toLowerCase()))
            showHeroes(filteredHeroes)
        }
        break
    
        case "filter": {
            const url = value === "all" ? BASE_URL + "heroes" : `${BASE_URL}roles/${value}`
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                
                heroes = result.data
                showHeroes(heroes)
                searchInput.value = ""
            } catch (error) {
                console.error(error);
            }
        }
        break
    }  
})

main()