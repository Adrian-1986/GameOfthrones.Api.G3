const requestCharactersURL = "https://thronesapi.com/api/v2/Characters";
const requestContinentsURL = "https://thronesapi.com/api/v2/Continents";

const houseSigils = {
    stark: "houseStark.png",
    lannister: "lannisterSigil.png",
    targaryen: "targaryenSigil.png",
    baratheon: "baratheonSigil.png",
    tyrell: "houseTyrellSigil.png",
    mormont: "houseMormontSigil.png",
    bolton: "houseBoltonSigil.png",
    greyjoy: "greyjoySigil.png"
}

const familyCorrections = {
    lanister: "lannister",
    targaryan: "targaryen",
};

function normalizeFamily(family = "") {
    let normalized = family
        .toLowerCase()
        .replace("house ", "")
        .trim();
    if (familyCorrections[normalized]) {
        normalized = familyCorrections[normalized];
    }
    return normalized;
}

function createCharacterCard({ fullName, imageUrl, title, family }) {
    const familyKey = normalizeFamily(family);
    const sigil = houseSigils[familyKey];
    return `
        <div class="card house-${familyKey}">
            <img src="${imageUrl}" alt="Imagen del personaje">
            <div class="stark-info">
                <div class="stark-text">
                    <h2>${fullName}</h2>
                    <h3>${family || "Unknown"}</h3>
                    <h3>${title || "Unknown"}</h3>
                </div>
                ${
                    sigil
                        ? `<div class="stark-sigil-container">
                                <img class="stark-sigil" src="./assets/img/${sigil}" alt="Escudo de la casa">
                            </div>`
                        : ""
                }
            </div>
        </div>
    `;
}

async function fetchCharacters() {
    try {
        const response = await fetch(requestCharactersURL);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error al cargar personajes:", error);
        return null;
    }
}

async function fetchContinents() {
    try {
        const response = await fetch(requestContinentsURL);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error al cargar continentes:", error);
        return null;
    }
}


async function displayAllCharacters() {
    const section = document.getElementById("allHousesSection");
    const characters = await fetchCharacters();
    if (!characters) {
        section.innerHTML = "<p>No se pudieron cargar los personajes.</p>";
        return;
    }
    const hiddenId = 7;
    const cardsHTML = characters
        .filter(character => character.id !== hiddenId)
        .map(createCharacterCard)
        .join("");
    section.innerHTML = cardsHTML;
}

displayAllCharacters();

function createMapSection(nameList) {
    return `
        <div class="map-container">
            <h4 class="map-title">Map of the Known World</h4>
            <img src="./assets/img/gameOfThronesMap.png" 
                alt="Mapa de los continentes de Game of Thrones">
            ${nameList
                .map(name => `<div class="continent ${name.toLowerCase()}">${name}</div>`)
                .join("")}
        </div>
    `;
}

async function displayMapSection() {

    const section = document.getElementById("continentsSection");
    const continents = await fetchContinents();
    if (!continents) return;
    const names = continents.map(continent => continent.name);
    section.innerHTML = createMapSection(names);
}

displayMapSection();