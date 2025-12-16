const requestCharactersURL = `https://thronesapi.com/api/v2/Characters`;
const requestContinentsURL = `https://thronesapi.com/api/v2/Continents`;

function createCharactersCard({ firstName, lastName, imageUrl, title, family}) {
    return `
        <div class="card">
            <img src="${imageUrl}" alt="Pinture of the character">
            <h2>${firstName} ${lastName}</h2>
            <h3>${family}</h3>
            <h3>${title}</h3>
        </div>
    `;
}

function createStarkCard({ firstName, lastName, imageUrl, title, family}) {
    return `
        <div class="card house-stark">
            <img src="${imageUrl}" alt="Pinture of the character">
            <h2>${firstName} ${lastName}</h2>
            <h3>${family}</h3>
            <h3>${title}</h3>
        </div>
    `;
}

function createContinentsCard({name}) {
    return `
        <div class="card">
            <h2>${name}</h2>
        </div>
    `;
}

async function fetchCharactersThroneJson() {
    try {
        const response = await fetch(requestCharactersURL);
        if (!response.ok) {
            throw new Error(`Error de la solucitud: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener el archivo JSON:', error);
        return null;
    }
}

async function fetchContinentsThroneJson() {
    try {
        const response = await fetch(requestContinentsURL);
        if (!response.ok) {
            throw new Error(`Error de la solucitud: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener el archivo JSON:', error);
        return null;
    }
}

async function displayContinentsThrone() {
    const continentsSection = document.getElementById('throneContinentsSection');
    const continentsData = await fetchContinentsThroneJson();
    if (continentsData ) {
        const continentsCards = continentsData.map(createContinentsCard).join('');
        continentsSection.innerHTML = continentsCards;
    } else {
        continentsSection.innerHTML = '<p>No hemos podido entrar en Invernalia.</p>';
    }
}

displayContinentsThrone();

async function displayCharactersThrone() {
    const charactersSection = document.getElementById('throneCharactersSection');
    const charactersData = await fetchCharactersThroneJson();
    if (charactersData) {
        const charactersCards = charactersData.map(createCharactersCard).join('');
        charactersSection.innerHTML = charactersCards;
    } else {
        charactersSection.innerHTML = '<p>No hemos podido entrar en Invernalia.</p>';
    }
}

displayCharactersThrone();



async function displayHouseStarkThrone() {
    const starkSection = document.getElementById('houseStarkSection');
    const houseStarkData = await fetchCharactersThroneJson();
    if (houseStarkData ) {
        const starkCharacters = houseStarkData.filter(character => character.family === 'House Stark');
        const charactersStarkCards = starkCharacters.map(createStarkCard).join('');
        starkSection.innerHTML = charactersStarkCards;
    } else {
        starkSection.innerHTML = '<p>Los Starks han escapado de nosotros.</p>';
    }
}

displayHouseStarkThrone();