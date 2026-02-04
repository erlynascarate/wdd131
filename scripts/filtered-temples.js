const button = document.querySelector(".button")
const nav = document.querySelector("nav")

const menuIcon = document.querySelector(".button__menu")
const closeIcon = document.querySelector(".button__close")

button.addEventListener("click", () => {
    nav.classList.toggle("nav--show")
    
    menuIcon.classList.toggle("button__menu--hide")
    closeIcon.classList.toggle("button__close--show")
})

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Tokyo Japan",
        location: "Minato-ku, Tokyo, Japan",
        dedicated: "1980, October, 29",
        area: 53997,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-51273.jpg"
    },
    {
        templeName: "Manaus Brazil",
        location: "Ponta Negra, Manaus-AM, Brazil",
        dedicated: "2012, June, 10",
        area: 32032,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/manaus-brazil-temple/manaus-brazil-temple-16978.jpg"
    },
    {
        templeName: "Asunción Paraguay",
        location: "Asunción, Paraguay",
        dedicated: "2002, May, 19",
        area: 11906,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/asuncion-paraguay-temple/asuncion-paraguay-temple-252.jpg"
    },
]

function showCards(cards) {
    const view = cards.map((card) => {
    const { templeName, location, dedicated, area, imageUrl } = card
    return `
        <div class="card">
            <h2 class="card__title">${templeName}</h2>
            <p class="card__p">
                <strong>Location: </strong>
                ${location}
            </p>
            <p class="card__p">
                <strong>Dedicated: </strong>
                ${dedicated}
            </p>
            <p class="card__p">
                <strong>Size: </strong>
                ${area} sq ft
            </p>
            <img class="card__img" src="${imageUrl}" alt="${templeName}" loading="lazy">
        </div>
    `
    }).join("")

    const main = document.querySelector(".main")

    main.innerHTML = view
}

showCards(temples)
nav.addEventListener("click", (e) => {
    const { id } = e.target
    
    switch (id) {
        case "home": {
            showCards(temples)
        }
        break
        case "old": {
            const filtered = temples.filter((temple) => {
                const year = parseInt(temple.dedicated.split(",")[0])
                if (year < 1900) {
                    return temple
                }
            })

            showCards(filtered)
        }
        break
        case "new": {
            const filtered = temples.filter((temple) => {
                const year = parseInt(temple.dedicated.split(",")[0])
                if (year > 2000) {
                    return temple
                }
            })

            showCards(filtered)
        }
        break
        case "large": {
            const filtered = temples.filter((temple) => {
                if (temple.area > 90000) {
                    return temple
                }
            })
            
            showCards(filtered)
        }
        break
        case "small": {
            const filtered = temples.filter((temple) => {
                if (temple.area < 10000) {
                    return temple
                }
            })
            
            showCards(filtered)
        }
        break
    }
})