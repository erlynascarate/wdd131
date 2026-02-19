const BASE_URL = 'https://unofficial-mobile-legends.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '118633b9b0msh3db7d7ae2ae0073p12c1aajsnb2beb89b4a6f',
		'x-rapidapi-host': 'unofficial-mobile-legends.p.rapidapi.com'
	}
}

async function getRandomHeroeId() {
    try {
        const response = await fetch(BASE_URL + "heroes", options)
        const result = await response.json()
        
        heroes = result.data

        const randomIndex = Math.floor(Math.random() * heroes.length)
        const { heroid } = heroes[randomIndex]
        
        return heroid
    } catch (error) {
        console.error(error)
    }
}

async function main() {
    const id = await getRandomHeroeId()
    try {
        const response = await fetch(`${BASE_URL}heroes/${id}`, options);
        const heroe = await response.json();
        
        const { 
            cover_picture,
            name,
            type,
            counters: { best, counters: counter, countered } 
        } = heroe.data
        
        const heroeSection = document.querySelector(".heroe")
        heroeSection.innerHTML = `
            <img 
                src="${cover_picture}" 
                alt="${name}"
                width="563" 
                height="319" 
            >
            <div class="heroe-info">
                <div class="heroe-info__title">
                    <h2>${name}</h2>
                    ${type}
                </div>
                <h2>Counters</h2>
                <h3>
                    <strong>Best: </strong>
                    ${best.name || "There's not information"}
                </h3>
                <p>${best.best_mate_tips}</p>
                <h3>
                    <strong>Counter: </strong>
                    ${counter.name || "There's not information"}
                </h3>
                <p>${counter.restrain_hero_tips}</p>
                <h3>
                    <strong>Countered: </strong>
                    ${countered.name || "There's not information"}
                </h3>
                <p>${countered.by_restrain_tips}</p>
            </div>
        `
    } catch (error) {
        console.error(error);
    }

    try {
        const response = await fetch(BASE_URL + "roles", options)
        const roles = await response.json()
        
        const view = await Promise.all(roles.map(async ({label}) => {
            const response = await fetch(`${BASE_URL}roles/${label}`, options)
            const result = await response.json()
            
            const heroes = result.data

            return `
                <h2>${label}</h2>
                <div class="carousel">
                    ${heroes.map((heroe) => `
                        <figure class="carousel-heroe">
                            <img
                                src="https:${heroe.key}" 
                                alt="${heroe.name}"
                                onerror="this.onerror=null; this.src='https://images.sftcdn.net/images/t_app-icon-m/p/0c8aa300-b9af-4208-9593-c47c88fd1406/707296977/500px-image-download-logo'"
                                width="200" 
                                height="200" 
                                loading="lazy">
                            <figcaption>${heroe.name}</figcaption>
                        </figure>    
                    `).join("")}
                </div>
            `
        }))

        console.log(view);
        

        const rolesSection = document.querySelector(".roles")
        rolesSection.innerHTML = view.join("")
    } catch (error) {
        console.error(error);
    }
}

main()